---
layout: page
nav_order: 1
parent: Applications and Variants
---

# owoTrack App
{:.no_toc}

owoTrack is a mobile application that can be used for VR tracking using your phone.
The application uses SlimeVR Server for tracking. To set up SlimeVR Server, refer to [SlimeVR setup guide](../server-setup/slimevr-setup.md).

If you're using trackers/phones with owoTrack app for tracking, there is minimum amount of 5 trackers/phones for full body tracking. One phone can be used if you want only waist tracking. Waist tracking can also work with [owoTrack SteamVR driver](https://github.com/abb128/owo-track-driver), without SlimeVR.

Your PC and trackers/phones should connected to the same local network.

## Table of Contents
{:.no_toc}

* TOC
{:toc}

## Download Links

You can download the Android version of application from Google Play: [https://play.google.com/store/apps/details?id=org.ovrgyrotrackersync](https://play.google.com/store/apps/details?id=org.ovrgyrotrackersync).

To download the iOS version of application:

1. Install the [TestFlight application](https://apps.apple.com/ru/app/testflight/id899247664) on your iPhone.
1. Open the following link from your iPhone: [https://testflight.apple.com/join/1DZAkuCX](https://testflight.apple.com/join/1DZAkuCX).

Created by @ferdimarti#2111

## FAQ

### How many trackers or phones do I need to use for leg tracking?

Your need at least 5 trackers or phones for FBT using SlimeVR.

### I heard I could use 3 phones for leg tracking

You can't. You will have a bad time, and that's not our fault. Your knees won't bend and it's an overall worst experience. Required minimum is 5.

### I have only one/two phones

​You can use the official owoTrack driver for waist or SlimeVR Server for waist (+ chest if you have 2 phones). This will not track your legs.

### I try to run SlimeVR Server by clicking run.bat but nothing happens. Why?

​You need to install Java in order to run SlimeVR Server. To download Java installer, visit [Java download page](https://www.java.com/en/download/manual.jsp).

​For more information, refer to [SlimeVR setup guide](../server-setup/slimevr-setup.md).

### My trackers are connected to the SlimeVR Server, but they are not moving in SteamVR

​Make sure you have the correct roles selected in the SlimeVR Server for your trackers/phones. They should be Waist, Left Uppper Leg, Right Uppper Leg, Left Lower Leg and Right Lower Leg.

To learn how to set up tracker roles, refer to [SlimeVR setup guide](../server-setup/slimevr-setup.md).

### My controller is a tracker. How do I fix this?

​You need to assign roles to your trackers in SteamVR:

1. In SteamVR, go to **Settings** > **Devices** > **Manage Trackers**.
1. In the tracker list, find the ones named `/devices/SlimeVR/SlimeVRTracker#` and give them the roles WAIST, LEFT_FOOT, RIGHT_FOOT from top to bottom.
1. Restart SteamVR.

To learn how to set up tracker roles, refer to [SlimeVR setup guide](../server-setup/slimevr-setup.md).

### In what order should I start SteamVR and SlimeVR Server?

​SlimeVR Server needs to be started before SteamVR.

### My phone isn't connecting to the server

​Check that the IP is correct.

​**You can input 255.255.255.255 as IP to owoTrack Android app**

To check your IP address, you can open the Powershell window or Command Prompt window (cmd.exe) and execute `ipconfig` command and get your PC IPv4 address field - for example 192.168.1.2 and put it in owoTrack app.

### I have an iPhone and it disconnects after 10 minutes

Apple has restrictions on apps for networking in background. The workaround for this is currently being investigated.

To workaround this:

1. Enable **Guided Access**. You can find this setting in **Settings** > **Accessibility** > **Guided Access**.
1. Disable screen auto-lock. To do this, go to **Settings** > **Display & Brightness**, tap **Auto-Lock** and set it to **Never**.
1. Start owoTrack app.
1. Turn down the screen brightness completely to save battery.

### Virtual trackers on SteamVR are grayed out

This is expected behavior, check if trackers present in VR.

### Other issues

You may also need to set correct firewall settings for owoTrack to work correctly. Download [firewall.bat](/files/firewall.bat), move it to a directory without spaces or symbols in its name and run the bat file as administrator.

*Created by adigyran#1121 with help of MightyGood#1341, edited and styled by CalliePepper#0666 and Emojikage#3095*
