# Writter

A Twitter clone with [Remix](https://remix.run/docs) and [Kontenbase](https://kontenbase.com). Styled with [Chakra UI](https://chakra-ui.com).

[![MIT License][license-badge]][license]

<!-- prettier-ignore-start -->
[license-badge]: https://img.shields.io/badge/license-MIT-red.svg?style=flat-square
[license]: https://github.com/kontenbase-team/writter/blob/main/LICENSE
<!-- prettier-ignore-end -->

## Features

### What's implemented

- Landing page
- Authentication/Authorization
  - Sign up
  - Sign in
  - Sign out
  - Permission of ownership
- Home with timeline of Wreets (Tweets)
- Link to go to Wreet page
- View Wreet content page
- View user profile
- Create a new Wreet
- Delete owned Wreet

### What's not implemented yet

- Follow other users
- Filtered Wreet timeline
- Comment or making a thread in a Wreet
- Like a Wreet
- ReWreet (retweet)
- Bookmark
- Copy link to Wreet

## Tech Stack

- React + Remix + React Router
  - HTML
  - CSS
  - JavaScript
  - TypeScript
- Styling options:
  - Chakra UI
  - Stitches + Radix UI + Radix Colors
- Deployment options:
  - Vercel
- Extras:
  - Prettier
  - ESLint
  - Cloudflare DNS

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.
