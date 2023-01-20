/* eslint-disable no-template-curly-in-string */
const pkg = require('./package.json');

const branches = [
    'master',
    'release/*',
    {
        name: 'develop',
        prerelease: true
    },
    {
        name: 'alpha',
        prerelease: true
    }
];

const commitAnalyzer = '@semantic-release/commit-analyzer';
const releaseNotesGenerator = '@semantic-release/release-notes-generator';
const changelog = '@semantic-release/changelog';

const docker = [
    '@codedependant/semantic-release-docker',
    {
        dockerTags: [
            '{{#if prerelease.[0]}}{{prerelease.[0]}}{{else}}latest{{/if}}',
            '{{major}}-{{#if prerelease.[0]}}{{prerelease.[0]}}{{else}}latest{{/if}}',
            '{{major}}.{{minor}}-{{#if prerelease.[0]}}{{prerelease.[0]}}{{else}}latest{{/if}}',
            '{{version}}'
        ],
        dockerRegistry: '<ENTER DOCKER REGISTRY HERE>',
        dockerProject: null,
        dockerImage: pkg.name
    }
];

const git = '@semantic-release/git';

const teams = ['@argodevops/semantic-release-teams', { packageName: pkg.name }];

module.exports = {
    branches,
    plugins: [
        commitAnalyzer,
        releaseNotesGenerator,
        changelog,
        docker,
        git,
        teams
    ]
};
