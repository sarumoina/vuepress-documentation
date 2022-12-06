---
title: 'Installing MariaDB'
permalink: '/cloudcone/installing-mariadb'
---

## Installing Mariadb

[[toc]]

To install MariaDB in ubuntu 20.04, follow the steps:

```bash

sudo apt update
sudo apt install mariadb-server
sudo mysql_secure_installation

```

## Creating Administrative user

```bash

$ sudo mariadb

MariaDB[(none)]> GRANT ALL ON *.* TO 'admin'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;

```
