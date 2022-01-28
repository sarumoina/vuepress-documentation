---
title: 'cron'
permalink: '/cloudcone/cron'
---

# Cron

[[toc]]

## Purpose

cron is a great tool to schedule repetitive tasks. For example, let's assume we have to run the following script which is located at <code>/home/user/backup/dump.sh</code>

```bash
#!/bin/bash

$ cd /home/backups
$ mongodump --forceTableScan --uri "mongodb+srv://<username>:<password>@cluster0.a2zef.mongodb.net/<databasename>" --out `date +"%Y-%m-%d"` --gzip

```

_This file is an example of dumping the mongodb data into bson format._

## crontab -e

Now let's look at how we can make it run after specific period each day so that we don't have to manually take back up.

```bash

$ crontab -e #it will open up the editor choice if open for the first time. Or else, it will open up the file.

$ 0 3 * * * /bin/sh /home/user/backup/dump.sh #exit from nano/vim/other editor

$ sudo cron restart

```

## cron schedule format

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

## Mailing the output of the cron job. 

In order to send the cron output to via mail, you'll need to setup smtp client. 

```bash
sudo apt update
sudo apt install ssmtp mailutils
```

### Configure SMTP

Edit the config file:

```bash
sudo nano /etc/ssmtp/ssmtp.conf
```

Next, fill the appropriate information in the conf file

```
root=your@gmail.com #your mail id
mailhub=smtp.gmail.com #mail provider
FromLineOverride=YES
hostname=hostname #(you can put anything here)
AuthUser=your@gmail.com #your mail id
AuthPass=password #your app password generated from https://myaccount.google.com/apppasswords
FromLineOverride=YES
UseSTARTTLS=YES
```

:::warning Note

The password of your gmail account ID **won't work** while sending mails. 

You'll require to generate one in [**Google app password**][1] and you'll be able to login to the smtp via that **app password only.**
:::

[1]:https://myaccount.google.com/apppasswords


### Test the setup

```bash
echo "Here add your email body" | mail -s "Here specify your email subject" your_recepient_email@yourdomain.com
```
