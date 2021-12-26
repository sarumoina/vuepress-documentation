---
title: 'Installing Symfony'
permalink: '/cloudcone/installing-symfony'
---

# Installing Symfony [php8.0 fpm, nginx, ubuntu 20.04]

[[toc]]

## On local machine

Run this installer to create a binary called **symfony** :

```bash
wget https://get.symfony.com/cli/installer -O - | bash
```

For traditional application, run

```bash
symfony new --full my_project
```

For microservice, console application or API:

```bash
symfony new my_project
```

Then push the repo to git so that the server can pull later on. 

## On server

`git pull` the respository and run `composer install`

## Permission on the server

These are the permissions required to run Symfony applications:

- The `var/log/` directory must exist and must be writable by both your web server user and the terminal user;
- The `var/cache/` directory must be writable by the terminal user (the user running cache:warmup or cache:clear commands);
- The `var/cache/` directory must be writable by the web server user if you use a filesystem-based cache.

In order to do so, run the following:

```bash
# Go to the symfony root directory
cd /var/www/symfony
sudo chown -R $USER:www-data .
sudo chgrp -R www-data var/log var/cache
sudo chmod -R ug+rwx var/log var/cache
```

## Nginx configuration

```
server {

    server_name example.com;
    listen 80;
    root /var/www/symfony/public;

    location / {
        # try to serve file directly, fallback to index.php
        try_files $uri /index.php$is_args$args;
    }

    # optionally disable falling back to PHP script for the asset directories;
    # nginx will return a 404 error when files are not found instead of passing the
    # request to Symfony (improves performance but Symfony's 404 page is not displayed)
    # location /bundles {
    #     try_files $uri =404;
    # }

    location ~ ^/index\.php(/|$) {
        fastcgi_pass unix:/var/run/php/php8.0-fpm.sock;
        fastcgi_split_path_info ^(.+\.php)(/.*)$;
        include fastcgi_params;

        # optionally set the value of the environment variables used in the application
        # fastcgi_param APP_ENV prod;
        # fastcgi_param APP_SECRET <app-secret-id>;
        # fastcgi_param DATABASE_URL "mysql://db_user:db_pass@host:3306/db_name";

        # When you are using symlinks to link the document root to the
        # current version of your application, you should pass the real
        # application path instead of the path to the symlink to PHP
        # FPM.
        # Otherwise, PHP's OPcache may not properly detect changes to
        # your PHP files (see https://github.com/zendtech/ZendOptimizerPlus/issues/126
        # for more information).
        # Caveat: When PHP-FPM is hosted on a different machine from nginx
        #         $realpath_root may not resolve as you expect! In this case try using
        #         $document_root instead.
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        fastcgi_param DOCUMENT_ROOT $realpath_root;
        # Prevents URIs that include the front controller. This will 404:
        # http://domain.tld/index.php/some-path
        # Remove the internal directive to allow URIs like this
        internal;
    }

    # return 404 for all other php files not matching the front controller
    # this prevents access to other php files you don't want to be accessible.
    location ~ \.php$ {
        return 404;
    }
```

## Installing DoctrineMongoDBBundle for MongoDB operations

In order to install MongoDB php extension in ubuntu server:

```bash
sudo apt install php-dev php-pear
sudo pecl install mongodb
```

then add the extension `extension=mongodb.so` in `php.ini`

::: warning Note
In the `.env` file, set the `MONGODB_URL` and `MONGODB_DB` before hand or otherwise composer will fail.
:::


After that, run 

```bash
composer require doctrine/mongodb-odm-bundle
```
and enable the bundle

```php
# config/bundles.php
<?php

return [
    // ...
    Doctrine\Bundle\MongoDBBundle\DoctrineMongoDBBundle::class => ['all' => true],
];
```







