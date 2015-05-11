---
title: Installing Ubuntu from USB
layout: post
date: 2015-05-11 13:48
category: home
tags: [usb drive,ubuntu,mac]
---

## Installing Ubuntu from USB

This week I had to re-install one of my ubuntu machines when the hard drive crashed. I had to do some googling to get it done. When i got it all done i thought that was easy enough, heres how I did it:

[Downloaded Ubuntu Desktop](http://www.ubuntu.com/download/desktop)

Create a bootable usb drive on my mac:
- Convert the iso to an image  
  `hdiutil convert -format UDRW -o ~/path/to/target.img ~/path/to/ubuntu.iso`
- Use diskutil to find the usb drive  
  `diskutil list`
- Unmount the disk  
  `diskutil unmountDisk /dev/diskN`
- Use dd to put the image onto the drive  
  `sudo dd if=/path/to/downloaded.img of=/dev/rdiskN bs=1m`
- Eject the drive  
  `diskutil eject /dev/diskN`
  
Boot from the USB on the machine.