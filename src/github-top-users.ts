import { program } from 'commander';
import config from './config/config';
import { fetchCountry } from './controller/fetch';
import { generateMarkdown } from './controller/generate-markdown';

program
    .name('github-top-users')
    .description('CLI to generate top Github Users based on their commit streak')
    .version('0.0.1');

program
    .command('generate-json')
    .description('Generate JSON files a given countries')
    .option('-c, --country <country>', 'Country to generate JSON for')
    .action(async (options) => {
        const countryDefinition = config.countries.find((c) => c.countryKey === options.country);
        if (!countryDefinition) {
            throw new Error('No country specified');
        }

        await fetchCountry(countryDefinition);
    });

program
    .command('json-to-markdown')
    .description('Generate markdown for a given countries')
    .option('-c, --country <country>', 'Country to generate markdown for')
    .action(async (options) => {
        let countries = [];
        if (options.country) {
            countries = config.countries.filter((c) => c.countryKey === options.country);
        } else {
            countries = config.countries;
        }
        if (countries.length === 0) {
            throw new Error('No country specified');
        }

        for (const country of countries) {
            generateMarkdown(country.countryKey);
        }
    });

program.parse();
