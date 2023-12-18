import fs from 'fs';
import config from '../config/config';
import { RANKINGS } from '../constants';
import { injectTemplateData } from '../helper/markdown';
import { getReadmePath, getReadmeTemplatePath } from '../helper/paths';
import { CountryDefinition } from '../types';

function getLeaderboardListHtml(countryCode: string) {
    const lis = RANKINGS.map((ranking) => {
        const { title, type } = ranking;
        return `<td><a href="docs/markdown/${type}/${countryCode}.md">${title}</a></td>`;
    });
    return lis.join('');
}

function getLeaderboardRowHtml(country: CountryDefinition) {
    return `<tr>
        <td>
            <img src="https://flagsapi.com/${country.countryCode.toUpperCase()}/flat/16.png" />
            <b>${country.countryName}</b>
        </td>
        ${getLeaderboardListHtml(country.countryCode)}
    </tr>`;
}

function getLeaderboardTableHtml() {
    const rows = config.countries.map((country) => getLeaderboardRowHtml(country));
    return `<table>
<tbody>
    ${rows.join('')}
    <td>
        ➕ <a href="https://github.com/7PH/github-coding-streaks/issues/new">Add your country</a>
    </td>
    ${'<td />'.repeat(RANKINGS.length)}
</tbody>
</table>`;
}

export function generateReadme() {
    const template = injectTemplateData(fs.readFileSync(getReadmeTemplatePath(), 'utf8'), {
        date: new Date().toISOString(),
        table: getLeaderboardTableHtml(),
    });
    fs.writeFileSync(getReadmePath(), template);
}
