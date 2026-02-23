# DIY Trackers Guide
This guide helps you build SlimeVR trackers from scratch.

If you purchased a SlimeVR DIY Kit, see the [DIY Kit page](diy_kit_guide.html).

If this is your first time making DIY SlimeVR trackers, the DIY community recommends building:
- [meowCarrier trackers](https://github.com/Shine-Bright-Meow/meowCarrier) (Wi-Fi-based)
- [smol trackers](../smol-slimes/index.md) (nRF-based)

```admonish warning
PCB-based builds are strongly recommended over wired builds.  Wired builds are more error-prone, easier to short, and tend to be less mechanically reliable due to wire fatigue or disconnections.
```

## The Process
Before you start, decide on [how many trackers you may need](../slimevr101.html#how-many-trackers-do-you-need).

Next, you should decide if you want [extensions](../slimevr101.html#what-is-an-extension).

```admonish warning
The DIY community DISCOURAGES extensions:
- Extension cables tend to break even during normal gameplay.
- Some microcontrollers (e.g. ESP8266 like the Wemos D1 Mini) are not fast enough to reliably process the data from two modern IMUs (e.g. ICM-45686). Your trackers will drift a lot.
```

Once you know how many trackers and extensions you want, you can get started:

**1. Source the Components**

You'll need to purchase the parts required to put the project together. You can find a guide for that on our [components guide page](components-guide.md). There are a handful of choices you can make during this step, it is suggested you read the guide through to get an idea of what each part does. Please note that this documentation assumes you are using the most common microcontroller used for this project, the Wemos D1 Mini. You can use a different microcontroller with the required specifications, however the documentation on other microcontrollers is not as comprehensive.

> Please note, if you are looking for BNO085s, SlimeVR no longer sells these.
> If you are looking for ICM-45686, these can be found on the [SlimeVR Store](https://shop.slimevr.dev/products/slimevr-mumo-breakout-module-v1-icm-45686-qmc6309)

**2. Print / Buy a Case**

Many DIYers use Tupperware, Tic Tac or jiffy boxes, however the community has created a handful of [files for 3D printing](cases.md). You may also design your own case to 3D print.

**3. Assemble Your Trackers**

Refer to our [tracker schematics page](tracker-schematics.md). Enter the information for your sourced parts and use the resulting image to solder your trackers together. We are currently working on a more in-depth breakdown of this process.
For a quick guide to soldering, please refer to this video:

<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/P0YX_eKyfxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**Quick Tips!**

Most cheap soldering irons come with a roll of solder included—however, most of the time this is poor-quality, leaded, fluxless solder.

For best results, purchase unleaded, rosin core solder.

Leaded is possible but not advised for health and safety reasons.

Tin the tip of your new soldering iron before the first use (and between uses).

- All you have to do is heat up the soldering iron and generously add solder to the tip.

- Then wipe the tip on a wet sponge or in the copper/steel wool (or whatever your soldering iron came with for cleaning).

- This will coat the tip to keep it fresh and working optimally.

**4. Upload the Firmware**

Download the firmware from our GitHub, define what boards you have put in your tracker and how they are set up, and then flash it to the newly built trackers. You can find a full breakdown of this process in the [uploading the firmware guide](../firmware/updating-firmware.md).

**5. Install and set up the SlimeVR Server**

This final step requires you to install and configure your server to allow your trackers to be used on your computer. These steps can be found on our [SlimeVR Server setup page](../server/index.html).

*Created by calliepepper. Edited by Amebun.*
