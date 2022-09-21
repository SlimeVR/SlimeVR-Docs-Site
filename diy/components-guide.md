---
layout: page
nav_order: 1
parent: DIY trackers guide
---

# Components guide
{:.no_toc}

The costs shown should be taken as a **rough approximation** due to prices changing over time. Prices are in USD.

## Calculate your costs
{:.no_toc}
**Number of trackers**

<input id="5imu" type="radio" name="diy-set" value="5"> <label for="5imu">Lower-Body Set - 5 Trackers</label>&nbsp; &nbsp;|&nbsp;
<input id="6imu" type="radio" name="diy-set" value="6" checked="checked"> <label for="6imu">Core Set - 5 Trackers, 1 Extension</label>&nbsp; &nbsp;|&nbsp;
<input id="8imu" type="radio" name="diy-set" value="8"> <label for="8imu">Enhanced Core Set - 5 Trackers, 3 Extensions</label>&nbsp; &nbsp;|&nbsp;
<input id="10imu" type="radio" name="diy-set" value="10"> <label for="10imu">Full-Body Set - 7 Trackers, 3 Extensions</label>

---

<table>
<thead>
<tr>
<th>Component</th>
<th>Choice</th>
<th>Amount</th>
<th>Cost per</th>
<th>Cost with Shipping</th>
<th style="min-width: 200px">Quick Link</th>
</tr>
</thead>
<tbody id="diy-components">
</tbody>
</table>

**TOTAL COST**: ~$<span id="diy-total"></span>

**Please note**: BNO085s are very difficult to attain at reasonable prices with the current chip shortage. If you are trying to use these boards in particular, the above price guide may differ **wildly** from what you should expect, and *moreover* differ greatly from what they're actually worth.

## Optional components
{:.no_toc}
There are several components that can be added when building a tracker that allow for additional features. A 'Battery sense' resistor can be added to allow the server to determine battery level, while a pair of diodes act as an added safety measure that allow the tracker to be used while charging and protect against accidental damage due to over-charging if accidentally left powered on. While both these additions are extremely low cost, they are considered optional and can increase the complexity of the schematics.

**Recommended resistor**: 1x180k Ohm 1/4W Metal Film Resistor per tracker.

**Recommended diodes**: 2x1N5817 SCHOTTKY Diode per tracker.

Bear in mind, resistor values from ~100k Ohm to ~220k Ohm will work, however there may be a loss in precision when reporting battery level. Using a resistor value other than 180k will mean needing to change the resistor value in firmware. Also, if for whatever reason 1N5817 diodes cannot be found, 1N5819 diodes can be used instead.

## Component breakdown
{:.no_toc}

A complete set of SlimeVR trackers can be made from around $60 to $250, depending on what you have at home already and your choice of parts.

One of the most impactful choices you make is what type of IMU (Inertial measurement unit) you use, which will determine the price point as well as the quality of the tracking.

Another important consideration is where you buy your components. This guide will use costs from Aliexpress, which is where most of us buy our components from due to both price and availability. Unfortunately the shipping times from there are quite long, with many orders taking between 3-6 weeks to arrive. You can also buy from Amazon or other local retailers, but pricing will vary wildly.

* TOC
{:toc}

### Wemos D1 Mini

The Wemos D1 Mini is an ESP8266 dev board, it's basically a small computer which handles the thinking and WiFi connection. You can usually find these at around $2 each, and you need at least 5 of them ([Aliexpress](https://www.aliexpress.com/wholesale?SearchText=D1+mini)). You can use a different microcontroller with the required specifications, however the documentation on other microcontrollers is not as comprehensive. If you decide to do this, please check the #diy channel in our [discord](https://discord.gg/SlimeVR) for more information.

There are multiple variants of the D1 Mini, some better than others. The main variants you should look at purchasing would be the CH340, V3.0, and V4.0. There are, however, variants you should avoid. These would be the FT232, and Pro variants. The FT232 variant may have USB connectivity issues due to fake FT232 chips, and the Pro variant has a design flaw with its antenna that necessitates having an external antenna.

### IMU (Inertial measurement unit)

SlimeVR uses several IMUs in order to determine your current pose. There are a handful of options available which you can read about more on the [IMU Comparison page](imu-comparison.html).

#### BNO085

This is the most accurate of the IMUs supported by the SlimeVR project, but suffers from both price and availability. These chips used to be about $15 but have gone up in price to about $120 ([Aliexpress](https://www.aliexpress.com/wholesale?SearchText=BNO085)). You may be able to find them elsewhere, but they tend to be in low stock and inflated in price. If you're willing to wait upwards of a few months, you may want to consider backordering Adafruit BNO085s ([on Mouser](https://www.mouser.com/ProductDetail/Adafruit/4754?qs=hd1VzrDQEGjjfej09NGRTw%3D%3D), or otherwise consider checking the [Adafruit website](https://www.adafruit.com/product/4754). Check our [discord](https://discord.gg/SlimeVR) for more up-to-date information.

#### MPU6050

The MPUs are much easier to purchase and does not suffer from availability issues, but unfortunately will drift more over time than the BNO tracker. It is still a very good choice if you're on a budget and want some kind of full body tracking. These are about $1 each ([Aliexpress](https://www.aliexpress.com/wholesale?SearchText=MPU6050)) and also can be found on Amazon for faster shipping.

### Batteries

There are a bunch of options for batteries, but the most commonly used is a 3.7v Li-ion Polymer battery in the 804040 form factor. You need one per each Wemos D1 Mini you're using. These are easily purchased at Aliexpress in both a 10 pack for $24 ([Aliexpress](https://www.aliexpress.com/item/1005002559604104.html)) or a 4 pack (you will need to get one additional) [Aliexpress](https://www.aliexpress.com/item/33021202630.html) ($15 total).

### Charging board - TP4056

To charge the batteries above, you need to get a charge controller that will make sure the batteries are safely charged. These are cheap at only $0.34 each ([Aliexpress](https://www.aliexpress.com/item/32649780468.html))

### Power switches

You want to be able to shut off your SlimeVR trackers, to conserve battery and lifetime of the trackers. These are also important as you should not charge the trackers while they are still active. You can get 10 switches for 2.37$ ([Aliexpress](https://www.aliexpress.com/item/32975535599.html)).

### Wiring

To solder the different components together you need some kind of wiring. You probably have some old cables lying around, maybe a VGA cable you can open up, or ethernet, or usb. You can also get new wire. You can get 26 AWG 5m ([Aliexpress](https://www.aliexpress.com/item/1005002632016529.html)) for $1.45.

If you're getting the Core Set or Enhanced Core Set, it's also convenient to have some connectors so you can easily remove the extensions if needed. You can use 5 pin JST connectors ([Aliexpress](https://www.aliexpress.com/item/1005002304293157.html)), 5 pcs for $1.55.

### Cases

This is where you will have to find an option yourself. If you have access to a 3d printer you can print some cases for ~$10 worth of filament. There's some great models already in our [discord's #diy channel](https://discord.gg/SlimeVR).

There's also the option of buying an enclosure to fit all your components, but remember to make sure that the metal of the different components aren't touching. A somewhat popular solution for this is this pack of 6 for $8 on [Amazon](https://www.amazon.com/dp/B08T97JD6Z). Make sure to check dimensions on both pre-bought and 3D printed cases so that it fits your chosen components.

### Straps

While you can attach these directly to clothing, the most common solution is elastics straps, a 5 pack can be bought for $3-$5 ([Aliexpress](https://www.aliexpress.com/item/1005002350231996.html)). Because of the difference in sizes from point to point, you may find it easier to buy different lengths for the leg tracker when compared to the waist.

### Tools

You will also need some tools to be able to put together a tracker. You might have these already or have a friend or a maker space nearby where you can borrow these:

* A soldering iron, solder, and solder flux.
* A wire cutter.
* A soldering helping hands
* (Optional) A multimeter to check your connections.
* (Optional) A solder sucker or desoldering braid. To more easily be able to fix mistakes when soldering.

If you haven't done a DIY project like this, look up some tutorials on youtube and feel free to ask questions in the #diy channel in our [discord](https://discord.gg/SlimeVR).

*Created by Carl (<https://github.com/carl-anders>), edited by CalliePepper#0666*
<script src="../assets/js/diy.js"></script>
<style>
    @media (min-width: 50rem) {
        .main { max-width: 1100px !important; } 
    }
    select {
        width:250px;        
    }
</style>

