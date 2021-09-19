---
layout: page
title: SlimeVR setup
nav_order: 3
---

# SlimeVR setup
{:.no_toc}

This guide should help you set up SlimeVR trackers and software.

**If something can't be resolved using these instructions, please contact us in the [official SlimeVR discord](https://discord.gg/SlimeVR) #technical-support channel for help!**

## Table of contents
{:.no_toc}

* TOC
{:toc}

## Readiness checklist

* Download the latest [SlimeVR Driver](https://github.com/SlimeVR/SlimeVR-OpenVR-Driver/releases/latest/download/slimevr-openvr-driver-win64.zip).
* Download the latest [SlimeVR Server](https://github.com/SlimeVR/SlimeVR-Server/releases/latest/download/SlimeVR.zip).
* Turn each tracker on and see if it works.

Each tracker should light up a blue and an orange light briefly on startup (light colors and signaling are subject to change in the future!). Light will turn off after a second or so, it's normal. Trackers don't have LED indicator of being on, so don't forget to switch them off.

If a tracker don't start up, try charging it. Connect the tracker via USB port to your PC or any USB charger. Red LED light should light up to indicate that it's charging. Green LED light means it's fully charging. Try turning the tracker on during charging to see if it works.

## Before you start

### Install beta version of SteamVR

It's not strictly necessary, but ability to control SlimeVR window from dashboard in beta version can be very handy.

### Install Java

Visit [Java download page](https://www.java.com/en/download/manual.jsp), download and install Java 8 for your operating system.

### Install driver

Use one of two options to install the driver (in the future Server will do it for you).

#### Option one
{:.no_toc}

Copy the `slimevr` folder in your SteamVR folder, usually it's located in `C:\Program Files (x86)\Steam\steamapps\common\SteamVR\drivers`. This should look like this:

![img](https://eiren.cat/SQpk)

Check if you have driver's dll in this folder:

![](https://i.imgur.com/475wMiS.png)

#### Option two
{:.no_toc}

1. Open `C:\Users\<Username>\AppData\Local\openvr\openvrpaths.vrpath` in Visual Studio Code.
1. Add `"Path\\to\\slimevr",` to the list of `external_drivers` as follows:

   ![img](https://eiren.cat/ib4_)
   *Remember to escape backslashes!*

#### Check that driver loads and connects
{:.no_toc}

1. Start SteamVR, go to **Settings** > **Manage Add-Ons**. Check if SlimeVR exists here, set it to **On**.

   ![img](https://eiren.cat/XHKh)
1. Start SlimeVR Server, restart SteamVR.
1. You should see 3 trackers active in SteamVR:

   ![img](https://eiren.cat/Dhh2)
1. You should see HMD tracker position and rotation change as you move your headset around (interface subject to major changes!)

   ![img](https://eiren.cat/Wf2v)

### Install USB Drivers

Install USB driver from here: [https://cdn.sparkfun.com/assets/learn_tutorials/8/4/4/CH341SER.EXE](https://cdn.sparkfun.com/assets/learn_tutorials/8/4/4/CH341SER.EXE)

## Connect trackers

1. Start SlimeVR Server.
1. Turn a tracker on and connect it to your PC's USB.
1. In SlimeVR Server, click **WiFi**.
1. In the opened **WiFi Settings** window, enter your wifi credentials in **Network name** and **Network password** fields, then click **Send**.
1. If all work fine, you'll see the message `[OK] CMD SET WIFI OK: New wifi credentials set, reconnecting` and in a few seconds, you will see the tracker appear in the SlimeVR Server window.
1. Close the **WiFi Settings** window.
1. Repeat steps 2 to 6 for each tracker.

![img](https://cdn.discordapp.com/attachments/852339724731154494/867484289775042570/unknown.png)

If some trackers don't show up, try turning them off and on again. You can rotate tracker around and see it change rotation in the server to figure out which tracker is which.

If some trackers don't change their rotation as you move them (including extensions), or display 0 0 0 rotation, try turning them off and on again, usually it should fix the issue.

If any tracker displays ERROR as it's status, or have orange and blue light permanently on, that's not good. Try restarting them and see if it helps. If not, contact Eiren.

## Putting trackers on

Put trackers on according to the pictures. It's recommended position, you can use any comfortable position for you, but there are a few rules:

1. You should set "Tracker role" to the proper role according to body part you put your tracker on. This includes tracker extensions. Use pictures to reference role names and their recommended mounting points.
1. You should set "Tracker direction" according to your mounting direction. **You can only mount trackers facing forward, left, backwards, or right. You can not mount trackers facing other directions (yet). When you mount it, make sure they sit tight, and face as much in this direction as possible when you're standing straight. I.e. "Forward" should face the same way your HMD is facing when you look forward while standing!**
1. You can mount trackers tiled forward/backward or on the side, this will not mess up the tracking. You probably can mount trackers upside-down, but it wasn't tested yet (it will be and there might be a setting for it in the future).
1. You can mount trackers in any place on the designated body part you find comfortable. Make sure the tracker moves when you bend the joint to register movement. **Pay special attention to the waist tracker, there are many places where you can mount it and it won't register you bending over.**

### Recommended mounting points

![img](https://eiren.cat/ECvD)

![img](https://eiren.cat/DvJi)

Recommended tracker positions are:

* Waist: facing left above waist.
* Chest: facing forward middle of the chest (or facing left the same as waist, whatever is more comfortable). Pay attention to tracker extension "front" and "up" sides (see picture below).
* Leg: right above the knee.
* Ankle: on the ankle.
* Foot: top of the foot. Tracker's "up" facing towards ankle, and "front" facing up.

**Updated recommendation**: Put main tracker on the chest, and tracker extension on the waist. It's more comfortable and stable this way, since your hand won't bump into waist tracker.

![img](https://eiren.cat/TyTd)
*Form and direction of axes are subject to change in future revisions!*

## Configure proportions and trackers

Make sure that all your trackers are active in SlimeVR before proceeding. Launch SteamVR when you're ready.

### Set tracker roles in SteamVR

![img](https://images-ext-2.discordapp.net/external/htrUQYMIEtpmFQJEYjOBGQjtJUnru0UNb2qhCwQPUos/https/i.imgur.com/ftWpluV.png)

Check your Vive Trackers roles in SteamVR config. They should be set to WAIST, LEFT_FOOT, RIGHT_FOOT in this order for trackers named `/devices/SlimeVR/SlimeVRTracker*`.

After you go into SteamVR, you should see 3 floating trackers under you. They're all in the wrong place, it's okay, follow the instructions to make it right.

### Access SlimeVR Server

Use one of the ways to access SlimeVR GUI out of the SteamVR. We recommend adding SlimeVR Server as a view on your SteamVR dashboard, but you can use any program that lets you interact with your PC in VR, including just SteamVR desktop view.

![img](https://eiren.cat/fUqZ)

### Reset trackers

Perform a trackers reset:

1. Stand straight, legs vertical (not together), trackers facing their designated direction.
1. Press big Reset button in SlimeVR Server.
1. Look forward as the timer on the button ticks.
1. After timer ends you should see trackers align in the right direction and be under you.

Look down. Ideally, after reset trackers should be directly under you. If you're using feet trackers, they can be shifted a bit forward. Refer to [Configure body proportions](#configure-body-proportions) to place trackers in their right place.

### Configure body proportions

#### Using skeleton auto-configuration (AutoBone)
{:.no_toc}

Refer to [Skeleton auto-configuration](skeleton_auto_config.md) for more information.

#### Manually
{:.no_toc}

Check the "Body proportions" section of SlimeVR. You can do rough calibration by pressing a `Reset All` button. Stand straight and face forward like you do when resetting trackers before pressing it, wait for the timer to end. Quick calibration will configure your body based on HMD position (your height). It's not perfect, you can adjust it further using instructions below.

All this configuration is done from SteamVR dashboard. All measurements are in centimeters. Press `+` or `-` to change lengths by 1 cm. Press `Reset` to set it to default value based on your height, You should see 3 trackers: waist tracker, and two feet trackers. They're referenced in this manual in this way.

![img](https://eiren.cat/atSL)

##### Neck
{:.no_toc}

Move your head up and down like you're nodding. All trackers should stay in place as you do so, their movement should be negligible. If they move too much, adjust your neck length and headset shift. Start with neck length, and see how it changes stability. Headset shift is usually the same for everyone and is roughly 10 cm.

##### Waist
{:.no_toc}

![img](https://eiren.cat/Mlkd)

Put one of your controllers near your Thighbone (also known as Femur) - the bone around which your legs rotate.

Adjust Waist Length so that your Waist tracker is at the same height as your controller.

##### Chest
{:.no_toc}

Start with Chest Length set to half of Waist Length. After configuring everything else, you can experiment with it to better match how you bend your back during movements.

##### Legs
{:.no_toc}

Adjust Legs Length so that your legs joints Y coordinate is 0. You can do this quickly by standing up and pressing "Reset" near the Legs Length. This will also reset Knees Length to 50% of your Legs Length.

##### Knees
{:.no_toc}

*Set Feet Length to 0 before configuring your knees length!*

Bend your knees slightly while keeping your back straight. Watch if your feet trackers move forward or backwards as you do so.

Adjust Knees Length to make this movement minimal. If your feet trackers move forward when you bend your knees, your Knee Length is too high, if they move backwards - too low.

##### Feet
{:.no_toc}

Set Feet Length to 5 centimeters. Experiment with it if you feel like your feet don't match well your avatar's feet.

##### Other
{:.no_toc}

Virtual Waist is the shift from the Waist that will be reported to SteamVR, but not used to resolve other trackers. Can sometimes be useful for different strangely proportioned avatars. You can leave it at 0 for now.

## Using 1 or more than 3 SteamVR trackers

By default SlimeVR will spawn 3 trackers for SteamVR - Waist and 2 Feet. If you're using only 1 tracker (waist), you need to set selector on top to "Waist". If you want to play games that support more than 3 trackers, you can set them to more trackers - add Knees if you're using 5 trackers, or Knees and Chest if you also have chest. **After you change this configuration, you will need to restart SlimeVR Server.**

Currently maximum 6 trackers mode is supported. Their tracker roles should be set to WAIST, LEFT_FOOT, RIGHT_FOOT, CHEST, LEFT_KNEE, RIGHT_KNEE in this order for trackers named `/devices/SlimeVR/SlimeVRTracker*`.

## Notes

1. Every time you restart SteamVR you need to restart SlimeVR (will be changed in the future).
1. SlimeVR need to be started before SteamVR (will be changed in the future).
1. If you reset your playspace (for example long pressing Oculus button on Quest), you will need to do a [tracker reset](#reset-trackers).

*Created by Eiren, edited by adigyran#1121, CalliePepper#0666 and Emojikage#3095, styled by CalliePepper#0666*
