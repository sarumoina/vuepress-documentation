---
title: 'Installing Yarn'
permalink: '/cloudcone/installing-yarn'

---

# Installing Yarn:

To install yarn on the server, execute the following: 

```bash
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update && sudo apt-get install yarn
```