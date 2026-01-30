import { SearchUsers, SearchUsersQuery, SearchUsersQueryVariables } from '../../_generated/graphql';
import { GithubUser } from '../../types';
import { query } from './client';

const MAX_FAILED_ATTEMPTS = 10;
const PER_PAGE = 10;

export async function searchUsers(
    q: string,
    stopWhen?: (allUsers: GithubUser[]) => boolean,
): Promise<GithubUser[]> {
    const allUsers: GithubUser[] = [];
    let failedAttempts = 0;
    let cursor: string | null = null;
    let shouldStop = false;
    while (failedAttempts < MAX_FAILED_ATTEMPTS && !shouldStop) {
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

        // Add users
        allUsers.push(...users);

        // Should stop if there are no more pages
        shouldStop = !cursor || !data.search.pageInfo.hasNextPage;

        // Should stop if stopWhen returns true
        if (stopWhen && stopWhen(allUsers)) {
            shouldStop = true;
        }
    }

    return allUsers;
}
