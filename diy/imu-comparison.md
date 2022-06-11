---
layout: page
nav_order: 4
parent: DIY trackers guide
---

# IMU Comparison
The community has been hard at work testing various IMUs for DIY SlimeVR trackers.
A survey was held within the DIY community for a clearer picture of the current state of available IMUs.
This page is based on user feedback and weighed against the survey, with scores showing the average answer given to the chip.

## Index
- [BNO085](#bno085)
- [BNO055](#bno055)
- [MPU6050](#mpu6050)
- [MPU6500](#mpu6500)
- [MPU9250](#mpu9250)
- [ICM20948](#icm20948)
- [BMI160](#bmi160)

## Criteria
We rank these chips in the following categories: Reset Time, Cost, Availability and Build quality.
These factors are meant to give a quick indication as to what to expect from various IMUs, your mileage may vary.
For clarification purposes: If 3 out of 10 chips are dead on arrival or die during early use, we refer to that as poor build quality.

---
## BNO085
This is the IMU used in production slimes.
They are reliable and stable chips, but at the time of writing they are impossible to find.

*Please note these boards are both hard to get and may cost up to $80.*

|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|30 - 60 min|~$60 |Insufficient|Excellent    |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o">

|Pros          |Cons                                   |
|--------------|---------------------------------------|
|Accurate      |High price during shortages            |
|Reliable      |Extra wiring required compared to MPUs |
|Smooth        |Expensive                              |

`Comment: Due to the chip shortage these are near impossible to find, please do not buy these at the listed prices.`

---
## BNO055
Earlier version of the BNO085 without stabilisation firmware.

*This chip does not have sufficient test results for a conclusive summary.*

|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|1 -10 min  |~$50 |Mediocre    |Good         |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o">

|Pros                           |Cons                                          |
|-------------------------------|----------------------------------------------|
|Build Quality                  |Expensive                                     |
|Available                      |Can supposedly lose tracking with rapid motion|
|Smooth                         |Insufficient testing                          |

`Comment: Insufficient testing for a accurate description, but cannot compete with BNO085.`

---
## MPU6050
The MPU6050 is the current go-to alternative for DIY SlimeVR.
Whilst being less reliable than BNO chips they offer a great value for money proposition and will get you started with SlimeVR for cheap.

|Reset time |Cost  |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|1 - 10 min |~$1.15|Sufficient  |Poor         |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o" ></i>

|Pros             |Cons             |
|-----------------|-----------------|
|Cheap            |Higher drift rate|
|High availability|Older technology |
|Smooth           |High failure rate|

`Comment: Order more than you need because of the higher failure rate, it is not uncommon to find 2 to 3 bad chips in a batch.`

---
## MPU6500
The MPU6500 is the middle ground of the MPU chips available.
Even though it is a 6DOF sensor (same as the 6050), the drift time of the chips is a slight improvement over the MPU6050.

|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|5 - 10 min |~$7  |Sufficient  |Mediocre     |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o" ></i><i class="fa fa-star-o" ></i>

|Pros             |Cons                                    |
|-----------------|----------------------------------------|
|Affordable       |High drift rate                         |
|Available        |More expensive than the 6050 counterpart|
|Smooth           |Failure rate inconsistent               |

`Comment: Tracking slightly better than the MPU6050.`

---
## MPU9250
The MPU9250 (currently ran in several modes) is a newer installment of the MPU lineup.
Whilst the MPU9250 does have a magnetometer, it is currently not being utilised.

|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|10 - 40 min|~$7  |Sufficient  |Mediocre     |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o" ></i><i class="fa fa-star-o" ></i>

|Pros             |Cons                                             |
|-----------------|-------------------------------------------------|
|Affordable       |Prone to clones/counterfeit units                |
|High availability|Potentially sensitive to bad magnetic enviroments|
|Decent tracking  |Requires manual calibration the first time       |

`Comment: Some sellers sell clones which do not work, check reviews and place orders with care.`

---
## ICM20948
The ICM 20948 is a comparatively modern chip.
While initial testing seems positive, this chip has not had enough field time for conclusive results.

There are quite a few variants of the ICM-20948, most of which operate at 3.3v.
Pimoroni ICM-20948 (Please note this board requires you to cut the bridge on the back to change the address)
Adafruit ICM-20948 (Please note this board requires you to solder the bridge on the back to change the address)
SparkFun ICM-20948 (Please note this board requires you to solder the bridge on the back to change the address)
GY-912 (Please note this board requires you to bridge SD0 to GND to change the address)

CJMCU-20948 is known to run on 1.8v and needs additional hardware to work.
A 1.8v Linear Voltage regulator and Logic Level Converter is needed and as such this board is not recommended.



|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|15 - 60 min|~$15 |Sufficient  |Good         |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>

|Pros             |Cons                                 |
|-----------------|-------------------------------------|
|Accurate         |Currently still in testing           |
|Reliable         |Sensitive to bad magnetic enviroments|
|Smooth           |Availability is not guaranteed       |

`Comment: Prone to some drift when moving really fast (in 6DoF mode).`

---
## BMI160
The BMI 160 is a relatively new chip and has yet to be properly tested chip.
The chip's ratings could potentially improve with more testing.


|Reset time |Cost  |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|1 - 10min  |~$2.50|Sufficient  |Good         |

Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o" ></i>

|Pros             |Cons                                             |
|-----------------|-------------------------------------------------|
|Cheap            |Currently still in testing                       |
|Reliable         |Equal to the MPU6050 with better Build quality   |

`Comment: Still in very early stages of testing.`

---
### Credits
*Created by Smeltie#1999, edited by #calliePepper#0666*

A big thanks to everyone who took the time to fill out the survey.

Icons used in this document are provided by fork awesome.
*https://forkaweso.me*

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous">
