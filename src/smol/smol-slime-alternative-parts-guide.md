# Smol Slime Parts Reference By Category

```admonish
Community case designs usually come with a list of recommended parts, so can be used to help final choices.
```

## Table of Contents
* TOC
{:toc}

## Schematics

<table>
    <tr>
        <th>Default SuperMini Build</th>
        <th>Stacked 🥪 SuperMini Build[^note]</th>
    </tr>
    <tr>
        <td>
            <a href="../assets/img/smol_slime_schematic.png" target="_blank">
                <img src="../assets/img/smol_slime_schematic.png" height="500" alt="Smol Slime Schematic">
            </a>
        </td>
        <td>
            <a href="../assets/img/smol_slime_stacked_schematic.png" target="_blank">
                <img src="../assets/img/smol_slime_stacked_schematic.png" height="500" alt="Smol Slime (Stacked 🥪) Schematic">
            </a>
        </td>
    </tr>
</table>

[^note]: Requires special firmware that provides power from the GPIO pins. <a href="https://youtu.be/qTmIfa_Asic" target="_blank">YouTube Tutorial</a>

## 📡 Receiver
This chapter provides a list of compatible receiver alternatives and microcontrollers that can be modified for use as receivers.\
It is important to use boards with a good antenna to maintain signal integrity and range. Hardware with PCB antennas are generally the best option to use as a receiver.\
These boards use antenna designs that are not optimized for range. If you are using the same boards for both trackers and receiver, they will likely perform poorly without modification.


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
If you want to improve signal strength, you can replace the built-in antenna with a 31 mm wire. This creates a basic monopole antenna.

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
        <td>Available on <strong>Seeed Studio</strong>.</td>
    </tr>
</table>

### Inertial Measurement Units
 - BMI270
 - ICM-42688-P
 - ICM-42688-V
 - ICM-45686
 - ISM330BX
 - ISM330DHCX
 - LSM6DSO
 - LSM6DSR
 - LSM6DSV
 - LSM6DSV16B

### Magnetometers
 - AK09940
 - BMM150[^note]
 - BMM350[^note]
 - IIS2MDC
 - IST8306
 - IST8308
 - LIS2MDL
 - LIS3MDL[^note]
 - MMC5983MA

[^note]: Sensor driver has not been tested.

### Sensor Modules

#### IMU Modules
Some of the supported sensor modules are described on the [IMU Comparison page](../diy/imu-comparison.md). Note that most common sensor modules are not supported.

#### IMU + Magnetometer Modules
Meia, a member of the [SlimeVR Discord](#discord), produces and sells sensor modules with an onboard magnetometer. They are compatible with common sensor modules, and the form factor is suitable for stacked builds.

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

### Buttons
Push buttons/momentary switches are used to control the tracker. Multiple button configurations are supported. A tracker can have either a reset button, a user button, or both.

The reset button is suitable for all functionality. If a user button is available, it will be used instead.

If a button is not available, tweezers can be used to short the pins for initial tracker setup.

### Switches
A slide switch can be used to physically disconnect a battery. Some boards have a high standby power draw and will require a switch.

If a switch is not used, a tracker can enter deep sleep by holding down the user button.

### Batteries
Most boards will support a 3.7V Li-ion/LiPo battery. Usually, batteries have a maximum charge rate of 1C, or a 1 hour charge rate. Do not use a battery if the charge rating will be exceeded.

To extend the lifespan of the battery, a much lower charge rate close to 0.5C is recommended.

| Board                      | Default charge rate | Minimum battery capacity | Recommended battery capacity |
| -------------------------- | ------------------- | ------------------------ | ---------------------------- |
| SuperMini nRF52840         | 100mA               | 100mAh                   | 180-300mAh                   |
| Seeed Studio XIAO nRF52840 | 50mA                | 50mAh                    | 80-300mAh                    |