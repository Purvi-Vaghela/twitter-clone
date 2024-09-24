// import { CodegenConfig } from "@graphql-codegen/cli";

// const config: CodegenConfig = {
//   overwrite: true,
//   schema: 'http://localhost:8000/graphql', // The location of your GraphQL server schema.
//   documents: "**/*.{graphql,gql,ts,tsx}",  // Proper glob pattern to match your GraphQL documents.
//   generates: {
//     './src/gql/': {
//       preset: 'client',
//     },
//     './graphql.schema.json': { // Generates the introspection file in JSON format.
//       plugins: ['introspection'],
//     },
//   },
// };

// export default config;


// import {CodegenConfig} from "@graphql-codegen/cli"

// const config: CodegenConfig = {
//   overwrite: true,
//   schema: 'http://localhost:8000/graphql',
//   documents: "**/*,{tsx, ts}",
//   generates: {
//     "gql/": {
//       preset:"client",
//       plugins: [],
//     },
//     './graphql.schema.json': {
//       plugins: ['introspection'],
//     },
//   },
// };

// export default config;
// my
// export default {
//   schema: 'http://localhost:8000/graphql',
//   documents: "**/*,{tsx, ts}",
//   generates: {
//     './src/gql': {
//       preset: 'client',
//     },
//   },
// };

export default {
  schema: 'http://localhost:8000/graphql',
  documents: '**/*.{graphql,gql,tsx,ts}',  // Corrected the document pattern
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [], // No specific plugins needed for client preset
    },
  },
};
