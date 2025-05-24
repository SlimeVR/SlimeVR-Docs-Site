# Tracker Schematics

## nRF Supermini

* Schematic
  - <input id="nrf-STK" type="checkbox" name="nrf-STK"> <label for="nrf-STK">Stacked schematic</label> -the IMU sits on top of the supermini
* IMUs
  - <input id="ICM45" type="radio" name="nrf-I2C" checked="checked" value="ICM45"> <label for="ICM45">ICM-45686</label>
  - <input id="DSV" type="radio" name="nrf-I2C" value="DSV"> <label for="DSV">LSM6DSV</label>
  - <input id="DSR" type="radio" name="nrf-I2C" value="DSR"> <label for="DSR">LSM6DSR</label>
* Communication protocols
  - <input id="I2C" type="radio" name="nrf-SPI" value="I2C"> <label for="I2C">I2C</label>
  - <input id="SPI" type="radio" name="nrf-SPI" checked="checked" value="SPI"> <label for="SPI">SPI</label>
* Extra options
  - <input id="nrf-ANT" type="checkbox" name="nrf-ANT"> <label for="nrf-ANT">Antenna</label> - replace the antenna with a short wire to improve range
  - <input id="nrf-SW0" type="checkbox" name="nrf-SW0" checked="checked"> <label for="nrf-SW0">SW0 Button</label> - programmable user button mainly used for deep sleep
  - <input id="nrf-RST" type="checkbox" name="nrf-RST"> <label for="nrf-RST">RST Button</label>



<div class="chip" id="nrf" style="position: relative; width: 100%;"></div>


*Code put together by Carl (<https://github.com/carl-anders>) and Aed, with images made by Meia, Aed, and Firmata.*

<script src="../../assets/js/SmolSlime/smolSchematics.js"></script>
