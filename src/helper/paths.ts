import path from 'path';
import { RankingType } from '../types';

export const DIST_PATH = path.join(process.cwd(), 'dist');

export function getJsonPath(countryCode: string) {
    return path.join(DIST_PATH, `${countryCode}.json`);
}

export function getTemplatePath(rankingType: RankingType) {
    return path.join(process.cwd(), 'src', 'templates', rankingType + '.md');
}

export function getReadmeTemplatePath() {
    return path.join(process.cwd(), 'src', 'templates', 'README.md');
}

export function getReadmePath() {
    return path.join(process.cwd(), 'README.md');
}
