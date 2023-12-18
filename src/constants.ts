import { RankingType } from './types';

/**
 * Max years to go back in time to count contributions.
 */
export const MAX_PAST_YEAR_COUNT = 10;

/**
 * In general, for each country, we expect an approximate of N users to match the follower constraint.
 */
export const EXPECTED_USERS_MATCHING_FOLLOWER_COUNT = 2000;

/**
 * Ranking definition.
 */
export const RANKINGS: {
    type: RankingType;
    title: string;
    userCount: number;
    valueColumnHeader: string;
}[] = [
    {
        type: RankingType.WeekStreak,
        title: 'Weekly Commit Streak',
        userCount: 1000,
        valueColumnHeader: 'Weekly Commit Streak',
    },
    {
        type: RankingType.DayStreak,
        title: 'Daily Commit Streak',
        userCount: 200,
        valueColumnHeader: 'Daily Commit Streak',
    },
    {
        type: RankingType.ContributionCount,
        title: 'Top Contributors',
        userCount: 1000,
        valueColumnHeader: 'Contributions',
    },
];
