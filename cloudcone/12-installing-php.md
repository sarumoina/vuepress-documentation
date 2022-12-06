---
title: 'Installing PHP'
permalink: '/cloudcone/installing-php'
---

# Installing PHP

[[toc]]

## Install php8.1 fpm

First install the php8.1 fpm



```bash

$ sudo apt install software-properties-common
$ sudo add-apt-repository ppa:ondrej/php
$ sudo apt update
$ sudo apt install php8.1-fpm

# if you are installing laravel, then install these following too:

$ sudo apt install openssl php-common php-curl php-json php-mbstring php-mysql php-xml php-zip php-gd

# if you will use mongodb as driver later on (vide `composer require jenssegers/mongodb`) then install the mongodb drivers prior to that

$ sudo apt install php-dev php-pear
$ sudo pecl install mongodb

# After installing the above, you can install jenssegers/mongodb via composer

```

## Testing the installation

You can test the installation via the following:

```bash

$ systemctl status php8.1-fpm

```

Now it is time to use php8.0-fpm to serve the php pages.

## Nginx config file

[**Check out the nginx config**](/cloudcone/installing-nginx/#setting-up-nginx-as-webserver-for-php) in order to know how to setup nginx as webserver for php

## Installing composer for PHP

To install the composer for php, you'll need to install the dependencies first. 

### Installing the dependency

```bash
$ sudo apt update
$ sudo apt install php-cli unzip

```

### Download and install the composer

```bash
$ cd ~
$ curl -sS https://getcomposer.org/installer -o composer-setup.php

```

Using <code>curl</code>, fetch the latest signature and store it in a variable.

```bash
$ HASH=`curl -sS https://composer.github.io/installer.sig`

```

Following script should be exeuted to check if the script is safe to run.

```bash
$ php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } 
else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"

```

You should see the following:

<code>Installer verified</code>

The following command will download and install Composer as a system-wide command named composer, under <code>/usr/local/bin</code>:

```bash
$ sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer

```

You should get the following output:

> All settings correct for using Composer Downloading... <br />
>
> Composer (version 1.10.5) successfully installed to: /usr/local/bin/composer Use it: php /usr/local/bin/composer

To test your installation, run the composer:

```bash
$ composer

```

You should get the following:

```
   ______
  / ____/___  ____ ___  ____  ____  ________  _____
 / /   / __ \/ __ `__ \/ __ \/ __ \/ ___/ _ \/ ___/
/ /___/ /_/ / / / / / / /_/ / /_/ (__  )  __/ /
\____/\____/_/ /_/ /_/ .___/\____/____/\___/_/
                    /_/
Composer version 1.10.5 2020-04-10 11:44:22

Usage:
  command [options] [arguments]

Options:
  -h, --help                     Display this help message
  -q, --quiet                    Do not output any message
  -V, --version                  Display this application version
      --ansi                     Force ANSI output
      --no-ansi                  Disable ANSI output
  -n, --no-interaction           Do not ask any interactive question
      --profile                  Display timing and memory usage information
      --no-plugins               Whether to disable plugins.
  -d, --working-dir=WORKING-DIR  If specified, use the given directory as working directory.
      --no-cache                 Prevent use of the cache
  -v|vv|vvv, --verbose           Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
...

```

## Installing Laravel

### On local machine

I prefer to install it via composer so here it goes:

```bash
$ composer create-project laravel/laravel example-app

$ cd example-app

$ php artisan serve

```

Above is for one project only. If you want to install the laravel installer globally, then run the following:

```bash
$ composer global require laravel/installer

$ laravel new example-app

$ php artisan serve

```

This will create the basic structure of the laravel project. if there's no vendor directory, then run composer install in order to fetch the vendor files.

**<ins>Now you should create the repo in github so that the local project could be uploaded to it.</ins>**

- Create a new repository (DO NOT initiate it with readme or any other files in order to avoid errors later on).
- <code>git clone &lt;URL&gt;</code> and it will clone the repo. (Change the visibility of the project to private if required)
- In your local computer (where the local project resides), go to the terminal and go to the working directory.
- Initialize the local directory as git repository vide the following command

```bash
$ git init -b main
```

Add the files in your repository,

```bash
$ git commit -m "First commit"
# Commits the tracked changes and prepares them to be pushed to a remote repository. 
# To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
```

Copy the url of the git repo in github.
In terminal, add the following to add the remote repository.

```bash
$ git remote add origin  <REMOTE_URL>
# Sets the new remote
$ git remote -v
# Verifies the new remote URL

```

Push the changes.

```bash
$ git push origin main
# Pushes the changes in your local repository up to the remote repository you specified as the origin

```

This will push the local project in to the github repository.

::: warning Note: -b unknown swtich error
If you get any errors regarding <code>-b unknown switch</code>, then you should update the git in your machine as -b command is available only after git 2.28 >and later on. In order to update git, do the following:

```bash
$ sudo add-apt-repository -y ppa:git-core/ppa
$ sudo apt update
$ sudo apt install git -y

```

This will update the git in your machine and you will resolve the unknown switch error.

You may get the following error upon pushing repo to github upon second push.
:::

::: warning No upstream branch error
> fatal: The current branch main has no upstream branch. To push the current branch and set the remote as upstream, use
>
> `git push --set-upstream origin main`

If you get this error, then run,

```bash
$ git push --set-upstream origin main

```
:::

### On server

Change the visibility of the repo to public so that it can be cloned without much hassle.

<code>git clone &lt;URL&gt; </code>and it will clone the repo. (Change the visibility of the project to private if required)

Setup the ssh deploy keys as written [**here**](#specific-ssh-keys-for-different-github-repo) for future git pull.

run <code>composer install</code> in order to complete the setup.

::: warning Required Extensions
There are two specific extensions which are required to be present in the server in order to run composer installer.

- mbstring
- phpunit
:::

If any errors are thrown above, then you should install these extensions via the following.

```bash
$ sudo apt update
$ sudo apt install php-mbstring phpunit

```

This will install the laravel but the setup is still not finished yet. In order to make life simpler, create a `.env` file in the root directory of the laravel installation.

### Setting up permissions

```bash

# go to the laravel directory
$ cd /var/www/html/laravel
$ sudo chown -R $USER:www-data .
$ sudo find . -type f -exec chmod 664 {} \;
$ sudo find . -type d -exec chmod 775 {} \;
$ sudo chgrp -R www-data storage bootstrap/cache
$ sudo chmod -R ug+rwx storage bootstrap/cache

```

Above settings should be able to give you the default welcome page of Laravel without any issues.

### Setting up environment

After setting up the permissions, it is time to <ins>setting up the environment</ins>

```bash

$ touch .env

```

In the <code>.env</code> file, write the following:

```
APP_DEBUG=true
#I am changing it true in production server as other issues may creep in. Once, everything is ok, change it to false.
APP_KEY=base64:/<your base64 string>

```
You should generate the key by <code>php artisan key:generate</code> 

  
:::warning 
**Extension not found**

If you are getting extension not found/missing errors, then you should install via the following (**Supposing you have php8.1 installed**):
```bash
sudo apt install php8.1-extension-name

#e.g. 
sudo apt install php8.1-gd
sudo apt install php8.1-mbstring
```
etc. 
:::  




### Installing Redis for laravel

```bash
sudo apt update
sudo apt install redis-server
```
Make the following changes to `/etc/redis/redis.conf` via executing the following command:

```bash
sudo nano /etc/redis/redis,conf
```

**change the supervised directive from "no" to "systemd"**

```
. . .

# If you run Redis from upstart or systemd, Redis can interact with your
# supervision tree. Options:
#   supervised no      - no supervision interaction
#   supervised upstart - signal upstart by putting Redis into SIGSTOP mode
#   supervised systemd - signal systemd by writing READY=1 to $NOTIFY_SOCKET
#   supervised auto    - detect upstart or systemd method based on
#                        UPSTART_JOB or NOTIFY_SOCKET environment variables
# Note: these supervision methods only signal "process is ready."
#       They do not enable continuous liveness pings back to your supervisor.
supervised systemd

. . .
```

```bash
sudo systemctl restart redis.service
```

Testing Redis

```
sudo systemctl status redis
```
You should see similar to following:

```
ubuntu:~$ sudo systemctl status redis
● redis-server.service - Advanced key-value store
     Loaded: loaded (/lib/systemd/system/redis-server.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2022-08-25 07:46:38 IST; 46min ago
       Docs: http://redis.io/documentation,
             man:redis-server(1)
   Main PID: 5530 (redis-server)
     Status: "Ready to accept connections"
      Tasks: 5 (limit: 9305)
     Memory: 2.6M
        CPU: 3.411s
     CGroup: /system.slice/redis-server.service
             └─5530 "/usr/bin/redis-server 127.0.0.1:6379" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ""

Aug 25 07:46:38 15isk systemd[1]: Starting Advanced key-value store...
Aug 25 07:46:38 15isk systemd[1]: Started Advanced key-value store.
```

To test that Redis is functioning correctly, connect to the server using redis-cli, Redis’s command-line client:

```
$ redis-cli
```

In the prompt that follows, test connectivity with the ping command:

```
127.0.0.1:6379> ping
```
Output

```bash
PONG
```

This output confirms that the server connection is still alive. Next, check that you’re able to set keys by running:

```bash
127.0.0.1:6379>set test "It's working!"
```

Output:
```bash
OK
```

Retrieve the value by typing:

```bash
127.0.0.1:6379>get test
```

Assuming everything is working, you will be able to retrieve the value you stored:

Output:

```bash
It's working!
```

#### Install the redis extension

```bash
sudo apt install php8.1-redis
```

#### Install predis/predis
Install the redis package for laravel via composer

```bash
composer require predis/predis
```

In `config/app.php`

```
'aliases' => Facade::defaultAliases()->merge([
    'Redis' => Illuminate\Support\Facades\Redis::class,
])->toArray(),
```

Redis should start to work without any issues. 






### Troubleshooting while installing PHP

if you have more than one php in the same machine, you can switch to different by the following:

```bash
$ sudo update-alternatives --config php
```

This will bring up screen like below:

There are 4 choices (can be more/less for you depending upon your installation) for the alternative php (providing /usr/bin/php).

```
  Selection    Path             Priority   Status
------------------------------------------------------------
* 0            /usr/bin/php7.2   72        auto mode
  1            /usr/bin/php5.6   56        manual mode
  2            /usr/bin/php7.0   70        manual mode
  3            /usr/bin/php7.1   71        manual mode
  4            /usr/bin/php7.2   72        manual mode
Press <enter> to keep the current choice[*], or type selection number:
```

 








