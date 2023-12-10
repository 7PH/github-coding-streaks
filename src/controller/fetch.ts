import fs from 'fs';
import path from 'path';
import process from 'process';
import moment from 'moment';
import { ContributionDay, ContributionWeek, CountryDefinition, EnhancedGithubUser } from '../types';
import { searchUsers } from '../github/api/search-users';
import { MAX_PAST_YEAR_COUNT } from '../constants';
import { getUserContributions } from '../github/api/get-user-contributions';
import { flatten } from 'lodash';

export const DIST_PATH = path.join(process.cwd(), 'dist');

export function getJsonPath(countryCode: string) {
    return path.join(DIST_PATH, `${countryCode}.json`);
}

export async function getEnhanceUserProperties(
    login: string,
): Promise<Pick<EnhancedGithubUser, 'allContributionDays' | 'allContributionWeeks'>> {
    const currentYear = new Date().getFullYear();
    const currentDate = new Date();

    const allContributionDays: ContributionDay[] = [];
    const allContributionWeeks: ContributionWeek[] = [];

    let year = currentYear;
    while (year >= currentYear - MAX_PAST_YEAR_COUNT) {
        const previousYear = await getUserContributions(login, year);
        const weeks = previousYear.contributionCalendar.weeks;
        const days = flatten(weeks.map((week) => week.contributionDays));

        allContributionDays.push(...days.reverse());

        // If the first week from the year `year+1` is not complete,
        // merge it with the last week from the current year `year`
        if (allContributionWeeks[allContributionWeeks.length - 1]?.contributionDays.length < 7) {
            const firstWeek = allContributionWeeks.pop() as ContributionWeek;
            const lastWeek = weeks.pop() as ContributionWeek; // We pop because it's in reverse order
            const mergedWeek = {
                ...lastWeek,
                contributionDays: [...firstWeek.contributionDays, ...lastWeek.contributionDays],
            };
            allContributionWeeks.push(mergedWeek, ...weeks.reverse());
        } else {
            allContributionWeeks.push(...weeks.reverse());
        }

        // Stop on first empty week
        const hasEmptyWeek = weeks.some((week) => {
            if (new Date(week.firstDay) >= moment(currentDate).startOf('week').toDate()) {
                return false;
            }
            // There's no day in this week with at least one contribution
            return !week.contributionDays.some((day) => day.contributionCount > 0);
        });
        if (hasEmptyWeek) {
            break;
        }
        year--;
    }

    return {
        allContributionDays,
        allContributionWeeks,
    };
}

export async function fetchCountry({
    countryMatch,
    countryCode,
    minFollowerCount,
}: CountryDefinition) {
    const query = countryMatch.map((match) => `location:${match}`).join(' ');
    const users = await searchUsers(`${query} followers:>=${minFollowerCount} sort:followers-desc`);
    const enhancedUsers: EnhancedGithubUser[] = [];
    for (const user of users) {
        try {
            enhancedUsers.push({
                user,
                ...(await getEnhanceUserProperties(user.login)),
            });
        } catch (e) {
            console.error(e);
        }
    }
    fs.writeFileSync(getJsonPath(countryCode), JSON.stringify(enhancedUsers));
}
