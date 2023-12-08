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

export type CountryDefinition = {
    countryKey: string;
    countryName: string;
    countryMatch: string[];
    minFollowerCount: number;
};

export enum RankingType {
    DayStreak = 'day-streak',
    WeekStreak = 'week-streak',
}

export type SavedGithubUser = {
    user: GithubUser;
    dayStreak: number;
    weekStreak: number;
};
