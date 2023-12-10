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
        type: RankingType.DayStreak,
        title: 'Current Day Streak',
        userCount: 10,
    },
    {
        type: RankingType.WeekStreak,
        title: 'Current Week Streak',
        userCount: 200,
    },
    {
        type: RankingType.ContributionCount,
        title: 'Total Contributions',
        userCount: 200,
    },
];
