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
  - Permission of ownership aka authorization
- Home with timeline of Wreets (Tweets)
- Link to go to Wreet page
- View Wreet content page
- View user profile
- Create a new Wreet
- Delete owned Wreet

### What's might not implemented

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

## Guide

Here are the step by step guide to develop this app. You can also watch the [video on YouTube](https://youtube.com)

### Backend with Kontenbase

- Sign in and setup Kontenbase project
- Customize `users` service to have:
  - `handle`
  - `createdAt`
  - `createdBy`
- Test to sign up or register new User.
- Test to sign in or login to User.
- Create `wreets` service and customize it to have:
  - `content`
  - `createdAt`
  - `createdBy`
- Test to create new Wreet
- Test to get all Wreet
- Test to get one Wreet by ID
- Test to delete a Wreet
- Check Kontenbase Docs

### Development with Remix

- Generate React+Remix app with `create-remix`
  - `npx create-remix@latest`
  - Setup `.env` `.env.example`
  - Git ignore `.env` `.DS_Store`
- Setup `package.json`
  - name
  - description
  - license
  - scripts
- Make sure to install dependencies with `npm install`
- Start development server with `npm run dev`
- Open up [http://localhost:3000](http://localhost:3000)
- Install app dependencies
  - `npm install dotenv dayjs invariant remix-auth remix-auth-form @kontenbase/sdk framer-motion @chakra-ui/react @chakra-ui/icons @emotion/react @emotion/styled `
- Install development dependencies
  - `npm install -D @types/invariant @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import" eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unused-imports`
- Setup ESLint and Prettier config.
- Copy favicons assets and manifest.
- Know that `api` folder only for `@remix-run/vercel`.
- Setup `chakra-ui.ts` config file.
- Setup `types`
- Setup `components`
- Setup `features`
- Setup `lib`
  - `dayjs`
  - `kontenbase`
- Setup `utils`
- Setup `services`
  - `session.server`: Cookie session storage with Remix Server
  - `auth.server`: Authenticator from `remix-auth` and `FormStrategy` from `remix-auth-form`
  - Implement `signin` and `signup` with combination of Kontenbase SDK and manual HTTP request (due to the SDK cannot handle server-side call and custom request body).
- Setup Remix `root`.
- Make sure of Remix `entry` client and server.
- Setup `routes`
  - `index`
  - `about`
  - `signup`
  - `signin`
  - `signout`
  - `home`: Timeline of all Wreets
    - Currently not filtered by following users
  - `wreet`: New Wreet composer
  - `$userHandle`: user profile
  - `$userHandle/$wreetId`
    - Single Wreet page
    - Delete an owned Wreet
  - `profile`: Redirect to authenticated user profile

### Deployment with Vercel

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```
