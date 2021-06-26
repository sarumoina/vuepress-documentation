---
title: 'Installing NodeJS'
permalink: '/cloudcone/installing-nodejs/'

---

# Installing nodejs: 

In order to run the full stack server, at first, you will have to install nodejs. At the time of writing this article, nodejs is at version 14.0

```bash
# Using Ubuntu
$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
$ sudo apt-get install -y nodejs

```

This will install nodejs 14.0 in your server.

::: warning Caution
if executing <code>sudo apt update</code> returns with an error, then goto the cloudcone control panel > Firewall > Accept. It will update the packages without any hiccups after that
:::

#### Downgrade NodeJS:

If you want to downgrade to older version then you can do it via the following:

```bash

$ npm install -g n   # Install n globally
$ n 14.17.0          # Install and use v0.10.33

```