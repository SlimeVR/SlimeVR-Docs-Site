---
layout: page
title: Updating SlimeVR Tracker firmware
nav_order: 2
---

# Updating SlimeVR Tracker firmware

This will show how to upload firmware to your ESP.

## 1. Build your tracker

Once your tracker is built we can begin the process for uploading the firmware.

## 2. Install Visual Studio Code

Download the [latest Visual Studio Code](https://code.visualstudio.com/download) and install it.

### Download

![img](https://i.imgur.com/jXPXIFz.gif)

### Install

![img](https://i.imgur.com/hAm3Zu0.gif)

## 3. Install PlatformIO IDE

Once installed we need to install PlatformIO, a plug-in that allows us to connect to the tracker and upload the firmware.

![img](https://i.imgur.com/ebV0IgT.gif)

## 4. Install device drivers

You can download the drivers for Windows for CP210X (NodeMCU v2) from silicon labs [here](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip).

For any other OS, drivers can be found [here](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers).

For CH430 (NodeMCU v3 and **review units of SlimeVR**), download the drivers from [here](https://cdn.sparkfun.com/assets/learn_tutorials/8/4/4/CH341SER.EXE).

### Extract the files then launch `CP210xVCPInstaller_x64.exe` as shown for CP210X, for CH430, launch the file named `CH341SER.EXE`

![img](https://i.imgur.com/9Ztro0h.gif)

## 5. Install git client

For Windows, you can download and install [Git for Windows](https://git-scm.com/download/win). If you have other OS, visit [https://git-scm.com/downloads](https://git-scm.com/downloads).

_Note: you will most likely have to click "Click here to download manually". If that doesn't work, you can try [here](https://gitforwindows.org/)._

![img](https://i.imgur.com/wam3ea1.gif)

## 6. Download Firmware

* Create folder for SlimeVR firmware, open powershell or cmd in that folder and execute this command: `git clone https://github.com/SlimeVR/SlimeVR-Tracker-ESP.git`.
* Once cloned, open the file the project in Visual Studio Code by opening PIO home, selecting open project, then navigate to the folder that the SlimeVR firmware is in. Example: `C:\Users\YOUR_USERNAME\Downloads\SlimeVR-Tracker-ESP-main\SlimeVR-Tracker-ESP-main`.

![img](https://i.imgur.com/G0egnh6.gif)

## 7. Plug in your ESP

Insert the Micro-USB cable from your computer while holding down the button labeled `FLASH` on your ESP as shown in the clip from Nulled Floof's video found [here](https://youtu.be/e1oExyYlTzs?t=358).

![img](https://i.imgur.com/scWknId.gif)

## 8. Build your firmware

1. Change the `platformio.ini` file by following the instructions described in [Configuring PlatformIO project](platformio-guide.md).
1. Change the `defines.h` file by following the instructions described in [Configuring defines.h](defines_guide.md).
1. Press build button on bottom of Visual Studio Code.

   ![img](https://i.imgur.com/EmSkhFp.png)

## 9. Upload your firmware

* Once the firmware has been built press the upload button to upload firmware.

  ![img](https://i.imgur.com/lI3PFVC.png)

* If the upload is successful you should get an output that looks like this:

  ![img](https://i.imgur.com/SDQcCr1.png)

Congratulations! You have now successfully uploaded the firmware to your SlimeVR Tracker!

## Common errors

### During upload it says "Access/permission denied!"

Some program is using COM port of the ESP. If you have Cura open, close it. If you're not sure which program causing this - restart your computer.

### There is an error saying "FileNotFoundError: ..."

Make sure git client is installed and if unsure re-install it.

### There is another error

Ask in **#diy** channel in [the discord](https://discord.gg/slimevr), we will be happy to help.

*Made with care by Prohurtz#0001, adigyran#1121, and Eiren#0666. Edited by Emojikage#3095. Styled by CalliePepper#0666*
