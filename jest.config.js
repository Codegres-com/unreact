module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**',
    '!**/build/**',
    '!**/coverage/**',
  ],
  testEnvironment: 'node',
  testMatch: ['**/*.test.js'],
  transformIgnorePatterns: [
    '/node_modules/(?!(globby|chalk|ora|yargs|resolve-from|make-dir|html-tags|ansi-styles|@sindresorhus/merge-streams|path-type|unicorn-magic|slash)/)',
  ],
  moduleNameMapper: {
    '^#ansi-styles$': 'ansi-styles',
    '^unicorn-magic$': '<rootDir>/node_modules/unicorn-magic/node.js',
  },
};