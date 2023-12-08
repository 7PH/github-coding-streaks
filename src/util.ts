import { flatten, findLastIndex } from 'lodash';
import { searchUsers } from './github/api/search-users';
import { getUserContributions } from './github/api/get-user-contributions';
import { GithubUser, SavedGithubUser } from './types';
import { MAX_PAST_YEAR_COUNT } from './constants';

export async function getUserStreak(user: GithubUser): Promise<{
    dayStreak: number;
    weekStreak: number;
    incompleteDayStreak?: boolean;
    incompleteWeekStreak?: boolean;
}> {
    const currentYear = new Date().getFullYear();
    const currentDate = new Date();

    // Keep track of the last day we have counted
    let lastCountedDayDate: Date | null = null;
    let lastCountedWeekFirstDayDate: Date | null = null;

    // Get the year of the last available day
    let year = currentYear;

    // Count accumulated streaks
    let dayStreak = 0;
    let dayStreakLost = false;
    let weekStreak = 0;

    // Get all contributions for this specific year
    while (year >= currentYear - MAX_PAST_YEAR_COUNT) {
        const previousYear = await getUserContributions(user.login, year);
        const weeks = previousYear.contributionCalendar.weeks;
        const days = flatten(weeks.map((week) => week.contributionDays));

        // Start from the last day we have
        if (!dayStreakLost) {
            let dayIndex = findLastIndex(
                days,
                ({ date }) => new Date(date) < (lastCountedDayDate ?? currentDate),
            );
            while (dayIndex >= 0 && days[dayIndex].contributionCount > 0) {
                dayStreak++;
                dayIndex--;
            }
            dayStreakLost = dayIndex > 0;
        }

        // Start from the last week we have
        let weekIndex = findLastIndex(
            weeks,
            ({ firstDay }) => new Date(firstDay) < (lastCountedWeekFirstDayDate ?? currentDate),
        );
        while (
            weekIndex >= 0 &&
            weeks[weekIndex].contributionDays.some((day) => day.contributionCount > 0)
        ) {
            weekStreak++;
            weekIndex--;
        }

        // If we did not reach the end of the array, we have a day streak
        if (weekIndex > 0) {
            return { dayStreak, weekStreak };
        }

        // If we reached the end of the array, we need to get the previous year
        year--;
        lastCountedDayDate = new Date(days[0].date);
    }

    return {
        dayStreak,
        incompleteDayStreak: !dayStreakLost,
        weekStreak,
        incompleteWeekStreak: true,
    };
}

export async function getCountryTopUsers(countryMatch: string[], minFollowerCount: number) {
    const query = countryMatch.map((match) => `location:${match}`).join(' ');
    const users = await searchUsers(
        `${query} followers:>=${minFollowerCount} sort:followers-desc`,
        (user) => user.followers.totalCount < minFollowerCount,
    );

    // Compute streak for each user
    const usersWithStreaks: SavedGithubUser[] = [];
    for (const user of users) {
        const { dayStreak, weekStreak } = await getUserStreak(user);
        usersWithStreaks.push({ user, dayStreak, weekStreak });
    }

    // Get top users by streak type
    const topUsersByDayStreak = [...usersWithStreaks].sort((a, b) => b.dayStreak - a.dayStreak);
    const topUsersByWeekStreak = [...usersWithStreaks].sort((a, b) => b.weekStreak - a.weekStreak);

    return { topUsersByDayStreak, topUsersByWeekStreak };
}
