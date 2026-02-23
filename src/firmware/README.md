# Uploading Tracker Firmware

The recommended way to flash the SlimeVR firmware onto your trackers is to use the [DIY Firmware Tool](../updating-firmware.md#flashing-via-usb-serial) built into SlimeVR.

Be sure to select the correct:
1. Board Type
2. Primary IMU (do not leave on `IMU_AUTO`)
3. Secondary IMU (do not leave on `IMU_AUTO`, remove if not using extensions)

For example, if you are building [meowCarriers](https://github.com/Shine-Bright-Meow/meowCarrier) using ICM45686, without extensions, you will select:

1. Board Type: Wemos D1 Mini
2. Primary IMU: `IMU_ICM45686`
3. Secondary IMU: Removed

## Alternatives

If you need to customize the firmware, you will need to compile and flash using PlatformIO.

This can be useful if you need to:
1. Overclock the MCU
2. Swap the primary and secondary IMU addresses
3. Develop new firmware features

The following pages will walk you through the process of manually flashing your trackers. The guide assumes you have working and complete trackers, and are going to be using the PlatformIO approach. All screenshots are for a Windows-based system.

1. [Setting up the Environment](setup-and-install.md)
2. [Configuring the Firmware](configuring-project.md)
3. [Building and Uploading the Firmware](upload-firmware.md)
