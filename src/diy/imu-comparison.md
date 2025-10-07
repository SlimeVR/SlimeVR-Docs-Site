# IMU Comparison

This page is based on user feedback and compared with community survey, with scores showing the average answer given to the chip.

The community has been hard at work testing various IMUs for DIY SlimeVR trackers. After completing your own trackers, you can complete an extended version of that original survey yourself, or view previous responses on the [SlimeVR Experience Survey page](../misc/survey.md).

## Table of Contents

* TOC
{:toc}


## General Recommendations
At the moment there is no general IMU recommended for all price ranges, although below there will be a short, general guide on what to get depending on your price range.

## IMU Rating

Ordered from best to worst with current firmware.

| IMU Model                        | Tier     | Typical Price (USD) | Notes / Best For                 |
| -------------------------------- | -------- | ------------------- | -------------------------------- |
| 🟢 [ICM-45686](#icm-45686)      | Premium  | ~$6.70              | Best overall, reliable, accurate |
| 🟢 [LSM6DSV](#lsm6dsv)          | Premium  | ~$8.93              | Great, but rarely in stock       |
| 🟢 [LSM6DSR](#lsm6dsr)          | Budget   | ~$3.35              | Best budget pick                 |
| 🟠 [LSM6DSO](#lsm6dso)          | OK       | Varies              | Not recommended, few breakouts   |
| 🟠 [BMI270](#bmi270)            | OK       | Varies              | Not recommended, few breakouts   |
| 🔴 [BNO085](#bno085)            | Not Rec. | Varies              | Discontinued, hard to find       |
| 🔴 [BMI160](#bmi160)            | Not Rec. | ~$1.50              | High DOA rate, outdated          |
| 🔴 [ICM20948](#icm20948)        | Not Rec. | ~$15                | Prone to drift, not enough data  |
| 🔴 [BNO055](#bno055)            | Not Rec. | ~$38                | High drift, not competitive      |
| 🚫 [MPU9250](#mpu9250)          | Avoid    | ~$7                 | Counterfeits, unreliable         |
| 🚫 [MPU+QMC5883L](#mpuqmc5883l) | Avoid    | ~$2.50              | Experimental, complex wiring     |
| 🚫 [MPU6500](#mpu6500)          | Avoid    | ~$1                 | High drift, high failure rate    |
| 🚫 [MPU6050](#mpu6050)          | Avoid    | ~$1.04              | High drift, high failure rate    |

### 🟢 Recommended IMU

Those IMU's are recommended choice for new SlimeVR tracker builds.

#### ICM-45686


The ICM-45686 is a very good IMU for DIY SlimeVR.
It seems to perform just as well as the BNO085 and LSM6DSV, but at a lower price.



|Reset time |Cost  |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|45-60 min  |~$6.70|Sufficient  |Great        |

<br>

|Pros          |Cons                                 |
|--------------|-------------------------------------|
|Accurate      |Expensive relative to other IMUs    |
|Reliable      |                                     |
|Smooth        |                                     |


#### LSM6DSV

The LSM6DSV is a very good IMU for DIY SlimeVR.
It seems to perform just as well as the BNO085, but at a lower cost.


|Reset time |Cost  |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|45-60 min  |~$8.93|Insufficient|Great        |

<br>

|Pros          |Cons                                   |
|--------------|---------------------------------------|
|Accurate      |                                       |
|Reliable      |Expensive relative to other IMUs       |
|Smooth        |Is rarely in stock                     |


#### LSM6DSR

The LSM6DSR is a good IMU for DIY SlimeVR.
It seems to perform a little worse than the ICM-45686, mostly in sensitivity, while being cheaper.
Like the ICM-45686, this comes with the QMC6309 magnetometer built into the module.


|Reset time | Cost |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|40-50 min  |~$3.35|Sufficient  |Great        |

<br>

|Pros          |Cons                                   |
|--------------|---------------------------------------|
|Cheap         |Lower reset times                      |
|Accurate      |Worse sensitivity                      |
|Smooth        |                                       |



### 🟠 Not recommended IMU, as there are better options for same money

<p><b style="color: orange;">Not recommended</b>: Those IMU's are acceptable to use if no other option is available.</p>

#### LSM6DSO


This IMU has average drift times and there is no reliable seller for breakout boards.
It is **not** recommended to purchase new trackers equipped with this IMU from a third-party SlimeVR seller. There are trackers with better IMUs available at the same price or lower.


|Reset time | Cost |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|25-35 min  |Varies|Insufficient|Varies       |

<br>

|Pros          |Cons                                   |
|--------------|---------------------------------------|
|Cheap         |No breakout board available            |
|Reliable      |Lower reset times                      |
|Smooth        |                                       |

#### BMI270

This IMU has average drift times, and there are no reliable sources for breakout boards.
It is **not** recommended to purchase new trackers equipped with this IMU from a third-party SlimeVR seller. There are trackers with better IMUs available at the same price or lower.


|Reset time | Cost |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|10-20 min  |Varies|Insufficient|Varies       |

<br>

| Pros     | Cons                         |
|----------|------------------------------|
| Cheap    | No breakout boards available |
| Reliable | Lower reset times            |
| Smooth   |                              |


### 🔴 Not recommended IMU

Those IMU are generally not recommended for new SlimeVR trackers.

#### BNO085

This is the IMU used in versions 1.0 and 1.1 of the official SlimeVR trackers.
This IMU has been discontinued from the SlimeVR store, making it difficult to obtain or to estimate its price.


|Reset time | Cost |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|45-60 min  |Varies|Insufficient|Excellent    |

<br>

|Pros          |Cons                                   |
|--------------|---------------------------------------|
|Accurate      |Expensive                              |
|Reliable      |Big                                    |
|Smooth        |Difficult to obtain at a good price    |
|              |Very misleading AliExpress listings    |


#### BMI160

The BMI160 is currently not recommended for new slime trackers.
It is very outdated with a lot of newer IMUs surpassing it in price to performance.

> It is important to note that around 2/10 BMI160s come DOA (Dead On Arival)

|Reset time |Cost  |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|5 - 15min  |~$1.50|Sufficient  |Good         |

<br>

|Pros                   |Cons                                                            |
|-----------------------|----------------------------------------------------------------|
|Cheap                  | Short drift times                                              |
|Smooth                 | High DOA (Dead On Arrival) rate                                |
|Accurate               |                                                                |

#### ICM20948

```admonish info
<b>Comment:</b> Prone to some drift when moving really fast (in 6DoF mode).
```

The ICM-20948 is a relatively modern chip.
While early testing results are promising, the chip has not yet seen enough real-world use to draw conclusive results.

There are quite a few variants of the ICM-20948, most of which operate at 3.3v.
- Pimoroni ICM-20948: Requires cutting a bridge on the back to change the I2C address.
- Adafruit ICM-20948: Requires soldering a bridge on the back to change the I2C address.
- SparkFun ICM-20948: Also requires soldering a bridge to change the I2C address.
- GY-912: Requires bridging SD0 to GND to change the I2C address.
- CJMCU-20948: Operates at 1.8V and is not recommended. It requires both a 1.8V linear voltage regulator and a logic level converter to function.



|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|15 - 60 min|~$15 |Insufficient|Good         |

<br>

|Pros             |Cons                                  |
|-----------------|--------------------------------------|
|Accurate         |                                      |
|Reliable         |Sensitive to bad magnetic environments|
|Smooth           |Availability is not guaranteed        |

#### BNO055

```admonish info
<b>Comment:</b> Insufficient testing for an accurate description, but it cannot compete with the BNO085.
```

This is an earlier version of the BNO085 without stabilization firmware.

*This chip lacks sufficient testing to provide a conclusive summary.*

|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|1 -10 min  |~$38 |Mediocre    |Good         |

<br>

|Pros             |Cons                                         |
|-----------------|---------------------------------------------|
|Affordable       |High drift rate                              |
|Available        |More expensive than the MPU6050              |
|Smooth           |Failure rate inconsistent                    |
|                 |[Calibration on each start](#imu-calibration)|

### 🚫 Not recommended IMU, absolutely avoid

<p><b style="color: red;">Not recommended for use in new designs!</b> You should absolutely avoid using those IMU!</p>

#### MPU9250

```admonish info
<b>Comment:</b> Finding legitimate MPU9250s has become exceedingly difficult due to counterfeits and DOA IMUs. Buy at your own risk.
```

The MPU9250 (currently ran in several modes) is a newer installment of the MPU lineup.

|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|10 - 40 min|~$7  |Insufficient|Mediocre     |

<br>

|Pros             |Cons                                                           |
|-----------------|---------------------------------------------------------------|
|Cheap            |Very prone to counterfeit or DOA (Dead on Arrival) units       |
|Smooth           |Sensitive to bad magnetic environments                         |
|Reliable         |[Requires manual calibration for the first time](#imu-calibration)|

#### MPU+QMC5883L

```admonish info
<b>Comment:</b> Requires experimental firmware.
```

This is a highly experimental setup intended to approximately replicate the functionality of an MPU9250.
Unlike other IMUs, which consist of a single PCB, this setup relies on connecting a magnetometer to an MPU6050 or MPU6500.
That said, a breakout board that includes both an MPU6050 and an HMC5883L does exist: the GY-87.
Both the QMC5883L and HMC5883L may be used; however, the QMC5883L may perform better.


|Reset time |Cost  |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|10 - 40min |~$2.50|Sufficient  |Mixed        |

<br>

|Pros             |Cons                                                          |
|-----------------|--------------------------------------------------------------|
|Cheap            |Very experimental                                             |
|Smooth           |[Requires manual calibration the first time](#imu-calibration)|
|Reliable         |Sensitive to bad magnetic environments                        |
|                 |Complex wiring                                                |

#### MPU6500

```admonish info
<b>Comment:</b> Tracking slightly better than the MPU6050.
```

The MPU6500 is the middle ground of the MPU chips available.
The drift time of this IMU may be a slight improvement over the MPU6050.

|Reset time |Cost |Availability|Build quality|
|:---------:|:---:|:----------:|:-----------:|
|5 - 10 min |~$1  |Sufficient  |Mediocre     |

<br>

|Pros             |Cons                                         |
|-----------------|---------------------------------------------|
|Affordable       |High drift rate                              |
|Available        |More expensive than the 6050 counterpart     |
|Smooth           |Failure rate inconsistent                    |
|                 |[Calibration on each start](#imu-calibration)|

#### MPU6050

```admonish info
<b>Comment:</b> High failure rate. Order more than you need because of the higher failure rate, it is not uncommon to find 2 to 3 bad chips in a batch.
```

The MPU6050 will get you started with SlimeVR for cheap.

|Reset time |Cost  |Availability|Build quality|
|:---------:|:----:|:----------:|:-----------:|
|1 - 5 min  |~$1.04|Sufficient  |Poor         |

<br>

|Pros             |Cons                                         |
|-----------------|---------------------------------------------|
|Cheap            |High drift rate                              |
|High availability|High failure rate                            |
|                 |[Calibration on each start](#imu-calibration)|

# Addendum

## Criteria
We rank these chips in the following categories: Reset Time, Cost, Availability, and Build Quality.
These factors are meant to give a quick indication as to what to expect from various IMUs; your mileage may vary.
For clarification purposes: If two out of ten chips are dead on arrival or die during early use, we refer to that as poor build quality.

## What's the difference between an IMU with a magnetometer (9 DOF) and an IMU without a magnetometer (6 DOF)?

IMUs with a magnetometer, like a compass, use the Earth's magnetic field as a reference point to reduce gyroscope drift, however they require a stable magnetic environment or else they will perform erratically. IMUs without a magnetometer don't require a stable magnetic environment, but are prone to gyroscope drift over time due to being unable to differentiate sensor noise from actual movement, which means will slowly spin in the yaw axis over time. For SlimeVR's purposes, neither is inherently better or worse than the other. The BNO085, which is the IMU used in the official SlimeVR trackers, is used in 6DOF mode and yet performs the best out of all supported IMUs, for example.

## How can I check if I have an acceptable magnetic environment?

You can check by using any magnetometer app that displays magnetic field strength in µT while walking around your playspace. You may want to check at varying heights, such as at chest level, waist level, and ankle level. One option available on both iOS and Android is Physics Toolbox Magnetometer. If you do use Physics Toolbox Magnetometer, you only need to pay attention to the **total**, not the X, Y, or Z components. Most phones include a magnetometer. If yours does not, you won’t be able to check directly, but you can still make educated assumptions based on known sources of magnetic interference.

## My app shows around X uT, is that okay?

There’s no single 'safe' value—what matters is how small the range of fluctuation is. There is currently limited data to give an exact range, but a good baseline appears to be a fluctuation range of 5 µT or less. For example, 20-25 uT would be okay as would 40-45 uT, but a range from 20-40 uT would likely be too unstable to use.

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
*Created by smeltie, edited by calliepepper, nwbx01 and Aed*

A big thanks to everyone who took the time to fill out the survey.
