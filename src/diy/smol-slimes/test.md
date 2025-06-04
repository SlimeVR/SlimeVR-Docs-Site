# Tracker Schematics

<form id="schematicForm">
  <fieldset>
    <legend>Schematic:</legend>
    <label>
      <input type="checkbox" name="isStacked" checked="checked"/> Stacked schematic
      <span>In stacked design the IMU sits on top of the SuperMini. This allows to remove need in PCB that connect IMU and board.</span>
    </label>
  </fieldset>
  <fieldset>
    <legend>IMU's:</legend>
    <span><a href="../imu-comparison.md">IMU Comparison page</a></span>
    <label>
      <input type="radio" name="IMU" value="ICM-45686" checked="checked" /> ICM-45686
      <span>More expensive, more precise.</span>
    </label>
    <label> <input type="radio" name="IMU" value="LSM6DSV" /> LSM6DSV </label>
    <label> <input type="radio" name="IMU" value="LSM6DSR" /> LSM6DSR 
      <span>Half the price of ICM-45686, with similar performance.</span>
      </label>
  </fieldset>
  <fieldset>
    <legend>Communication protocols:</legend>
    <label>
      <input type="radio" name="Protocol" value="SPI" checked="checked" /> SPI
      <span>Less energy consumption, more performance. Not support yet magnetometer</span>
    </label>
    <label>
      <input type="radio" name="Protocol" value="I2C" /> I2C
      <span>Support magnetometer. May not be supported in future updates</span>
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
</form>

<div
  id="schema-canvas"
  class="chip"
  style="position: relative; width: 100%"
></div>

<link rel="stylesheet" href="smol-slimes.css">
<link rel="stylesheet" href="assets/css/smol-schematics.css">
<script src="assets/js/smol-schematics.js"></script>