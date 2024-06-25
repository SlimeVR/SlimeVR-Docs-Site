# IMU Comparison
The community has been hard at work testing various IMUs for DIY SlimeVR trackers.
A survey was held within the DIY community for a clearer picture of the current state of available IMUs.
This page is based on user feedback and weighed against the survey, with scores showing the average answer given to the chip.
Following completing your own trackers, you can complete an extended version of that original survey yourself, or view previous responses on the [SlimeVR Experience Survey page](../misc/survey.md).

## Index
- [BNO085](#bno085)
- [BMI270](#bmi270)
- [BMI160](#bmi160)
- [ICM20948](#icm20948)
- [MPU9250](#mpu9250)
- [MPU+QMC5883L](#mpuqmc5883l)
- [BNO055](#bno055)
- [MPU6500](#mpu6500)
- [MPU6050](#mpu6050)
- [Addendum](#addendum)

## Criteria
We rank these chips in the following categories: Reset Time, Cost, Availability and Build quality.
These factors are meant to give a quick indication as to what to expect from various IMUs, your mileage may vary.
For clarification purposes: If 3 out of 10 chips are dead on arrival or die during early use, we refer to that as poor build quality.

## General Recommendations
At the moment, the BMI160 (stable) and BMI270 (experimental) are the best price-to-performance options, far surpassing other IMUs such as the MPU6050. Neither BMI requires a stable magnetic environment, making them a suitable option for many more people than 9DOF IMUs, such as the MPU9250 or ICM20948, or even the MPU6050+QMC5883L. BNO085s, while offering greater reset times, come at a significant price premium.

When referring to the order of the IMUs on this page, bear in mind that they're listed roughly in order of best to worst.

---
## BNO085
This is the IMU used in production Slimes.
They are reliable and stable chips, but at the time of writing, they remain difficult to find at modest prices like other IMUs.


|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|30 - 45 min|~$13 |Sufficient  |Excellent    |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>

|Pros          |Cons                                   |
|--------------|---------------------------------------|
|Accurate      |Expensive                              |
|Reliable      |Extra wiring required compared to MPUs |
|Smooth        |                                       |

> Please note, if you are looking for BNO085s SlimeVR may have [spares for sale that can be found here](https://shop.slimevr.dev/products/slimevr-imu-module-bno085).

---
## BMI270
The BMI270 is a relatively new and <b>experimental</b> IMU for DIY SlimeVR.
It seems to perform significantly better than the BMI160 while still being affordable.

|Reset time |Cost  |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|20 - 30min |~$2.7 |Sufficient  |Great        |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o" ></i>

|Pros                   |Cons                                                            |
|-----------------------|----------------------------------------------------------------|
|Cheap                  | [Requires manual calibration the first time](#imu-calibration) |
|Reliable               | Only available in module form from a single source             |
|Smooth                 | Experimental, still in testing                                 |
|Single time calibration| Performance data not taken from survey                         |

---
## BMI160
The BMI160 is the current go-to IMU for DIY SlimeVR.
It is an easily available chip with decent performance and good reliability.

It does not have a magnetometer, but external chips such as QMC5883L/HMC5883L can be used,
in the same way [as with MPU](#mpuqmc5883l). Like any other setup with magnetometers, this is highly experimental.
Reset times and yaw accuracy with a magnetometer will depend on your build quality and magnetic environment.

|Reset time |Cost  |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|10 - 20min |~$1.50|Sufficient  |Good         |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o" ></i>

|Pros                   |Cons                                                            |
|-----------------------|----------------------------------------------------------------|
|Cheap                  | [Requires manual calibration the first time](#imu-calibration) |
|Reliable               |                                                                |
|Smooth                 |                                                                |
|Single time calibration|                                                                |

---
## ICM20948
The ICM 20948 is a comparatively modern chip.
While initial testing seems positive, this chip has not had enough field time for conclusive results.

There are quite a few variants of the ICM-20948, most of which operate at 3.3v.
- Pimoroni ICM-20948 (Please note this board requires you to cut the bridge on the back to change the address);
- Adafruit ICM-20948 (Please note this board requires you to solder the bridge on the back to change the address);
- SparkFun ICM-20948 (Please note this board requires you to solder the bridge on the back to change the address);
- GY-912 (Please note this board requires you to bridge SD0 to GND to change the address);
- CJMCU-20948 is known to run on 1.8v and needs additional hardware to work.
  A 1.8v Linear Voltage regulator and Logic Level Converter are needed and as such this board is not recommended.



|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|15 - 60 min|~$15 |Insufficient|Good         |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>

|Pros             |Cons                                  |
|-----------------|--------------------------------------|
|Accurate         |Currently still in testing            |
|Reliable         |Sensitive to bad magnetic environments|
|Smooth           |Availability is not guaranteed        |

`Comment: Prone to some drift when moving really fast (in 6DoF mode).`

---
## MPU9250

<b>Not recommended for new designs.</b>

The MPU9250 (currently ran in several modes) is a newer installment of the MPU lineup.

|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|10 - 40 min|~$7  |Insufficient|Mediocre     |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o" ></i><i class="fa fa-star-o" ></i>

|Pros             |Cons                                                           |
|-----------------|---------------------------------------------------------------|
|Affordable       |Very prone to counterfeit/DOA units                            |
|Smooth           |Sensitive to bad magnetic environments                         |
|Reliable         |[Requires manual calibration the first time](#imu-calibration) |

`Comment: Finding legitimate MPU9250s has become exceedingly difficult due to counterfeits and DOA IMUs. Buy at your own risk.`

---
## MPU+QMC5883L

<b>Not recommended for new designs.</b>

This is a highly experimental setup that approximately matches an MPU9250.
Unlike other IMUs which consist of a single PCB, this instead relies on connecting a magnetometer to an MPU6050 or MPU6500.
That being said, a breakout board which includes both an MPU6050 and an HMC5883L does exist: the GY-87.
Both the QMC5883L and HMC5883L may be used, however, the QMC5883L may potentially perform better.


|Reset time |Cost  |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|10 - 40min |~$2.50|Sufficient  |Mixed        |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o" ></i><i class="fa fa-star-o" ></i>

|Pros             |Cons                                                          |
|-----------------|--------------------------------------------------------------|
|Cheap            |Very experimental                                             |
|Smooth           |[Requires manual calibration the first time](#imu-calibration)|
|Reliable         |Sensitive to bad magnetic environments                        |
|                 |Complex wiring                                                |

`Comment: Requires experimental firmware.`

---
## BNO055

<b>Not recommended for new designs.</b>

Earlier version of the BNO085 without stabilisation firmware.

*This chip does not have sufficient test results for a conclusive summary.*

|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|1 -10 min  |~$38 |Mediocre    |Good         |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o" ></i><i class="fa fa-star-o" ></i>

|Pros                           |Cons                                          |
|-------------------------------|----------------------------------------------|
|Build Quality                  |Expensive                                     |
|Available                      |Can supposedly lose tracking with rapid motion|
|Smooth                         |Insufficient testing                          |

`Comment: Insufficient testing for a accurate description, but cannot compete with BNO085.`

---
## MPU6500

<b>Not recommended for new designs.</b>

The MPU6500 is the middle ground of the MPU chips available.
The drift time of this IMU may be a slight improvement over the MPU6050.

|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|5 - 10 min |~$1  |Sufficient  |Mediocre     |

Score: <i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o" ></i><i class="fa fa-star-o" ></i>

|Pros             |Cons                                         |
|-----------------|---------------------------------------------|
|Affordable       |High drift rate                              |
|Available        |More expensive than the 6050 counterpart     |
|Smooth           |Failure rate inconsistent                    |
|                 |[Calibration on each start](#imu-calibration)|

`Comment: Tracking slightly better than the MPU6050.`

---
## MPU6050

<b>Not recommended for new designs.</b>

The MPU6050 will get you started with SlimeVR for cheap.

|Reset time |Cost  |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|1 - 5 min  |~$1.04|Sufficient  |Poor         |

Score: <i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o" ></i>

|Pros             |Cons                                         |
|-----------------|---------------------------------------------|
|Cheap            |High drift rate                              |
|High availability|High failure rate                            |
|                 |[Calibration on each start](#imu-calibration)|

`Comment: Order more than you need because of the higher failure rate, it is not uncommon to find 2 to 3 bad chips in a batch.`

---
# Addendum

## What's the difference between an IMU with a magnetometer (9 DOF) and an IMU without a magnetometer (6 DOF)?

IMUs with a magnetometer work like a compass and use the Earth's magnetic field as a reference point to eliminate gyroscope drift, however they require a stable magnetic environment or else they will perform erratically. IMUs without a magnetometer don't require a stable magnetic environment, but are prone to gyroscope drift over time due to being unable to differentiate sensor noise from actual movement, and so will slowly spin in the yaw axis over time. For SlimeVR's purposes, neither is implicitly better or worse than the other. The BNO085, which is the IMU official SlimeVR trackers will use, is used in 6DOF mode and yet performs the best out of all supported IMUs, for example.

## How can I check if I have an acceptable magnetic environment?

You can check by downloading any magnetometer app that shows what your magnetic field strength is in uT and by walking around your playspace. You may want to check at varying heights, such as at chest level, waist level, and ankle level. An option available on both iOS and Android is the app, Physics Toolbox Magnetometer. If you do use Physics Toolbox Magnetometer, you only need to pay attention to the **total**, not the X, Y, or Z components. Most phones have a magnetometer, but if yours does not, then there is no way to be exactly sure of your magnetic environment, but you can make some educated assumptions.

## My app shows around X uT, is that okay?

There's no one value that's acceptable. What matters is that the range of values is low. There is currently limited data to give an exact range, but a good baseline seems to be a range of less than or equal to 5 uT. For example, 20-25 uT would be okay as would 40-45 uT, but a range from 20-40 uT would likely be too unstable to use.

## What determines a "poor magnetic environment"?

Often things made of steel or other ferromagnetic materials contribute most to a poor magnetic environment. Some common examples of things that might affect your magnetic environment include, but are not limited to: spring mattresses, radiators, PC cases, desktop speakers, or furniture that's made of steel. In most cases, the effect that these things will have extend about 6-12 inches (15-30 cm) and within that range may cause the IMU to rotate incorrectly. The size and amount of mass directly impacts the size of the effected area; a paper clip might only affect your IMU if it's directly next to it, whereas a steel bedframe might affect an area 6-12 inches (15-30 cm) away as previous mentioned. In most cases, depending on the size of your playspace, these issues of certain objects causing interference can be mitigated by avoiding or reposition them. Regardless, other factors such as the wiring or rebar in your building could also affect your magnetic environment. These last few examples are harder to predict and illustrate why it's important to test with an app before assuming you might have a stable magnetic environment.

It's also worth mentioning that some controllers have magnets in them, either to hold the battery door closed or for the trigger. As such, placing your controller near a tracker with a magnetometer may cause it to spin slightly.

## Does magnetic interference cause drift?

No, but you may still need to reset. When in an area of magnetic interference an IMU with a magnetometer will reorient itself the same way a compass will when put near a magnet; if you take the magnet away from the compass, the compass will return pointing towards magnetic North. As mentioned though, you may still find yourself needing to reset. For instance, if your bed has a steel bedframe you'll likely need to perform a reset so that your trackers are facing the correct orientation. If you then move somewhere else within your playspace you'll likely then need to reset once again.

## Can I still use my IMU with a magnetometer if I don't have a stable magnetic environment?

This cannot be recommended. When run without the magnetometer, IMUs with magnetometers such as the MPU9250 and ICM20948, perform much worse. That said, if for whatever reason you do want to use your IMU without the magnetometer, the MPU6500 or MPU6050 firmware can be used on the MPU9250 instead, and the ICM20948 can run in 6DOF mode.

## IMU Calibration

Some IMUs, such as the BMI270, BMI160, MPU9250, and MPU+QMC5883L, require manual calibration. This only needs to be performed once upon first setting up your SlimeVR tracker, however, you may need to perform the calibration multiple times before reaching satisfactory results. More information on how you would calibrate your IMUs can be [found here.](../server/imu-calibration.md)

---
### Credits
*Created by smeltie, edited by calliepepper and nwbx01*

A big thanks to everyone who took the time to fill out the survey.
