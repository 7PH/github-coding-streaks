import path from 'path';
import { ProcessedGithubUser, RankingType } from '../types';

const MARKDOWN_PATH = path.join(process.cwd(), 'docs', 'markdown');

const numberFormat = Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 2,
});

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
    value: number,
) {
    const indexTitle =
        {
            1: '🥇',
            2: '🥈',
            3: '🥉',
        }[index + 1] ?? index + 1;

    const classnames =
        {
            1: 'first',
            2: 'second',
            3: 'third',
        }[index + 1] ?? '';

    const tds = [];
    tds.push(indexTitle);
    tds.push(`<a href="https://github.com/${user.login}">
        <img src="${user.avatarUrl}" height="12" />
        <span class="name">${user.name ?? user.login}</span>
    </a>`);
    tds.push(user.company ?? '-');
    tds.push(user.location ?? '-');
    tds.push(numberFormat.format(user.followers.totalCount));
    tds.push(numberFormat.format(value));

    return `<tr class="${classnames}">${tds.map((td) => `<td>${td}</td>`).join('')}</tr>`;
}

export function getMarkdownLoaderboardTable(
    type: RankingType,
    processedUsers: ProcessedGithubUser[],
    valueColumnHeader: string,
) {
    return `
<table style="width: 100%">
    <style scoped>
        .first .name, .second .name, .third .name {
            font-weight: bold;
        }
        .first {
            font-size: 1.2em;
        }
        .second {
            font-size: 1.1em;
        }
        .third {
            font-size: 1em;
        }
    </style>
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
        ${processedUsers
            .map((user, index) => getMarkdownLeaderboardTr(index, user, user.ranking[type]))
            .join('')}
    </tbody>
</table>`;
}
