import { program } from 'commander';
import config from './config/config';
import { fetchCountry } from './controller/fetch';
import { generateMarkdown } from './controller/generate-markdown';

program
    .name('github-top-users')
    .description('CLI to generate top Github Users based on their commit streak')
    .version('0.0.1');

program
    .command('fetch')
    .description('Generate JSON files a given countries')
    .option('-c, --country <country>', 'Country to generate JSON for')
    .action(async (options) => {
        const countryDefinition = config.countries.find((c) => c.countryCode === options.country);
        if (!countryDefinition) {
            throw new Error('No country specified');
        }

        await fetchCountry(countryDefinition);
    });

program
    .command('generate-markdown')
    .description('Generate markdown for a given countries')
    .option('-c, --country <country>', 'Country to generate markdown for')
    .action(async (options) => {
        let countries = [];
        if (options.country) {
            countries = config.countries.filter((c) => c.countryCode === options.country);
        } else {
            countries = config.countries;
        }
        if (countries.length === 0) {
            throw new Error('No country specified');
        }

        for (const country of countries) {
            generateMarkdown(country.countryCode);
        }
    });

program.parse();
