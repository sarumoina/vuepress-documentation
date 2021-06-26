---
title: 'Deployment'
permalink: '/vuepress/deployment'

---


# Deployment

Table of Content:

[[toc]]

## Step 1: Getting started:

Create the project.

```bash
mkdir vuepress-project && cd vuepress-project

yarn init -y && yarn add -D vuepress

```

## Step 2: Create the home page:

In the root folder, create a `README.md` with the content of your home page. For example,

**File:** <code>vuepress-project/README.md</code>

```markdown
# This is home page

And this is the Home page content.
```

## Step 3: Configure and run Vuepress: 

under root directory (i.e. vuepress-project), create another folder `.vuepress` 

under `.vuepress` create a file `config,js`

**File:** `vupress-project/.vuepress/config.js`

```javascript
module.exports = {
  title: 'My VuePress Project',
  description: `A simple VuePress project deployed with ${PRODUCT_NAME}.`,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guides/' },
    ],
  },
  dest: 'public',
}
```

## Step 4: Insert the script in package.json

**File:** `vuepress-project/package.json`

```json
{
    ...
    "scripts": {
      "dev": "vuepress dev",
      "build": "vuepress build"
    }
}
```
## Step 5: Import the project to github

 - push the project to the github
 - in vercel dashboard, create a new project.
 - link the github repo to the project to import.
 - hit deploy

**Done!**

