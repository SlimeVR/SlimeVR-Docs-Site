---
layout: page
title: Home
nav_order: 1
---

# SlimeVR DIY guide

Welcome to the SlimeVR DIY guide. In this guide you will learn how to build your own SlimeVR trackers or use your mobile phones as SlimeVR trackers.

> **Note:** You need at least 5 trackers (built boards or phones) for proper full body tracking. Alternatively, you can build a single tracker or use 1 phone/tablet for just waist tracking if you wish to test the tracking without investing in a full kit.

You can build trackers from available boards (that you can buy from shops such as AliExpress or Amazon), create your own custom PCB, or [buy an official DIY kit](https://www.crowdsupply.com/slimevr/slimevr-full-body-tracker).

**Guide still WIP, building instructions to come**, but you can check our [Discord](https://discord.gg/SlimeVR) for more info, schematics and rough guides.

## So you want to DIY, what are the options?

![](https://i.imgur.com/dLJBuM9.jpg)
*Example build by NightyIceC00kie*

### 1. Entirely from scratch

You get yourself a [**NodeMCU**](https://www.aliexpress.com/wholesale?SearchText=NodeMCU) or analog (a dev board with an ESP8266 or ESP32, currently recommended is the [WeMos D1 Mini](https://www.aliexpress.com/wholesale?SearchText=D1+Mini) for it's small size, or the [TTGO T-Base ESP8266](https://www.aliexpress.com/wholesale?SearchText=TTGO+T-Base+ESP8266) for it's integrated battery charging circuit), an **IMU** [supported IMUs](https://github.com/SlimeVR/SlimeVR-Tracker-ESP/blob/main/README.md), **a battery**, and a **battery charger** (depends on the battery, for Li-ion's and LiPo's the most commonly used is the TP4056). Can add some sliding switches, and a few resistors to measure battery percentages. You then solder it all together (soldering is important as good connections to the pins is required for your tracker to function).

**Pros:** Cheapest and quickest to get your hands on.

**Cons:** You will need to solder some wires, have a basic understanding of electronics, and you are limited in how small the trackers can get.

### 2. Some soldering required

You get yourself an **IMU** and a **LiPo battery** (flat like in phones basically), and you **order a base board from a custom PCB manufacturer like [jlcpcb](https://jlcpcb.com/)** (gerber and BOM files will be provided). You solder the battery to the board, solder the module onto the board, and you're good to go.

**Pros:** much cleaner, smaller, almost the same as production unit.

**Cons:** might cost a bit more than buying official SlimeVR trackers due to economics of scale, and depending on the finished board design it might be a bit bigger than buying from me (because of the IMU breakout board).

### 3. Minor assembly

You buy the [**official DIY Kit**](https://www.crowdsupply.com/slimevr/slimevr-full-body-tracker) which includes all the boards and cables you need, get a **LiPo battery**, attach batteries to the boards. All you need is to 3D print (or build) yourself a nice casing and get straps (or get creative and tape them with electrical tape to your body, idk :D).

**Pros:** no or almost no soldering required, tested boards, smallest possible design, cheaper than buying completed SlimeVR trackers. You can customize cases and straps for yourself as you want.

**Cons:** at this point you could just buy completed SlimeVR trackers, all import limitations and shipping costs apply. It might cost a bit more than the first option (but that remains to be seen, due to economics of scale).

## Too daunting? You can currently back us on Crowd Supply

[We currently have kits for backing](https://www.crowdsupply.com/slimevr/slimevr-full-body-tracker).

* Campaign will last for 6 weeks.
* You will be able to order slimes after the campaign is over, but I don't now yet any estimates on shipping for such orders. Maybe later, maybe at the same time.

## Want to use phones?

It is possible to use phone in place of trackers, please check the [owoTrack mobile application](faq_owo.md).

## Common guides

Regardless of the path you choose, you will still need to go through these steps for configuration:

1. Prepare your firmware using [this guide](upload_firmware_guide.md) (pay close attention to step eight).
1. Setup SlimeVR Server using [this guide](slimevr-setup.md).
1. To calibrate body values, refer to [Skeleton auto-configuration](skeleton_auto_config.md).

If you have any problems, feel free to reach out on the [SlimeVR discord](https://discord.gg/SlimeVR).

*Written by adigyran#1121, edited by QuantumRed#0001, CalliePepper#0666 and Emojikage#3095, styled by CalliePepper#0666*
