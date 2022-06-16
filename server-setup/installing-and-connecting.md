---
layout: page
nav_order: 1
parent: SlimeVR setup
---

# Installing the server and connecting your trackers
{:.no_toc}

This guide should help you set up SlimeVR trackers and software.

## Install the latest SlimeVR Installer
The latest [SlimeVR Installer can be found here.](https://github.com/SlimeVR/SlimeVR-Installer/releases/latest/download/slimevr_web_installer.exe) Download it and install it, this installer can be used to update the server software in the future.

## Test your trackers
Turn each tracker on and see if they work.

Make sure that when you turn on your tracker, it's lying on a flat surface. The sensors need to calibrate for 10-20 seconds in a stable environment (dependent on the model of your IMU). This should be done every time you turn on your trackers.

If you have an MPU9250 or a BMI160, you need to first calibrate the IMU before it will show rotation. This only needs to be done once. To do this, plug in your microcontroller (D1 Mini, NodeMCU, or other) and open the SlimeVR server, and click "WiFi". Then, flip your IMUs you want to calibrate upside down and press the reset button on your micro controller. You should see a message indicating that you need to flip the IMU right side up to begin calibration. Upon flipping the IMU over, calibration should begin. To successfully calibrate your IMU you need to gently rotate the IMU in all 3 axes. Once 30 seconds has passed, the tracker should be successfully calibrated and will begin to show rotation in the SlimeVR server.

Each tracker should blink a LED briefly on startup, and then blink every few seconds to indicate its status as follows:

| Number of blinks | Status                                             |
| :--------------: |:-------------------------------------------------- |
| 1                | Tracker is ready                                   |
| 2                | Connecting to SlimeVR server                       |
| 3                | Connecting to wifi                                 |
| 5                | IMU error                                          |


If a tracker doesn't start up, try charging it. Connect the tracker via USB port to your PC or any USB charger. Red LED light should light up to indicate that it's charging. Green LED light means it's fully charged (LED might be a different colour depending on your charging board). Try turning the tracker on during charging to see if it works.

**Please note that as a rule, DIY trackers should be kept off while charging outside of this specific case.**


## Check that driver loads and connects
{:.no_toc}

1. Start SteamVR, go to **Settings** > **Manage Add-Ons**. Check if SlimeVR exists here, set it to **On**.

   ![img](https://eiren.cat/XHKh)
1. Start the SlimeVR Server through the start menu via the "SlimeVR Server" shortcut.
1. Restart SteamVR. Now you should see 3 trackers active in SteamVR:

   ![img](https://eiren.cat/Dhh2)
1. In SlimeVR Server, you should see HMD tracker position and rotation change as you move your headset around (interface subject to major changes!):

   ![img](https://eiren.cat/Wf2v)

## Connect trackers

> **Note:** If you are using DIY trackers with hardcoded the WiFi credentials or phones with owoTrack, you can skip these steps. However, if you hardcoded the WiFi credentials and are having trouble connecting these steps may still be helpful for diagnosing the issue.

1. Turn a tracker on and connect it to your PC's USB port.
1. In SlimeVR Server, click **WiFi**.
1. In the opened **WiFi Settings** window, enter your wifi credentials in **Network name** and **Network password** fields, then click **Send**.
1. If all work fine, you'll see the message `[OK] CMD SET WIFI OK: New wifi credentials set, reconnecting` and in a few seconds, you will see the tracker appear in SlimeVR Server.
1. Close the **WiFi Settings** window and disconnect the tracker.
1. Repeat the steps for each tracker.

![img](https://cdn.discordapp.com/attachments/852339724731154494/867484289775042570/unknown.png)

### Troubleshooting

If all trackers don't show up, this can be caused by Windows Firewall blocking the connection. To fix this, go to SlimeVR Server folder and run `firewall.bat` as administrator. There are additional steps that can be taken on the [common issues page](../common-issues.md#the-trackers-are-connected-to-my-wifi-but-dont-turn-up-on-slimevr) if this does not work.

If some trackers don't show up, try turning them off and on again. You can rotate tracker around and see it change rotation in the server to figure out which tracker is which.

If some trackers don't change their rotation as you move them (including extensions), or display 0 0 0 rotation, try turning them off and on again, usually it should fix the issue.

If any tracker displays ERROR as it's status, or have orange and blue light permanently on, that's not good. Try restarting them and see if it helps. If not, contact Eiren.

***Next step - [Configuring the trackers](configuring-trackers.md)***

*Created by Eiren, edited by adigyran#1121, CalliePepper#0666, Emojikage#3095 and NWB#5135, styled by CalliePepper#0666.*