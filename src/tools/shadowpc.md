# ShadowPC with SlimeVR

ShadowPC is a cloud computer solution that uses your USB peripherals for a seamless experience.
By offloading everything to the cloud you don't need a powerful gaming rig to get a playable experience—just a good, low latency internet connection.

------

## How to use SlimeVR with Shadow PC.

Required components and software:
- A HMD with virtual desktop support, like the Quest 2 or Quest 3.
- An active shadow pc subscription.
- A pc or laptop with an Ethenet connection. While it is possible to use a usb WiFi adapter that supports windows 10/11 hotspot functionality, ethernet connected to the same network as your slimes tends to be more reliable and offer lower latency.
- A license for virtual desktop.
- A fast, dual-band WiFi router. It should be configured to have a 5ghz band for your headset and the 2.4ghz band for your slimes.
- An active Tailscale account.

Steps to setup:
1. Download and install [TailScale](https://tailscale.com/download) on your Local and Shadow PC.
1. Open Tailscale on both devices and log into your account.
1. Download, install, and open [SlimeVR](https://slimevr.dev/#download) and Virtual Desktop on your Shadow PC (not your local PC).
1. Make sure your trackers are on and connected to your WiFi. You can check if they're active by having SlimeVR installed on your local PC, but make sure it is only active on your Shadow PC before proceeding.
1. On your Local PC, download and open [SlimeFWD](https://github.com/ButterscotchV/SlimeFwd/releases/tag/v1.0.2).
1. Copy the Shadow PC's IP from Tailscale and paste it into SlimeFWD on your Local PC.
1. Launch your VR game.
1. Success!

```admonish note
If you are using Smol/Receiver based Slimes:
Replace Step 4 by plugging your Dongle/Receiver into your PC.
Replace Step 5 and 6 by using [EsbImuReceiverToLAN](https://github.com/Sebane1/EsbImuReceiverToLAN/releases/tag/v0.0.0.3)
```

Disabling video buffering in virtual desktop may improve latency.
Having a fast connection will improve your experience.
Upload speed and latency is very important for a good experience as well.

*This guide was written by various community members, ShadowPC is not affiliated with SlimeVR.*

*Original write up: blaineam, Edited for Docs usage by: smeltie, Updated to reflect recent ShadowPC client changes by blaineam. Updated again by Amebun with new instructions from Shine Bright.*
