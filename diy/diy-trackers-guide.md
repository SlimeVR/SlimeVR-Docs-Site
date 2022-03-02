---
layout: page
nav_order: 3
has_children: true
---

# DIY trackers guide
{:.no_toc}
So you want to build your own SlimeVR trackers?


## The process
{:.no_toc}
Once you know how many you need, it's time to get started:

**1. Source the components**

You'll need to purchase the parts required to put the project together. You can find a guide for that on our [components guide page](components-guide.md). There are a handful of choices you can make during this step, it is suggested you read the guide through to get an idea of what each part does. Please note that the documentation on this page is assuming you are using the most common microcontroller used for this project, the Wemos D1 Mini. You can use a different microcontroller with the required specifications, however the documentation on other microcontrollers is not as comprehensive.

**2. Print / buy a case**

Many DIYers use tupperware, Tictac or jiffy boxes, however the community has created a handful of [files for 3D printing](cases.md).

**3. Assemble your trackers**

Refer to our [tracker schematics page](tracker-schematics.md). Enter the information for your sourced parts and use the resulting image to solder your trackers together. We are currently working on a more in-depth breakdown of this process.  
For a quick guide on how to solder your trackers, please refer to this video:  

<div class="video-container">
<iframe width="100%" height="auto" src="https://youtu.be/P0YX_eKyfxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**4. Upload the firmware**

Download the firmware from our github, define what boards you have put in your tracker and how they are set up, and then upload it to the newly built trackers. You can find a full breakdown of this process in the [uploading the firmware guide](../firmware/updating-firmware.md).

**5. Install and set up the SlimeVR server**

This final step requires you to install and configure your server, allowing the tracking data to be parsed on your local machine. After doing so, all that's left is to configure tracker roles and you are ready to go! The steps to do all this can be found on our [SlimeVR Server setup page](../server-setup/slimevr-setup.md).

*Created by CalliePepper#0666*
