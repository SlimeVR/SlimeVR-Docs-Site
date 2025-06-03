# Tracker Schematics

## nRF Supermini

* Schematic
  - <input id="nrf-STK" type="checkbox" name="nrf-STK"> <label for="nrf-STK">Stacked schematic</label> (The IMU sits on top of the SuperMini)
* IMU's ([IMU Comparison](../imu-comparison.md))
  - <input id="ICM45" type="radio" name="nrf-I2C" checked="checked" value="ICM45"> <label for="ICM45">ICM-45686</label>
  - <input id="DSV" type="radio" name="nrf-I2C" value="DSV"> <label for="DSV">LSM6DSV</label>
  - <input id="DSR" type="radio" name="nrf-I2C" value="DSR"> <label for="DSR">LSM6DSR</label>
* Communication protocols
  - <input id="SPI" type="radio" name="nrf-SPI" checked="checked" value="SPI"> <label for="SPI">SPI</label> (Less energy consumption, more performance. Not support yet magnetometer)
  - <input id="I2C" type="radio" name="nrf-SPI" value="I2C"> <label for="I2C">I2C</label> (Support magnetometer. May not be supported in future updates)
* Extra options
  - <input id="USR" type="checkbox" name="nrf-USR" checked="checked"> <label for="USR">User Button</label> - programmable user button mainly used for deep sleep
  - <input id="RST" type="checkbox" name="nrf-RST"> <label for="RST">Reset Button</label> - <b>This is not available on stacked smols</b>
  - <input id="nrf-ANT" type="checkbox" name="nrf-ANT"> <label for="nrf-ANT">Antenna</label> - replace the antenna with a short wire to improve range


<div class="chip" id="nrf" style="position: relative; width: 100%;"></div>

<b>Note: Stacked smols require special firmware that supplies power from the GPIO pins. </b>


## Smol Stacked Soldering Tutorial 

<div class="video-container">
  <iframe
    width="100%"
    height="auto"
    src="https://www.youtube.com/embed/qTmIfa_Asic"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>

*Code put together by Carl (<https://github.com/carl-anders>) and Aed, with images made by Meia, Aed, and Firmata.*

<script src="../../assets/js/SmolSlime/smolSchematics.js"></script>
