import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'src/github/schema-loader.ts',
    documents: ['src/github/queries/*.graphql'],
    generates: {
        'src/_generated/graphql.ts': {
            plugins: ['typescript', 'typescript-resolvers', 'typescript-document-nodes', 'typescript-operations'],
        },
    },
    require: ['ts-node/register'],
};

export default config;
