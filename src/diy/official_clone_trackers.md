# Official DIY Clone Trackers

Due to the nature of SlimeVR being open-source it is entirely possible to create your own trackers based on the official design files.
Especially now that the [SlimeVR Store](https://shop.slimevr.dev) started selling components such as: cases, cables and IMUs!

* TOC
{:toc}

## SlimeVR Store

## Where to find the production files
You can find the production files for both the main tracker, extension boards and the BNO module here: [Main Tracker](https://oshwlab.com/slimevr/slimevr-main-board), [Extension Board](https://oshwlab.com/eirenliel/slimevr-diy-tracker-extension) and [BNO Module](https://oshwlab.com/eirenliel/bno085-module).

## How to order SlimeVR PCBs from a manufacturer
Upon opening either of the two links above you will find yourself on the OSHWLab website. From here you can select: "Open in Editor" to open the files in EasyEDA.
**You do not have to download any software for this process since EasyEDA can run in your browser!**
This will open both the schematic and PCB Files, here you can admire, edit or adjust anything if needed for your use case (not required for official clone trackers.)
Now head over to the top bar within easyEDA and under "Fabrication" click "PCB Fabrication file (gerber)" and click no on both options considering EasyEDA has not yet been configured and the files are already done.
From here you can do a one click order.
You should be able to leave all the settings as is aside from Surface Finish, set this to LeadFree HASL or ENIG!
*You can also change the color of the solder mask if you so desire.*
After this you should be able to continue with the ordering process and then the wait begins!

## Soldering the IMU to the main PCB
The soldering process for official slimes is a little different than your usual DIY slimes. Where normally DIY slimes are soldered together with through hole wiring, SlimeVR on the other hand uses castelated edges. This makes soldering the IMU very fast and efficient.

What do you need to solder the IMU to the main PCB?
- Soldering iron.
- Leadfree Solder.
- Chisel style soldering tip (optional).
- Assembly jig (optional).

## Flashing the firmware
To flash the firmware you will need:
- USB-C cable with data pins (official SlimeVR cable is recommended).
- Paperclip or tweezers to bridge a connection on the back.

## Final Assembly  
For final assembly we would like to refer to the official SlimeVR repair guide. This contains information regarding both assembly and dissasembly. On an additional note, the sticky foam pad usually sits on the printed side of the battery (in the case of production units).
<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/OxOgkBMEzME?si=jFoO5UXZPsxHKFEr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</details>

---
*Created by Smeltie*