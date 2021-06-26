---
title: 'Installing pm2'
permalink: '/cloudcone/pm2'

---

# Installing pm2

[[toc]]

To install pm2, run the following:

```bash
$ yarn global add pm2
```

## Adding to a repo and starting the pm2 process:

In order to run the application in pm2 demon process, do the following for each applications as and when required. 

::: warning Note
Below codes should be run from the application folder where package.json resides.
:::

### For nextjs

```bash
$ pm2 start yarn --name "nextjs" --interpreter bash -- start
$ pm2 startup # It will enable pm2 to startup automatically when server restarts
$ pm2 show nextjs #to check the status.

```

### For Gatsby

First, you'll have to install <code>gatsby-cli</code>

```bash
$ npm i -g gatsby-cli

```

After that, start the pm2 demon process for <code>Gatsby</code>

```bash
$ pm2 start gatsby --name "gatsby" --interpreter bash -- serve
$ pm2 startup # It will enable pm2 to startup automatically when server restarts
$ pm2 show nextjs #to check the status.

```

::: tip Note
While running the pm2 start nextjs you will get an error because you haven't run the build as of yet. Either run <code>npm build</code> or <code>yarn build</code> > in order to build the production
:::

## Stopping the pm2 demon process

In order to run the application after pushing the code to the github:

```bash
$ pm2 stop nextjs #[whatever the name of the app]
$ yarn build
$ pm2 start nextjs

```