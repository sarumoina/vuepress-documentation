---
title: 'SSL via Lets encrypt'
permalink: '/cloudcone/ssl-via-lets-encrypt'
---

# SSL via Let'sEncrypt

[[toc]]

## Installing certbot

Goto [https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx](https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx) for documentation.

```bash
$ sudo snap install --classic certbot #Install the certbot
$ sudo certbot --nginx #Auto Configuration

```

This will enable the SSL version of your site.

## Redirect all http requests to https

Add the following in **/etc/nginx/sites-enabled/default**

```

server {
    listen 80 default_server;

    server_name _;

    return 301 https://$host$request_uri;
}

```

## Reinstalling all the certificates after expiration

If the certificates are due expire, you can extend it via

```bash

$ certbot

```

And then follow the onscreen instructions.


