# Guide To Uploading Firmware To Tracker

This will show how to to upload firmware to your ESP.

## Step One: Build your tracker.
Once your tracker is built we can begin the process for uploading the firmware.

## Step Two: Download the latest version of Visual Studio Code [Here.](https://code.visualstudio.com/download)

Once downloaded install it.

#### Download:
![img](https://i.imgur.com/jXPXIFz.gif)

#### Install:
![img](https://i.imgur.com/hAm3Zu0.gif)

## Step Three: Install Platform IO IDE

Once installed we need to install Platformio, a plug-in that allows us to connect to the tracker and upload the firmware.

![img](https://i.imgur.com/ebV0IgT.gif)

## Step Four: Install device drivers.

You can download the drivers for windows for CP210X (Nodemcu v2) from silicon labs [here](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip). For any other os, downloads can be found [here](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers). For CH430 (Nodemcu v3 and **review units of SlimeVR**), download from [here](https://cdn.sparkfun.com/assets/learn_tutorials/8/4/4/CH341SER.EXE).

### Extract the files then launch `CP210xVCPInstaller_x64.exe` as shown for CP210X, for CH430, launch the file named `CH341SER.EXE`

![img](https://i.imgur.com/9Ztro0h.gif)

## Step Five: Install GIT

GIT can be installed for windows from [here](https://git-scm.com/download/win). If you need it for another OS go [here](https://git-scm.com/downloads).

_Note: you will most likely have to click "Click here to download manually" if that doesnt work, you can try [here](https://gitforwindows.org/)._

![img](https://i.imgur.com/wam3ea1.gif)

## Step Six: Download Firmware

* Create folder for SlimeVR firmware, open powershell or cmd in that folder and execute this command:
* `git clone https://github.com/SlimeVR/SlimeVR-Tracker-ESP.git`
* Once cloned, Open the file the project in Visual Studio Code by opening PIO home, selecting open project, then navigate to the folder that the SlimeVR firmware is in. Example: `C:\Users\YOUR_USERNAME\Downloads\SlimeVR-Tracker-ESP-main\SlimeVR-Tracker-ESP-main`

![img](https://i.imgur.com/G0egnh6.gif)

## Step Seven: Plug in your ESP.

Insert the micro usb cable from your computer while holding down the button labeled `FLASH` on your ESP as shown in the clip from Nulled Floof's video found [here](https://www.youtube.com/watch?v=e1oExyYlTzs).

![img](https://i.imgur.com/scWknId.gif)

## Step Eight: Build your firmware

* First you need to change platform.io file and defines.h using [this guide](defines_guide.md)
* After you did all changes press build button on bottom of visual studio

![img](https://i.imgur.com/EmSkhFp.png)

## Step Eight: Upload your firmware

* Once the firmware has been built press the upload button to upload firmware.

![img](https://i.imgur.com/lI3PFVC.png)

* If the upload is successful you should get an output that looks like this:

![img](https://i.imgur.com/SDQcCr1.png)

## Congratulations! You have now Successfully uploaded the firmware to your Slime!

## Common errors:

### During upload it says "Access/permission denied!"

Some program is using COM port of the ESP. If you have Cura open, close it. If you're not sure which program doing this, just restart your computer.

### There is an error saying "FileNotFoundError: ..."

Make sure GIT is installed and if unsure re-install it.

### There is another arror

Ask in **#diy** channel in [the discord](https://discord.gg/slimevr), we will be happy to help.


_Made with care by Prohurtz#0001 and adigyran#1121_
