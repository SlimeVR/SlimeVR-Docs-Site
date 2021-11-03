---
layout: page
nav_order: 2
has_children: true
---

# DIY trackers guide

So you want to build your own SlimeVR trackers?

## How many trackers do you need?

Depending on how you plan to use FBT in VR, choose one of the following options:

* Lower-Body Set (5 IMUs) - Your waist, legs, knees and feet are positionally tracked. Any bending of the waist or sitting down will have issues with tracking, and the orientation of your feet will not be tracked.
* Core Set (6 IMUs) - In addition to the previous set this adds a tracker to the chest, this allows for much more accurate tracking while you're laying down, sitting or even just bending over.
* Enhanced Core Set (8 IMUs) - In addition to the previous set, you can now also wiggle your peets. If you plan on lying or sitting down a lot this adds a lot of emotiveness to your poses.

For more information on what these tracking options look like, please refer to this video:

<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/Nl_6eQV32ys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## What is an extension?

An extension is a singular auxiliary IMU attached to a primary tracker and placed at another location. This allows you to build a secondary tracker without the need for an extra battery, charge board and microcontroller. 

![img](https://i.imgur.com/OxED2eX.png)

*Example extension build by Rames The Generic#3540*

Due to issues with the extension's cord length we recommend the extension being no further than 45cm from your primary tracker. 

The suggested extension locations are:

1. A chest extension attached to the waist tracker.
1. A left foot extension attached to the left ankle tracker.
1. A right foot extension attached to the right ankle tracker.

On the Crowd Supply store page and on our discord server, you may find a notation that specifies the number of primary and auxiliary IMUs with a plus sign. For example, the Enhanced Core Set noted above would be called a 5+3 set up. For a better visual on how this looks when on a person, please check the [recommended mounting points section of the server set up](https://docs.slimevr.dev/slimevr-setup.html#recommended-mounting-points).

Please note that building extensions is not necessary, the foot and chest trackers will work as standalone trackers if you would prefer to build this way. However, these docs assume that you are building them as extensions.

## The process

Once you know how many you need, it's time to get started:

**1. Source the components**

You'll need to purchase the parts required to put the project together, you can find a guide for that on our [components guide page](components-guide.md). There are a handful of choices you can make during this step, it is suggested you read the guide through to get an idea of what each part does. Please note that the documentation on this page is assuming you are using the most common microcontroller used for this project, the Wemos D1 Mini. You can use a different microcontroller with the required specifications, however the documentation on other microcontrollers is not as comprehensive.

**2. Assemble your trackers**

Refer to our [tracker schematics page](tracker-schematics.md). Enter the information for your sourced parts and use the resulting image to solder your trackers together. We are currently working on a more in-depth breakdown of this process.

**3. Upload the firmware**

Download the firmware from our github, define what boards you have put in your tracker and how they are set up, and then upload it to the newly built trackers. You can find a full breakdown of this process in the [uploading the firmware guide](upload-firmware-guide.md).

**4. Install and set up the SlimeVR server**

This final step requires you to install and configure your server, allowing the tracking data to be parsed on your local machine. After doing so, all that's left is to configure tracker roles and you are ready to go! The steps to do all this can be found on our [SlimeVR Server setup page](slimevr-setup.md).

*Created by CalliePepper#0666. Video created by ZRock35#9574*