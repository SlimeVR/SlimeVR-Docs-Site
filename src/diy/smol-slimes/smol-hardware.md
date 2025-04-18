# Smol Hardware

- TOC
  {:toc}

## 🧾 Schematics

| Default SuperMini Build                                                                                                                                         | Stacked 🥪 SuperMini Build[^note]                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="../../assets/img/smol_slime_schematic.png" target="_blank"><img src="../../assets/img/smol_slime_schematic.png" height="500" alt="Smol Slime Schematic"></a> | <a href="../../assets/img/smol_slime_stacked_schematic.png" target="_blank"><img src="../../assets/img/smol_slime_stacked_schematic.png" height="500" alt="Smol Slime (Stacked 🥪) Schematic"></a> |

[^note]: Requires special firmware that supplies power from the GPIO pins. <a href="https://youtu.be/qTmIfa_Asic" target="_blank">YouTube Tutorial</a>

## 📡 Receiver Hardware

It is essential you use boards equipped with high-quality antennas to ensure signal integrity and range. Hardware that features a PCB antenna is generally the best option for use as a receiver.

### USB Dongles

These dongles have a fairly optimized PCB antenna. If you have issues with signal integrity, it is recommended to use a USB extension cable.

<table>
  <thead>
    <tr>
      <th>Dongle</th>
      <th>Description</th>
      <th>Obtaining</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>eByte Dongle (E104-BT5040U)</td>
      <td>
        Cheapest option with a PCB antenna.<br />
        - <strong>E104-BT5040U</strong> is the correct model to use. It is fully
        compatible with the Nordic Semiconductor nRF52840 Dongle.<br />
        - <strong>E104-BT5040UA</strong> is not compatible. It is only capable
        of capturing BLE4.2 and BLE5.0 protocol packets.
      </td>
      <td>
        It is available on AliExpress, with free shipping.<br />
        Also available on Alibaba, where sold by
        <strong>Chengdu Ebyte Electronic Technology Co., Ltd.</strong>
      </td>
    </tr>
    <tr>
      <td>Nordic Semiconductor nRF52840 Dongle (PCA10059)</td>
      <td>Official Nordic development hardware.</td>
      <td>
        It is available on <strong>Digikey</strong> or <strong>Mouser</strong>.
      </td>
    </tr>
  </tbody>
</table>

### Microcontrollers Modified Into USB Dongles

```admonish note
If you plan to use a microcontroller as receiver you can modify it to improve signal strength, replacing the built-in antenna with a 31.2 mm wire. This creates a basic monopole antenna.
```

<table>
  <thead>
    <tr>
      <th>Board</th>
      <th>Description</th>
      <th>Obtaining</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SuperMini nRF52840</td>
      <td>A clone of the <strong>nice!nano</strong> board.</td>
      <td>
        Cheapest option overall.<br />
        Available on AliExpress with
        <code>compatible with nice!nano</code> or
        <code>Pro Micro</code> branding.
      </td>
    </tr>
    <tr>
      <td>Seeed Studio XIAO nRF52840</td>
      <td>Compact board.</td>
      <td>
        Available on
        <span class="tooltip-text-container">
          Seeed Studio
          <span class="tooltip-text">
            <strong>Seeed Studio</strong> is a global open hardware
            manufacturer, offering electronics components, development boards,
            and prototyping services. Their site can be found at:
            <a href="https://www.seeedstudio.com/">Seeed Studio Site</a>.
          </span>
        </span>
        .
      </td>
    </tr>
  </tbody>
</table>

## 🏃 Trackers

Before you start, decide on [how many trackers you may need](../../slimevr101.md#how-many-trackers-do-you-need).

Trackers are required to have a battery and an inertial measurement unit (IMU). A magnetometer is optional.\
Buttons and slide switches are recommended but not required. Buttons can be added to control the tracker, and a slide switch can be used to physically disconnect a tracker's battery.

### Microcontroller Boards

<table>
  <thead>
    <tr>
      <th>Board</th>
      <th>Description</th>
      <th>Obtaining</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SuperMini nRF52840</td>
      <td>A clone of the <strong>nice!nano</strong> board.</td>
      <td>
        Cheapest option overall.<br />
       Available on AliExpress with
        <code>compatible with nice!nano</code> or
        <code>Pro Micro</code> branding.
      </td>
    </tr>
    <tr>
      <td>Seeed Studio XIAO nRF52840</td>
      <td>Compact board.</td>
      <td>
        Available on
        <span class="tooltip-text-container">
          Seeed Studio
          <span class="tooltip-text">
            <strong>Seeed Studio</strong> is a global open hardware
            manufacturer, offering electronics components, development boards,
            and prototyping services. Their site:
            <a href="https://www.seeedstudio.com/">Seeed Studio Site</a>.
          </span>
        </span>
        .
      </td>
    </tr>
  </tbody>
</table>

### 🧭 Inertial Measurement Units

Some of the supported sensor modules are described on the [IMU Comparison page](../imu-comparison.md).

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
- <div class="tooltip-text-container">BMM150
   <span class="tooltip-text">Sensor driver has not been tested.</span>
  </div>
- <div class="tooltip-text-container">BMM350
   <span class="tooltip-text">Sensor driver has not been tested.</span>
  </div>
- IIS2MDC
- IST8306
- IST8308
- LIS2MDL
- <div class="tooltip-text-container">LIS3MDL
   <span class="tooltip-text">Sensor driver has not been tested.</span>
  </div>
- MMC5983MA

### 🟩 Sensor Modules with IMU and Magnetometer

##### Meia IMU + Magnetometer Modules

Meia, a member of the SlimeVR Discord, produces and sells IMUs with an onboard magnetometer suitable for stacked builds.

<table>
  <thead>
    <tr>
      <th>IMU + Magnetometer</th>
      <th>Product Page</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="../imu-comparison.md#ICM-45686">ICM-45686</a> + IST8306
      </td>
      <td>
        <a href="https://store.kouno.xyz/products/icm-45686-ist8306-module">
          store.kouno.xyz
        </a>
      </td>
    </tr>
    <tr>
      <td>LSM6DSR + IST8306</td>
      <td>
        <a href="https://store.kouno.xyz/products/lsm6dsr-ist8306-module">
          store.kouno.xyz
        </a>
      </td>
    </tr>
  </tbody>
</table>

### 🖲️ Buttons

Push buttons and momentary switches are utilized to control the tracker. The functions of this button—Reset, Calibration, Pairing, Deep Sleep, and entering DFU Mode—depends on the number of press combinations. A tracker can be equipped with either a reset button, a user-specified (SW0) button, or both.

The reset button is designed to support all functionalities. If an user-specified button (SW0) is defined, it will be utilized instead.

If a button is unavailable, tweezers can be used to short the pins for the initial tracker setup.

### 🕹️ Switches

A slide switch can be used to physically disconnect a battery. Some boards have a high standby power draw and will require a switch.

If a switch is not utilized, a tracker can enter Deep Sleep mode by pressing and holding down the user-specified button (SW0).

### 🔋 Batteries

Safe battery charging rates (C) are correlated to their rated capacity (mAh). A 100mAh battery charging at 100mA is 1C, and a 200mAh battery charging at 100mA is 0.5C. Charging at lower rates near 0.5C is recommended to reduce battery stress and extend lifespan.

| Board                      | Default charge rate | Minimum battery capacity | Recommended battery capacity |
| -------------------------- | ------------------- | ------------------------ | ---------------------------- |
| Seeed Studio XIAO nRF52840 | 50mA                | 50mAh                    | 80-300mAh                    |
| SuperMini nRF52840         | 100mA               | 100mAh                   | 180-300mAh                   |

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
