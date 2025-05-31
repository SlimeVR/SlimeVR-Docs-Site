# Tracker Schematics

## nRF Supermini

* Schematic
  - <input id="nrf-STK" type="checkbox" name="nrf-STK"> <label for="nrf-STK">Stacked schematic</label> - the IMU sits on top of the supermini
* IMU's
  - <input id="ICM45" type="radio" name="nrf-I2C" checked="checked" value="ICM45"> <label for="ICM45">ICM-45686</label>
  - <input id="DSV" type="radio" name="nrf-I2C" value="DSV"> <label for="DSV">LSM6DSV</label>
  - <input id="DSR" type="radio" name="nrf-I2C" value="DSR"> <label for="DSR">LSM6DSR</label>
* Communication protocols
  - <input id="SPI" type="radio" name="nrf-SPI" checked="checked" value="SPI"> <label for="SPI">SPI</label>
  - <input id="I2C" type="radio" name="nrf-SPI" value="I2C"> <label for="I2C">I2C</label>
* Extra options
  - <input id="USR" type="checkbox" name="nrf-USR" checked="checked"> <label for="USR">User Button</label> - programmable user button mainly used for deep sleep
  - <input id="RST" type="checkbox" name="nrf-RST"> <label for="RST">Reset Button</label> - <b>This is not available on stacked smols</b>
  - <input id="nrf-ANT" type="checkbox" name="nrf-ANT"> <label for="nrf-ANT">Antenna</label> - replace the antenna with a short wire to improve range


<div class="chip" id="nrf" style="position: relative; width: 100%;"></div>

<b>Note: Stacked smols require special firmware that supplies power from the GPIO pins. </b>
<a href="https://youtu.be/qTmIfa_Asic" target="_blank">Stacked Smol youtube tutorial</a>

*Code put together by Carl (<https://github.com/carl-anders>) and Aed, with images made by Meia, Aed, and Firmata.*

<script src="../../assets/js/SmolSlime/smolSchematics.js"></script>
