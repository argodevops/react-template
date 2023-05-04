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
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    transform: {
        '^.+\\.(js|jsx)$': [
            'babel-jest',
            { configFile: './testConfig/babel.config.json' }
        ]
    },
    clearMocks: true,
    transformIgnorePatterns: [],
    setupFilesAfterEnv: ['<rootDir>/testConfig/setupTests.js'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': path.resolve('./__mocks__/styleMock.js'),
        '\\.(gif|ttf|eot|svg|png)$': path.resolve('./__mocks__/fileMock.js')
    }
};
