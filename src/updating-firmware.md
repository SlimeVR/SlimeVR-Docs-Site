# Updating Your Tracker's Firmware

There are two ways to update the firmware on official SlimeVR trackers: OTA (over-the-air) or via USB.

The currently recommended version of firmware for official trackers is v0.4.0.

## Method 1: Updating Over-the-Air

This method is the simplest, and doesn't require any cables or disassembly, but it does require your tracker to already be paired to your Wi-Fi network and has the potential to mess up your tracker. If it does, please refer to the USB flashing section below.

1. Turn off all your trackers and close the SlimeVR Server if it is open.

1. Download the latest version of the OTA tool [here](https://github.com/ButterscotchV/SlimeVR-OTA-CLI/releases/latest/download/SlimeVR-OTA.exe) and extract it into an empty folder.

1. Open the [SlimeVR Firmware Tool](https://slimevr-firmware.bscotch.ca/) in your browser and select the following options:

|      Option      |     Value     |
|------------------|---------------|
| Firmware Version | SlimeVR/0.4.0 |
|       Board      | BOARD_SLIMEVR |
|   Primary IMU    |   IMU_BNO085  |

![Firmware Options](assets/img/firmware_options.png)

Leave all other options as their default values.

4. Press "Download as ZIP"

![Firmware Download ZIP](assets/img/firmware_downloadaszip.png)

5. Extract the downloaded ZIP into the same folder where you placed your OTA tool.

![Firmware and OTA tool in folder](assets/img/firmware_otafolder.png)

6. Turn on a single tracker, wait a few seconds for it to connect to Wi-Fi, then open the OTA tool.

![Firmware ready to flash via OTA](assets/img/firmware_otareadytoflash.png)

7. Once you see this message, press enter to start the update.

![Firmware success over OTA](assets/img/firmware_otaflashed.png)

8. Your tracker should now be updated, you can repeat the process for any other trackers you wish to update.

## Method 2: Updating over USB

This method requires a data-capable USB-C cable, an M3 Philips head screwdriver, and a pair of metal tweezers (or some other tool that would allow you to short 2 pins together).

Due to this method requiring you to disassemble your tracker(s), it should only be done if OTA is not an option.

1. Turn off your tracker, remove the strap, then use your Philips head screwdriver to undo the screws on the back of the tracker.

![Tracker Screw Disassembly](assets/img/firmware_trackerscrews.jpg)
 
2. Remove the back cover and the battery, then gently lift the PCB by the opposite side of where all the ports are to remove it.

![Tracker Disassembly](assets/img/firmware_trackerdisassembly.jpg)

3. Inspect the back of the PCB to determine which revision you have.

![Tracker PCB Revision](assets/img/firmware_trackerrev.png)

4. Plug in your tracker to your computer with a USB-C cable while it is off, it should be recognized as a USB device.

5. Open the [SlimeVR Firmware Tool](https://slimevr-firmware.bscotch.ca/) in a Chromium based browser and select the same options described in the OTA method:

![Firmware Options](assets/img/firmware_options.png)

6. Press Flash to Device, and select your tracker in the pop-up, which should appear as `USB Serial`. The tool should now say "Start building".

![Tracker USB COM Port](assets/img/firmware_comportselection.png)
![Firmware building](assets/img/firmware_usbwaiting.png)

7. While the firmware tool is saying "Start building", use your tweezers to do the following, depending on your board revision:

|  Revision |                                                                             Steps                                                                           |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    R11    | Turn on the tracker while shorting the second rectangular FLASH pad from the edge on the top side of the board, and the metal shield of the microcontroller |
|    R12    |            Turn on the tracker while shorting the circular FLASH pad on the top side of the board, and the metal shield of the microcontroller               |
|    R14    |                                           Turn on the tracker while pushing in the FLASH button on the top side of the board                           |

![Tracker R11](assets/img/firmware_flashpin_r11.jpg)
![Tracker R12](assets/img/firmware_flashpin_r12.jpg)

8. If you did step 7 correctly, the firmware should now be flashing to your tracker.

![Tracker flashing over USB](assets/img/firmware_usbflashing.png)

9. Your tracker should now be updated, turn it off and on again to get it connect to Wi-Fi again, you can repeat the process for any other trackers you wish to update.

![Tracker success over USB](assets/img/firmware_usbflashed.png)

*Created by kounocom. OTA tool and Web Firmware Tool by ButterscotchV. Tracker disassembly images by TheDevMinerTV.*





