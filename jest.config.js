const path = require('path');

module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ['**/*.(test|spec).+(js|jsx)'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!**node_modules/**',
        '!src/**/**.styles.js',
        '!src/**/**.spec.{js,jsx}'
    ],
    coverageDirectory: 'coverage',
    transform: {
        '^.+\\.(js|jsx|mjs)$': 'babel-jest'
    },
    transformIgnorePatterns: [],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': path.resolve('./__mocks__/styleMock.js'),
        '\\.(gif|ttf|eot|svg|png)$': path.resolve('./__mocks__/fileMock.js')
    }
};
