# Guide To Uploading Firmware To Tracker

### This will show how to to upload firmware to your esp.
<br/><br/>
## Step One: Build your tracker.
### Once your tracker is built we can begin the process for uploading the firmware.
<br/><br/>
## Step Two: Download the latest version of Visual Studio Code [Here.](https://code.visualstudio.com/download)
### Once downloaded install it.

#### Download:
<img src="https://i.imgur.com/jXPXIFz.gif" width="600" height="350" />

<br/><br/>
#### Install:
<img src="https://i.imgur.com/hAm3Zu0.gif" width="600" height="350" />

<br/><br/>
## Step Three: Install Platform IO IDE
### Once installed we need to install Platformio, a plug-in that allows us to connect to the tracker and upload the firmware.
<img src="https://i.imgur.com/ebV0IgT.gif" width="600" height="350" />
 <br/><br/>
<br/><br/>

 ## Step Four: Install device drivers.
 ### You can download the drivers for windows from silicon labs [here.](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) For any other os, downloads can be found [here.](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)
### Extract the files then launch `CP210xVCPInstaller_x64.exe` as shown.

<img src="https://i.imgur.com/9Ztro0h.gif" width="600" height="350" />
<br/><br/>
<br/><br/>

## Step Five: Plug in your ESP.
### inssert the micro usb cabe from yyour computer while holding down the button labled `FLASH` on your ESP as shown in the clip from Nulled Floof's video found [here.](https://www.youtube.com/watch?v=e1oExyYlTzs)
<img src="https://i.imgur.com/scWknId.gif" width="600" height="350" />
<br/><br/>
<br/><br/>

## Step Six: Download Firmware
### Download the latest firmware from [here](https://github.com/SlimeVR/SlimeVR-Tracker-ESP) and extract it.
#### NOTE: It is recommended to extract the files and copy the path it is in as it will be easier in the future.

<img src="https://i.imgur.com/kGDGcAJ.gif" width="600" height="350" />
<br/><br/>

###  Once extracted, Open the file the prodject in Visual Studio Code by opening PIO home, selecting open prodject, then navigating to the folder that the SlimeVR firmware is in. Example: `C:\Users\YOUR_USERNAME\Downloads\SlimeVR-Tracker-ESP-main\SlimeVR-Tracker-ESP-main`
### This is shown below.
<img src="https://i.imgur.com/G0egnh6.gif" width="600" height="350" />
<br/><br/>

## Step Seven: Install GIT
### GIT can be installed for windows from [here](https://git-scm.com/download/win) note: you will most likely have to click "Click here to download manually" if that doesnt work, you can try [here](https://gitforwindows.org/). If you need it for another OS go [here](https://git-scm.com/downloads)

### Install it by the following:
<img src="https://i.imgur.com/wam3ea1.gif" width="600" height="350" />
<br/><br/>
<br/><br/>

## Step Eight: Upload your firmmware
### Once the firmware has been loaded press the upload button to upload firmware.
##### upload button on the bottom of visual studio:
<img src="https://i.imgur.com/lI3PFVC.png" width="60" height="60" />

### If the upload is succsessful you should get aan output that looks like this:
<img src="https://i.imgur.com/SDQcCr1.png" width="800" height="140" />
<br/><br/>
<br/><br/>

### Congradulations! You have now Sucsessfully uploaded the firmware to your slime!
<br/><br/>

## Common errors:

### Problem: "Help! It says acsess/permission denied! "
### Solution: Restart you computer
<br/><br/>

### Problem: "It doesn't say acsess/permission denied but error out!"
### Solution: Make sure GIT is installed and if unsure re-install it.
<br/><br/>

### Problem: "Mine errors out and these didnt fix it, help!"
### Solution: "Ask in **#diy** in [the discord](https://discord.gg/slimevr)
<br/><br/>

### This doc is a WIP (Work In Progress)
<br/><br/>
<br/><br/>

#### Made with care by Prohurtz#0001
