---
layout: page
nav_order: 3
parent: Applications and Variants
---

# ShadowPC with SlimeVR

ShadowPC is a cloud computer solution that locks in your USB peripherals for a seemless experience.
By offloading everything to the cloud you don't need a heavy gaming rig to get a playable experience.

------

## How to use SlimeVR with Shadow PC.

Required components and software:
- A HMD with great virtual desktop support like the Oculus quest 2.
- A active shadow pc subscription.
- A client for shadow pc that supports usb forwarding like a windows pc with shadows official app or a virtual here license with an always on computer. A raspberry pi works.
- A usb to Ethernet adapter. It's possible to use a usb WiFi adapter that supports windows 10 hotspot functionality, however ethernet was more reliable for me.
- A license for virtual desktop.
- A device that can stay awake while you're in vr that supports the official shadow pc client, I used an iPad.
- A fast 5ghz WiFi router that also supports 2.4ghz almost any dual band router should suffice.
- An Ethernet cable and free Ethernet port at your router for the usb to Ethernet adapter.

Steps to setup:
- login to shadow pc, install virtual desktop streamer, steam, steam vr and your desired steam vr game, the slime vr server, and virtual here if you need it if usb forwarding does not work for your shadow client.
- Connect the lan cable and ensure the usb forwarding is setup for that adapter.
- Shadow pc should show a new Ethernet connection in network and sharing center.
- Make sure that connection is set to private keep shadows main Ethernet connection alone.
- Once all of slimes are connected to your WiFi router that the Ethernet cable is also connected to, launch slime vr server on shadow pc. The slimes should show up and be reporting their rotation data.
- Configure slimes following official documentation.
- Launch your vr game and enjoy.

To improve performance make the shadow pc official client only use 5mbps max of bandwidth.
Disabling video buffering in virtual desktop helped the most for vr gameplay.
Having a fast connection will definitely improve your experience.
For usb forwarding the upload is the most important.

*This guide was written by a community member, ShadowPC is not affiliated with SlimeVR.*

*Original write up: BlaineAM#5575, Edited for Docs usage by: Smeltie#1999.*