// @ts-check

import { fileURLToPath } from 'node:url';

export const publishOptions = {
  packages: [
    {
      name: '@ccreusat/some-lib',
      packageDir: 'packages/some-lib',
    },
    {
      name: '@ccreusat/my-lib',
      packageDir: 'packages/my-lib',
    },
    {
      name: '@ccreusat/client',
      packageDir: 'packages/client',
    },
  ],

  branchConfigs: {
    main: {
      prerelease: false,
    },
    develop: {
      prerelease: true,
    },
  },

  ghToken: process.env.GH_TOKEN,

  rootDir: fileURLToPath(new URL('.', import.meta.url)),
};
