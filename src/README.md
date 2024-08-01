# SlimeVR Documentation

Welcome to the SlimeVR documentation. This site covers how to [build your own SlimeVR trackers](diy/index.html), [install or update an existing tracker's firmware](firmware/index.html), [install and configure the SlimeVR Server](server/index.html), and [provides a wide collection of community built tools](tools/index.html).


## What is SlimeVR?

SlimeVR is a set of open hardware sensors and open source software that facilitates full-body tracking (FBT) in virtual reality. The project is built around creating a system that is customisable, hackable and can be modified to suit the needs of the user. Due to this, this documentation provides the full breakdown of not just how to set up your environment, but also how you could build a set of trackers yourself. For a more detailed breakdown of how the system works, check [SlimeVR 101](slimevr101.html).

## I have prebuilt trackers, what do I do now?

Welcome new SlimeVR user, we are happy to have you here! For the simplest set up process we suggest you visit our [Quick Setup Guide](quick-setup.md).

## How do I get my hands on those sweet sweet SlimeVR trackers?

There are currently multiple ways to approach putting together your own FBT solution using SlimeVR.



### 1. Buying trackers

#### Fully built trackers directly from SlimeVR

![Slime Trackers](assets/img/slimeVRTrackers.jpg)

You buy fully built trackers for pre-order at [Crowd Supply](https://www.crowdsupply.com/slimevr/slimevr-full-body-tracker). These trackers are the passion project of dedicated core members of SlimeVR, and due to chip shortages, shipping delays and the like we cannot guarantee shipping dates or turnaround time.

This option is a preorder. Please check the product page for estimated shipping times for new orders. Actual shipping times might differ due to production delays and other circumstances.

#### 3rd Party sellers

3rd Party sellers are becoming common, with commissions being offered on the [SlimeVR discord](https://discord.gg/SlimeVR) marketplace forum. Designs and specifications vary from offering to offering, so make sure to check exactly what you are getting! As one of the most important aspects of the tracker is the IMU (used to measure your movement), we suggest you check the [IMU comparison page](diy/imu-comparison.html) to get an idea of what to expect from any available tracker.

> **Caution:** SlimeVR cannot ensure 3rd party trackers meet any requirements of quality, please assume that purchasing from a 3rd party seller is the equivalent of buying from a small creator, and your own research into the quality of these trackers is important. We suggest you check reviews or talk to others that have purchased from the seller in order to get an idea of what to expect. If any of your purchased 3rd party trackers develop a fault, contact the seller for help. However, you may need some understanding of soldering in order to repair them yourself.

### 2. Building them yourself

> **Note:** You need at least 5 trackers for proper full body tracking (FBT). Alternatively, you can build a single tracker for just waist tracking if you wish to test the tracking without investing in a full kit. Other options do exist (such as using phones or joycons), but these options will be restricted by the device you use, and as such you will see much worse results.

#### Entirely from scratch

![Example DIY build](assets/img/exampleBuild.jpg)<br>
*Example build by NightyIceC00kie*

Building trackers is the most common way users have trackers at the time of writing. This documentation provides a full [guide to building trackers from scratch](diy/index.html), which provides lists of full components needed, where to buy them and schematics for many combinations of IMUs and Microcontrollers.

This is the cheapest and fastest way to obtain trackers, assuming you have a soldering iron on hand a single tracker can be put together for under $20.

DIY builds require time to assemble and may require self-repairs from time to time.

> Please note, if you are looking for BNO085s (the suggested IMU) SlimeVR may have [spares for sale that can be found here](https://slimevr.myshopify.com/products/slimevr-imu-module-bno085).

#### Pre-order the official DIY Kit on Crowd Supply

![DIY kit](assets/img/DIY_KIT_box-contents.jpg)<br>
*A prototype of DIY-Kit boards and wires.*

You buy the [**official DIY Kit**](https://www.crowdsupply.com/slimevr/slimevr-full-body-tracker) which includes only the boards and connecting wires for the Tracker Extensions. It does not come with enclosures, straps, batteries, or other accessories. These parts will need to be sourced by you. See [DIY Kit Guide](diy/diy_kit_guide.html) for more information on how to build it.

This option requires no or little soldering, provides tested boards, best available IMUs, allows for a small design, and is a cheaper alternative to buying completed SlimeVR trackers. It also allows you to customize cases and straps.

However, at this point you could just buy completed SlimeVR trackers as the shipping times and chip shortages still affect this option.

This option is a preorder. Please check the product page for estimated shipping times for new orders. Actual shipping times might differ due to production delays and other circumstances.

### 3. Alternative tracking options

As SlimeVR is open sources and has roots in the idea of experimentation and exploration, other options to replace custom built trackers have been built. This includes:

- Using [a phone in place of a tracker](tools/owoTrack.md).
- Using [Nintendo Joycons in place of trackers](tools/slimevr-wrangler.html).

**Please note that both of these options are subpar when compared to trackers, but are useful for experimenting. We suggest you do not invest heavily in buying old phones or joycons, as most users of these options only consider them stopgaps at best.**

Note that these options vary depending on make and model (3rd party joycons almost never work for example), there have been issues with connections, the application being suspended, and a handful of others. Phone or Joycon straps are also required to be sourced based on the objects shape, size, and mount location.


If you have any problems, feel free to reach out on the [SlimeVR discord](https://discord.gg/SlimeVR).

*Written by adigyran and calliepepper, edited by QuantumRed#0001, calliepepper, Spazzwan emojikage, nwbx01, and tomyum3dp, styled by calliepepper*
