import path from 'path';
import { ProcessedGithubUser, RankingType } from '../types';

const MARKDOWN_PATH = path.join(process.cwd(), 'docs', 'markdown');

export function getMarkdownPath(rankingType: RankingType, countryKey: string) {
    return path.join(MARKDOWN_PATH, `${rankingType}/${countryKey}.md`);
}

export function injectTemplateData(template: string, json: any) {
    let result = template;
    for (const key of Object.keys(json)) {
        result = result.replace(`{{${key}}}`, json[key]);
    }
    return result;
}

export function getMarkdownLeaderboardTr(
    index: number,
    { user }: ProcessedGithubUser,
    value: unknown,
) {
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
        ${user.followers.totalCount ?? '-'}
    </td>
    <td>
        <b>${value}</b>
    </td>
</tr>`;
}

export function getMarkdownLoaderboardTable(
    type: RankingType,
    savedUsers: ProcessedGithubUser[],
    valueColumnHeader: string,
) {
    return `<table width="100%">
    <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Company</th>
            <th>Location</th>
            <th>Followers</th>
            <th>${valueColumnHeader}</th>
        </tr>
    </thead>
    <tbody>
        ${savedUsers
            .map((user, index) => getMarkdownLeaderboardTr(index, user, user.ranking[type]))
            .join('')}
    </tbody>
</table>`;
}
