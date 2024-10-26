// @ts-check

import { fileURLToPath } from 'node:url';

export const packages = [
  {
    name: '@ccreusat/some-lib',
    packageDir: 'packages/some-lib',
  },
  {
    name: '@ccreusat/client',
    packageDir: 'packages/client',
  },
];

export const branchConfigs = {
  main: {
    prerelease: false,
  },
  develop: {
    prerelease: true,
  },
};

export const ghToken = process.env.GITHUB_TOKEN;

export const rootDir = fileURLToPath(new URL('.', import.meta.url));
