# Tracker Schematics

<form id="schematicForm">
  <fieldset>
    <legend>Schematic:</legend>
    <label>
      <input type="checkbox" name="isStacked" /> Stacked schematic
      <sup>✅ recommended</sup>
      <span>
        IMU sits on top of the SuperMini. This removes need in additional PCB.
      </span>
    </label>
  </fieldset>
  <fieldset>
    <legend>IMU's:</legend>
    <label>
      <input type="radio" name="IMU" value="ICM-45686" checked="checked" />
      ICM-45686
      <sup>
        <a href="../imu-comparison.md#icm-45686" target="_blank">[more] </a>
      </sup>
      <span>More expensive, more precise.</span>
    </label>
    <label>
      <input type="radio" name="IMU" value="LSM6DSV" /> LSM6DSV
      <sup>
        <a href="../imu-comparison.md#lsm6dsv" target="_blank">[more]</a>
      </sup>
    </label>
    <label>
      <input type="radio" name="IMU" value="LSM6DSR" /> LSM6DSR
      <sup>
        <a href="../imu-comparison.md#lsm6dsr" target="_blank">[more]</a>
      </sup>
      <span>Half the price of ICM-45686, with slightly more drift.</span>
    </label>
  </fieldset>
  <fieldset>
    <legend>Communication protocols:</legend>
    <label>
      <input type="radio" name="Protocol" value="SPI" checked="checked" /> SPI
      <sup>✅ recommended</sup>
      <span>
        Less energy consumption, more performance. Not support yet magnetometer.
      </span>
    </label>
    <label>
      <input type="radio" name="Protocol" value="I2C" /> I2C
      <span>Support magnetometer. May not be supported in future updates.</span>
    </label>
  </fieldset>
  <fieldset>
    <legend>Extra options:</legend>
    <label>
      <input type="checkbox" name="HasUserButton" checked="checked" /> User button
      <sup>✅ recommended</sup>
      <span>
        Programmable user button mainly used for deep sleep.
      </span>
    </label>
    <label>
      <input type="checkbox" name="hasResetButton" /> Reset button
      <span>Option is not available on stacked smols.</span>
    </label>
    <label>
      <input type="checkbox" name="hasAntenna" /> Antenna
      <sup>✅ recommended</sup>
      <span>
        Improve range by adding short wire to antenna
        <sup><a href="./smol-hardware.md#option-2-wire-antenna-mod" target="_blank">[more]</a></sup>
        or Wi-Fi antenna(for receiver)
        <sup><a href="./smol-hardware.md#option-3-wi-fi-antenna-mod" target="_blank">[more]</a></sup>.
      </span>
    </label>
  </fieldset>
</form>

<div
  id="schema-canvas"
  class="chip"
  style="position: relative; width: 100%"
></div>

<link rel="stylesheet" href="assets/css/smol-slimes.css" />
<link rel="stylesheet" href="assets/css/smol-schematics.css" />
<script src="assets/js/smol-schematics.js"></script>