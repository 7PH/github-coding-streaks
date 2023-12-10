import jsonConfig from './config.json';
import { JsonConfiguration } from '../types';

export type CountryDefinition = {
    countryCode: string;
    countryName: string;
    countryMatch: string[];
    minFollowerCount: number;
};

export default jsonConfig as JsonConfiguration;
