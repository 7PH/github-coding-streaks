import type { RequestParameters } from '@octokit/types';
import { DocumentNode } from 'graphql';
import { Octokit } from 'octokit';

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

export async function query<ResponseType, VariableType extends RequestParameters>(
    q: DocumentNode,
    variables: VariableType,
): Promise<ResponseType> {
    try {
        const data = (await octokit.graphql(q?.loc?.source.body ?? '', variables)) as any;
        if (data.rateLimit) {
            console.debug(`Rate limit: ${data.rateLimit.remaining}/${data.rateLimit.limit}`);
        }
        return data as ResponseType;
    } catch (error) {
        console.log(`Unable to query Github API: ${(error as any).message ?? 'Unknown error'}`);
        throw error;
    }
}
