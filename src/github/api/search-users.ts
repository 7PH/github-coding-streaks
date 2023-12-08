import { SearchUsers, SearchUsersQuery, SearchUsersQueryVariables } from '../../_generated/graphql';
import { GithubUser } from '../../types';
import { query } from './client';

const MAX_FAILED_ATTEMPTS = 2;
const PER_PAGE = 100;

export async function searchUsers(
    q: string,
    stopWhen: (user: GithubUser) => boolean,
): Promise<GithubUser[]> {
    const allUsers: GithubUser[] = [];
    let failedAttempts = 0;
    let cursor: string | null = null;
    let shouldStop = false;
    while (failedAttempts < MAX_FAILED_ATTEMPTS && !shouldStop) {
        try {
            console.log(`Getting users for ${q} with cursor ${cursor}`);
            const data: SearchUsersQuery = await query<SearchUsersQuery, SearchUsersQueryVariables>(
                SearchUsers,
                {
                    q,
                    count: PER_PAGE,
                    cursor,
                },
            );
            failedAttempts = 0;

            cursor = data.search.pageInfo.endCursor ?? null;

            // Filter out organizations
            const users =
                data.search.edges
                    ?.filter((edge: any) => edge.node.__typename === 'User')
                    .map((edge: any) => edge.node) ?? [];

            // Drop users not matching the criteria
            const matchingUsers = users.filter((user: GithubUser) => !stopWhen(user)) ?? [];

            // Add users
            allUsers.push(...matchingUsers);

            // Should stop if an user does not match criteria or if we have less than PER_PAGE users
            shouldStop = !cursor || matchingUsers.length !== users.length;
        } catch (e) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            failedAttempts++;
        }
    }

    return allUsers;
}
