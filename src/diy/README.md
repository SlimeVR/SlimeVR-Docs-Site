# DIY Trackers Guide
This guide is to help you build your trackers from scratch. Please note: if you have purchased the DIY Kit from SlimeVR, please visit the [DIY Kit page](diy_kit_guide.html).


## The Process
Before you start, decide on [how many trackers you may need](../slimevr101.html#how-many-trackers-do-you-need).  
Next, you should decide if you want [extensions](../slimevr101.html#what-is-an-extension).
While extensions can reduce cost, and can be more comfortable on some body parts like the feet, they are often unreliable, and can be hard to make for first time builders.
There are some things you can do to improve this situation.
Hardwired extensions instead of removable ones are often times more reliable.
If you choose to use extensions, make sure your case has adequate strain relief.
Ultimately, the choice comes down to what balance of cost, comfort, reliability, and ease of building is right for you.
Once you know how many trackers you want, you can get started:  

**1. Source the Components**

You'll need to purchase the parts required to put the project together. You can find a guide for that on our [components guide page](components-guide.md). There are a handful of choices you can make during this step, it is suggested you read the guide through to get an idea of what each part does. Please note that the documentation on this page is assuming you are using the most common microcontroller used for this project, the Wemos D1 Mini. You can use a different microcontroller with the required specifications, however the documentation on other microcontrollers is not as comprehensive.

> Please note, if you are looking for BNO085s SlimeVR may have [spares for sale that can be found here](https://shop.slimevr.dev/products/slimevr-imu-module-bno085).

**2. Print / Buy a Case**

Many DIYers use Tupperware, Tic Tac or jiffy boxes, however the community has created a handful of [files for 3D printing](cases.md).

**3. Assemble Your Trackers**

Refer to our [tracker schematics page](tracker-schematics.md). Enter the information for your sourced parts and use the resulting image to solder your trackers together. We are currently working on a more in-depth breakdown of this process.
For a quick guide to soldering, please refer to this video:

<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/P0YX_eKyfxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**Quick Tips!**

Most cheap soldering irons come with a roll of solder included.
However most of the time this is leaded fluxless solder of very poor quality.
Ideally you want some unleaded rosin core solder for the best and safest results.
Leaded is possible but not adviced.

Tin the tip of your new soldering iron before the first use (and between uses).
All you have to do is heat up the soldering iron and generously add solder to the tip.
Then wipe the tip on a wet sponge or in the copper/steelwool (or whatever your soldering iron came with).
This will coat the tip and keep it fresh and working optimally.

**4. Upload the Firmware**

Download the firmware from our GitHub, define what boards you have put in your tracker and how they are set up, and then upload it to the newly built trackers. You can find a full breakdown of this process in the [uploading the firmware guide](../firmware/updating-firmware.md).

**5. Install and set up the SlimeVR Server**

This final step requires you to install and configure your server, allowing the tracking data to be parsed on your local machine. After doing so, all that's left is to configure tracker roles and you are ready to go! The steps to do all this can be found on our [SlimeVR Server setup page](../server/index.html).

*Created by calliepepper*
