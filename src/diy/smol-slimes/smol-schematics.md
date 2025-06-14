# Tracker Schematics

<form id="schematicForm">
  <fieldset class="form-field-group">
    <legend>Schematic:</legend>
    <div class="form-field-input-container">
      <label class="form-field-input">
        <input type="checkbox" name="isStacked" />
        Stacked schematic
        <sup>✅ recommended</sup>
      </label>
      <span class="form-field-description">
        IMU sits on top of the SuperMini. This removes need in additional PCB.
      </span>
    </div>
  </fieldset>
  <fieldset class="form-field-group">
    <legend>IMU's:</legend>
    <div class="form-field-input-container">
      <label class="form-field-input">
        <input type="radio" name="IMU" value="ICM-45686" checked="checked" />
        ICM-45686
        <sup>
          <a href="../imu-comparison.md#icm-45686" target="_blank"> [more] </a>
        </sup>
      </label>
      <span class="form-field-description">
        More expensive, more precise.
      </span>
    </div>
    <div class="form-field-input-container">
      <label class="form-field-input">
        <input type="radio" name="IMU" value="LSM6DSV" /> LSM6DSV
        <sup>
          <a href="../imu-comparison.md#lsm6dsv" target="_blank"> [more] </a>
        </sup>
      </label>
    </div>
    <div class="form-field-input-container">
      <label class="form-field-input">
        <input type="radio" name="IMU" value="LSM6DSR" /> LSM6DSR
        <sup>
          <a href="../imu-comparison.md#lsm6dsr" target="_blank">[more]</a>
        </sup>
      </label>
      <span class="form-field-description">
        Half the price of ICM-45686, with slightly more drift.
      </span>
    </div>
  </fieldset>
  <fieldset class="form-field-group">
    <legend>Communication protocols:</legend>
    <div class="form-field-input-container">
      <label class="form-field-input">
        <input type="radio" name="Protocol" value="SPI" checked="checked" />
        SPI
        <sup>✅ recommended</sup>
      </label>
      <span class="form-field-description">
        Less energy consumption, more performance. Not support yet magnetometer.
      </span>
    </div>
    <div class="form-field-input-container">
      <label class="form-field-input">
        <input type="radio" name="Protocol" value="I2C" /> I2C
      </label>
      <span class="form-field-description">
        Support magnetometer. May not be supported in future updates.
      </span>
    </div>
  </fieldset>
  <fieldset class="form-field-group">
    <legend>Extra options:</legend>
    <div class="form-field-input-container">
      <label class="form-field-input">
        <input type="checkbox" name="HasUserButton" checked="checked" />
        User button
        <sup>✅ recommended</sup>
      </label>
      <span class="form-field-description">
        Programmable user button mainly used for deep sleep.
      </span>
    </div>
    <div class="form-field-input-container">
      <label class="form-field-input">
        <input type="checkbox" name="hasResetButton" />
        Reset button
      </label>
      <span class="form-field-description">
        Option is not available on stacked smols.
      </span>
    </div>
    <div class="form-field-input-container">
      <label class="form-field-input">
        <input type="checkbox" name="hasAntenna" />
        Antenna
        <sup>✅ recommended</sup>
      </label>
      <span class="form-field-description">
        Improve range by adding short wire to antenna
        <sup>
          <a
            href="./smol-hardware.md#option-2-wire-antenna-mod"
            target="_blank"
          >
            [more]
          </a>
        </sup>
        or Wi-Fi antenna(for receiver)
        <sup>
          <a
            href="./smol-hardware.md#option-3-wi-fi-antenna-mod"
            target="_blank"
          >
            [more]
          </a>
        </sup>
      </span>
    </div>
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
