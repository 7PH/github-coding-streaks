import path from 'path';
import fs from 'fs';
import { RankingType, SavedGithubUser } from '../types';
import { getJsonPath } from './generate-json';
import config from '../config';
import { RANKINGS } from '../constants';

const MARKDOWN_PATH = path.join(process.cwd(), 'docs', 'markdown');

function getTemplatePath(rankingType: RankingType) {
    return path.join(process.cwd(), 'src', 'templates', rankingType + '.md');
}

function getMarkdownPath(rankingType: RankingType, countryKey: string) {
    return path.join(MARKDOWN_PATH, `${rankingType}/${countryKey}.md`);
}

function injectTemplateData(template: string, json: any) {
    let result = template;
    for (const key of Object.keys(json)) {
        result = result.replace(`{{${key}}}`, json[key]);
    }
    return result;
}

function savedUserToTr(index: number, { user }: SavedGithubUser, value: unknown) {
    return `<tr>
    <td>${index + 1}</td>
    <td>
        <a href="https://github.com/${user.login}">
            <img src="${user.avatarUrl}" height="12" />
             <b>${user.name ?? user.login}</b>
        </a>
    </td>
    <td>
        ${user.company ?? '-'}
    </td>
    <td>
        ${user.location ?? '-'}
    </td>
    <td>
        <b>${value}</b>
    </td>
</tr>`;
}

function savedUsersToTable(
    savedUsers: SavedGithubUser[],
    valueColumnHeader: string,
    getValue: (user: SavedGithubUser) => unknown,
) {
    return `<table width="100%">
    <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Company</th>
            <th>Location</th>
            <th>${valueColumnHeader}</th>
        </tr>
    </thead>
    <tbody>
        ${savedUsers.map((user, index) => savedUserToTr(index, user, getValue(user))).join('')}
    </tbody>
</table>`;
}

export function generateMarkdown(countryKey: string) {
    const countryDefinition = config.countries.find((c) => c.countryKey === countryKey);
    if (!countryDefinition) {
        throw new Error('No country specified');
    }

    for (const { type, savedUserKey, title, userCount } of RANKINGS) {
        const savedUsers = require(getJsonPath(type, countryKey));
        const template = fs.readFileSync(getTemplatePath(type), 'utf8');
        const truncatedSavedUsers = savedUsers.slice(0, userCount);

        const table = savedUsersToTable(
            truncatedSavedUsers,
            title,
            (savedUser) => savedUser[savedUserKey],
        );

        const markdown = injectTemplateData(template, {
            ...countryDefinition,
            type,
            table,
        });

        fs.writeFileSync(getMarkdownPath(type, countryKey), markdown);
    }
}
