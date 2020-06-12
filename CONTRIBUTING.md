# Contributing to cpn-pdr-api

Firstly, we would like to thank you for taking the time to contribute!

The following is a set of guidelines for contributing to cpn-pdr-api, which is hosted on the [cpn-pdr-api](https://github.com/CDECatapult/cpn-pdr-api) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[FAQs](#FAQs)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)

- [cpn-pdr-api](#cpn-pdr-api)
- [cpn-pdr-api Architecture](#architecture-decisions)

[How Can I Contribute?](#how-can-i-contribute)

- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Pull Requests](#pull-requests)

[Styleguides](#styleguides)

- [Git Commit Messages](#git-commit-messages)

[Additional Notes](#additional-notes)

- [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## Code of Conduct

This project and everyone participating in it is governed by the [Digital Catapult Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [cpn-pdr-api@digicatapult.org.uk](mailto:cpn-pdr-api@digicatapult.org.uk).

## FAQs

We don't have any frequently asked questions yet.

## I don't want to read this whole thing I just have a question!!!

## What should I know before I get started?

### cpn-pdr-api

cpn-pdr-api is a small open source project &mdash; [cpn-pdr-api](https://github.com/CDECatapult/cpn-pdr-api). When you initially consider contributing to cpn-pdr-api, this section should help you with doing so.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for cpn-pdr-api. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](https://github.com/CDECatapult/cpn-pdr-api/.github/blob/master/.github/ISSUE_TEMPLATE/bug_report.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

- **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3cpn-pdr-api)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on that repository and provide the following information by filling in [the template](https://github.com/CDECatapult/cpn-pdr-api/.github/blob/master/.github/ISSUE_TEMPLATE/bug_report.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, \*\*record the GIF with the [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/Xaviju/byzanzUI) on Linux.
- **If you're reporting that cpn-pdr-api crashed**, include a crash report with a stack trace from the operating system. On macOS, the crash report will be available in `Console.app` under "Diagnostic and usage information" > "User diagnostic reports". Include the crash report in the issue in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines), a [file attachment](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/), or put it in a [gist](https://gist.github.com/) and provide link to that gist.
- **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

- **Did the problem start happening recently** (e.g. after updating to a new version of cpn-pdr-api) or was this always a problem?
- If the problem started happening recently, **can you reproduce the problem in an older version of cpn-pdr-api?** What's the most recent version in which the problem doesn't happen? You can checkout older versions of cpn-pdr-api from [the releases page](https://github.com/CDECatapult/cpn-pdr-api/releases).
- **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:

- **Which version of cpn-pdr-api are you using?** You can get the exact version from the version attribute within package.json.
- **What's the name and version of the OS you've deployed cpn-pdr-api to**?
- **Are you running cpn-pdr-api in a virtual machine?** If so, which VM software are you using and which operating systems and versions are used for the host and the guest?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for cpn-pdr-api, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](https://github.com/CDECatapult/cpn-pdr-api/.github/blob/master/.github/ISSUE_TEMPLATE/feature_request.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

- **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3Acpn-pdr-api)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on that repository and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of cpn-pdr-api which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **Explain why this enhancement would be useful** to most cpn-pdr-api users.
- **List some other text editors or applications where this enhancement exists.**
- **Specify which version of cpn-pdr-api you're using.** You can get the exact version from the version attribute within package.json.
- **What's the name and version of the OS you've deployed cpn-pdr-api to**?

### Your First Code Contribution

Unsure where to begin contributing to cpn-pdr-api? You can start by looking through these `beginner` and `help-wanted` issues:

- [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.
- [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

### Pull Requests

The process described here has several goals:

- Maintain cpn-pdr-api's quality
- Fix problems that are important to users
- Enable a sustainable system for cpn-pdr-api's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- When only changing documentation, include `[ci skip]` in the commit title
- Consider starting the commit message with an applicable emoji:
  - :art: `:art:` when improving the format/structure of the code
  - :racehorse: `:racehorse:` when improving performance
  - :non-potable_water: `:non-potable_water:` when plugging memory leaks
  - :memo: `:memo:` when writing docs
  - :penguin: `:penguin:` when fixing something on Linux
  - :apple: `:apple:` when fixing something on macOS
  - :checkered_flag: `:checkered_flag:` when fixing something on Windows
  - :bug: `:bug:` when fixing a bug
  - :fire: `:fire:` when removing code or files
  - :green_heart: `:green_heart:` when fixing the CI build
  - :white_check_mark: `:white_check_mark:` when adding tests
  - :lock: `:lock:` when dealing with security
  - :arrow_up: `:arrow_up:` when upgrading dependencies
  - :arrow_down: `:arrow_down:` when downgrading dependencies
  - :shirt: `:shirt:` when removing linter warnings

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests. Most labels are used across all cpn-pdr-api repositories, but some are specific to `CDECatapult/cpn-pdr-api`.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. For example, you might be interested in [open issues across `CDECatapult/cpn-pdr-api`. We encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

The labels are loosely grouped by their purpose, but it's not required that every issue have a label from every group or that an issue can't have more than one label from the same group.

Please open an issue on `CDECatapult/cpn-pdr-api` if you have suggestions for new labels, and if you notice some labels are missing on some repositories, then please open an issue on that repository.

#### Type of Issue and Issue State

| Label name                | `CDECatapult/cpn-pdr-api` :mag_right:                           | `cpn-pdr-api`‑org :mag_right:                                  | Description                                                                                                                                 |
| ------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `enhancement`             | [search][search-cpn-pdr-api-repo-label-enhancement]             | [search][search-cpn-pdr-api-org-label-enhancement]             | Feature requests.                                                                                                                           |
| `bug`                     | [search][search-cpn-pdr-api-repo-label-bug]                     | [search][search-cpn-pdr-api-org-label-bug]                     | Confirmed bugs or reports that are very likely to be bugs.                                                                                  |
| `question`                | [search][search-cpn-pdr-api-repo-label-question]                | [search][search-cpn-pdr-api-org-label-question]                | Questions more than bug reports or feature requests (e.g. how do I do X).                                                                   |
| `feedback`                | [search][search-cpn-pdr-api-repo-label-feedback]                | [search][search-cpn-pdr-api-org-label-feedback]                | General feedback more than bug reports or feature requests.                                                                                 |
| `more-information-needed` | [search][search-cpn-pdr-api-repo-label-more-information-needed] | [search][search-cpn-pdr-api-org-label-more-information-needed] | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce).                                  |
| `needs-reproduction`      | [search][search-cpn-pdr-api-repo-label-needs-reproduction]      | [search][search-cpn-pdr-api-org-label-needs-reproduction]      | Likely bugs, but haven't been reliably reproduced.                                                                                          |
| `blocked`                 | [search][search-cpn-pdr-api-repo-label-blocked]                 | [search][search-cpn-pdr-api-org-label-blocked]                 | Issues blocked on other issues.                                                                                                             |
| `duplicate`               | [search][search-cpn-pdr-api-repo-label-duplicate]               | [search][search-cpn-pdr-api-org-label-duplicate]               | Issues which are duplicates of other issues, i.e. they have been reported before.                                                           |
| `wontfix`                 | [search][search-cpn-pdr-api-repo-label-wontfix]                 | [search][search-cpn-pdr-api-org-label-wontfix]                 | The cpn-pdr-api core team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| `invalid`                 | [search][search-cpn-pdr-api-repo-label-invalid]                 | [search][search-cpn-pdr-api-org-label-invalid]                 | Issues which aren't valid (e.g. user errors).                                                                                               |

#### Topic Categories

| Label name           | `CDECatapult/cpn-pdr-api` :mag_right:                      | `cpn-pdr-api`‑org :mag_right:                             | Description                                                                                                |
| -------------------- | ---------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `windows`            | [search][search-cpn-pdr-api-repo-label-windows]            | [search][search-cpn-pdr-api-org-label-windows]            | Related to cpn-pdr-api running on Windows.                                                                 |
| `linux`              | [search][search-cpn-pdr-api-repo-label-linux]              | [search][search-cpn-pdr-api-org-label-linux]              | Related to cpn-pdr-api running on Linux.                                                                   |
| `mac`                | [search][search-cpn-pdr-api-repo-label-mac]                | [search][search-cpn-pdr-api-org-label-mac]                | Related to cpn-pdr-api running on macOS.                                                                   |
| `documentation`      | [search][search-cpn-pdr-api-repo-label-documentation]      | [search][search-cpn-pdr-api-org-label-documentation]      | Related to any type of documentation                                                                       |
| `performance`        | [search][search-cpn-pdr-api-repo-label-performance]        | [search][search-cpn-pdr-api-org-label-performance]        | Related to performance.                                                                                    |
| `security`           | [search][search-cpn-pdr-api-repo-label-security]           | [search][search-cpn-pdr-api-org-label-security]           | Related to security.                                                                                       |
| `ui`                 | [search][search-cpn-pdr-api-repo-label-ui]                 | [search][search-cpn-pdr-api-org-label-ui]                 | Related to visual design.                                                                                  |
| `api`                | [search][search-cpn-pdr-api-repo-label-api]                | [search][search-cpn-pdr-api-org-label-api]                | Related to cpn-pdr-api's public APIs.                                                                      |
| `uncaught-exception` | [search][search-cpn-pdr-api-repo-label-uncaught-exception] | [search][search-cpn-pdr-api-org-label-uncaught-exception] | Issues about uncaught exceptions                                                                           |
| `crash`              | [search][search-cpn-pdr-api-repo-label-crash]              | [search][search-cpn-pdr-api-org-label-crash]              | Reports of cpn-pdr-api completely crashing.                                                                |
| `git`                | [search][search-cpn-pdr-api-repo-label-git]                | [search][search-cpn-pdr-api-org-label-git]                | Related to Git functionality (e.g. problems with gitignore files or with showing the correct file status). |

#### `CDECatapult/cpn-pdr-api` Topic Categories

| Label name      | `CDECatapult/cpn-pdr-api` :mag_right:                 | `cpn-pdr-api`‑org :mag_right:                        | Description                                     |
| --------------- | ----------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------- |
| `build-error`   | [search][search-cpn-pdr-api-repo-label-build-error]   | [search][search-cpn-pdr-api-org-label-build-error]   | Related to problems with building cpn-pdr-api.  |
| `start-error`   | [search][search-cpn-pdr-api-repo-label-start-error]   | [search][search-cpn-pdr-api-org-label-start-error]   | Related to problems with starting cpn-pdr-api.  |
| `runtime-error` | [search][search-cpn-pdr-api-repo-label-runtime-error] | [search][search-cpn-pdr-api-org-label-runtime-error] | Related to problems whilst running cpn-pdr-api. |

#### Pull Request Labels

| Label name         | `CDECatapult/cpn-pdr-api` :mag_right:                    | `cpn-pdr-api`‑org :mag_right:                           | Description                                                                                   |
| ------------------ | -------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `work-in-progress` | [search][search-cpn-pdr-api-repo-label-work-in-progress] | [search][search-cpn-pdr-api-org-label-work-in-progress] | Pull requests which are still being worked on, more changes will follow.                      |
| `needs-review`     | [search][search-cpn-pdr-api-repo-label-needs-review]     | [search][search-cpn-pdr-api-org-label-needs-review]     | Pull requests which need code review, and approval from maintainers or cpn-pdr-api core team. |
| `under-review`     | [search][search-cpn-pdr-api-repo-label-under-review]     | [search][search-cpn-pdr-api-org-label-under-review]     | Pull requests being reviewed by maintainers or cpn-pdr-api core team.                         |
| `requires-changes` | [search][search-cpn-pdr-api-repo-label-requires-changes] | [search][search-cpn-pdr-api-org-label-requires-changes] | Pull requests which need to be updated based on review comments and then reviewed again.      |
| `needs-testing`    | [search][search-cpn-pdr-api-repo-label-needs-testing]    | [search][search-cpn-pdr-api-org-label-needs-testing]    | Pull requests which need manual testing.                                                      |

[search-cpn-pdr-api-repo-label-enhancement]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aenhancement
[search-cpn-pdr-api-org-label-enhancement]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aenhancement
[search-cpn-pdr-api-repo-label-bug]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Abug
[search-cpn-pdr-api-org-label-bug]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Abug
[search-cpn-pdr-api-repo-label-question]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aquestion
[search-cpn-pdr-api-org-label-question]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aquestion
[search-cpn-pdr-api-repo-label-feedback]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Afeedback
[search-cpn-pdr-api-org-label-feedback]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Afeedback
[search-cpn-pdr-api-repo-label-help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Ahelp-wanted
[search-cpn-pdr-api-org-label-help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Ahelp-wanted
[search-cpn-pdr-api-repo-label-beginner]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Abeginner
[search-cpn-pdr-api-org-label-beginner]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Abeginner
[search-cpn-pdr-api-repo-label-more-information-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Amore-information-needed
[search-cpn-pdr-api-org-label-more-information-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Amore-information-needed
[search-cpn-pdr-api-repo-label-needs-reproduction]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aneeds-reproduction
[search-cpn-pdr-api-org-label-needs-reproduction]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aneeds-reproduction
[search-cpn-pdr-api-repo-label-triage-help-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Atriage-help-needed
[search-cpn-pdr-api-org-label-triage-help-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Atriage-help-needed
[search-cpn-pdr-api-repo-label-windows]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Awindows
[search-cpn-pdr-api-org-label-windows]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Awindows
[search-cpn-pdr-api-repo-label-linux]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Alinux
[search-cpn-pdr-api-org-label-linux]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Alinux
[search-cpn-pdr-api-repo-label-mac]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Amac
[search-cpn-pdr-api-org-label-mac]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Amac
[search-cpn-pdr-api-repo-label-documentation]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Adocumentation
[search-cpn-pdr-api-org-label-documentation]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Adocumentation
[search-cpn-pdr-api-repo-label-performance]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aperformance
[search-cpn-pdr-api-org-label-performance]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aperformance
[search-cpn-pdr-api-repo-label-security]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Asecurity
[search-cpn-pdr-api-org-label-security]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Asecurity
[search-cpn-pdr-api-repo-label-ui]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aui
[search-cpn-pdr-api-org-label-ui]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aui
[search-cpn-pdr-api-repo-label-api]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aapi
[search-cpn-pdr-api-org-label-api]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aapi
[search-cpn-pdr-api-repo-label-crash]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Acrash
[search-cpn-pdr-api-org-label-crash]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Acrash
[search-cpn-pdr-api-repo-label-auto-indent]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aauto-indent
[search-cpn-pdr-api-org-label-auto-indent]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aauto-indent
[search-cpn-pdr-api-repo-label-encoding]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aencoding
[search-cpn-pdr-api-org-label-encoding]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aencoding
[search-cpn-pdr-api-repo-label-network]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Anetwork
[search-cpn-pdr-api-org-label-network]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Anetwork
[search-cpn-pdr-api-repo-label-uncaught-exception]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Auncaught-exception
[search-cpn-pdr-api-org-label-uncaught-exception]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Auncaught-exception
[search-cpn-pdr-api-repo-label-git]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Agit
[search-cpn-pdr-api-org-label-git]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Agit
[search-cpn-pdr-api-repo-label-blocked]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Ablocked
[search-cpn-pdr-api-org-label-blocked]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Ablocked
[search-cpn-pdr-api-repo-label-duplicate]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aduplicate
[search-cpn-pdr-api-org-label-duplicate]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aduplicate
[search-cpn-pdr-api-repo-label-wontfix]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Awontfix
[search-cpn-pdr-api-org-label-wontfix]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Awontfix
[search-cpn-pdr-api-repo-label-invalid]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Ainvalid
[search-cpn-pdr-api-org-label-invalid]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Ainvalid
[search-cpn-pdr-api-repo-label-package-idea]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Apackage-idea
[search-cpn-pdr-api-org-label-package-idea]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Apackage-idea
[search-cpn-pdr-api-repo-label-wrong-repo]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Awrong-repo
[search-cpn-pdr-api-org-label-wrong-repo]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Awrong-repo
[search-cpn-pdr-api-repo-label-editor-rendering]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aeditor-rendering
[search-cpn-pdr-api-org-label-editor-rendering]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aeditor-rendering
[search-cpn-pdr-api-repo-label-build-error]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Abuild-error
[search-cpn-pdr-api-org-label-build-error]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Abuild-error
[search-cpn-pdr-api-repo-label-error-from-pathwatcher]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aerror-from-pathwatcher
[search-cpn-pdr-api-org-label-error-from-pathwatcher]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aerror-from-pathwatcher
[search-cpn-pdr-api-repo-label-error-from-save]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aerror-from-save
[search-cpn-pdr-api-org-label-error-from-save]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aerror-from-save
[search-cpn-pdr-api-repo-label-error-from-open]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aerror-from-open
[search-cpn-pdr-api-org-label-error-from-open]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aerror-from-open
[search-cpn-pdr-api-repo-label-installer]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Ainstaller
[search-cpn-pdr-api-org-label-installer]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Ainstaller
[search-cpn-pdr-api-repo-label-auto-updater]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aauto-updater
[search-cpn-pdr-api-org-label-auto-updater]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aauto-updater
[search-cpn-pdr-api-repo-label-deprecation-help]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Adeprecation-help
[search-cpn-pdr-api-org-label-deprecation-help]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Adeprecation-help
[search-cpn-pdr-api-repo-label-electron]: https://github.com/search?q=is%3Aissue+repo%3Acpn-pdr-api%2Fcpn-pdr-api+is%3Aopen+label%3Aelectron
[search-cpn-pdr-api-org-label-electron]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Acpn-pdr-api+label%3Aelectron
[search-cpn-pdr-api-repo-label-work-in-progress]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Awork-in-progress
[search-cpn-pdr-api-org-label-work-in-progress]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Acpn-pdr-api+label%3Awork-in-progress
[search-cpn-pdr-api-repo-label-needs-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aneeds-review
[search-cpn-pdr-api-org-label-needs-review]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Acpn-pdr-api+label%3Aneeds-review
[search-cpn-pdr-api-repo-label-under-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aunder-review
[search-cpn-pdr-api-org-label-under-review]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Acpn-pdr-api+label%3Aunder-review
[search-cpn-pdr-api-repo-label-requires-changes]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Arequires-changes
[search-cpn-pdr-api-org-label-requires-changes]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Acpn-pdr-api+label%3Arequires-changes
[search-cpn-pdr-api-repo-label-needs-testing]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Acpn-pdr-api%2Fcpn-pdr-api+label%3Aneeds-testing
[search-cpn-pdr-api-org-label-needs-testing]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Acpn-pdr-api+label%3Aneeds-testing
[beginner]: https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Abeginner+label%3Ahelp-wanted+user%3Acpn-pdr-api+sort%3Acomments-desc
[help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted+user%3Acpn-pdr-api+sort%3Acomments-desc+-label%3Abeginner
