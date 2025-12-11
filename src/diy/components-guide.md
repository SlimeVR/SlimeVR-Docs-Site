# Components Guide

The costs shown should be taken as a **rough approximation** due to prices changing over time. Prices are in USD.

## Don't order yet!
This guide is meant to show rough price estimates for the components needed to build a set of SlimeVR trackers.
Due to different case designs, compatibility is not guaranteed between components.
To better understand what you need, consider looking at the documentation of your case.

## Calculate Your Costs
```admonish warning
As of firmware version 0.5.3, the ESP8266 (including the WEMOS D1 Mini) can only support a single IMU — with the only exception being the BNO085.
This limitation is due to the processing load required for handling multiple IMUs. For this reason, we do not recommend using additional IMUs as extensions.

Official SlimeVR Tracker v1.2 hardware uses an SPI interface to overcome this limitation.
```

**Number of trackers**

<input id="5imu" type="radio" name="diy-set" value="5"> <label for="5imu">Lower-Body Set - 5 Trackers</label>&nbsp; &nbsp;|&nbsp;
<input id="6imu" type="radio" name="diy-set" value="6" checked="checked"> <label for="6imu">Core Set - 6 Trackers</label>&nbsp; &nbsp;|&nbsp;
<input id="8imu" type="radio" name="diy-set" value="8"> <label for="8imu">Enhanced Core Set - 6 Trackers, 2 Extensions</label>&nbsp; &nbsp;|&nbsp;
<input id="10imu" type="radio" name="diy-set" value="10"> <label for="10imu">Full-Body Set - 8 Trackers, 2 Extensions</label>

---
<div class="table-wrapper">
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
</div>

**TOTAL COST**: ~$<span id="diy-total"></span>

**Please note**: JST connectors are an optional convenience if you want to be able to disconnect your extensions. If you plan on never disconnecting your extensions, you do not need JST connectors. Instead, hardwiring the extensions is recommended for durability.

## Component Breakdown / Considerations

A complete set of DIY SlimeVR trackers with performance similar to the [Official Enhanced Core Set](https://www.crowdsupply.com/slimevr/slimevr-full-body-tracker#products) can be made from around $80 to $100, depending on your choice of parts and build design.

The most impactful choice regarding DIY SlimeVR trackers is the IMU (Inertial Measurement Unit) used, which greatly determines both price point and tracking quality.

The second most impactful choice will be where you choose to purchase your components. This guide uses components sourced from AliExpress, due to price and availability. However, shipping times from AliExpress are long compared to other options—often 3-6 weeks—and have a chance to be faulty on arrival. Components may also be purchased from Amazon or local retailers, although pricing and availability will vary wildly.

While purchasing components, especially from AliExpress, it is also highly recommended to purchase one or two extra of each part in case they come dead on arrival or due to soldering mistakes. Keep in mind that AliExpress shipping times are quite long, which means replacements for faulty components may have a very long wait time—so plan accordingly. Generally speaking, IMUs generally have the highest DOA (dead-on-arrival) rate. Wemos D1 Minis, TP4046 charging boards, and batteries are all fairly reliable with low DOA rates—however it still may be worthwhile purchasing extras just in case.

* TOC
{:toc}


### Tools

You will need various tools to be able to put together a tracker. You may have these already, have a friend or a maker space nearby where you can borrow these:

* A soldering iron
* Solder and solder flux (or alternatively use rosin core solder).
* Wire cutter (or flush cutters)
* Wire stripper, pliers, and/or scissors
* (Optional) A soldering third hand
* (Optional) A multimeter to check your connections.
* (Optional) A solder sucker or desoldering braid. To more easily be able to fix mistakes when soldering.
* (Optional) A heatgun or lighter for shrinkwrap (or alternatively use electrical tape)
* (Optional) Brass sponge and holder or wet sponge. To easily clean and maintain soldering iron
* (Optional) Fume extractor. To handle the smoke and fumes from soldering

Please note: Ensure you do not buy solder intended for plumbing fixtures. This type of solder is acidic and may corrode PCBs and electronic components.

If this is your first DIY project, consider looking up some soldering tutorial on YouTube and feel free to ask questions in the #diy channel in our [Discord](https://discord.gg/SlimeVR).

### Wemos D1 Mini

The Wemos D1 Mini is an ESP8266 dev board, which is essentially a small computer that controls the IMU and WiFi connection. Other microcontrollers with the same specifications are compatible—however documentation is not as comprehensive as the Wemos D1 Mini. If you decide to do this, please check the [#diy](https://discord.com/channels/817184208525983775/823930029070876736) channel in our [Discord](https://discord.gg/SlimeVR) for more information.

There are multiple variants of the D1 Mini, with some better than others. The main recommended variants are the D1 Mini Micro-USB, D1 Mini USB-C, V3.0, and V4.0. There are variants that should be avoided—mostly being the Pro variants—which have a design flaw with their integrated antenna, requiring an external antenna. Please do your own research before purchasing. Note that a lot of D1 Minis have counterfeit CH340 chips, which may require [a driver workaround](https://github.com/SHWotever/FakeCH340DriverFixer#how-to-use).

Note the DIY community heavily recommends the D1 Mini USB-C.

### IMU (Inertial Measurement Unit)

SlimeVR uses several IMUs in order to determine your pose. There are a handful of options available which you can read about more on the [IMU Comparison page](imu-comparison.md).

### Batteries

There are many different options for batteries, with the size of the battery generally determining the design and size of the required case. You will need one battery per tracker. Keep in mind that for a standard 3.7V LiPo battery, 100mAh of capacity translates to 1 hour of use. So, a 1200mAh battery will generally last around 12 hours of continuous use.

While square Li-Po batteries are generally fairly truthful about their capacity, cylindrical 18650s can greatly vary in capacity depending on manufacturer. A generic no-name 18650 could be as low in capacity as 800 mAh, whereas an 18650 made by a reputable manufacturer like LG, Samsung, or Sony may have as high capacity at 3500 mAh. In general, be suspicious of claimed 18650 capacity.

It's also worth noting that not all batteries are created equal. Some will have protection circuitry and some will not. Generally speaking, flat Li-Po batteries will usually have protection circuitry, whereas cylindrical batteries such as 18650s will not. If you're planning on getting flat Li-Po batteries, the protection circuitry will usually look like a small PCB with a few chips on it, beneath the yellow polyimide tape on the battery. That being said, the [TP4056 charging board](#charging-board---tp4056) has a protection circuit, so an integrated circuit on the battery itself is not required.

### Charging Board - TP4056

To charge your batteries, and provide power to the rest of the tracker, a charging board is required—SlimeVR trackers use the TP4056 charging board. Bear in mind that the charging board requires diodes to prevent backfeeding current and overcharging/damaging the battery. That being said, the TP4056 charging boards also provide some safety features such as over-discharge protection, over-charging protection (which requires diodes soldered to the carrier PCB [diodes](#diodes-optional)!), short circuit protection, and over current protection.

When choosing a charging board, it's also important to consider the charging rate and how that may affect the overall longevity of your battery. Most TP4056 charging boards are configured to charge at a current of 1000mA, which means that you risk shortening battery life if using a battery with a capacity less than 1000mah. Some TP4056 charging boards have a configurable charge current via DIP switches, though most do not. For more information on the TP4056, you can refer to the datasheet, which can be found [here](https://dlnmh9ip6v2uc.cloudfront.net/datasheets/Prototyping/TP4056.pdf).

Likewise, in regards to charging, it's important to bear in mind that most TP4056 charging boards are incompatible with with the USB C PD charging standard. Attempting to use a USB C PD charger will not result in a higher charging speed, as it will limit itself to its lowest charging voltage.

### Power Switches

WiFi trackers do not have a sleep mode, so a power switch is required to conserve battery and to extend battery lifetime by preventing unnecessary charge cycles. If diodes are not included in the power delivery circuit, the tracker should also not be used while charging.

### Diodes (Optional)

A pair of diodes act as an added safety measure to the TP4056 board that allow the tracker to be used while charging and protect against accidental damage due to over-charging if left charging for extended periods.

### Resistors (Optional)

Adding a "Battery sense" resistor to the required location, the battery percentage will be reported in the server. Without this the only indication of low charge comes from the LED in Wemos D1 Mini will rapidly blink. Resistor values from ~100K ohm to ~220K ohm can be used, however, there may be a loss in precision when reporting battery level. Additionally, a different resistance value will also require changing the value in firmware to match.

### Wiring without a carrier PCB (Not Recommended)

The wired method of connecting trackers is not recommended compared to using a carrier PCB. Generally this results in lower durability and shorter tracker lifespan. If you are using a wired-based method, it is generally recommended to use 28AWG shielded, stranded wiring. Alternatively, you can salvage shielded wires out of various disused cables you might have, such as VGA cables, Ethernet, or USB.

Additionally, as an added convenience for extensions, you may want to use a connector instead of hard-wiring it to the tracker. Various types of connectors can be used, but the most commonly used are 5 pin JST connectors. Others have also used RJ45 ethernet connectors, and USB C. Keep in mind that USB-standard connectors have much lower durability and are more susceptible to wear-related damage than JST and RJ45 connectors.

> Please note, if you are looking for official extension cables as a replacement or for official DIY kits, they can be found here: [Deluxe set](https://shop.slimevr.dev/products/slimevr-extension-cables-deluxe-set) - [Full-Body Set](https://shop.slimevr.dev/products/slimevr-extension-cables-full-body-set).

### Cases

It is highly recommended to design a custom case if you have access to a 3D printer and 3D modelling knowledge, as that will allow you to fit your specific needs. PETG and ABS-based cases are recommended due to their low cost and high strength, although keep in mind that resin printed cases are not recommended due to brittleness. Also, there are some great [Community-built cases](cases.md) that fit most common designs, and likewise it's worth checking the #diy channel in our [Discord](https://discord.gg/SlimeVR) for other recommendations.

Alternatively, small plastic jewelry and organizing containers can be used to fit your components as long as they have the correct dimensions. You will likely need to cut holes for the TP4056 charging circuit and the Wemos D1 Mini, alongside added padding to prevent it from shaking inside of the case.

Keep in mind that self built trackers are not compatible with official SlimeVR cases unless you are using the official PCB!

> Please note, if you are looking for official cases as a replacement or for official DIY kits (only for official PCB's) [those can be found here!](https://shop.slimevr.dev/products/copy-of-slimevr-main-case-pc-plastic).

### Straps

The go-to recommendation is to use elastic straps with velcro. Elastic silicone-backed straps are the go-to recommendation because they will stretch and should stay in place regardless of movement and body part. Nylon straps— alongside any strap without silicone backing strips—while technically usable, are fairly inflexible and will tend to slide as you move, making them less suitable. Generally speaking, you will want straps that are at least 38mm or 1.5 inches wide, as thinner straps usually result in less stable mounting.

When it comes to actually mounting trackers, there are some alternative solutions compared to just a strap. The GoPro chest mount is highly recommended for mounting your chest tracker as it improves stability greatly compared to a basic 100cm strap. Different sized straps for different body parts are recommended, with 50cm straps for the thighs and 35cm straps for each ankle, feet, and arms being common. Be sure to measure yourself with a tape measure if you're going to go this route! It's worth noting that *elastic stretches*—so if you find straps that seem just a bit too small, they may stretch an additional 50mm or so or more depending on length. However, this can be uncomfortable.

For ideas on making your own custom straps, consider viewing the [DIY Straps Guide](diy-straps.md). Alternatively, there are various sellers who sell cross-compatible custom-designed comfort straps on the SlimeVR marketplace forum in our [Discord](https://discord.gg/SlimeVR)

### DOA (Dead on arrival parts)

Some parts are known to arrive DOA — including 1-2 spares in your order is recommended.

- Charging Board - TP4056
- IMU (Most notably MPU, BMI160)

*Created by Carl (<https://github.com/carl-anders>), edited by calliepepper, nwbx01, Smeltie, and Amebun*
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

