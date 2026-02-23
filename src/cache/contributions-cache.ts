import fs from 'fs';
import path from 'path';
import { ContributionCollection } from '../types';
import { DIST_PATH } from '../helper/paths';

const CACHE_DIR = path.join(DIST_PATH, 'cache');

function getCachePath(login: string, year: number): string {
    return path.join(CACHE_DIR, `${login}_${year}.json`);
}

export function getCachedContributions(login: string, year: number): ContributionCollection | null {
    const cachePath = getCachePath(login, year);
    if (!fs.existsSync(cachePath)) {
        return null;
    }
    try {
        const raw = fs.readFileSync(cachePath, 'utf-8');
        return JSON.parse(raw) as ContributionCollection;
    } catch {
        return null;
    }
}

export function setCachedContributions(login: string, year: number, data: ContributionCollection): void {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    fs.writeFileSync(getCachePath(login, year), JSON.stringify(data));
}
