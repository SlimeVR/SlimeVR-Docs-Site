---
layout: page
nav_order: 2
parent: DIY trackers guide
---

# Tracker schematics

## Wemos D1 Mini

* IMU
  - <input id="bno" type="radio" name="d1-imu" value="bno"> <label for="bno">BNO085</label> - Good but expensive $$$.
  - <input id="mpu" type="radio" name="d1-imu" value="mpu" checked="checked"> <label for="mpu">MPU6050</label> - Cheap but drifts quite a bit.
* <input id="d1-aux" type="checkbox" name="d1-aux"> <label for="d1-aux">Auxiliary sensor</label> - Allows for a second motion sensor to be connected.
* <input id="d1-battery-sense" type="checkbox" name="d1-battery-sense"> <label for="d1-battery-sense">Battery sense</label> - The device is able to sense the battery life remaining using a 180k resistor.
* <input id="d1-charge-diodes" type="checkbox" name="d1-charge-diodes"> <label for="d1-charge-diodes">Charge diodes (1N5817)</label> - Allows for usage even when charging, and is a useful safety measure.

<div class="chip" id="d1" style="position: relative; width: 100%;"></div>

| Label |  GPIO  |       Input      |    Output   |                     Description                     |
|:-----:|:------:|:----------------:|:-----------:|:---------------------------------------------------:|
| A0    | ADC0   | Analog Input     | No          | For analog input from 0 to 3.3v and no output.      |
| RX    | GPIO3  | Yes              | RX pin only | High at Boot.                                       |
| TX    | GPIO1  | Tx pin only      | Yes         | High at Boot.                                       |
| D0    | GPIO16 | No interrupt     | No I2C, PWM | Used to wake up chip from deep sleep, High at Boot. |
| D1    | GPIO5  | Yes              | Yes         | Often used as SCL                                   |
| D2    | GPIO4  | Yes              | Yes         | Often used as SDA                                   |
| D3    | GPIO0  | Pulled up        | Yes         | Connected to Flash button                           |
| D4    | GPIO2  | Pulled up        | Yes         | Connected to built-in LED, High at Boot.            |
| D5    | GPIO14 | Yes              | Yes         | SCLK pin for SPI interface                          |
| D6    | GPIO12 | Yes              | Yes         | MISO pin for SPI interface                          |
| D7    | GPIO13 | Yes              | Yes         | MOSI pin for SPI interface                          |
| D8    | GPIO15 | Pulled to ground | Yes         | CS pin for SPI interface                            |

*Code put together by Carl (<https://github.com/carl-anders>), with images made by Lune#0241 thanks to the help of the whole DIY community. Doc page integration by Emojikage#3095. Edited by CalliePepper#0666.*

<script src="assets/js/schematics.js"></script>
