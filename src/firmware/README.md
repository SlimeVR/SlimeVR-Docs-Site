# Uploading Tracker Firmware

This procedure will show how to build and configure the SlimeVR firmware, as well as how to upload it to your tracker.

There are currently two ways of uploading your firmware. One is using PlatformIO, and the other is the [online firmware flasher](https://slimevr-firmware-tool.futurabeast.com/). The online flasher is the most user friendly but doesn't work with Safari or Firefox.

<div class="embeddedVideo">
	<video controls="controls" width="800" height="600" name="Firmware Tools Example">
	  <source src="../assets/videos/firmwaretool.mov">
	</video><br>
	A quick video showing the use of the online flasher
</div>

If you're interested in using experimental firmware, you can use the [Butterscotch online firmware flasher](https://slimevr-firmware.bscotch.ca/). If you're using experimental MPU+QMC5883L trackers, or have BMI160 trackers and are interested in using experimental firmware, you can use this site to flash your trackers instead of using PlatformIO.

The PlatformIO version is less user friendly, but is recommended if you want to get into the nitty gritty of developing the firmware. The following pages will walk you through the process of manually flashing your trackers. The guide assumes you have working and complete trackers, and are going to be using the platformio approach. All screenshots are for a Windows based system.

1. [Setting up the Environment](setup-and-install.md)
2. [Configuring the Firmware](configuring-project.md)
3. [Building and Uploading the Firmware](upload-firmware.md)
