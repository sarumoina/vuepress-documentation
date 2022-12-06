---
title: 'Installing Mysql8.0'
permalink: '/cloudcone/installing-mysql8.0'
---

# Install mysql8.0

[[toc]]

## Install

To install **mysql8.0** in Ubuntu 18.04/20.04/22.04: 

```bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql.service
```

## Password error bug in ubuntu 20.04 and above 

:::danger Warning
As of July 2022, an error will occur when you run the mysql_secure_installation script without some further configuration. The reason is that this script will attempt to set a password for the installation’s root MySQL account but, by default on Ubuntu installations, this account is not configured to connect using a password.

Prior to July 2022, this script would silently fail after attempting to set the root account password and continue on with the rest of the prompts. However, as of this writing the script will return the following error after you enter and confirm a password:

```bash
Output
 ... Failed! Error: SET PASSWORD has no significance for user 'root'@'localhost' as the authentication method used doesn't store authentication data in the MySQL server. Please consider using ALTER USER instead if you want to change authentication parameters.

New password:
```
This will lead the script into a recursive loop which you can only get out of by closing your terminal window.

Because the mysql_secure_installation script performs a number of other actions that are useful for keeping your MySQL installation secure, it’s still recommended that you run it before you begin using MySQL to manage your data. To avoid entering this recursive loop, though, you’ll need to first adjust how your root MySQL user authenticates.

First, open up the MySQL prompt:

```bash
sudo mysql
```

Then run the following ALTER USER command to change the root user’s authentication method to one that uses a password. The following example changes the authentication method to mysql_native_password:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

After making this change, exit the MySQL prompt:

```sql
exit
```

Following that, you can run the mysql_secure_installation script without issue.

Once the security script completes, you can then reopen MySQL and change the root user’s authentication method back to the default, auth_socket. To authenticate as the root MySQL user using a password, run this command:

```bash
mysql -u root -p
```

Then go back to using the default authentication method using this command:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH auth_socket;
```

This will mean that you can once again connect to MySQL as your root user using the sudo mysql command.

:::

Run the security script with sudo:

```bash
sudo mysql_secure_installation
```

## Creating a Dedicated MySQL User and Granting Privileges

```bash
sudo mysql
```

In the MYSQL prompt,

```sql
CREATE USER 'username'@'host' IDENTIFIED WITH authentication_plugin BY 'password';
GRANT PRIVILEGE ON database.table TO 'username'@'host';

-- Grant All privileges at once
GRANT ALL PRIVILEGES ON *.* TO 'sammy'@'localhost' WITH GRANT OPTION; 

-- Or grant them separately
GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on *.* TO 'sammy'@'localhost' WITH GRANT OPTION;

FLUSH PRIVILEGES;
exit
```

:::warning MYSQL auth issue in some php versions
There is a known issue with some versions of PHP that causes problems with caching_sha2_password. If you plan to use this database with a PHP application — phpMyAdmin, for example — you may want to create a user that will authenticate with the older, though still secure, mysql_native_password plugin instead:

```sql
CREATE USER 'sammy'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```
If you aren’t sure, you can always create a user that authenticates with caching_sha2_plugin and then ALTER it later on with this command:
```sql
ALTER USER 'sammy'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

:::




