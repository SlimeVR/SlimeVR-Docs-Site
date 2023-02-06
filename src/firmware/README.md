---
layout: page
nav_order: 4
has_children: true
---

# Uploading Tracker Firmware
{:.no_toc}
This procedure will show how to build and configure the SlimeVR firmware, as well as how to upload it to your tracker.

There are currently two ways of uploading your firmware. One is using PlatformIO, and the other is the [online firmware flasher](https://slimevr-firmware-tool.futurabeast.com/). The online flasher is the most user friendly but doesn't work with Safari or Firefox. The PlatformIO version is less user friendly, but is recommended if you want to get into the nitty gritty of developing the firmware.

If you're interested in using experimental firmware, you can use the [Butterscotch online firmware flasher](https://slimevr-firmware.bscotch.ca/). If you're using experimental MPU+QMC5883L trackers, or have BMI160 trackers and are interested in using experimental firmware, you can use this site to flash your trackers instead of using PlatformIO.

The guide assumes you have working and complete trackers, and are going to be using the platformio approach. All screenshots are for a Windows based system.


