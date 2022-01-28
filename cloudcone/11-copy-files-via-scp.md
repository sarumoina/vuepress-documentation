---
title: 'Copy files via SCP'
permalink: '/cloudcone/copy-files-via-scp'
---

# Creating ssh connection between two servers and copying files between them

[[toc]]



# Creating ssh connection between two servers

## Step 1: Create SSH key

goto `~/.ssh` folder and execute `ssh-keygen`

## Step 2: Copy the public key to the other server

Execute the following to copy the public key to the remote machine

```bash
ssh-copy-id -i ~/.ssh/mykey user@host
```
where mykey is the key you generated in step 1. 

:::warning Note:

For the first time, you will have to use password in order to access to the shell in the remote machine. 
:::

And done. 

## Copy files via SCP

In order to copy files from server to local,

```bash
$ scp -r user@xexample.com:/folder/backups/2021-01-21/ bak
```     
