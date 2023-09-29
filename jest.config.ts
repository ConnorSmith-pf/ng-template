import type { Config } from 'jest';

const jestConfig: Config = {
  roots: ['<rootDir>/src'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coverageReporters: ['lcov'],
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
};

export default jestConfig;
