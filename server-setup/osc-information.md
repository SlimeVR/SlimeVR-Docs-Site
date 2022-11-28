---
layout: page
nav_order: 6
parent: SlimeVR setup
---

# OSC

OSC stands for Open Sound Control. It was originally developed to be used to connect and control music equipment in a simple, open, and standard way. VRChat developed a system for it to be used to control the avatar and virtual trackers, allowing for fully body tracking on Quest 2. You can read the VRChat documentation on it [here](https://docs.vrchat.com/docs/osc-overview).

# OSC Setup

Once you have setup your trackers and mounted them correctly, you can setup OSC. In the SlimeVR Gui, navigate to Settings>OSC>VRChat. If the server is running on the Quest, you can leave it as 127.0.0.1. If the server is not on the Quest, put in your Quest's IP. You can get this by opening the Quick Settings menu on your Quest, selecting Wifi, your currently connected network, and scroll down and click the arrow. The IP address is listed there.

## Trackers to enable depending on amount:

- 5+0: waist and feet.
- 5+1: *chest*, waist and feet.
- 5+3: *chest*, waist, *knees*, feet.
- 7+3: *chest*, waist, *knees*, feet, *elbows*.

Now that you have the SlimeVR side setup, you can now connect VRChat to SlimeVR.
### PRESS RESET IN THE SERVER NOW

Open the [VRChat - Beta](https://www.oculus.com/experiences/quest/4821132827998004/) on your Quest.

Using the Radial Menu, select Options at the top, OSC, and then enable it.

![img](https://user-images.githubusercontent.com/737888/154179201-ec413948-7013-494a-81fb-4b5e1129cf5f.jpg)

Walk over to your mirror, open the non-radial menu, and press Calibrate FBT. Make a T-Pose, lining yourself up with the T-Pose in the mirror. Pull both triggers, and you've connected VRChat to SlimeVR with OSC.