import { EXPECTED_USERS_MATCHING_FOLLOWER_COUNT } from '../constants';
import { searchUsers } from '../github/api/search-users';

export async function findCountryFollowerCount(locations: string[]) {
    const query = locations.map((match) => `location:${match}`).join(' ');
    const users = await searchUsers(
        `${query} sort:followers-desc`,
        (users) => users.length >= EXPECTED_USERS_MATCHING_FOLLOWER_COUNT,
    );

    console.log('_'.repeat(80));
    console.log(`Found ${users.length} users`);
    const followerCount = users[users.length - 1].followers.totalCount;
    console.log(`> Recommended min follower count: ${followerCount}`);
    console.log('_'.repeat(80));
}
