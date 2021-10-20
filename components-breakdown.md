---
layout: page
nav_order: 1
parent: Building your trackers
---

# Components breakdown
{:.no_toc}

There are **no price guarantees**, the prices listed below are hardcoded into this guide and do not updated with fluctuations that happen after time of writing.

## Calculate your costs
{:.no_toc}
**Number of trackers**

<input id="5imu" type="radio" name="diy-set" value="5"> <label for="5imu">Lower-Body Set (5 IMU's)</label>&nbsp; &nbsp;|&nbsp;
<input id="6imu" type="radio" name="diy-set" value="6" checked="checked"> <label for="6imu">Core Set (6 IMU's)</label>&nbsp; &nbsp;|&nbsp;
<input id="8imu" type="radio" name="diy-set" value="8"> <label for="8imu">Enhanced Core Set (8 IMU's)</label>

---

<table>
<thead>
<tr>
<th>Component</th>
<th>Choice</th>
<th>Amount</th>
<th>Cost per</th>
<th>Cost with shipping</th>
<th style="min-width: 200px">Quick link</th>
</tr>
</thead>
<tbody id="diy-components">
</tbody>
</table>

**TOTAL COST**: ~$<span id="diy-total"></span>

## Component breakdown
{:.no_toc}

A complete system of SlimeVR trackers can be made from around 60$ to 250$, depending on what you have at home already and the quality of tracking you decide on.

One of the most impactful choice you make is what type of IMU (Inertial measurement unit) you use, which will determine the price point as well as the quality of the tracking.

Another important consideration is where you buy your components. This guide will use costs from Aliexpress, which is where most of us buy our components from due to both price and availability. Unfortunately the shipping times from there are quite long, with many orders taking between 3-6 weeks to arrive. You can also buy from Amazon or other local retailers, but pricing will vary wildly.

* TOC
{:toc}

### Wemos D1 Mini

The Wemos D1 Mini is an ESP8266 dev board, it's basically a small computer which handles the thinking and WiFi connection. You can usually find these at around $2 each, and you need at least 5 of them ([Aliexpress](https://www.aliexpress.com/wholesale?SearchText=D1+mini)). You can use a different microcontroller with the required specifications, however the documentation on other microcontrollers is not as comprehensive. If you decide to do this, please check the #diy channel in our [discord](https://discord.gg/SlimeVR) for more information.


### IMU (Inertial measurement unit)

The SlimeVR system uses several IMUs in order to determine your current pose. While there are a handful of options the core choice is BNOs or MPUs (see <https://github.com/SlimeVR/SlimeVR-Tracker-ESP> for more).

To know how many IMU's you need, you need to decide what parts of your body you want to be tracked.

* Lower-Body Set (5 IMUs) - Your waist, legs, knees and feet are positionally tracked. Any bending of the waist or sitting down will have issues with tracking, and the orientation of your feet will not be tracked.
* Core Set (6 IMUs) - In addition to the previous set this adds a tracker to the chest, this allows for much more accurate tracking while you're laying down, sitting or even just bending over.
* Enhanced Core Set (8 IMUs) - In addition to the previous set, you can now also wiggle your peets. If you plan on lying or sitting down a lot this adds a lot of emotiveness to your poses.

At the time of writing, elbows are also being developed.

#### BNO085

This is the most accurate of the IMUs supported by the SlimeVR project, but suffers from both price and availability. These chips used to be about $15 but have gone up in price to about $20 ([Aliexpress](https://www.aliexpress.com/wholesale?SearchText=BNO085)). You may be able to find them elsewhere, but they tend to be in low stock and inflated in price. Check our [discord](https://discord.gg/SlimeVR) for more up-to-date information.

#### MPU6050

The MPUs are much easier to purchase and does not suffer from availability issues, but unfortunately will drift more over time than the BNO tracker. It is still a very good choice if you're on a budget and want some kind of full body tracking. These are about $1 each ([Aliexpress](https://www.aliexpress.com/wholesale?SearchText=MPU6050)) and also can be found on Amazon for faster shipping.

### Batteries

There are a bunch of options for batteries, but the most commonly used is a 3.7v Li-ion Polymer battery in the 804040 form factor. You need one per each Wemos D1 Mini you're using. These are easily purchased at Aliexpress in both a 10 pack for $24 ([Aliexpress](https://www.aliexpress.com/item/1005002559604104.html)) or a 4 pack (you will need to get one additional) [Aliexpress](https://www.aliexpress.com/item/33021202630.html) ($15 total).

### Charging board - TP4056

To charge the batteries above, you need to get a charge controller that will make sure the batteries are safely charged. These are cheap at only $0.34 each ([Aliexpress](https://www.aliexpress.com/item/32649780468.html))

### Power switches

You want to be able to shut off your SlimeVR trackers, to conserve battery and lifetime of the trackers. These are also important as you should not charge the trackers while they are still active. You can get 10 switches for 2.37$ ([Aliexpress](https://www.aliexpress.com/item/32975535599.html)).

### Wiring

To solder the different components together you need some kind of wiring. You probably have some old cables lying around, maybe a VGA cable you can open up, or ethernet, or usb. You can also get new wire. Or get new cable, 22 AWG 5m ([Aliexpress](https://www.aliexpress.com/item/1005002632016529.html)) for $2.27.

If you're getting the Core Set or Enhanced Core Set, it's also nice to have some connectors so you can easily remove the extensions if needed. You can use 5 pin JST connectors ([Aliexpress](https://www.aliexpress.com/item/1005002304293157.html)), 5 pcs for $1.55.

### Cases

This is where you will have to find an option yourself. If you have access to a 3d printer you can print some cases for ~$10 worth of filament. There's some great models already in our [discord's #diy channel](https://discord.gg/SlimeVR).

There's also the option of buying an enclosure to fit all your components, but remember to make sure that the metal of the different components aren't touching. A somewhat popular solution for this is this pack of 6 for $8 on [Amazon](https://www.amazon.com/dp/B08T97JD6Z). Make sure to check dimensions on both pre-bought and 3D printed cases so that it fits your chosen components.

### Straps

While you can attach these directly to clothing, the most common solution is elastics straps, a 5 pack can be bought for $3-$5 ([Aliexpress](https://www.aliexpress.com/item/1005002350231996.html)). Because of the difference in sizes from point to point, you may find it easier to buy different lengths for the leg tracker when compared to the waist.

### Tools

You will also need some tools to be able to put together a tracker. You might have these already or have a friend or a maker space nearby where you can borrow these:

* A soldering iron and solder.
* A wire cutter.
* (Optional) A multimeter to check your connections.

If you haven't done a DIY project like this, look up some tutorials on youtube and feel free to ask questions in the #diy channel in our [discord](https://discord.gg/SlimeVR).

*Created by Carl (<https://github.com/carl-anders>), edited by CalliePepper#0666*
<script src="assets/js/diy.js"></script>
<style>@media (min-width: 50rem) { .main { max-width: 1100px !important; } }</style>
