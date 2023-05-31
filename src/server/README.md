# SlimeVR Setup

This guide should help you set up your SlimeVR trackers and the SlimeVR Server.

The guide assumes you have either working and flashed DIY trackers, or production trackers. If you are looking for information building your own trackers please jump to our [DIY guide page](../diy/index.html). If you need to flash your tracker's firmware check the [firmware guide](../firmware/index.html).

## Installation

The latest version of the SlimeVR Server for Windows computers can be found [here](https://slimevr.dev/download). If you are on Linux check [our Linux page first](../tools/linux-installation.html). If you plan on using SlimeVR trackers for standalone Quest, you can either host the SlimeVR Server on your computer or [install the SlimeVR Server onto your Quest or other Android devices](https://docs.slimevr.dev/tools/termux-installation.html).

If you plan on using your SlimeVR trackers for PC VR via SteamVR, make sure that you have SteamVR installed and have launched it at least once before attempting to install the SlimeVR Server. Upon launching the installer you may see a message saying "Windows protected your PC". This is normal. Click **More info** and then **Run anyway**, then click **Yes** to begin installation.

## First Time Setup

For your tracker extensions, use the supplied wires and connect them to a main tracker. You can connect your extensions to any main tracker you would like.

![Extension connected to main tracker](../assets/img/PLACEHOLDER.png)

When you first open the SlimeVR Server, you'll be brought to the home area. To begin setting up your trackers, click **Setup Wizard.**
- Enter your Wi-Fi credentials and click **Submit!** (SlimeVR Trackers connect via your 2.4GHz Wi-Fi network)
- Turn on your trackers and with your supplied USB C cable, plug them one by one until you have them all connected. Once a tracker has connected, it will show up to the right. Click **I connected all my trackers** once you're done.
- Assign your trackers to each body part you want to track by clicking whichever tracking point you want to assign a tracker to. You can shake a tracker to highlight it. Remember, SlimeVR requires trackers placed on your thighs as well as on your ankles to properly track your lower body.
- Put on your trackers, launch SteamVR, and put on your headset! You should see some SlimeVR tracker icons in the SteamVR tray indicating that your trackers have connected. <!--- Expects SteamVR. OSC, and VMC should also be mentioned? -->

![SlimeVR icons in the SteamVR tray](../assets/img/PLACEHOLDER.png)

- It's recommended to select **Automatic mounting**, but if you know what you're doing, you can select **Manual mounting**. Make sure you're standing up straight and click **Full Reset**, then in a "skiing" pose click **Reset Mounting**. Your trackers should now all move in the correct direction. If everything looks good, click **Next step**, if not click **Try again**.

![Skiing pose for Automatic Mounting](../assets/img/PLACEHOLDER.png)

- Click **Contine**, the reset tutorial is work in progress at the moment.
- It's recommended to select **Automatic proportions**, but if you know what you're doing, you can select **Manual proportions**. You should already have your trackers on and be in VR so click **I have all my trackers on**. Make sure to read the requirements for performing automatic proportions and click **I have read the requirements**. This part involves wiggling around while making sure that your feet remain firmly planted and don't move around. Follow the instructions shown, and click **Start recording**. Make sure to verify your proportions and that everything looks correct. If everything looks good, click **They're correct** and then **Continue**, otherwise click **Reset all proportions** in the lower left and then click **Redo recording**.

![Automatic Proportions movements](../assets/img/PLACEHOLDER.gif) <!--- Video of some kind here -->

- You're all set! Click **Close setup**

## Resetting

Due to the nature of how SlimeVR works, from time to time you will need to perform a reset due to drift. There are two type of reset: a full reset, and a yaw reset.

A full reset will reset the position and rotation of your trackers to where they would be in an upright, standing position. As such, to perform a full reset you will need to be in an upright, standing position. You should generally only need to perform a full reset soon after putting on your trackers once you're in VR. Afterwards, to counteract drift you should perform yaw resets.

A yaw reset can be performed in any position, be it sitting down, laying on the ground, standing or crouching, and so on. When performing a yaw reset, you simply need to be facing forwards.

Full resets and yaw resets can be activated several different ways.
1. You can click the yaw or full reset button from within the SlimeVR Server
2. You can double tap your highest torso tracker (chest, waist, or hip) for a yaw reset, and triple tap for a full reset. This method works for both standalone Quest and SteamVR unlike the following, which only work with SteamVR.
3. FeederApp
4. You can download [OpenVR Advanced Settings](https://store.steampowered.com/app/1009850/OVR_Advanced_Settings/) and set controller bindings.

<!--- Video here -->

## Tracker Mechanics

<!--- Kinda Advanced. Maybe last before Warranty section? Describe tracker filtering (include three-way GIF showing difference between no filtering, smoothing, and prediction), drift compensation, skating correction, floor clip, etc. -->

## SteamVR

Depending on what trackers you have and what game you're playing, you may want to enable or disable certain trackers for SteamVR. For example, VRChat supports 11 point tracking, meaning you could have Chest, Knees, Waist, Elbows and Feet all enabled alongside your headset and controllers. Other games such as Blade and Sorcery, however, only support 6 point tracking, meaning you can only have Waist and Feet enabled alongside your headset and controllers. Full-body compatibility differs from game to game, so be sure to check beforehand.

![SteamVR Tracker Selection](../assets/img/PLACEHOLDER.png)

To set up full-body tracking in VRChat, walk over to a mirror, open the quick menu, and press "Calibrate FBT". Perform a full reset and then make a T-Pose, lining yourself up with the T-Pose in the mirror. Pull both triggers, and you're done! Your avatar should now be following your IRL movements.

## OSC / Standalone VRChat

If you want to use SlimeVR trackers for standalone usage in VRChat, navigate to the settings and under OSC click VRChat. If the server is [running on the Quest](../tools/termux-installation.md), leave the address as 127.0.0.1. If the server is running on another device such as your PC, put in your Quest's IP. You can get this by opening the Quick Settings menu on your Quest, selecting Wifi, your currently connected network, and scroll down and click the arrow. The IP address is listed there ([video tutorial on how to find your Quest's IP](https://www.youtube.com/watch?v=gL1vgWubcJw)). <!--- Is a video tutorial necessary? -->

Before launching VRChat, be sure to enable the trackering points you would like to use and click the toggle to enable sending tracker data via OSC. Once you're done, perform a full reset. <!--- Is this really necessary? >

Using the Radial Menu, select Options at the top, OSC, and then enable it.
You can verify that the trackers are being seen by VRChat by selecting "OSC Debug" if you like.

![img](https://user-images.githubusercontent.com/737888/154179201-ec413948-7013-494a-81fb-4b5e1129cf5f.jpg)

Walk over to a mirror, open the quick menu, and press "Calibrate FBT". Make a T-Pose, lining yourself up with the T-Pose in the mirror. Press reset on the server (unless you're running it on your Quest). Pull both triggers, and you're done! Your avatar should now be following your IRL movements.

Note: If SlimeVR is running on your Quest and the trackers are initially misaligned, you can navigate to the IK settings in VRChat's quick menu and press "Auto-Center OSC Trackers" once or twice.

## VMC / Vtubing

<!--- I know nothing about VMC and Vtubing>

## Warranty Info

<!--- Eiren fill this part in!!! -->

## Further Reading / IDK what to call this part

If you're having trouble with any of the setup process, more in-depth information on each part can be found below. If you can't find what you're looking for, consider joining the [SlimeVR Discord Server](https://discord.gg/SlimeVR). Be sure to check **#helpful-information** under **Support** first to decide where to post. Generally, questions should be directed to **#support-forum**.

1. [Initial Setup](initial-setup.md)
2. [Connecting your Trackers](connecting-trackers.md)
3. [Configuring your Trackers](configuring-trackers.md)
4. [Putting on your Trackers](putting-on-trackers.md)
5. [Body Proportions Configuration](body-config.md)
6. [Setting up Reset Bindings](setting-reset-bindings.md)
7. [OSC](osc-information.md)

_Created by ???, edited by NWB#5135_
