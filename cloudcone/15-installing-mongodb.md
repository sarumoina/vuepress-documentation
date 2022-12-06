---
title: 'Installing Mongodb'
permalink: '/cloudcone/installing-mongodb'
---

## Installing Mongodb

[[toc]]

To install Mongodb in ubuntu 20.04, follow the steps:

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

## To run Mongodb

```bash
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod #mongodb will start after the system start up automatically. 
```

