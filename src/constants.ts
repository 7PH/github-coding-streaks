import { RankingType, SavedGithubUser } from './types';

/**
 * Max years to go back in time to count contributions.
 * This is used to avoid making too many requests.
 */
export const MAX_PAST_YEAR_COUNT = 1;

/**
 * Ranking defintinion.
 */
export const RANKINGS: {
    type: RankingType;
    title: string;
    userCount: number;
    savedUserKey: keyof SavedGithubUser;
}[] = [
    {
        type: RankingType.DayStreak,
        title: 'Current Day Streak',
        userCount: 10,
        savedUserKey: 'dayStreak',
    },
    {
        type: RankingType.WeekStreak,
        title: 'Current Week Streak',
        userCount: 100,
        savedUserKey: 'weekStreak',
    },
];
