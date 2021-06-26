---
title: 'cron'
permalink: '/cloudcone/cron'
---

# Cron

cron is a great tool to schedule repetitive tasks. For example, let's assume we have to run the following script which is located at <code>/home/user/backup/dump.sh</code>

```bash
#!/bin/bash

$ cd /home/backups
$ mongodump --forceTableScan --uri "mongodb+srv://<username>:<password>@cluster0.a2zef.mongodb.net/<databasename>" --out `date +"%Y-%m-%d"` --gzip

```

_This file is an example of dumping the mongodb data into bson format._

Now let's look at how we can make it run after specific period each day so that we don't have to manually take back up.

```bash

$ crontab -e #it will open up the editor choice if open for the first time. Or else, it will open up the file.

$ 0 3 * * * /bin/sh /home/user/backup/dump.sh #exit from nano/vim/other editor

$ sudo cron restart

```

The format of the crontab file is:

MIN HOUR DOM MON DOW CMD

| Short | Description  | Values                      |
| ----- | ------------ | --------------------------- |
| MIN   | Minute field | 0 to 59                     |
| HOUR  | Hour field   | 0 to 23                     |
| DOM   | Day of Month | 1-31                        |
| MON   | Month field  | 1-12                        |
| DOW   | Day Of Week  | 0-6                         |
| CMD   | Command      | Any command to be executed. |

<code>crontab -l</code> to list all the cron jobs available for the user.

<code>crontab -r</code> will remove all the cron jobs set by that user.