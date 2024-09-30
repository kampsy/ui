# Contributing to kampsy-ui

Thanks for your interest in contributing to ui.kampsy.com. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@kampsy](https://twitter.com/shadcn).

## Table of Contents

- [Contributing to shadcn-svelte](#contributing-to-kampsy-ui)
  - [Table of Contents](#table-of-contents)
  - [Ways to contribute](#ways-to-contribute)
  - [How to contribute](#how-to-contribute)
  - [Commit Convention](#commit-convention)
  - [Requests for new components](#requests-for-new-components)
  - [License](#license)

## Ways to contribute

This project is open to contributions from the community.

We welcome contributions in the following areas:

- **Feedback**: We're always looking for feedback on the project. If you have any suggestions, ideas, please open an issue to discuss it.
- **Documentation improvements**: See a typo or broken link? Or do you think the documentation could be improved in some other way? If it's a typo/broken link, feel free to open a PR. If the change would involve more than a few line changes, please open an issue to discuss it first before spending time on it.
- **Code optimizations**: If you see a way to improve the code, please open an issue to discuss it.

## How to contribute

This project operates using a process that makes maintaining the project less stressful, while also preventing wasted time and effort on contributions that may not be merged into the project.

Here's what the process looks like:

1. A user opens an issue to report a bug, request a new feature, or propose a change
2. A maintainer reviews the issue and assigns it a status label
   1. `help wanted` - the issue is ready to be worked on, but no one has volunteered to work on it yet. If you would like to work on the issue, please leave a comment on the issue to let us know along with a brief description of how you plan to address the issue (if it's not already clear from the issue description).
   2. `accepted` - the issue has been assigned to someone and they are working on a solution for it.
   3. `duplicate` - the issue is a duplicate of another issue. The issue will be closed and a link to the original issue will be provided.
   4. `blocked` - the issue is blocked by another issue either within this project or another.
   5. `revisions needed` - the issue requires additional information or reproduction details before it will be considered for implementation/fix.
   6. `under review` - further discussion is needed before a decision can be made on how to proceed with the issue.
3. The issue author can volunteer to work on the issue within the issue itself, or someone else can volunteer to work on it.
4. A maintainer assigns the issue to whoever volunteers to work on it and becomes the "owner" of the issue.
5. The issue owner submits a pull request to address/resolve the issue.
6. A maintainer reviews the pull request and if no revisions are needed, adds the changesets (if required) and merges it into the main repository.

**NOTE:** Do not submit a pull request for anything other than minor documentation/typo fixes without first opening an issue and having it assigned to you. We don't want you to waste time on something that may not be merged/accepted.

To volunteer to solve someone else's issue, please leave a comment on the issue to let us know that you'd like to work on it, along with a brief description of how you plan to address the issue (if it's not already clear from the issue description), and we'll assign the issue to you.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Requests for new components

If you have a request for a new component, please open a discussion on GitHub. We'll be happy to help you out.

## License

By contributing to this project, you agree that your contributions will be licensed under the [LICENSE](LICENSE.md) of the project.