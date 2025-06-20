<link rel="stylesheet" href="../assets/css/smol-slimes.css">

# 🏃 Smol Tracker

Before you start, decide on [how many trackers you may need](../../slimevr101.md#how-many-trackers-do-you-need).

Trackers are required to have a battery and an inertial measurement unit (IMU). A magnetometer is optional.\
Buttons and slide switches are recommended but not required. Buttons can be added to control the tracker, and a slide switch can be used to physically disconnect a tracker's battery.

## Table Of Contents

- TOC
  {:toc}

## Schematics

<form id="schematicForm">
  <fieldset class="form-field-group">
    <legend>Schematic:</legend>
    <label class="form-field-input-container">
      <div class="form-field-input">
        <input type="checkbox" name="isStacked" />
        Stacked schematic
        <sup>✅ recommended</sup>
      </div>
      <span class="form-field-description">
        IMU sits on top of the SuperMini. This removes need in additional PCB.
      </span>
    </label>
  </fieldset>
  <fieldset class="form-field-group">
    <legend>IMU's:</legend>
    <label class="form-field-input-container">
      <div class="form-field-input">
        <input type="radio" name="IMU" value="ICM-45686" checked="checked" />
        ICM-45686
        <sup>
          <a href="../imu-comparison.md#icm-45686" target="_blank"> [more] </a>
        </sup>
      </div>
      <span class="form-field-description">
        More expensive, more precise.
      </span>
    </label>
    <label class="form-field-input-container">
      <div class="form-field-input">
        <input type="radio" name="IMU" value="LSM6DSV" /> LSM6DSV
        <sup>
          <a href="../imu-comparison.md#lsm6dsv" target="_blank"> [more] </a>
        </sup>
      </div>
    </label>
    <label class="form-field-input-container">
      <div class="form-field-input">
        <input type="radio" name="IMU" value="LSM6DSR" /> LSM6DSR
        <sup>
          <a href="../imu-comparison.md#lsm6dsr" target="_blank">[more]</a>
        </sup>
      </div>
      <span class="form-field-description">
        Half the price of ICM-45686, with slightly more drift.
      </span>
    </label>
  </fieldset>
  <fieldset class="form-field-group">
    <legend>Communication protocols:</legend>
    <label class="form-field-input-container">
      <div class="form-field-input">
        <input type="radio" name="Protocol" value="SPI" checked="checked" />
        SPI
        <sup>✅ recommended</sup>
      </div>
      <span class="form-field-description">
        Less energy consumption, more performance. Not support yet magnetometer.
      </span>
    </label>
    <label class="form-field-input-container">
      <div class="form-field-input">
        <input type="radio" name="Protocol" value="I2C" /> I2C
      </div>
      <span class="form-field-description">
        Support magnetometer.
      </span>
    </label>
  </fieldset>
  <fieldset class="form-field-group">
    <legend>Extra options:</legend>
    <label class="form-field-input-container">
      <div class="form-field-input">
        <input type="checkbox" name="HasUserButton" checked="checked" />
        User button
        <sup>✅ recommended</sup>
      </div>
      <span class="form-field-description">
        Programmable user button mainly used for deep sleep.
      </span>
    </label>
    <label class="form-field-input-container">
      <div class="form-field-input">
        <input type="checkbox" name="hasResetButton" />
        Reset button
      </div>
      <span class="form-field-description">
        Option is not available on stacked smols.
      </span>
    </label>
    <label class="form-field-input-container">
      <div class="form-field-input">
        <input type="checkbox" name="hasAntenna" />
        Antenna
        <sup>✅ recommended</sup>
      </div>
      <span class="form-field-description">
        Improve range by adding short wire to antenna
        <sup>
          <a
            href="./smol-receiver.html#option-2-wire-antenna-mod"
            target="_blank"
          >
            [more]
          </a>
        </sup>
        or Wi-Fi antenna(for receiver)
        <sup>
          <a
            href="./smol-receiver.html#option-3-wi-fi-antenna-mod"
            target="_blank"
          >
            [more]
          </a>
        </sup>
      </span>
    </label>
  </fieldset>
</form>

<div
  id="schema-canvas"
  class="chip"
></div>

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

Refer to <a href="./smol-tracker-schematics.md">Smol Schematics -> Antenna extra option</a> for the solder point location.

Notes:
- Has to be isolated to avoid short circuit on other components.
- Branded wire slightly worse than solid code, but not significantly.
- Wire can be sourced from ethernet cable.

### 📏 Kapton Tape

Placed on back of IMU in stacked smol to avoid shorting out and damaging components.

<hr/>

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*

<link rel="stylesheet" href="../assets/css/smol-slimes.css" />
<link rel="stylesheet" href="../assets/css/smol-tracker-schematics.css" />
<script src="../assets/js/smol-tracker-schematics.js"></script>