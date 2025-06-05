# Tracker Schematics

<form id="schematicForm">
  <fieldset>
    <legend>Schematic:</legend>
    <label>
      <input type="checkbox" name="isStacked" checked="checked"/> Stacked schematic
      <span>IMU sits on top of the SuperMini. This removes need in additional PCB.</span>
    </label>
  </fieldset>
  <fieldset>
    <legend>IMU's:</legend>
    <label>
      <input type="radio" name="IMU" value="ICM-45686" checked="checked" /> ICM-45686 <sup><a href="../imu-comparison.md#icm-45686" target="_blank">[more]</a></sup> 
      <span>More expensive, more precise.</span>
    </label>
    <label>
    <input type="radio" name="IMU" value="LSM6DSV" /> LSM6DSV <sup><a href="../imu-comparison.md#lsm6dsv" target="_blank">[more]</a></sup>
    </label>
    <label> <input type="radio" name="IMU" value="LSM6DSR" /> LSM6DSR <sup><a href="../imu-comparison.md#lsm6dsr" target="_blank">[more]</a></sup>
      <span>Half the price of ICM-45686, with slightly more drift.</span>
      </label>
  </fieldset>
  <fieldset>
    <legend>Communication protocols:</legend>
    <label>
      <input type="radio" name="Protocol" value="SPI" checked="checked" /> SPI
      <span>Less energy consumption, more performance. Not support yet magnetometer.</span>
    </label>
    <label>
      <input type="radio" name="Protocol" value="I2C" /> I2C
      <span>Support magnetometer. May not be supported in future updates.</span>
    </label>
  </fieldset>
  <fieldset>
    <legend>Extra options:</legend>
    <label>
      <input type="checkbox" name="HasUserButton" checked="checked" /> User Button
      <span>Programmable user button mainly used for deep sleep.</span>
    </label>
    <label>
      <input type="checkbox" name="hasResetButton" /> Reset Button
      <span>Reset Button is not available on stacked smols.</span>
    </label>
    <label>
      <input type="checkbox" name="hasAntenna" /> Antenna
      <span>Replace the antenna with a short wire to improve range.</span>
    </label>
  </fieldset>

<div
  id="schema-canvas"
  class="chip"
  style="position: relative; width: 100%"
></div>


## Approximated List Of Parts For Stacked Option

  <fieldset>
    <legend>Amount of trackers:</legend>
    <a href="#">How many trackers do you need?</a>
    <label>
      <input type="radio" name="Protocol" value="SPI" checked="checked" /> 6
    </label>
    <label>
      <input type="radio" name="Protocol" value="I2C" /> 8
    </label>
    <label>
      <input type="radio" name="Protocol" value="I2C" /> 10
    </label>
  </fieldset>
  <fieldset>
    <legend>Dongle:</legend>
    <label>
      <input type="radio" name="Protocol" value="SPI" checked="checked" /> <a href="#">SuperMini nRF52840 with WiFi antenna</a>
      <span>Best price to performance ratio. <br/>Sensitive to obstacles.<br/>4m optimal range.</span>
    </label>
    <label>
      <input type="radio" name="Protocol" value="I2C" /> <a href="#">HolyIOT-21017</a>
      <span>Longer range.<br/>Can peirce walls.<br/>Many times more expensive.</span>
    </label>
  </fieldset>

```admonish warning
This table not includes [straps](./smol-pre-compiled-firmware.md), [3d printing cases](./smol-pre-compiled-firmware.md) and soldering tools.
```

<table>
  <thead>
    <tr>
      <th>Part</th>
      <th>Amount</th>
      <th>Approximate Price</th>
    </tr>
  </thead>
  <tbody>
<div id="shopping-list-table-container" class="table-wrapper"></div>
    <tr>
      <td>
        <span id="SuperMini">
          <a href="#">SuperMini nRF52840</a>
        </span>
      </td>
      <td>
        9
      </td>
      <td>
        44,87 USD
      </td>
    </tr>
    <tr>
      <td>
        <span id="SuperMini">
          <a href="#">ICM-45686</a>
        </span>
      </td>
      <td>
        8
      </td>
      <td>
        27,41 USD
      </td>
    </tr>
    <tr>
      <td>
        <span id="SuperMini">
          <a href="#">Kapton Polyimide Tape</a>
        </span>
      </td>
      <td>
        1
      </td>
      <td>
        2 USD
      </td>
    </tr>
      <td>
        <span id="SuperMini">
          <a href="#">10pcs 401230 batteries<br/>(Need 6, usually sold in pack of 10)</a>
        </span>
      </td>
      <td>
        10
      </td>
      <td>
        9 USD
      </td>
    </tr>
    </tr>
      <td>
        <span id="SuperMini">
          <a href="#">WiFi Antenna</a>
        </span>
      </td>
      <td>
        1
      </td>
      <td>
        2,24 USD
      </td>
    </tr>
    </tr>
      <td>
        <span id="SuperMini">
          <a href="#">IPX to SMA RF Coax Adapter</a>
        </span>
      </td>
      <td>
        1
      </td>
      <td>
        1,40 USD
      </td>
    </tr>
    </tr>
      <td>
        <span id="SuperMini">
          <a href="#">Buttons</a>
        </span>
      </td>
      <td>
        6
      </td>
      <td>
        1,53 USD
      </td>
    </tr>
    </tr>
      <td>
        Total:
      </td>
      <td></td>
      <td>
        53 USD
      </td>
    </tr>
  </tbody>
</table>



</form>


<link rel="stylesheet" href="smol-slimes.css">
<link rel="stylesheet" href="assets/css/smol-schematics.css">
<script src="assets/js/smol-schematics.js"></script>