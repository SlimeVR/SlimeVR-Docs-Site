---
layout: page
parent: Updating the tracker firmware
nav_order: 3
---

# Building and uploading the firmware

Uploading your firmware can be done either via a cable or OTA

## 1a. Uploading via cable

If your microcontroller board has a button labeled `FLASH`, `BOOT` or `RESET`, press and hold the button and plug in the micro-USB cable. If you have different labels and/or buttons, please check your microcontroller's manual for more information.

Note that holding the button is not required for Wemos D1 Mini.

## 1b. Uploading via OTA

1. In platformio.ini uncomment the lines.
  ```ini
  ;upload_protocol = espota
  ;upload_port = 192.168.1.49
  ;upload_flags =
  ;  --auth=SlimeVR-OTA
  ```
1. Change the value of upload_port to the IP address of the tracker you wish to flash.

## 2. Build your firmware

1. Follow the [configuring the firmware project page](configuring-project.md) to prepare your project for building and uploading the firmware.
1. Press the build button at the bottom of Visual Studio Code.

   ![img](https://i.imgur.com/EmSkhFp.png)

## 3. Upload your firmware

* If you are using the OTA method, first make sure the tracker you wish to flash is turned on.

* Once the firmware has been built, press the upload button to upload the firmware.

  ![img](https://i.imgur.com/lI3PFVC.png)

* If the upload is successful, you should get an output that looks like this:

  ![img](https://i.imgur.com/SDQcCr1.png)

Congratulations! You have now successfully uploaded the firmware to your SlimeVR Tracker!

## Troubleshooting

If you encountered an issue while following these steps check the [Common issues](common-issues.md) page.

If you don't find an answer to your question there ask in **#diy** channel in [the discord](https://discord.gg/slimevr), we will be happy to help.

*Made with care by Prohurtz#0001, adigyran#1121, Eiren#0666 and CalliePepper#0666. Edited by CalliePepper#0666 and Emojikage#3095.*