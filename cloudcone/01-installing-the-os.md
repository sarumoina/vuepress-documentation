---
title: 'Installing the OS'
permalink: 'cloudcone/installing-the-os'

---



# Installing the OS

[[toc]]

I've chosen Ubuntu 22.04 as the choice for VPS OS.

## Step 1: Setting up SSH keys

You'll require SSH keys in order to prevent logging in to computer with a password everytime.

**In your local computer**

```bash
$ ssh-keygen -t ed25519 -C "your_email@example.com"
# Follow the onscreen directions in order to generate the public and the private pair
$ cat YOUR_KEY.pub
# The public key will appear
# Copy the public key.

# Add the ssh key to the agent
$ ssh-add ~/.ssh/id_ed25519
```

**In cloudcone web dashboard**

Now go to the profile section in the dashboard of cloudcone and select SSH keys.

<code>Paste the content that you've copied earlier. </code>

Now it is time to _login_ to the server.

#### Login to the server:

Open the terminal and type the following:

<code>ssh root@YOUR_IPV4_IP</code>

It will ask for your password which will be provided to you in the registered mail. Enter the password. Now it is time to install the SSH keys.

```bash
# STEP 2: INSTALL THE SSH KEY
$ curl -o cc-ikey -L web.cloudc.one/sh/key && sh cc-ikey some-random-key #it will be different for you.
```

Also, if you want to get information about the RAM usage in the system, then execute the following in the terminal.

```bash
$ wget -O install stats.cloudcone.sh && bash install some-random-string
# It will be different on every instances. The random string will be provided to you by cloudcone.
```

After the installation, you'll see the ram usage in cloudcone dashboard.

## Step 2 : Changing date/time

To set the timezone, run the following command:

```bash
$ sudo timedatectl set-timezone Asia/Kolkata
```

::: tip Note:
If you want to get a list of time-zones available, you can use

```bash
$ timedatectl list-timezones

``` 

You can also use grep in order to narrow it down such as <code>$ timedatectl list-timezones | grep Asia/Kolkata </code>
:::

## Step 3: Create a New Sudo-enabled User in Ubuntu 22.04

```bash
$ adduser itachi
```
**Output:**

```
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully

Changing the user information for sammy
Enter the new value, or press ENTER for the default
    Full Name []:
    Room Number []:
    Work Phone []:
    Home Phone []:
    Other []:
Is the information correct? [Y/n]
```

adding the user to the sudo group

```bash
$ usermod -aG sudo itachi
```

**Testing sudo Access**

```bash
sudo - itachi
```




