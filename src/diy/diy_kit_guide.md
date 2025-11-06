# SlimeVR DIY Kit

## Thank you for purchasing the SlimeVR DIY kit!
To get your DIY set operational there are a handful of steps you will need to take. On this page we will guide you through the basic process involved in creating your own ready-to-use set of SlimeVR trackers. While this guide contains some general recommendations, feel free to deviate from the norm and make them truly your own! Have fun!

## Introduction
### Box contents
SlimeVR DIY **1.2** kit contains: 8 large SlimeVR Mainboards, 2 small SlimeVR Tracker extensions, and 2 Extension cables (2 short).
SlimeVR DIY **1.0** kit contains: 7 large SlimeVR Mainboards, 3 small SlimeVR Tracker extensions, and 3 Extension cables (1 long, 2 short).

<img alt="Box contents image" src="../assets/img/DIY_KIT_box-contents.jpg" width="700" />


### Required extras
To complete your SlimeVR trackers, you will need some parts in addition to your SlimeVR DIY kit. These include enclosures, straps, batteries, and a USB cable. These are detailed below to make it easier for you to complete your project.

### Recommended mounting layout
<table class="bpTable">
   <tr>
      <td>
         <img id="bpImage" src="../assets/img/DIY_KIT_tracker-locations.png" alt="Mounting locations image" >
      </td>
      <td>
         <ol>
            <li>Chest</li>
            <li>Hip (Extension or Main tracker)</li>
            <li>Upper legs</li>
            <li>Lower legs (Mounted outwards)</li>
            <li>Feet (Extension)</li>
            <li>Upper arms (Mounted outwards)</li>
         </ol>
      </td>
   </tr>
</table>

## Designing your case
DIY kits do not come with cases and therefore require enclosures to protect them and allow strap attachment. These can be 3D printed, purchased, or handcrafted. While the official SlimeVR Main and Extension cases are designed to fit the boards included in this kit, they are not optimised for home 3D printers due to their curved surfaces. As such, we recommend printing up your own using a modified design, or designing your own!

The 3D models for the official main and extension cases can be found [here](../assets/cases/OfficialCases.zip). Modified versions of these official cases more suited for home 3D printers, made by tomyum3dp, can be found [here](https://www.printables.com/model/425157-3d-printing-friendly-slimevr-cases-for-the-slimevr/files).

For those planning to design your own enclosure, you can find the model of the Mainboard [here](../assets/files/MainPCB.step) and Extension PCBs [here](../assets/files/ExtensionPCB.step).

> Please note, if you are looking for official cases for your official DIY kits [those can be found here!](https://shop.slimevr.dev/products/copy-of-slimevr-main-case-pc-plastic).

<details>
<summary><u>Using the official case designs?</u></summary>
To complete the assembly you will require 2x M2.5 screws for both the main and extension cases. The modified cases use more the commonly available M3 screws as an alternative. Assembly is as shown below.
Included is a video going further in detail on assembly with the official cases!

![Explosion of the main case](../assets/img/DIY_KIT_Explode-Main.png)
![Explosion of the extension case](../assets/img/DIY_KIT_Explode-Extension.png)
<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/OxOgkBMEzME?si=jFoO5UXZPsxHKFEr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</details>

## Choosing your battery
The SlimeVR Mainboards included in your DIY kit require power from a battery for the best experience. SlimeVR trackers use approximately 100mAh during use. Extensions do not require their own battery, as they use power from the attached Mainboard. When choosing a battery, **select a capacity rating of at least 500mAh to ensure safe use.** Charging rate is limited to 500mA to ensure optimal battery lifespan.

We recommend the following specifications:
* Capacity: 1000-1800 mAh
* Nominal Voltage: 3.7v
* Connection: Micro JST 1.25mm

Please note, **the integrated charging circuit on the Mainboard is only applicable to lithium based batteries**, do not attempt to charge any other battery chemistry types.

The battery dimensions will depend on which case you choose to use or make. Lithium-ion Polymer (LiPo) pouch batteries come in various shapes and sizes, indicated by an `XXYYZZ` naming scheme that denotes their dimensions in thickness (X.Xmm), width (YYmm), and length (ZZmm). As an example, the official SlimeVR case design uses an 803443 battery, denoting a battery of 8.0mm thickness, 34mm width, and 43mm length.

The mainboards feature a Micro JST 1.25mm male connector port for attaching a battery. As such, it is simplest to choose a battery that has a matching female connector. Alternatively, you can solder or crimp these connectors onto a battery for easy attachment to the Mainboard.

![JST polarity example](../assets/img/JST_polarity.png)

```admonish danger
Ensure your battery polarity matches the polarity markings on the PCB, as shown in the example above.
```

<details>
<summary><u>Using the official case designs?</u></summary>
As a guideline, the official and modified cases both feature the following battery cavity dimensions:
<ul>
  <li>9mm Height (Thickness)</li>
  <li>41mm Width</li>
  <li>41mm Length</li>
</ul>
 Some examples of batteries that have been verified to fit within this are:
804040, 604040, and 803443.<br>
To use the case without further alterations and ensure safe battery installation, we advise staying within these specifications.
</details>

## Choosing your straps
You have the option of buying, crafting, and/or customising your straps to your personal preferences. We highly recommend you use elasticised straps with hook and loop fastening, to ensure a comfortable experience and prevent tracker migration.

*For tips on making your own straps, check out the [DIY Straps Guide](https://docs.slimevr.dev/diy/diy-straps.html).*

We recommend the following strap lengths as a baseline guide for choosing your strap design:
* Chest and Hip: 100cm / 40"
* Upper legs (2): 50cm / 20"
* Lower legs (2) and Arms (2): 35cm / 14"
* Feet (2): 30cm / 12"

*Note: elastic straps stretch, so you may need less than you think!*

The width of the straps you chose is determined by the case you have designed or opted to use.

<details>
<summary><u>Using the official case designs?</u></summary>
The official cases use 38mm width straps for main trackers, and 25mm width straps for extensions. The following table of strap sizes used in official SlimeVR sets can be used as a starting reference for purchasing or crafting your own:

| Body location      | Amount | Strap size (mm) |
| ------------------ | :----: | --------------- |
| Chest strap        | 1      | 38x1000         |
| Hip strap          | 1      | 25x1000         |
| Upper leg straps   | 2      | 38x500          |
| Lower leg straps   | 2      | 38x350          |
| Foot straps        | 2      | 25x300          |
| Arm straps         | 2      | 38x350          |
</details>

## Optional accessories
SlimeVR DIY Kits Mainboard features a USB Type-C female connector for both recharging and serial connection. As such, at least 1 USB-C cable is required.

We recommend a USB-A to USB-C cable to charge your SlimeVR trackers, and charging using an external USB-A power supply.

Not all cables are built equal, however,  most cables will work for charging, as SlimeVR only uses 5 volts at low current. For serial connection, a cable with Data connections is required. If USB serial connection issues arise, ensure your cable features data lines or try a different cable.


---
*Created by vyolex and spazzwan. Photography by eiren. Exploded view renders made by tomyum3dp*
