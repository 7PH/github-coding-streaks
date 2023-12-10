import { ContributionWeek, EnhancedGithubUser, RankingData, RankingType } from '../types';
import { RANKINGS } from '../constants';
import { findIndex } from 'lodash';

export function computeRankings(enhancedUser: EnhancedGithubUser): RankingData {
    const rankings = RANKINGS.map(({ type }) => [type, computeRanking(type, enhancedUser)]);
    return Object.fromEntries(rankings) as RankingData;
}

export function computeRanking(rankingType: RankingType, enhancedUser: EnhancedGithubUser): number {
    switch (rankingType) {
        case RankingType.DayStreak:
            return computeDayStreak(enhancedUser);
        case RankingType.WeekStreak:
            return computeWeekStreak(enhancedUser);
        case RankingType.ContributionCount:
            return computeContributionCount(enhancedUser);
        default:
            throw new Error(`Unknown ranking type: ${rankingType}`);
    }
}

export function computeDayStreak({ allContributionDays }: EnhancedGithubUser) {
    const today = new Date();
    const todayIndex = findIndex(allContributionDays, (day) => new Date(day.date) <= today);

    // Fix off-by-one error
    if (allContributionDays[todayIndex + 1]?.contributionCount === 0) {
        return allContributionDays[todayIndex].contributionCount === 0 ? 0 : 1;
    }

    const looserDayIndex = findIndex(
        allContributionDays,
        (day) => day.contributionCount === 0,
        todayIndex + 1,
    );
    return looserDayIndex - todayIndex;
}

export function computeWeekStreak({ allContributionWeeks }: EnhancedGithubUser) {
    const getWeekCount = (week: ContributionWeek) =>
        week.contributionDays.map((day) => day.contributionCount).reduce((a, b) => a + b, 0);

    const today = new Date();
    const currentWeekIndex = findIndex(
        allContributionWeeks,
        (week) => new Date(week.firstDay) <= today,
    );

    // Fix off-by-one error
    if (getWeekCount(allContributionWeeks[currentWeekIndex + 1]) === 0) {
        return getWeekCount(allContributionWeeks[currentWeekIndex]) === 0 ? 0 : 1;
    }

    const looserWeekIndex = findIndex(
        allContributionWeeks,
        (week) => getWeekCount(week) === 0,
        currentWeekIndex + 1,
    );
    return looserWeekIndex - currentWeekIndex;
}

export function computeContributionCount({ user }: EnhancedGithubUser) {
    return user.contributionsCollection.contributionCalendar.totalContributions;
}
