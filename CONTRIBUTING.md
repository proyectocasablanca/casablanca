---
name: Contributing
title: Contributing
url: contributing
---

# Contributing

## What?

This is a repo that keeps Spanish translations of pages found in the whitehouse.gov site during the Trump administration, which up to this date has not made Spanish version of its site available. It is an independent effort to crowdsource translation and provide it as a resource to Spanish speakers. 

## Rules

There are a few basic ground-rules for contributors:

1. **No `--force` pushes** or modifying the Git history in any way.
1. **Non-master branches** for ongoing work.
1. **Translations** are subject to **internal pull-requests** for feedback from other contributors/editors. Each translation should be done in a designated markdown file named after the resource ID of the page as listed under the `whitehouse.gov` site. Each markdown file will have this link as reference.  
**Example:**
`america-first-energy.md` for `whitehouse.gov/america-first-energy`

## Getting Started

This website uses [gloria](https://gloriajs.com) to build and transform a bunch of html and markdown files into a website.

The first step to start contributing is probably running locally.

1. For the repo from [https://github.com/blancahouse/casablanca](https://github.com/blancahouse/casablanca)
1. Clone locally `git clone git@github.com:USERNAME/casablanca`
1. Install gloriajs globally `npm install -g gloria`
1. Ask gloria to serve the site `gloria serve`
  1. This will open your browser in http://localhost:3300/
  1. gloria will re build the site every time you save a file
  1. If you have issues with gloria, open a bug in [github](https://github.com/gloriajs/gloria).

**Congrats** you're running this project locally!

## Submitting changes

To submit changes, first open an issue on [github](https://github.com/blancahouse/casablanca/issues) and assign it to yourself,
or find an issue with no one assigned to it and claim it. This is important, to prevent duplicate work from happening.

Create a new branch.

Create a new file or modify existing ones with your suggestions.

Run `gloria build` to make sure the built website is being included. Add your new files or changes
and create a commit. Try using very descriptive and atomic commits.

Go back to [github](https://github.com/blancahouse/casablanca/) and create a pull request.

Wait for a reviewer to look at your changes and approve.

If git is not your thing, click the **Create new file** button in our [github](https://github.com/blancahouse/casablanca).

## Help?

Email casablanca@techqueria.org if you have questions or need help getting started, we're happy to help with anything,
including git, npm, nodejs, HTML, spanish, etc. And might even be able to find some time to skype if that's easier.

Faster way to get help or talk to other members is to use the techqueria slack, find the #casablanca channel.

