# Contributing to React Template

* [Setting up](#setting-up)
* [Linting](#linting)
* [Commiting Changes](#commiting-changes)
* [Pull requests](#pull-requests)
* [Releases](#releases)

## [Setting up](setting-up)

You will need to install node to be able to build the react-template package. The best way to install and manage node versions is using nvm. Details on how to install and use nvm can be found [here](https://github.com/nvm-sh/nvm)

The React Template project uses pnpm as a package manager, installation of pnpm can be done through npm using a 
global install.

```sh
npm install -g pnpm
```

For more information on installing pnpm [click here](https://pnpm.io/installation)

Copy the `config.json.example` to config.json. config.json will be ignored by git, so you can change any values in here to match your environment.

## [Linting](linting)

React Template uses eslint with the `@argo/eslint-config` package, alongside prettier rules defined in the project for code styling. This allows for consistent styling across the `@atlas` packages.

Linting and prettier are automatically run at commit time.

## [Commiting Changes](commiting-changes)

When you run `git commit`, [Husky](https://typicode.github.io/husky/#/) will run a number of git hooks. These include tests, linting, prettier and hooks for structuring your commit messages.

Once the linting and tests have finished running, follow the guide to build your commit message. Picking the correct type of commit for your changes and listing any breaking changes you have made.

You can skip any fields that do not apply to your commit. NOTE: filling anything into `BREAKING CHANGES` will cause a major version to be released when PRs are merged to master.

## [Pull Requests](pull-requests)

Raise a pull request [here](<LINK_TO_GITHUB>) and it will be reviewed by the team. Your PR must have a successful build, no "needs work" status from any reviewer and must get a minimum of two approvals before it can be merged.

## [Releases](#releases)

The React Template release process is handled by [semantic-release](https://semantic-release.gitbook.io/semantic-release/usage/configuration) and runs automatically in the `master` branch, when the build is successful and the tests pass.

The release config also allows for releasing prerelease versions of the app from one of branches `alpha` or `develop`. To ensure that semantic-release recognises these branches, they must exist in source control (Make sure they are deleted in the central repository once you are done). A prelease version from either of these branches will have the format `X.X.X-branch.X` e.g `1.2.3-alpha.1`