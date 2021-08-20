---
title: 'Poco X3 flashing instructions'
---

# Flashing instructions

[[toc]]

Before going forward: 

## Back up persist.img

**Recovery method:**

Recovery method, no root needed: In your recovery, head to recovery terminal, simply issue this command:

```bash 
dd if=/dev/block/bootdevice/by-name/persist of=/sdcard/persist_backup.img
```

## Flashing MIUI roms

 - Reboot to recovery.
 - Wipe Cache, Delvik and Data
 - Format Data
 - Flash rom
 - Flash magisk (optional)
 - Reboot


## System Destroyed fix

 - Boot to fastboot mode(Hold power+ vol down)
 - Flash [**vbmeta**](https://drive.google.com/file/d/1CyLHJLOFg51V1UEbyIQqK1ge2dGtV1kq/view?usp=sharing) `fastboot flash vbmeta vbmeta.img --disable-verity --disable-verification`
 - Flash recovery img
 - Reboot to recovery and flash rom
