---
layout: page
nav_order: 2
has_children: true
---

# DIY Guide

So you want to build your own SlimeVR trackers?

## How many trackers do you need?

This depends on how you use your FBT in VR as follows:

* Lower-Body Set (5 IMUs) - Your waist, legs, knees and feet are positionally tracked. Any bending of the waist or sitting down will have issues with tracking, and the orientation of your feet will not be tracked.
* Core Set (6 IMUs) - In addition to the previous set this adds a tracker to the chest, this allows for much more accurate tracking while you're laying down, sitting or even just bending over.
* Enhanced Core Set (8 IMUs) - In addition to the previous set, you can now also wiggle your peets. If you plan on lying or sitting down a lot this adds a lot of emotiveness to your poses.

For more information on what these point of tracking look like, please refer to this video:

<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/Nl_6eQV32ys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Once you know how many you need, it's time to get started:

**1. Sourcing the components**

You'll need to purchase the parts you need to put the project together, you can find a guide for that on our [components breakdown page](components_breakdown.md).

**2. Assemble your tracker**

Refer to our [tracker schematics page](tracker_schematics.md). Enter the information for your tracker and use the resulting image to solder your tracker together. We are currently working on a more in depth breakdown of this process.

**3. Upload the firmware**

This steps involves downloading the firmware from our github, defining what boards you have put in your tracker and how they set up, and then uploading it to the newly built tracker. You can find a full breakdown of this process on the [uploading the firmware guide](upload_firmware_guide.md).

**4. Install and set up the SlimeVR server**

This final step requires you to install and configure your server, allowing the tracking data to be parsed on your local machine. After doing so all that's left is to configure SteamVR's tracker locations and you are ready to go! The steps to do all this can be found on our [SlimeVR Server setup page](slimevr_setup.md).

*Created by CalliePepper#0666. Video created by ZRock35#9574*