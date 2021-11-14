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

Once Visual Studio Code is installed, open it and install [PlatformIO IDE for VSCode](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide), an extension that will allow you to connect to the tracker, build and upload the firmware.

![img](https://i.imgur.com/ebV0IgT.gif)

## 3. Install device drivers

### For CP210X (NodeMCU v2)

1. Download the zip archive with the drivers from silicon labs [here](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip).

   For any other OS, the drivers can be found [here](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers).

1. Extract the files from the downloaded zip archive, then launch `CP210xVCPInstaller_x64.exe` (`CP210xVCPInstaller_x86.exe` if you are using 32-bit Windows) and follow installation instructions.

![img](https://i.imgur.com/9Ztro0h.gif)

### For CH340 (NodeMCU v3, Wemos D1 Mini and review units of SlimeVR)

Download the `CH341SER.EXE` file from [here](https://cdn.sparkfun.com/assets/learn_tutorials/8/4/4/CH341SER.EXE), run it and follow installation instructions.

## 4. Install git client

For Windows, you can download and install [Git for Windows](https://git-scm.com/download/win). If you have other OS, visit [https://git-scm.com/downloads](https://git-scm.com/downloads).

_Note: you will most likely have to click "Click here to download manually". If that doesn't work, you can try [here](https://gitforwindows.org/)._

![img](https://i.imgur.com/wam3ea1.gif)

## 5. Clone the firmware project

Make sure you close any current projects you have open or open a new window before moving forward with these steps.

1. Click the **Source Control** button, click on **Clone Repository** and enter: `https://github.com/SlimeVR/SlimeVR-Tracker-ESP.git`. 
   
   If you installed git while Visual Studio Code was open you may have to close it and re-open it first.
   
   ![img](https://i.imgur.com/Yo6ebC5.gif)

1. Once you have chosen a download location click the **Open button** that appears at the bottom right.
   
   ![img](https://i.imgur.com/59zXAJQ.png)

1. Click **Yes, I trust the authors**.

   ![img](https://i.imgur.com/C0uCdOD.png)

## 6. Plug in your ESP

If your microcontroller board has a button labeled `FLASH`, `BOOT` or `RESET`, press and hold the button and plug in the micro-USB cable. If you have different labels and/or buttons, please check your microcontroller's manual for more information.

Note that holding the button is not required for Wemos D1 Mini.

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

## Troubleshooting

If you encountered an issue while following these steps check the [Common issues](common-issues.md) page.

If you don't find an answer to your question there ask in **#diy** channel in [the discord](https://discord.gg/slimevr), we will be happy to help.

*Made with care by Prohurtz#0001, adigyran#1121, Eiren#0666 and CalliePepper#0666. Edited by CalliePepper#0666 and Emojikage#3095.*
