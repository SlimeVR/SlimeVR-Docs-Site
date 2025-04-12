# Smol Hardware

* TOC
{:toc}

## 🧾 Schematics

<table>
  <tr>
    <th>Default SuperMini Build</th>
    <td>
      <a href="../../assets/img/smol_slime_schematic.png" target="_blank">
        <img src="../../assets/img/smol_slime_schematic.png" height="500" alt="Smol Slime Schematic">
      </a>
    </td>
  </tr>
  <tr>
    <th>Stacked 🥪 SuperMini Build<sup><a href="#note">[note]</a></sup></th>
    <td>
      <a href="../../assets/img/smol_slime_stacked_schematic.png" target="_blank">
        <img src="../../assets/img/smol_slime_stacked_schematic.png" height="500" alt="Smol Slime (Stacked 🥪) Schematic">
      </a>
    </td>
  </tr>
</table>
<p id="note">Requires special firmware that provides power from the GPIO pins. <a href="https://youtu.be/qTmIfa_Asic" target="_blank">YouTube Tutorial</a></p>

## 📡 Receiver Hardware

It is essential to use boards equipped with high-quality antennas to ensure signal integrity and range. Hardware featuring PCB antennas is generally the best option for use as a receiver.

### USB Dongles
These dongles have a fairly optimized PCB antenna. If you have issues with signal integrity, it is recommended to use a USB extension cable.

<table>
    <tr>
        <th>Dongle</th>
        <th>Description</th>
        <th>Obtaining</th>
    </tr>
    <tr>
        <td>eByte Dongle (E104-BT5040U)</td>
        <td>Cheapest option with a PCB antenna.<br/> 
        - <strong>E104-BT5040U</strong> is model that you need. It is fully compatible with the Nordic Semiconductor nRF52840 Dongle.<br/>
        - <strong>E104-BT5040UA</strong> is not compatible. It is only capable of capturing BLE4.2 and BLE5.0 protocol packets.</td>
        <td>It is available on AliExpress, with free shipping.<br/>
        Also available on Alibaba, where sold by <strong>Chengdu Ebyte Electronic Technology Co., Ltd.</strong></td>
    </tr>
    <tr>
        <td>Nordic Semiconductor nRF52840 Dongle (PCA10059)</td>
        <td>Official Nordic development hardware.</td>
        <td>It is available on <strong>Digikey</strong> or <strong>Mouser</strong>.</td>
    </tr>
</table>

### Microcontrollers Modified Into USB Dongles

```admonish note
If you plan to use microcontroller as receiver you can modify it to improve signal strength, replacing the built-in antenna with a 31.2 mm wire. This creates a basic monopole antenna.
```

<table>
    <tr>
        <th>Board</th>
        <th>Description</th>
        <th>Obtaining</th>
    </tr>
    <tr>
        <td>SuperMini nRF52840</td>
        <td>It is a clone of the <strong>nice!nano</strong> board.</td>
        <td>Cheapest option overall.<br/>
         It is available on AliExpress with <code>compatible with nice!nano</code> or <code>Pro Micro</code> branding.</td>
    </tr>
    <tr>
        <td>Seeed Studio XIAO nRF52840</td>
        <td>Compact board.</td>
        <td>Available on <strong>Seeed Studio</strong>.</td>
    </tr>
</table>


## 🏃 Trackers
Before you start, decide on [how many trackers you may need](../slimevr101.md#how-many-trackers-do-you-need).

Trackers are required to have a battery and an inertial measurement unit (IMU). A magnetometer is optional.\
Buttons and slide switches are recommended but not required. Buttons can be added to control the tracker, and a slide switch can be used to physically disconnect a tracker's battery.

### Microcontroller Boards

<table>
    <tr>
        <th>Board</th>
        <th>Description</th>
        <th>Obtaining</th>
    </tr>
    <tr>
        <td>SuperMini nRF52840</td>
        <td>It is a clone of the <strong>nice!nano</strong> board.</td>
        <td>Cheapest option overall.<br/>
         It is available on AliExpress with <code>compatible with nice!nano</code> or <code>Pro Micro</code> branding.</td>
    </tr>
    <tr>
        <td>Seeed Studio XIAO nRF52840</td>
        <td>Compact board.</td>
        <td>Available on <strong>Seeed Studio</strong>[^SeedStudio].</td>
    </tr>
</table>

[^SeedStudio]: <strong>Seeed Studio</strong> is a global open hardware manufacturer, offering electronics components, development boards, and prototyping services. Their site: [Seeed Studio Site](https://www.seeedstudio.com/).

### 🧭 Inertial Measurement Units

Some of the supported sensor modules are described on the [IMU Comparison page](imu-comparison.md).

 - BMI270
 - ICM-42688-P
 - ICM-42688-V
 - ICM-45686
 - ISM330BX
 - ISM330DHCX
 - ISM330DLC
 - LSM6DS3
 - LSM6DS3TR-C
 - LSM6DSL
 - LSM6DSM
 - LSM6DSO
 - LSM6DSR
 - LSM6DSV
 - LSM6DSV16B

### 🧲 Magnetometers
 - AK09940
 - <div class="tooltip-text-container">BMM150 ⚠️
    <span class="tooltip-text">Sensor driver has not been tested.</span>
   </div>
 - <div class="tooltip-text-container">BMM350 ⚠️
    <span class="tooltip-text">Sensor driver has not been tested.</span>
   </div>
 - IIS2MDC
 - IST8306
 - IST8308
 - LIS2MDL
 - <div class="tooltip-text-container">LIS3MDL ⚠️
    <span class="tooltip-text">Sensor driver has not been tested.</span>
   </div>
 - MMC5983MA

### 🟩 Sensor Modules with IMU and Magnetometer
```admonish warning
 Please note that the most common sensor modules are not supported.
```

Why combined?
- Reduces size.
- Simplifies integration.
- Ensures consistent alignment of all sensors.

##### Meia IMU + Magnetometer Modules
Meia produces and sells IMU's with an onboard magnetometer. These have form factor suitable for stacked builds. Meia, is a member of the SlimeVR Discord.

<table>
    <tr>
        <th>IMU + Magnetometer</th>
        <th>Product Page</th>
    </tr>
    <tr>
        <td><a href="../diy/imu-comparison.md#ICM-45686">ICM-45686</a> + IST8306</td>
        <td><a href="https://store.kouno.xyz/products/icm-45686-ist8306-module">store.kouno.xyz</a></td>
    </tr>
    <tr>
        <td>LSM6DSR + IST8306</td>
        <td><a href="https://store.kouno.xyz/products/lsm6dsr-ist8306-module">store.kouno.xyz</a></td>
    </tr>
</table>

### 🖲️ Buttons
Push buttons and momentary switches are utilized to control the tracker. The functions of this button—Reset, Calibration, Pairing, Deep Sleep, and entering DFU Mode—depend on the number of press combinations. A tracker can be equipped with either a reset button, a user-specified (SW0) button, or both.

The reset button is designed to support all functionalities. If an user-specified button (SW0) is defined, it will be utilized instead.

If a button is unavailable, tweezers can be used to short the pins for the initial tracker setup.

### 🕹️ Switches
A slide switch can be used to physically disconnect a battery. Some boards have a high standby power draw and will require a switch.

If a switch is not utilized, a tracker can enter Deep Sleep mode by pressing and holding down the user-specified button (SW0).

### 🔋 Batteries
Most boards support a 3.7V Li-ion or LiPo battery. Batteries are rated by their capacity (usually in mAh), and they also have a maximum safe charging rate—often expressed as “C.” Charging at 1C means you’re using a current equal to the battery’s capacity. For example, a 1000mAh battery charged at 1A (which is 1C) should reach full charge in about one hour. However, charging at this maximum rate can stress the battery.

For longer battery life, it’s recommended to charge at a lower rate—around 0.5C.\
This means, for a 1000mAh battery, using a 500mA charge current. Although this slower rate will take roughly two hours to fully charge the battery, it helps reduce wear and extends its lifespan.

| Board                      | Default charge rate | Minimum battery capacity | Recommended battery capacity |
| -------------------------- | ------------------- | ------------------------ | ---------------------------- |
| Seeed Studio XIAO nRF52840 | 50mA                | 50mAh                    | 80-300mAh                    |
| SuperMini nRF52840         | 100mA               | 100mAh                   | 180-300mAh                   |

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
