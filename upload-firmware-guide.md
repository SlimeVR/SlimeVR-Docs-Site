---
layout: page
nav_order: 3
has_children: true
---

# Updating the tracker firmware

This procedure will show how to build and configure the SlimeVR firmware and upload it to your tracker.

## 1. Install Visual Studio Code

Download the [latest Visual Studio Code](https://code.visualstudio.com/download) and install it.

### Download

![img](https://i.imgur.com/jXPXIFz.gif)

### Install

![img](https://i.imgur.com/hAm3Zu0.gif)

## 2. Install PlatformIO IDE

Once Visual Studio Code is installed, open it and install [PlatformIO IDE for VSCode](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide), an extension that will allow us to connect to the tracker, build and upload the firmware.

![img](https://i.imgur.com/ebV0IgT.gif)

## 3. Install device drivers

### For CP210X (NodeMCU v2)

1. Download the zip archive with the drivers from silicon labs [here](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip).

   For any other OS, the drivers can be found [here](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers).

1. Extract the files from the downloaded zip archive, then launch `CP210xVCPInstaller_x64.exe` (`CP210xVCPInstaller_x86.exe` if you are using 32-bit Windows) and follow installation instructions.

![img](https://i.imgur.com/9Ztro0h.gif)

### For CH340 (NodeMCU v3 and review units of SlimeVR)

Download the `CH341SER.EXE` file from [here](https://cdn.sparkfun.com/assets/learn_tutorials/8/4/4/CH341SER.EXE), run it and follow installation instructions.

## 4. Install git client

For Windows, you can download and install [Git for Windows](https://git-scm.com/download/win). If you have other OS, visit [https://git-scm.com/downloads](https://git-scm.com/downloads).

_Note: you will most likely have to click "Click here to download manually". If that doesn't work, you can try [here](https://gitforwindows.org/)._

![img](https://i.imgur.com/wam3ea1.gif)

## 5. Clone the firmware project

1. Open Powershell window or Command Prompt window in the folder where you want to clone the firmware project, and execute the following command: `git clone https://github.com/SlimeVR/SlimeVR-Tracker-ESP.git SlimeVR-Tracker-ESP-main`.
1. Once the project is cloned, open the project in Visual Studio Code:
   1. Click the **PlatformIO** icon on the Activity Bar.
   1. Select **PIO Home** > **Open**.
   1. In the opened tab, click **Open Project** under Quick Access section, then navigate to the cloned firmware project folder.

![img](https://i.imgur.com/G0egnh6.gif)

## 6. Plug in your ESP

Insert the Micro-USB cable from your computer while holding down the button labeled `FLASH` on your ESP as shown in the clip shown thanks to Nulled Floof.

Please note that depending on your board, this button may be labeled `BOOT` or `RESET`.

![img](https://i.imgur.com/scWknId.gif)

## 7. Build your firmware

1. Follow the [configuring the firmware project page](configuring-project.md) to prepare your project for building and uploading the firmware.
1. Press the build button at the bottom of Visual Studio Code.

   ![img](https://i.imgur.com/EmSkhFp.png)

## 8. Upload your firmware

* Once the firmware has been built, press the upload button to upload the firmware.

  ![img](https://i.imgur.com/lI3PFVC.png)

* If the upload is successful, you should get an output that looks like this:

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
