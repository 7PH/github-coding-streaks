import { program } from 'commander';
import config from './config';
import { generateJson } from './controller/generate-json';
import { printJson } from './controller/print-json';
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

        await generateJson(countryDefinition);
    });

program
    .command('print-json')
    .description('Print JSON files for a given countries')
    .option('-c, --country <country>', 'Country to print JSON for')
    .option('-r, --ranking-type <rankingType>', 'Ranking type to print JSON for')
    .action(async (options) => {
        const countryDefinition = config.countries.find((c) => c.countryKey === options.country);
        if (!countryDefinition) {
            throw new Error('No country specified');
        }

        printJson(options.rankingType, options.country);
    });

program
    .command('generate-markdown')
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
