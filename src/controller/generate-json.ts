import fs from 'fs';
import path from 'path';
import process from 'process';
import { getCountryTopUsers } from '../util';
import { CountryDefinition, RankingType } from '../types';

export const DIST_PATH = path.join(process.cwd(), 'dist');

export function getJsonPath(rankingType: RankingType, countryKey: string) {
    return path.join(DIST_PATH, `${rankingType}-${countryKey}.json`);
}

export async function generateJson(countryDefinition: CountryDefinition) {
    const { countryKey, countryMatch, minFollowerCount } = countryDefinition;

    const { topUsersByDayStreak, topUsersByWeekStreak } = await getCountryTopUsers(
        countryMatch,
        minFollowerCount,
    );

    fs.mkdirSync(DIST_PATH, { recursive: true });
    fs.writeFileSync(
        getJsonPath(RankingType.DayStreak, countryKey),
        JSON.stringify(topUsersByDayStreak),
    );
    fs.writeFileSync(
        getJsonPath(RankingType.WeekStreak, countryKey),
        JSON.stringify(topUsersByWeekStreak),
    );
}
