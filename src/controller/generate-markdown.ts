import fs from 'fs';
import config from '../config/config';
import { RANKINGS } from '../constants';
import {
    getMarkdownLoaderboardTable,
    getMarkdownPath,
    injectTemplateData,
} from '../helper/markdown';
import { getJsonPath, getTemplatePath } from '../helper/paths';
import { computeRankings } from '../helper/ranking';
import { EnhancedGithubUser, ProcessedGithubUser } from '../types';

export function generateMarkdown(countryCode: string) {
    const countryDefinition = config.countries.find((c) => c.countryCode === countryCode);
    if (!countryDefinition) {
        throw new Error('No country specified');
    }

    const users = require(getJsonPath(countryCode)) as EnhancedGithubUser[];
    const processedUsers: ProcessedGithubUser[] = users.map((enhancedUser) => {
        const ranking = computeRankings(enhancedUser);
        return {
            user: enhancedUser.user,
            ranking,
        };
    });

    // Generate markdown files
    for (const { type, valueColumnHeader, userCount } of RANKINGS) {
        const template = fs.readFileSync(getTemplatePath(type), 'utf8');

        // Rank users for this ranking type and keep only the top N
        const leaderboard = processedUsers
            .filter((u) => u.ranking[type] !== 0)
            .sort((a, b) => {
                const aValue = a.ranking[type] as number;
                const bValue = b.ranking[type] as number;
                return bValue - aValue;
            })
            .slice(0, userCount);

        // Build the HTML table
        const table = getMarkdownLoaderboardTable(type, leaderboard, valueColumnHeader);

        // Build the whole markdown file
        const markdown = injectTemplateData(template, {
            ...countryDefinition,
            countryCodeUppercase: countryCode.toUpperCase(),
            year: new Date().getFullYear(),
            type,
            table,
            userCount,
        });

        // Save it
        fs.writeFileSync(getMarkdownPath(type, countryCode), markdown);
    }
}
