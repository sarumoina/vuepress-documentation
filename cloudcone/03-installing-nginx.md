---
title: 'Installing nginx'
permalink: '/cloudcone/installing-nginx'

---

# Installing nginx: 

[[toc]]

To install nginx, run the following command in terminal:

```bash
$ sudo apt install nginx
```

## Setting up nginx as webserver for nextjs/gatsby

Example config for reverse proxy:

```
# example script for reverse proxy
server {
	server_name example.xopun.com;
	location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                proxy_pass http://localhost:5000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
}

```

::: warning Warning:
If you get any errors stating Can't start Nginx - Job for nginx.service failed then especially check the line endings. Every line should end with a ; >otherwise this error will popup
:::

## Setting up nginx as webserver for php

Edit the following in nginx (/etc/nginx/sites-enabled/default):

    server {

        server_name example.xopun.com;
        listen 80;
        root /var/www/example.xopun.com;

        index index.php;

        location / {
                try_files $uri $uri/ /index.php?$query_string;
        }


        location ~ \.php$ {
            include snippets/fastcgi-php.conf;
            fastcgi_pass unix:/run/php/php8.0-fpm.sock;
        }

        location ~ /\.ht {
            deny all;
        }
    }

We are using the php8.0-fpm as the fastcgi gateway in order to serve the php files.

Restart the nginx server via <code>sudo systemctl restart nginx</code>. You can also test the nginx configuration by <code>sudo nginx -t</code>.

## Running multiple server blocks

```
# example script for reverse proxy
# /etc/nginx/sites-enabled/nginx

server {
	server_name example1.xopun.com;
	location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                proxy_pass http://localhost:5000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
}

server {
	server_name example2.xopun.com;
	location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                proxy_pass http://localhost:6000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
}

```

Restart the server with <code>sudo systemctl restart nginx</code> after any modification you do in the configuration.

## Retreiving errors

```bash
$ sudo tail /var/log/nginx/error.log -n 200
```