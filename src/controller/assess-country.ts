import { searchUsers } from '../github/api/search-users';

const USER_LOCATION_SAMPLE = 1500;
const MIN_LOCATION_COUNT = 2;
const SECONDARY_LOCATION_COUNT = 10;

function isValidLocation(location: string) {
    if (location.length < 3 || location.length > 40) {
        return false;
    }
    if (!isNaN(Number(location))) {
        return false;
    }
    if (['remote', 'europe', 'area', 'world', 'wide', 'the'].includes(location)) {
        return false;
    }
    return true;
}

export async function assessCountry(countryMainLocations: string) {
    const mainLocations = countryMainLocations.toLowerCase().split(',');

    // At first, search for secondary locations
    const query = mainLocations.map((match) => `location:${match}`).join(' ');
    const users = await searchUsers(
        `${query} sort:followers-desc`,
        (users) => users.length >= USER_LOCATION_SAMPLE,
    );

    // Get every secondary location for each user
    const secondaryLocations: Record<string, number> = {};
    for (const user of users) {
        if (!user.location) {
            continue;
        }
        // Match every word in the location
        const locationWords = user.location.toLowerCase().match(/\p{L}+/gu);
        if (!locationWords) {
            continue;
        }
        for (const word of locationWords) {
            if (!isValidLocation(word)) {
                continue;
            }
            if (mainLocations.includes(word)) {
                continue;
            }
            if (!secondaryLocations[word]) {
                secondaryLocations[word] = 0;
            }
            secondaryLocations[word]++;
        }
    }

    // Sort secondary locations by count
    const secondaryLocationsSorted = mainLocations.concat(
        Object.entries(secondaryLocations)
            .filter(([, count]) => count >= MIN_LOCATION_COUNT)
            .sort((a, b) => b[1] - a[1])
            .slice(0, SECONDARY_LOCATION_COUNT)
            .map(([location]) => location),
    );

    console.log('_'.repeat(80));
    console.log('Secondary locations:');
    for (const location of secondaryLocationsSorted) {
        console.log(`- ${location}`);
    }

    console.log('_'.repeat(80));
    console.log('Secondary locations (JSON):');
    console.log(JSON.stringify(secondaryLocationsSorted));

    console.log('_'.repeat(80));

    // console.log(`Found ${users.length} users`);
    // const followerCount = users[users.length - 1].followers.totalCount;
    // console.log(`> Recommended min follower count: ${followerCount}`);
}
