# Components Guide

The costs shown should be taken as a **rough approximation** due to prices changing over time. Prices are in USD.

## Calculate Your Costs
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

**Please note**: BNO085s are very difficult to attain at reasonable prices with the current chip shortage. If you are trying to use these boards in particular, the above price guide may differ **wildly** from what you should expect, and *moreover* differ greatly from what they're actually worth. If you do happen to find BNO085s for sale elsewhere, such as on Alibaba, it's unlikely they will actually have any in stock. If they do, it's likely that they will quote an exorbitant and unrealistic price such as $120 per IMU. Adafruit BNO085s are the only reputable and regularly in stock option for BNO085s.

## Component Breakdown

A complete set of SlimeVR trackers can be made from around $70 to $250, depending on what you have at home already and your choice of parts.

One of the most impactful choices you make is what type of IMU (Inertial measurement unit) you use, which will determine the price point as well as the quality of the tracking.

Another important consideration is where you buy your components. This guide will use costs from AliExpress, which is where most of us buy our components from due to both price and availability. Unfortunately the shipping times from there are quite long, with many orders taking between 3-6 weeks to arrive. You can also buy from Amazon or other local retailers, but pricing will vary wildly.

When it comes to purchasing components it's also prudent to get a few extras in case any come faulty, or if you accidentally break one along the way. If you plan on ordering from AliExpress where the shipping times are quite long, take note -- ordering an exact amount of the parts needed and having one or two components die could mean a long wait before getting replacements. Generally speaking, IMUs are the component most likely to have break or to come broken, so plan accordingly. Wemos D1 Minis and TP4056 charging boards are fairly reliable, but a few extra is worth considering.

* TOC
{:toc}

### Wemos D1 Mini

The Wemos D1 Mini is an ESP8266 dev board, it's basically a small computer which handles the thinking and WiFi connection. You can use a different microcontroller with the required specifications, however the documentation on other microcontrollers is not as comprehensive. If you decide to do this, please check the #diy channel in our [Discord](https://discord.gg/SlimeVR) for more information.

There are multiple variants of the D1 Mini, some better than others. The main variants you should look at purchasing would be the CH340, V3.0, and V4.0. There are, however, variants you should avoid. These would be the FT232, and Pro variants. The FT232 variant may have USB connectivity issues due to fake FT232 chips, and the Pro variant has a design flaw with its antenna that necessitates having an external antenna.

### IMU (Inertial Measurement Unit)

SlimeVR uses several IMUs in order to determine your pose. There are a handful of options available which you can read about more on the [IMU Comparison page](imu-comparison.md).

### Batteries

There are many different options for batteries, and the size you go with will generally determine the size of the case you will need. You will need one battery per Wemos D1 Mini. As far as battery life is concerned, every 100 mAh a battery is rated for will last for 1 hour of use. So, a 1200 mAh battery will generally last around 12 hours of continuous use.

Flat Li-Po batteries are generally fairly truthful about their capacity, however, 18650s can greatly vary in capacity depending on manufacturer. A generic no-name 18650 could be as low in capacity as 800 mAh, whereas an 18650 made by a reputable manufacturer like LG, Samsung, or Sony may have as high capacity at 3500 mAh. In general, be suspicious of claimed 18650 capacity.

It's also worth noting that not all batteries are created equal. Some will have protection circuitry and some will not. Generally speaking, flat Li-Po batteries will usually have protection circuitry, whereas battery such as 18650s will not. If you're planning on getting flat Li-Po batteries, the protection circuitry will usually look like a small PCB with a few chips on it, beneath the yellow polyimide tape on the battery. That being said, the [TP4056 charging board](#charging-board---tp4056) will provide these same features so lack of battery protection shouldn't be a make or break factor, but rather additional peace of mind and added safety.

### Charging Board - TP4056

To charge your batteries, you need to get a charge controller to make sure the batteries are safely charged. Bear in mind, without diodes, you can potentially damage your battery if you accidentally leave your tracker on while charging. That being said, the TP4056 charging boards also provide some safety features such as over-discharge protection, over-charging protection (only when turned off if you don't have [diodes](#diodes-optional)!), short circuit protection, and over current protection.

### Power Switches

You want to be able to shut off your SlimeVR trackers, to conserve battery, and prevent unnecessary charge cycles that will reduce the lifetime of the battery. These are also important as you should not charge the trackers while they are on.

### Diodes (Optional)

A pair of diodes act as an added safety measure that allow the tracker to be used while charging and protect against accidental damage due to over-charging if accidentally left powered on.

### Resistors (Optional)

With a "Battery sense" resistor you can check the battery percentage in the server. Without this, you will only know when your tracker is close to dying, as the Wemos D1 Mini will rapidly blink when the battery is very low. Resistor values from ~100K ohm to ~220K ohm can be used, however there may be a loss in precision when reporting battery level. Using a resistor value other than 180K will mean needing to change the resistor value in firmware.

### Wiring

To connect your various components together will require some wiring. It is generally recommended to use 26AWG stranded wiring. If you're thrifty you can salvage the wires out of various disused cables you might have, such as VGA cables, ethernet, or USB.

Additionally, as an added convenience if you plan on making any extensions, you may want to add connectors so you can have removable extensions. Various types of connectors can be used, but the most commonly used are 5 pin JST connectors. Others have also used RJ45 ethernet connectors, and USB C.

### Cases

Choosing or designing a case is where you will have the most freedom to choose whatever you like. If you have access to a 3d printer you can print some cases for ~$10 worth of filament. There are some great [Community-built cases](cases.md), likewise it's worth checking the #diy and #cases channels of our [Discord](https://discord.gg/SlimeVR). There's also the option of buying a small plastic case to fit all of your components. Make sure to check dimensions on both pre-bought and 3D printed cases so that it fits your chosen components.

### Straps

Straps are another area where you have a lot of liberty to try whatever works best for you. The go-to recommendation is to use elastic straps with velcro. Elastic straps are the go-to recommendation because they will stretch and should stay in place however you move. Nylon straps, while technically usable, are fairly inflexible will tend to slide as you move, making them less suitable. Generally speaking, you will want straps that are at least 38mm or 1.5 inches wide, going any smaller will result in less stable mounting.

When it comes to mounting, you may find that there are not any straps long enough to go around your torso -- in this case, two straps with velcro can be chained together to make one longer strap. Another option for the chest in particular is to use a GoPro chest mount, which can improve stability greatly if you find your chest trackers tend to slide. Also, its worth mentioning that you may want different sized straps depending on where each tracker is going to go, such as having shorter straps for thigh trackers than ankle trackers. Be sure to measure yourself with a tape measure if you're going to go this route! It's worth noting that *elastic stretches* so if you find straps that seem just a bit too small, they may stretch an additional 50mm or so or more depending on length.

For ideas on making your own custom straps, consider viewing the [DIY Straps Guide](diy-straps.md).

### Tools

You will also need some tools to be able to put together a tracker. You might have these already or have a friend or a maker space nearby where you can borrow these:

* A soldering iron, solder, and solder flux.
* A wire cutter.
* A soldering third hand
* (Optional) A multimeter to check your connections.
* (Optional) A solder sucker or desoldering braid. To more easily be able to fix mistakes when soldering.

Please note: ensure you do not buy solder intended for soldering plumbing fixtures. This type of solder is more acidic and may corrode PCBs and electronic components.

If you haven't done a DIY project like this, look up some soldering tutorials on YouTube and feel free to ask questions in the #diy channel in our [Discord](https://discord.gg/SlimeVR).

*Created by Carl (<https://github.com/carl-anders>), edited by CalliePepper#0666 and NWB#5135*
<script src="../assets/js/diy.js"></script>
<style>
    @media (min-width: 50rem) {
        .main { max-width: 1100px !important; }
    }
    select {
        width:250px;
    }
    td:first-of-type {
    border-left: 1px solid #eeebee;
    }
</style>

