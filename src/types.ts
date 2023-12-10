import { GetUserContributionsQuery, SearchUsersQuery } from './_generated/graphql';

export type GithubUser = Extract<
    NonNullable<NonNullable<SearchUsersQuery['search']['edges']>[number]>['node'],
    { __typename: 'User' }
>;

export type ContributionCollection = NonNullable<
    GetUserContributionsQuery['user']
>['contributionsCollection'];

export type JsonConfiguration = {
    countries: CountryDefinition[];
};

export type ContributionWeek = ContributionCollection['contributionCalendar']['weeks'][number];

export type ContributionDay =
    ContributionCollection['contributionCalendar']['weeks'][number]['contributionDays'][number];

export type CountryDefinition = {
    countryCode: string;
    countryName: string;
    countryMatch: string[];
    minFollowerCount: number;
};

export enum RankingType {
    DayStreak = 'day-streak',
    WeekStreak = 'week-streak',
    ContributionCount = 'contribution-count',
}

export type RankingData = Record<RankingType, number>;

export type EnhancedGithubUser = {
    user: GithubUser;
    allContributionDays: ContributionDay[];
    allContributionWeeks: ContributionWeek[];
};

export type ProcessedGithubUser = {
    user: EnhancedGithubUser['user'];
    ranking: RankingData;
};
