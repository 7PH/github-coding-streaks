import type { RequestParameters } from '@octokit/types';
import { DocumentNode } from 'graphql';
import { Octokit } from 'octokit';

const MAX_FAILED_ATTEMPTS = 10;

let _octokit: Octokit;
function getOctokit() {
    if (!_octokit) {
        if (!process.env.GITHUB_TOKEN) {
            throw new Error(
                'No Github token provided. Ensure GITHUB_TOKEN is set in the environment',
            );
        }

        _octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN,
        });
    }
    return _octokit;
}

export async function query<ResponseType, VariableType extends RequestParameters>(
    q: DocumentNode,
    variables: VariableType,
): Promise<ResponseType> {
    async function tryQuery() {
        const data = (await getOctokit().graphql(q?.loc?.source.body ?? '', variables)) as any;
        if (data.rateLimit) {
            console.debug(`Rate limit: ${data.rateLimit.remaining}/${data.rateLimit.limit}`);
        }
        return data as ResponseType;
    }

    for (let attemptIndex = 0; attemptIndex < MAX_FAILED_ATTEMPTS; attemptIndex++) {
        try {
            return await tryQuery();
        } catch (error) {
            console.log(`Unable to query Github API: ${(error as any).message ?? 'Unknown error'}`);
            await new Promise((resolve) => setTimeout(resolve, attemptIndex * 60 * 1000));
            throw error;
        }
    }

    throw new Error('Unable to query Github API');
}
