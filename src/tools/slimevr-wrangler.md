---
layout: page
nav_order: 2
parent: Applications and Variants
---

# SlimeVR Wrangler

This guide will help you install and use SlimeVR Wrangler, which allows the use of Nintendo Switch Joycons as SlimeVR trackers.

![Screenshot of the app running and tracking a single Joy-Con](../assets/img/SlimeVR_Wrangler.png)

## Setup
You need bluetooth on your computer.
* Download and set up [SlimeVR](../server-setup/initial-setup.md)
* Download [SlimeVR Wrangler](https://github.com/carl-anders/slimevr-wrangler/releases/latest/download/slimevr-wrangler.exe)
* Start both the SlimeVR server and SlimeVR Wrangler 
* Connect your Joy-Con trackers to the computer ([Guide for Windows](https://www.digitaltrends.com/gaming/how-to-connect-a-nintendo-switch-controller-to-a-pc/))
* Make sure the SlimeVR Server is running, then press "Search for Joycons" inside SlimeVR Wrangler
* The Joy-Con should show up in the window!
* [Set up the new tracker in the SlimeVR Server](../server-setup/connecting-trackers.md)

### Mounting

Keep the joystick pointed outwards, it should not poke into your skin.

After connecting the Joy-Con's in the program, rotate them in the program to be the same rotation as they are if you are standing up.

Attach the Joy-Con's in the direction that works best for you, refer to the page on [putting on your trackers](../server-setup/putting-on-trackers.md) for mounting position and tracker assignment.

## Issues

Many! This is an **alpha** version, and there's no guarantees about anything.

* Rotation tracking is bad! - Yup, sorry. In the future there will be settings to help fine tune the tracking. It's recommended to [set a keybinding to reset.](../server-setup/setting-reset-bindings.md)
* It stops tracking when I turn around! - Bluetooth does not have a good range, you might have better luck with a different bluetooth adapter.
* Probably more.

### My Joy-Con's are connected in the Windows bluetooth menu but won't show up!

This is a problem that might be related to a newer Windows update. Try this, and it might fix it:
* Go to the Windows Setting app -> Bluetooth & other devices.
* Press on the Joy-Con that won't connect. Press "Remove device".
* Pair the device again. It should now show up.


*Created by Carl (<https://github.com/carl-anders>), edited by NWB#5135*