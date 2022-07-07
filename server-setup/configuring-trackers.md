---
layout: page
nav_order: 2
parent: SlimeVR setup
---

# Configuring your trackers

## Configuring how many virtual trackers you need

Before launching SteamVR, check the checkboxes relative to how many SteamVR virtual trackers you wish to spawn.

![img](..\assets\img\steamvr-trackers-slimevrui.png)


Please note that this only affects the virtual trackers in Steam and not your SlimeVR trackers. If you only have Waist and Legs ticked, they will still be accessing up to an 8 IMU setup (waist, chest, upper legs ,lower legs and feet). At the moment, VRChat currently supports 11 virtual trackers, including headset and controllers.

### SteamVR trackers to enable depending on your set

- 5+0: waist and feet.
- 5+1: *chest*, waist and feet.
- 5+3: *chest*, waist, *knees*, feet.
- 7+3: *chest*, waist, *knees*, feet, *elbows*

*Trackers marked in italic should only be enabled if your game supports it. Knee trackers should only be enabled when you have feet extensions.*

One peculiarity to note is that SlimeVR lower leg and feet trackers will combine into a single SteamVR tracker.

Do not enable trackers you do not need as this could lead to in-game calibration issues.

Launch SteamVR when you're ready.

### Set tracker roles in SteamVR

![img](https://images-ext-2.discordapp.net/external/htrUQYMIEtpmFQJEYjOBGQjtJUnru0UNb2qhCwQPUos/https/i.imgur.com/ftWpluV.png)


Check your Vive Trackers roles in SteamVR config. They should be set to WAIST, LEFT_FOOT, RIGHT_FOOT, CHEST, LEFT_KNEE, RIGHT_KNEE in this order for trackers named `/devices/SlimeVR/SlimeVRTracker*` in a standard waist and legs virtual tracker setup.

After you go into SteamVR, you should see 3 floating trackers under you. They're all in the wrong place, it's okay, follow the instructions to make it right.

### Access SlimeVR Server in VR

Use one of the ways to access SlimeVR Server GUI out of the SteamVR. We recommend adding SlimeVR Server as a view on your SteamVR dashboard, but you can use any program that lets you interact with your PC in VR, including just SteamVR desktop view.

![img](https://eiren.cat/fUqZ)

### Reset trackers

Perform a trackers reset:

1. Stand straight, legs vertical (not together), trackers facing their designated direction.
1. Press **RESET** button in SlimeVR Server.
1. Look forward as the timer on the button ticks.
1. After timer ends you should see trackers align in the right direction and be under you.

Look down. Ideally, after reset trackers should be directly under you, however as you have yet to configuring the body proportions they may be positioned under the floor.

***Next step - [Putting on your trackers and where to wear them](putting-on-trackers.md)***

*Created by Eiren, edited by adigyran#1121, CalliePepper#0666 and Emojikage#3095, styled by CalliePepper#0666.*