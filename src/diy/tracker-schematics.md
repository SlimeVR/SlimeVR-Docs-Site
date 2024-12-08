# Tracker Schematics

## Wemos D1 Mini

* IMUs ranked from best - worst
  - <input id="bno_slimevr" type="radio" name="d1-imu" value="bno_slimevr" checked="checked"> <label for="bno_slimevr">BNO085 (SlimeVR)</label> - SlimeVR version of BNO085 from SlimeVR Store.
  - <input id="bno" type="radio" name="d1-imu" value="bno"> <label for="bno">BNO085</label> - Great but expensive $$$.
  - <input id="bno_ada" type="radio" name="d1-imu" value="bno_ada"> <label for="bno_ada">BNO085 (Adafruit)</label> - Adafruit version of BNO085.
  - <input id="DSV" type="radio" name="d1-imu" value="DSV"> <label for="DSV">LSM6DSV</label> - Very good and slightly cheaper than BNO <b>Experimental</b>
  - <input id="ICM45" type="radio" name="d1-imu" value="ICM45"> <label for="ICM45">ICM-45686</label> - Great and cheaper than DSV. <b>VERY Experimental</b>
  - <input id="DSO" type="radio" name="d1-imu" value="DSO"> <label for="DSO">LSM6DSO</label> - Good but a little bit more expensive than BMI270. <b>Experimental</b>
  - <input id="bmi270" type="radio" name="d1-imu" value="bmi270"> <label for="bmi270">BMI270</label> - Better than BMI160 while still being cheap.
  - <input id="bmi160" type="radio" name="d1-imu" value="bmi160"> <label for="bmi160">BMI160</label> - Very cheap but not very good performance <b>DO NOT USE!</b>
  - <input id="mpu" type="radio" name="d1-imu" value="mpu"> <label for="mpu">MPU6050</label> - Cheap but drifts quite a bit. <b>DO NOT USE!</b>
  - <input id="mpu9250" type="radio" name="d1-imu" value="mpu9250"> <label for="mpu9250">MPU9250 (GY-91)</label> - Not terrible but plagued with fakes. <b>DO NOT USE!</b>
  - <input id="qmc" type="radio" name="d1-imu" value="qmc"> <label for="qmc">MPU6050 + QMC5883L</label> - <b>Experimental</b> cheaper MPU9250 equivalent. <b>DO NOT USE!</b>
* <input id="d1-aux" type="checkbox" name="d1-aux"> <label for="d1-aux">Auxiliary tracker</label> - Allows for a second motion sensor to be connected.
* <input id="d1-battery-sense" type="checkbox" name="d1-battery-sense"> <label for="d1-battery-sense">Battery sense</label> - The device is able to sense the battery life remaining using a 180k resistor.
* <input id="d1-charge-diodes" type="checkbox" name="d1-charge-diodes" checked="checked"> <label for="d1-charge-diodes">Charge diodes (1N5817)</label> - Allows for usage even when charging, and is a **recommended safety measure**.

<div class="chip" id="d1" style="position: relative; width: 100%;"></div>

<div class="diodeDirectionCont">
  <img alt="diode direction" src="../assets/img/diodeDirection.png" style="float:left;margin:0 20px 20px;" />
  Note: If you are using the charge diodes the grey band goes on the side representated by the tip of the arrows in the diagram above.
</div>

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

## Cable layout recommendation for auxiliary tracker

Note that while schematics show SDA and SCL running adjacent to each other, make sure that they are not physically adjacent
when running in the auxiliary tracker cable. This is to avoid [crosstalk](https://www.i2cchip.com/i2c_connector.html#Crosstalk) and ensure stable operation of both trackers when cable and allows the extension to safely reach more than 80cm.

![Distance for each setup](../assets/img/I2C_Wire_Length_Test.png)

If you are using a ribbon cable or similar layout, use the following cable layout as a reference:

![Ribbon cable I2C layout](../assets/img/ribbon_cable.png)

If you are using a twisted pair cable or similar layout, use the following cable layout as a reference:

![Twisted pair cable I2C layout](../assets/img/twisted_pair.png)

*Code put together by Carl (<https://github.com/carl-anders>), with images made by Lune#0241, nwbx01, and Reclusious#2022 thanks to the help of the whole DIY community. Doc page integration by emojikage. Edited by calliepepper and Aed. Thanks to snapchat_hotdog for the testing on the extension lengths.*

<script src="../assets/js/schematics.js"></script>
