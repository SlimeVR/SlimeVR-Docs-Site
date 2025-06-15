<link rel="stylesheet" href="assets/css/smol-slimes.css">

# 🏃 Smol Tracker

Before you start, decide on [how many trackers you may need](../../slimevr101.md#how-many-trackers-do-you-need).

Trackers are required to have a battery and an inertial measurement unit (IMU). A magnetometer is optional.\
Buttons and slide switches are recommended but not required. Buttons can be added to control the tracker, and a slide switch can be used to physically disconnect a tracker's battery.

## Table Of Contents

- TOC
  {:toc}

## Tracker Parts

### 📻 Microcontroller Boards

<div class="table-wrapper">
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
        <td>
          <span id="SuperMini"> SuperMini nRF52840 </span>
        </td>
        <td>
          A clone of the <strong>nice!nano</strong> board. Cheapest option
          overall. <br />
          Signal strength can be improved with antenna mod.
        </td>
        <td>
          Available on AliExpress with
          <code>compatible with nice!nano</code> or
          <code>Pro Micro</code> branding.
          <ul>
            <li>
              <a href="https://pl.aliexpress.com/item/1005007738886550.html">
                AliExpress TENSTAR 2pcs pack
              </a>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <span id="XIAO"> Seeed Studio XIAO nRF52840 </span>
        </td>
        <td>Compact board.</td>
        <td>
          <ul>
            <li>
              <a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html">
                Manufacturer listing
              </a>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

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

<div class="table-wrapper">
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
                    <a href="../imu-comparison.md#ICM-45686">ICM-45686</a> +
                    QMC6309
                </td>
                <td>
                    <a href="https://store.kouno.xyz/products/icm-45686-qmc6309-module">
                        store.kouno.xyz
                    </a>
                </td>
            </tr>
            <tr>
                <td>LSM6DSR + QMC6309</td>
                <td>
                    <a href="https://store.kouno.xyz/products/lsm6dsr-qmc6309-module">
                        store.kouno.xyz
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

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

### 📶 Coper Wire for Wire Antenna Mod

Cheap and easy way to improve signal strength. 

Consist of 31.2 mm wire attached to the antenna pin to form a basic monopole antenna. Longer is fine too.

Refer to <a href="./smol-schematics.md">Smol Schematics -> Antenna extra option</a> for the solder point location.

Notes:
- Has to be isolated to avoid short circuit on other components.
- Branded wire slightly worse than solid code, but no significantly.
- Wire can be sourced from ethernet cable.

### 📏 Kapton Tape

Placed on back of IMU in stacked smol to avoid frying components.

## Stacked Soldering Tutorial 

<div class="video-container">
  <iframe
    width="100%"
    height="auto"
    src="https://www.youtube.com/embed/qTmIfa_Asic"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

<hr/>

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
