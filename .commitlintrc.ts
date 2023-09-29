import { UserConfig } from '@commitlint/types/lib/load';

const commitLintRc: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-exclamation-mark': [2, 'never'],
    'header-max-length': [2, 'always', 74],
    'body-max-line-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
  },
};

export default commitLintRc;
