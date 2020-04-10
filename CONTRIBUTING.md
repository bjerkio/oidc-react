# Contributing to oidc-react

:+1::tada: Thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing. These are just
guidelines, not rules, so use your best judgment and feel free to
propose changes to this document in a pull request.

## Issues and Pull Requests

* If you're not sure about adding something, [open an issue](https://github.com/bjerkio/oidc-react/issues/new) to discuss it.
* Feel free to open a Pull Request early so that a discussion can be had as changes are developed.

## Commit Messages and Pull Request Titles

We use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to standardize our commit history. To enforce this convention on commit messages and/or pull request titles, we use the [Semantic Pull Requests](https://github.com/probot/semantic-pull-requests) bot.

The commit message summary (or pull request title) is constructed by prepending the type of change being made (e.g., feat, fix, refactor), followed by an imperative, present tense sentence (without a period).
Example: `fix: make header bold`.

If you are still working on your pull request, prepend `WIP:` to indicate that it's work in progress.

### Pull Request Title

Same as commit messages, prepend the type of change being made (refactor, fix, chore, feat, etc.) 
Example: `docs: add linux setup instructions`

## Documentation

Most of the documentation are automatically generated. We utilize `typedoc` that uses tags inline
with classes in order to generate. The nice thing about this is that documentation will be visible
when using Typescript in editors as well.

However, we love to have examples and guides as well.

## Need Help?

If any of this information confusing, incorrect, or incomplete, feel free to
[open an issue](https://github.com/bjerkio/oidc-react/issues/new)
for help.
