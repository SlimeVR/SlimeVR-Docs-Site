# Tracker Schematics

## nRF Supermini

* Schematic
  - <input type="checkbox" id="IsStacked" name="IsStacked"> <label for="IsStacked">Stacked schematic (The IMU sits on top of the SuperMini)</label>
* IMU's ([IMU Comparison](../imu-comparison.md))
  - <input type="radio" id="IMU-ICM-45686" name="IMU" name="IMU" value="ICM-45686" checked="checked"> <label for="IMU-ICM-45686">ICM-45686</label>
  - <input type="radio" id="IMU-LSM6DSV" name="IMU" value="LSM6DSV"> <label for="IMU-LSM6DSV">LSM6DSV</label>
  - <input type="radio" id="IMU-LSM6DSR" name="IMU" value="LSM6DSR"> <label for="IMU-LSM6DSR">LSM6DSR</label>
* Communication protocols
  - <input type="radio" id="Protocol-SPI" name="Protocol" value="SPI" checked="checked"> <label for="Protocol-SPI">SPI (Less energy consumption, more performance. Not support yet magnetometer)</label>
  - <input type="radio" id="Protocol-I2C" name="Protocol" value="I2C"> <label for="Protocol-I2C">I2C (Support magnetometer. May not be supported in future updates)</label>
* Extra options
  - <input type="checkbox" id="UserButton" name="UserButton" checked="checked"> <label for="UserButton">User Button (Programmable user button mainly used for deep sleep)</label>
  - <input type="checkbox" id="ResetButton" name="ResetButton"> <label for="ResetButton">Reset Button <b>(This is not available on stacked smols)</b></label>
  - <input type="checkbox" id="Antenna" name="Antenna"> <label for="Antenna">Antenna (Replace the antenna with a short wire to improve range)</label>


<div id="schema-canvas" class="chip" style="position: relative; width: 100%;"></div>

<b>Note: Stacked smols require special firmware that supplies power from the GPIO pins. </b>


*Code put together by Carl (<https://github.com/carl-anders>) and Aed, with images made by Meia, Aed, and Firmata.*

<script src="../../assets/js/SmolSlime/smolSchematics.js"></script>
