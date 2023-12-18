import { program } from 'commander';
import config from './config/config';
import { fetchCountry } from './controller/fetch';
import { findCountryFollowerCount } from './controller/find-country-follower-count';
import { findCountryLocations } from './controller/find-country-locations';
import { generateMarkdown } from './controller/generate-markdown';
import { generateReadme } from './controller/generate-readme';

program
    .name('github-top-users')
    .description('CLI to generate top Github Users based on their commit streak')
    .version('0.0.1');

program
    .command('fetch')
    .description('Generate JSON files a given countries')
    .option('-c, --country <country>', 'Country code to generate JSON for')
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
    .option('-c, --country <country>', 'Country code to generate markdown for')
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

program
    .command('find-country-locations')
    .description(
        'Find country secondary locations based on its name in multiple languages (e.g. "Switzerland,Suisse,Schweiz,Svizzera")',
    )
    .option(
        '-m, --matches <matches>',
        'Country main locations, comma-separated if multiple languages are spoken in the country (e.g. "Switzerland,Suisse,Schweiz,Svizzera")',
    )
    .action(async (options) => {
        if (!options.matches) {
            throw new Error('No matches specified');
        }

        await findCountryLocations(options.matches.toLowerCase().split(','));
    });

program
    .command('find-country-follower-count')
    .description('Find follower threshold for a given country based on all its locations')
    .option(
        '-m, --matches <matches>',
        'Country main locations, comma-separated if multiple languages are spoken in the country (e.g. "Switzerland,Suisse,Schweiz,Svizzera")',
    )
    .action(async (options) => {
        if (!options.matches) {
            throw new Error('No matches specified');
        }

        await findCountryFollowerCount(options.matches.toLowerCase().split(','));
    });

program
    .command('generate-readme')
    .description('Generate README.md')
    .action(async () => {
        generateReadme();
    });

program.parse();
