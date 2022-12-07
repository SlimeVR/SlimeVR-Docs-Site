---
layout: page
parent: Uploading Tracker Firmware
nav_order: 1
---

# Setting up the Environment

This procedure will show how to prepare your system for uploading the firmware to your tracker.

## 1. Install Visual Studio Code

Download the [latest Visual Studio Code](https://code.visualstudio.com/download) and install it.

### Download

![img](https://i.imgur.com/jXPXIFz.gif)

### Install

![img](https://i.imgur.com/hAm3Zu0.gif)

## 2. Install PlatformIO IDE

Once Visual Studio Code is installed, open it and install [PlatformIO IDE for VSCode](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide), an extension that will allow you to connect to the tracker, build and upload the firmware.

![img](https://i.imgur.com/ebV0IgT.gif)

## 3. Install Device Drivers

**Please note: these drivers will be automatically installed if you download and run the SlimeVR server.**

### For CH340 (NodeMCU v3, Wemos D1 Mini, and official SlimeVR trackers)

Download the `CH341SER.EXE` file from [here](https://cdn.sparkfun.com/assets/learn_tutorials/8/4/4/CH341SER.EXE), run it and follow installation instructions.

![img](https://i.imgur.com/9Ztro0h.gif)

### For CP210X (NodeMCU v2)

1. Download the zip archive with the drivers from silicon labs [here](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip).

   For any other OS, the drivers can be found [here](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers).

1. Extract the files from the downloaded zip archive, then launch `CP210xVCPInstaller_x64.exe` (`CP210xVCPInstaller_x86.exe` if you are using 32-bit Windows) and follow installation instructions.

## 4. Install Git Client

For Windows, you can download and install [Git for Windows](https://git-scm.com/download/win). If you have other OS, visit [https://git-scm.com/downloads](https://git-scm.com/downloads).

_Note: you will most likely have to click "Click here to download manually". If that doesn't work, you can try [here](https://gitforwindows.org/)._

![img](https://i.imgur.com/wam3ea1.gif)

## 5. Clone the Firmware Project

Make sure you close any current projects you have open or open a new window before moving forward with these steps.

1. Click the **Source Control** button, click on **Clone Repository** and enter: `https://github.com/SlimeVR/SlimeVR-Tracker-ESP.git`. If you're using experimental MPU+QMC5883L trackers, you would instead clone `https://github.com/deiteris/SlimeVR-Tracker-ESP.git`.
   
   If you installed git while Visual Studio Code was open you may have to close it and re-open it first.
   
   ![img](https://i.imgur.com/Yo6ebC5.gif)

1. Once you have chosen a download location click the **Open button** that appears at the bottom right.
   
   ![img](https://i.imgur.com/59zXAJQ.png)

1. Click **Yes, I trust the authors**.

   ![img](https://i.imgur.com/C0uCdOD.png)

1. **(MPU+QMC5883L only)**  Click the **Source Control** button, click on **main** and choose either **qmc-mag-new** or **hmc-mag** from the dropdown depending on whether you're using a QMC5883L or an HMC5883L.

   ![img](https://files.catbox.moe/5v51o8.gif)


***Next step - [Configuring and building the firmware project](configuring-project.md)***


