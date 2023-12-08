import { RankingType } from '../types';
import { getJsonPath } from './generate-json';

export function printJson(rankingType: RankingType, countryKey: string) {
    // Read JSON file
    const jsonPath = getJsonPath(rankingType, countryKey);
    const json = require(jsonPath);

    // Print JSON
    console.log(JSON.stringify(json, null, 4));
}
