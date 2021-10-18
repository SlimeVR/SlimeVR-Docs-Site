---
layout: page
title: DIY from scratch
nav_order: 5
has_children: true
---

# DIY from scratch
So you want to build your own SlimeVR trackers? You've come to the right page.

There's a myriad of choices for making you trackers, but this page will use one of the most common choices made by the DIY community. Feel free to explore the settings below and see what option fits you the best.

# Price ranges 
A complete system of SlimeVR trackers can be made from around 60$ to 250$, depending on what you have at home already and which quality of tracking you want.

One of the most important choices is what type of IMU (Inertial measurement unit) you want to use, but other choices are important too, which is why at the bottom of this page there is a calculator which helps you choose your components.

Another important consideration is where you buy your components. This guide will use costs from aliexpress, which is where most of us buy our components from, as it has very cheap components. Unfortunately the shipping times from there are quite long, with many orders taking between 3-6 weeks to arrive. You can also buy from amazon or other local retailers, but the pricing will be different.

# Wemos D1 Mini
The Wemos D1 Mini is an ESP8266 dev board, it's basically a tiny little computer, and handles the thinking and WiFi connection. You can usually find these at around 2$ each, and you need at least 5 of them ([aliexpress](https://www.aliexpress.com/wholesale?SearchText=D1+mini)).

# IMU (Inertial measurement unit)
The SlimeVR system uses several IMU's to figure out how your body is positioned. There are several choices, but this guide will focus on two different one's (see https://github.com/SlimeVR/SlimeVR-Tracker-ESP for more).

To know how many IMU's you need, you need to decide what parts of your body you want to be tracked.

* Lower-Body Set (5 IMU's) - Your waist, legs, knees and feet are positionally tracked. You can not rotate your feet. Recommended if you're only standing.
* Core Set (6 IMU's) - In addition to the previous set this adds a tracker to the chest, this allows for much more accurate tracking while you're laying down, sitting, etc.
* Enhanced Core Set (8 IMU's) - In addition to the previous set, you can now also wiggle your feet.

## BNO085
This is the most accurate of the IMU's supported by the SlimeVR project, but unfortunately it does not come cheap. These chips used to be about 15$ but has gone up in price to about 20$ ([aliexpress](https://www.aliexpress.com/wholesale?SearchText=BNO085)). There's also other sites that stock these chips which might be more easily available and cheaper, do check our [discord](https://discord.gg/SlimeVR) for more up-to-date information.

## MPU6050
This IMU is very cheap but unfortunately will drift more over time than the BNO tracker. It is still a very good choice if you're on a budget and want some kind of full body tracking. These are about 1$ each ([aliexpress](https://www.aliexpress.com/wholesale?SearchText=MPU6050))

# Batteries
There are a bunch of options for batteries, but the most commonly used is a 3.7v Li-ion Polymer battery in the 804040 formfactor. You need one per each Wemos D1 Mini you're using. One example is 10 pieces for 24$ ([aliexpress](https://www.aliexpress.com/item/1005002559604104.html)). There's also the option of buying a pack of 4 + 1 extra from a different seller on [aliexpress](https://www.aliexpress.com/item/33021202630.html) (15$ total).

# Charging board - 18650 + TP4056
To charge the batteries above, you need to get a charge controller that will make sure the batteries are safely charged. These are really cheap, only $0.34 each ([aliexpress](https://www.aliexpress.com/item/32649780468.html))

# Power switches
You want to be able to shut off your SlimeVR trackers, to conserve battery and lifetime of the trackers. You can get 10 switches for 2.37$ ([aliexpress](https://www.aliexpress.com/item/32975535599.html).)

# Wiring
To solder the different components together you need some kind of wiring. You probably have some old cables lying around, maybe a VGA cable you can open up, or ethernet, or usb. You can also get new wire. Or get new cable, 22 AWG 5m ([aliexpress](https://www.aliexpress.com/item/1005002632016529.html)) for $2.27.

If you're getting the Core Set or Enhanced Core Set, it's also nice to have some connectors so you can easily remove the extensions if needed. You can use 5 pin JST connectors ([aliexpress](https://www.aliexpress.com/item/1005002304293157.html)), 5 pcs for $1.55.

# Cases
This is where you will have to find an option yourself. If you have access to a 3d printer you can print some cases for ~10$ worth of fillament. There's some great models already in the [discord](https://discord.gg/SlimeVR), check the #diy channel.

There's also the option of buying some kind of enclosure that fits all your other components, but remember to make sure that the metal of the different components don't touch eachother, to isolate them from eachother. One example could be this pack of 6 for 8$ on [amazon](https://www.amazon.com/dp/B08T97JD6Z), make sure to check dimensions.

# Straps
This is also very dependent on your design. You can get a 5 pack of elastic straps for 3-5$ ([aliexpress](https://www.aliexpress.com/item/1005002350231996.html)). You might get several straps of different sizes to better fit you. 

# Calculate your costs
**Number of trackers**

<label><input type="radio" name="diy-set" value="5"> Lower-Body Set (5 IMU's)</label>&nbsp; &nbsp;|&nbsp;
<label><input type="radio" name="diy-set" value="6" checked="checked"> Core Set (6 IMU's)</label>&nbsp; &nbsp;|&nbsp;
<label><input type="radio" name="diy-set" value="8"> Enhanced Core Set (8 IMU's)</label>

---

<table>
<thead>
<tr>
<th>Component</th>
<th>Choice</th>
<th>Amount</th>
<th>Cost per</th>
<th>Cost with shipping</th>
<th>Quick link</th>
</tr>
</thead>
<tbody id="diy-components">
</tbody>
</table>

**TOTAL COST**: ~<span id="diy-total"></span>$

<script src="assets/js/diy.js"></script>