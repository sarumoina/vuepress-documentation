---
title: 'Jekyll static site generator'
permalink: '/cloudcone/installing-jekyll'
---

# Jekyll Static Site Generator

[[toc]]

Jekyll is a **static site generator**. My VPS has 1 GB RAM so it was hard to implement jekyll in the server site. So it is essentially a hack on order to make it work. What we will do is,
 - Generate the static site in local computer via `bundle exec jekyll build`
 - push the static files along with the assets to github.
 - pull the files from the github in to the server
 - serve it via nginx   

## Installation

## Local Setup

```bash
gem install jekyll bundler
jekyll new myblog
cd myblog
bundle exec jekyll serve
```

browse to [http://localhost:4000](http://localhost:4000) in order to see it work in function. 

After seting up, we'll need to - 
 - write blog
 - serve 

### writing posts

_Folder structure:_ There are various folders in the project but we are interested only in two folders. 

 - _post [writing folder]
 - _site [output folder]



You'll write the blog in **_post** folder
{: .message }

Keep in mind the following:

 - file name preferably in the format of **YYYY-MM-DD-title-of-the-post.md**
 - The frontmatter of the .md files have minimum two elements:

    - title
    - layout

e.g.

```
---
title: This is the title
layout: default
---
```

### build

In order to build, you can execute

```bash
bundle exec jekyll build
```

You'll find the output files **_site** folder
{: .message }

<a name='git-push-to-github'></a>
**git push to github:**

**Pushing the repo for the first time**

Goto **_site** (*e.g. cd /var/www/jekyll/_site*) folder and execute the following:

```bash
git remote add origin git@github.com:<user>/<repo>.git
git branch -M main
git push -u origin main
```
This will push the repo to the github in order to pull to the server. 



**pushing the repo subsequent times**

```bash
git add .
git commit -m "message"
git push
```

## Server Setup

**Git clone the repo: [One time only]**

`SSH in to the server` and execute the following the server terminal. 

```bash
git clone git@github.com:<user>/<repo>.git
```

**For subsequent updates, just use `git pull` in order to update the repo in the server.**

**nginx setup:**

<a name='nginx-setup'></a>

goto `/etc/nginx/sites-enabled/default` and add the following: 

```
server {
        server_name domain.com;
        root /path/to/repo;
        index index.html;
        error_page 404 /404.html;
}

```

and you're done.




