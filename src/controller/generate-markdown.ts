import path from 'path';
import fs from 'fs';
import { RankingType, ProcessedGithubUser, EnhancedGithubUser } from '../types';
import { getJsonPath } from './fetch';
import config from '../config/config';
import { RANKINGS } from '../constants';
import {
    getMarkdownPath,
    injectTemplateData,
    getMarkdownLoaderboardTable,
} from '../helper/markdown';
import { computeRankings } from '../helper/ranking';

function getTemplatePath(rankingType: RankingType) {
    return path.join(process.cwd(), 'src', 'templates', rankingType + '.md');
}

export function generateMarkdown(countryKey: string) {
    const countryDefinition = config.countries.find((c) => c.countryKey === countryKey);
    if (!countryDefinition) {
        throw new Error('No country specified');
    }

    const users = require(getJsonPath(countryKey)) as EnhancedGithubUser[];
    const processedUsers: ProcessedGithubUser[] = users.map((enhancedUser) => {
        const ranking = computeRankings(enhancedUser);
        return {
            user: enhancedUser.user,
            ranking,
        };
    });

    // Generate markdown files
    for (const { type, title, userCount } of RANKINGS) {
        const template = fs.readFileSync(getTemplatePath(type), 'utf8');

        // Rank users for this ranking type and keep only the top N
        const leaderboard = processedUsers
            .sort((a, b) => {
                const aValue = a.ranking[type] as number;
                const bValue = b.ranking[type] as number;
                return bValue - aValue;
            })
            .slice(0, userCount);

        // Build the HTML table
        const table = getMarkdownLoaderboardTable(type, leaderboard, title);

        // Build the whole markdown file
        const markdown = injectTemplateData(template, {
            ...countryDefinition,
            type,
            table,
        });

        // Save it
        fs.writeFileSync(getMarkdownPath(type, countryKey), markdown);
    }
}
