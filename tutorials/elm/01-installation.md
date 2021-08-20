---
title: 'Installation'
permalink: '/tutorials/elm/installation.html'
---

# Installation

[[toc]]

# Ubuntu

## Install

```bash
cd ~/Desktop/
curl -L -o elm.gz https://github.com/elm/compiler/releases/download/0.19.1/binary-for-linux-64-bit.gz
gunzip elm.gz
chmod +x elm
sudo mv elm /usr/local/bin/
```

## Uninstall

```bash
sudo rm /usr/local/bin/elm
rm -r ~/.elm/
```


