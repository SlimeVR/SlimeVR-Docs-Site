# OSC (Standalone Tracking)

OSC stands for Open Sound Control. It was originally developed to be used to connect and control music equipment in a simple, open, and standard way. VRChat developed a system for it to be used to control the avatar and virtual trackers, allowing for fully body tracking on any headset that support [standalone VRChat](https://wiki.vrchat.com/wiki/Getting_Started#Standalone_devices). You can read the VRChat documentation on it [here](https://docs.vrchat.com/docs/osc-overview).

# Compatible headsets

This is the list of headsets that officially support standalone VRChat as of the time of writing this.
For a fully up to date list you can check VRChat's official wiki [here](https://wiki.vrchat.com/wiki/Getting_Started#Standalone_devices)

- Meta Quest 2
- Meta Quest 3
- Meta Quest 3S
- Meta Quest Pro
- Vive Focus Vision
- Vive XR Elite
- Pico 4
- Pico 4 Pro
- Pico 4 Ultra



# OSC Setup

Once you have set up your trackers and mounted them correctly, you can set up OSC. In the SlimeVR Server, navigate to Settings > OSC > VRChat OSC Trackers and enable OSC. 

### Software directly on quest
If the server is [running on the Quest](../tools/mobile-installation.md), leave the address as 127.0.0.1. 

### Software on other device (Phone, laptop, older PC etc)
If the server is not on the Quest, put in your Quest's IP. You can get this by opening the Quick Settings menu on your Quest, selecting Wifi, your currently connected network, and scroll down and click the arrow. The IP address is listed there ([video tutorial on how to find your Quest's IP](https://www.youtube.com/watch?v=gL1vgWubcJw)).

![image](https://github.com/user-attachments/assets/c6f43e36-882d-4146-ad1e-eaf441ec9437)


Now that you have the SlimeVR side set up, you can now connect VRChat to SlimeVR.

**Please perform a full reset now if the app is running on your quest directly**

Open VRChat on your Quest.

Using the Radial Menu, select Options at the top, OSC, and then enable it.
You can verify that the trackers are being seen by VRChat by selecting "OSC Debug" if you like.

![img](https://user-images.githubusercontent.com/737888/154179201-ec413948-7013-494a-81fb-4b5e1129cf5f.jpg)

Walk over to a mirror, open the quick menu, and press "Calibrate FBT". Make a T-Pose, lining yourself up with the T-Pose in the mirror. Press reset on the server (unless you're running it on your Quest). Pull both triggers, and you're done!

Note: If SlimeVR is running on your Quest and the trackers are initially misaligned, you can navigate to the IK settings in VRChat's quick menu and press "Auto-Center OSC Trackers" once or twice.

_Created by lordbagel42, Smeltie. SlimeVR OSC implementation by erimel._
