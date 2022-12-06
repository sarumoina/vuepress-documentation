---
title: 'Github SSH keys setup'
permalink: '/cloudcone/github-ssh-keys-setup'

---

# Cloning repo

[[toc]]

Before cloning he repo, make sure that you have generated the SSH key and then uploaded the content from the public key content to the github deploy keys section.

## Step 1: Generating SSH keys


goto `~/.ssh` folder in your server and generate the key.

```bash
$ ssh-keygen -t ed25519 -C "your_email@example.com" 
$ #ed25519 is the newest encryption
$ eval "$(ssh-agent -s)" #Start the ssh-agent in the background.
$ ssh-add ~/.ssh/id_ed25519 #Add your SSH private key to the ssh-agent. 
$ cat ~/.ssh/id_ed25519.pub
$ # Then select and copy the contents of the id_ed25519.pub file
$ # displayed in the terminal to your clipboard
```

<code>Copy the above content to github and paste it in _Deploy_ keys </code>. You have to remember that, though the name of the ssh key generated via ssh-keygen can be anything,I have only find it working when the name of the key is id_rsa (There's a workaround though which will be explained later on).

## Step 2: Testing connections

Sometimes you may get authentication failure error. If such case arises, test the connection first. 

```bash
$ ssh -vT git@github.com
```

::: tip Note
If you get errors while cloning a public repo, then the most probable cause is, you don't have a <code>id_rsa</code> key. You should upload the key to the ><code>profile/settings/SSH and GPG keys</code>. This should enable you to clone the public repo.
:::

## Step 3: Specify the particular SSH key for git push

The following is the process via which one can specify the correct ssh key so that while pushing/puling exact ssh key will be used. 

Go to the base (project folder where **package.json** exists) folder and execute the following in the terminal. 

```bash
$ git config core.sshCommand "ssh -i ~/.ssh/id_rsa_example -F /dev/null"
```

## Step 4: SSH config file

SSH config file makes it easy to connect. 

`~/.ssh/config`

```

Host github.com
        User git
        Hostname github.com
        PreferredAuthentications publickey
        IdentityFile ~/.ssh/github

Host anyname
        User root
        Hostname your_host_name
        PreferredAuthentications publickey
        IdentityFile ~/.ssh/your_private_key

```