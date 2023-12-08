import {
    GetUserContributions,
    GetUserContributionsQuery,
    GetUserContributionsQueryVariables,
} from '../../_generated/graphql';
import { ContributionCollection } from '../../types';
import { query } from './client';

export async function getUserContributions(
    username: string,
    year: number,
): Promise<ContributionCollection> {
    const from = `${year}-01-01T00:00:00`;
    const to = `${year}-12-31T23:59:59`;
    console.log(`Getting contributions for ${username} from ${from} to ${to}`);
    const data: GetUserContributionsQuery = await query<
        GetUserContributionsQuery,
        GetUserContributionsQueryVariables
    >(GetUserContributions, {
        username,
        from,
        to,
    });
    const { contributionsCollection } = data.user ?? {};
    if (!contributionsCollection) {
        throw new Error(`No contributions found for user ${username}`);
    }

    return contributionsCollection;
}
