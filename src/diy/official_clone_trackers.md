# Official DIY Clone Trackers

Due to the nature of SlimeVR being open-source it is entirely possible to create your own trackers based on the official design files.
Especially now that the [SlimeVR Store](https://shop.slimevr.dev) started selling components such as: cases, cables and IMUs!

* TOC
{:toc}

## SlimeVR Store
Since a little while now there is an official [SlimeVR Store](https://shop.slimevr.dev)!
Here you can as of now buy replacement cases, cables and even BNO modules!

## Where to find the production files
You can find the production files for both the main tracker, extension boards and the BNO module here: [Main Tracker](https://oshwlab.com/slimevr/slimevr-main-board), [Extension Board](https://oshwlab.com/eirenliel/slimevr-diy-tracker-extension) and [BNO Module](https://oshwlab.com/eirenliel/bno085-module).
These will link you to the respective OSHWLab pages where you can download the files or directly open them in the online version of EasyEDA.

## How to order SlimeVR PCBs from a manufacturer
Upon opening either of the two links above you will find yourself on the OSHWLab website. From here you can select: "Open in Editor" to open the files in EasyEDA.
**You do not have to download any software for this process since EasyEDA can run in your browser!**
This will open both the schematic and PCB Files, here you can admire, edit or adjust anything if needed for your use case (not required for official clone trackers.)
Now head over to the top bar within easyEDA and under "Fabrication" click "PCB Fabrication file (gerber)" and click no on both options considering EasyEDA has not yet been configured and the files are already done.
From here you can do a one click order.
You should be able to leave all the settings as is aside from Surface Finish, set this to LeadFree HASL or ENIG!
*You can also change the color of the solder mask if you so desire.*
After this you should be able to continue with the ordering process and then the wait begins!

**BEWARE**
Sometimes when you get redirected to JLCPCB it won't fully load, in this case you might have to try again.

## Soldering the IMU to the main PCB
The soldering process for official slimes is a little different than your usual DIY slimes. Where normally DIY slimes are soldered together with through hole wiring, SlimeVR on the other hand uses castelated edges. This makes soldering the IMU very fast and efficient.

What do you need to solder the IMU to the main PCB?
- Soldering iron.
- Leadfree Solder.
- Chisel style soldering tip (optional but recommended).
- Assembly jig (optional).

Instructions:
Place the IMU module on top of the main tracker PCB as shown below.
![image](../assets/img/tracker_IMU_orientation.png)
Now solder the 6 castelated edges to the main board as shown in the picture above.
Using a chisel tip makes this process significantly faster and easier.
For more soldering tips you can check out this video:
<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/P0YX_eKyfxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


## Flashing the firmware
To flash the firmware you will need:
- USB-C cable with data pins (official SlimeVR cable is recommended).
- Paperclip or tweezers to bridge a connection on the back.

## Final Assembly  
For final assembly we would like to refer to the official SlimeVR repair guide. This contains information regarding both assembly and dissasembly. On an additional note, the sticky foam pad usually sits on the printed side of the battery (in the case of production units).
<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/OxOgkBMEzME?si=jFoO5UXZPsxHKFEr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<details>
<summary><u>Written Assembly Guide</u></summary>

|Amount |Part  |
|:---------:|:----:|
|1x |Case Top|
|1x |Case Bottom|
|2x |M2.5x10 Screw or M2.5x12|
|1x |PCB|
|1x | Battery|
|1x |Foam Pad|
|1x | Sticker|

Attach a foam pad to the center of the battery (text side).
Attach battery cable to the PCB.
Turn on the tracker by sliding the switch to the right, make sure the blue light blinks continuously.
Turn off the tracker by sliding the switch to the left!
Place the PCB with the components facing down into the top case(make sure to insert at an angle, the ports are aligned and it sits flush).
Place the battery with the foam side against the PCB, making sure the cable gets tucked under the battery.
Place the bottom case halve on the assembled top halve.
Screw the m3 screws into the cases to securely close it up, be careful not to pinch the battery cable!
Place the sticker on the back.




</details>

---
*Created by Smeltie*