import { RankingType, ProcessedGithubUser } from './types';

/**
 * Max years to go back in time to count contributions.
 * This is used to avoid making too many requests.
 */
export const MAX_PAST_YEAR_COUNT = 6;

/**
 * Ranking definition.
 */
export const RANKINGS: {
    type: RankingType;
    title: string;
    userCount: number;
}[] = [
    {
        type: RankingType.WeekStreak,
        title: 'Weekly Commit Streak',
        userCount: 1000,
    },
    {
        type: RankingType.DayStreak,
        title: 'Daily Commit Streak',
        userCount: 200,
    },
    {
        type: RankingType.ContributionCount,
        title: 'Top Contributors',
        userCount: 1000,
    },
];
