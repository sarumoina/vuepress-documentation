---
title: 'Environment Variables'
permalink: '/cloudcone/environment-variables'
---

# Environment Variables

[[toc]]

There are two ways you can add environment variables.

## First way

```bash
$ sudo nano /etc/environment

```

```bash
# /etc/environment
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"
JAVA_HOME=/usr/lib/jvm/adoptopenjdk-11-hotspot-amd64
LD_LIBRARY_PATH=/usr/local/lib:/usr/lib/postgresql/8.3/lib
MY_HOME=/home/xopun

```

```bash
$ source /etc/environment

$ echo $MY_HOME
# Output: /home/xopun

```

## Second way

```bash
$ sudo vim /etc/environment

```

```bash
# /etc/profile.d/new-env.sh

export MY_HOME=/home/xopun

```

```bash
$ source /etc/profile

$ echo $MY_HOME
# Output: /home/xopun

```