# SlimeVR Documentation

Welcome to the SlimeVR documentation. This site covers how to [build your own SlimeVR trackers](diy/index.html), [install or update an existing trackers' firmware](firmware/index.html), [install and configure the SlimeVR Server](server/index.html), and [provides a wide collection of community built tools](tools/index.html).

## What is SlimeVR?

SlimeVR is a set of open source software and hardware sensors designed to facilitate full-body tracking (FBT) in virtual reality. The project is built around the core concept of creating a system that can be fully customized to suit the needs of each specific user. This documentation aims to provide a full breakdown on how to set up prebuilt trackers, as well as aiming to provide documentation on the process of building compatible DIY slime trackers. For a more detailed breakdown on how SlimeVR works, check [SlimeVR 101](slimevr101.html).

## I have prebuilt trackers, what do I do now?

Welcome new SlimeVR user, happy to have you here! For the simplest set up process we suggest you visit our [Quick Setup Guide](quick-setup.md).

## How do I get my hands on those sweet sweet SlimeVR trackers?

There are currently multiple ways to approach putting together your own SlimeVR FBT solution.

### 1. Buying trackers

#### Fully built trackers directly from SlimeVR

![Slime Trackers](assets/img/slimeVRTrackers.jpg)

You can buy fully built trackers for pre-order at [Crowd Supply](https://www.crowdsupply.com/slimevr/slimevr-full-body-tracker). These trackers are the passion project of dedicated core members of SlimeVR, and due to chip shortages, shipping delays and the like we cannot guarantee shipping dates or turnaround time.

This option is a preorder. Please check the product page for estimated shipping times for new orders. Actual shipping times might differ due to production delays and other circumstances.

### 2. 3rd Party Sellers

3rd Party sellers are common, with prebuilt trackers and custom commissions offered on the [SlimeVR discord](https://discord.gg/SlimeVR) marketplace forum. Designs and specifications vary from seller to seller, so make sure to check exactly what you're getting!

As the two most important aspects of every slime tracker are the IMU (used to measure your movement) and communication protocol (how the tracker communicates with your device), we suggest you check the [IMU comparison page](diy/imu-comparison.html) to get an idea of what to expect from any available tracker.

> **Caution:** SlimeVR cannot ensure 3rd party trackers meet any requirements of quality, please assume that purchasing from a 3rd party seller is the equivalent of buying from a small creator, and your own research into the quality of these trackers is important. We suggest you check reviews or talk to others that have purchased from the seller in order to get an idea of what to expect. If any of your purchased 3rd party trackers develop a fault, contact the seller for help. However, you may need some understanding of soldering and how slimes work to fix them yourself.

> **Note:** You need at least 5 trackers for proper full body tracking (FBT). Alternatively, you may build or purchase a single tracker for exclusively chest tracking if you wish to test partial full body without investing in a full kit. Other options do exist—such as using phones or joycons—but the tracking quality of these options is heavily restricted by the specific device. Expect much worse results.

### 3. Building trackers yourself

#### Entirely from scratch

![Example DIY build](assets/img/exampleBuild.jpg)<br>
*Example build by NightyIceC00kie*

Building trackers is currently the cheapest method of obtaining SlimeVR trackers at the time of writing. This documentation provides a full guide to building trackers from scratch, which provides lists of full components needed, where to buy them and schematics for most combinations of IMUs and Microcontrollers.

The most common way of assembling SlimeVR trackers is by soldering together multiple PCBs onto a carrier board. 
- For WiFi based Slimes ("big" or "normal" slimes), the component and assembly guide can be viewered [here](diy/index.html). 
- For nRF ("Smol") Slimes, the component and assembly guide can be viewed [here](smol-slimes/index.html).

PCB based builds are also frequently used, which may be assembled through JLPCB or other manufacturers inexpensively. These boards can greatly simplify the process and amount of soldering needed for reliable trackers. Many popular options are available, with instructions and 3D printable files. [community cases](diy/cases.md)

DIY builds require time to assemble and may require self-repairs from time to time.

> Please note, if you are looking for ICM-45686 (the suggested IMU), the SlimeVR store has [modules for sale](https://shop.slimevr.dev/products/slimevr-mumo-breakout-module-v1-icm-45686-qmc6309).

#### Purchase the official DIY Kit on Crowd Supply

![DIY kit](assets/img/DIY_KIT_box-contents.jpg)<br>
*A prototype of DIY-Kit boards and wires.*

You buy the [**official DIY Kit**](https://www.crowdsupply.com/slimevr/slimevr-full-body-tracker#products) which includes only the boards, extensions, and cables for the extensions. It does not come with enclosures, straps, batteries, or other accessories. These parts will need to be sourced by you. See [DIY Kit Guide](diy/diy_kit_guide.html) for more information on how to build it.

This option requires no or little soldering, provides tested boards, best available IMUs, allows for a small design, and is a cheaper alternative to buying completed SlimeVR trackers. It also allows you to customize cases and straps.

Example: [TinyOfficial-Case](https://github.com/ZRock35/TinyOfficial-Case)

However, while cost is significantly lower, this option is still a pre-order. It is recommended to buy batteries and other required parts at the time of purchase to reduce wait time between components.

Please check the product page and discord for estimated shipping times for new orders. Actual shipping times might differ due to production delays and other circumstances.

### 4. Alternative tracking options

As SlimeVR is open source and has roots in the idea of experimentation and exploration, other options to replace custom built trackers have emerged. This includes:

- Using [a phone in place of a tracker](tools/owoTrack.md).
- Using [Nintendo Joycons in place of trackers](tools/slimevr-wrangler.html).
- Using [Mocopi trackers with SlimeVR server](https://www.sony.net/Products/mocopi-dev/en/documents/beta/HowToBetaFunctions_SlimeVR.html)
- Using [HaritoraX trackers with SlimeVR server](tools/slimetora.md)

**Please note that these options may be subpar when compared to actual SlimeVR trackers, but are useful for experimenting and in some cases can work well. We suggest you do not invest heavily in buying old phones or joycons, as most users of these options only consider them stopgaps at best.**

Note that these options vary depending on make and model (for example, 3rd party joycons almost never work), users will commonnly experience issues with connection, application crashes, and a handful of others. Phone or Joycon straps are also required to be sourced based on the objects shape, size, and mount location.

If you have any problems, feel free to reach out on the [SlimeVR discord](https://discord.gg/SlimeVR).

*Written by adigyran and calliepepper, edited by Amebun, QuantumRed#0001, calliepepper, Spazzwan emojikage, nwbx01, and tomyum3dp, styled by calliepepper. Reformatted by Amebun.*
