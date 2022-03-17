---
layout: page
nav_order: 4
parent: DIY trackers guide
---

<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous">
</head>

# IMU Comparison 
The community has been hard at work testing various IMU's for DIY SlimeVR trackers.  
We held a survey amongst the DIY community to get a clearer picture on the current state of available IMU's.  
All results including the ratings are based on user feedback and weighed against the survey.  
Scores are based on the average answer given to any chip during the survey.

## Index
- [BNO085](#bno085)
- [BNO055](#bno055)
- [MPU6050](#mpu6050)
- [MPU6500](#mpu6500)
- [MPU9250/6500](#mpu92506500)
- [ICM 20948](#icm20948)
- [BMI160](#bmi-160)

## Criteria
We rank these chips in the following categories: Reset Time, Cost, Availability and Build quality.  
These factors are meant to give a quick indication as to what to expect from various IMUs, your mileage may vary.   
For clarification purposes: 
If 3 out of 10 chips are dead on arrival or die during early use, we refer to that as poor build quality.

---
## BNO085  
This is the IMU used in production slimes.  
They are very reliable and stable chips, but at this time impossible to find.  
*Please note these boards are both hard to get and may cost up to $80*  

|Reset time |cost |availability|Build quality|  
|:---------:|:---:|:----------:|:---------:|
|30 - 60 min|$60  |insufficient|excellent  |  
Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o">

|Pro's         |Con's                                  |
|--------------|---------------------------------------|
|Accurate      |High price during shortages            |
|Reliable      |Extra wiring required compared to MPU's|
|smooth        |Expensive                              |

`Comment: Sadly due to the chip shortage these are virtually impossible to find, please do not buy these at the listed prices.`

---
## BNO055  
The cheaper less fleshed out brother of the BNO085.  
*This chip does not have sufficient test results for a conclusive summary*  
*Take these current BNO055 stats with a pinch of salt as we await more testing*      

|Reset time |cost |availability|Build quality|  
|:---------:|:---:|:----------:|:-----------:|
|1 -10 min  |$50  |Mediocre    |Good         |  
Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o">

|Pro's                          |Con's                                         |
|-------------------------------|----------------------------------------------|
|Build Quality                  |Expensive                                     |
|Smooth                         |Can supposedly lose tracking with rapid motion|
|A BNO that's actually available|Insufficient testing                          |

`Comment: insufficient test reports.`

---
## MPU6050
The MPU 6050 is the current go-to alternative for DIY SlimeVR. 
Whilst being less reliable than BNO chips they offer a great value for money proposition and will get you started with SlimeVR for cheap.  

|Reset time |cost |availability|Build quality|  
|:---------:|:---:|:----------:|:---------:|
|1 - 10 min |$1.15 |sufficient |poor   |
Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o" ></i>

|Pro's            |Con's            |
|----------------|-----------------|
|Cheap            |Higher error rate|
|smooth           |Older technology |
|High availability|High failure rate|

`Comment: Order more than you need because of the higher failure rate, it is not uncommon to find 2 to 3 bad chips in a batch.`

---
## MPU6500  
The MPU 6500 is a newer installment of the MPU lineup.  
Even though it is a 6DOF sensor (same as the 6050), the drift time of the chips is an improvement over earlier MPUs.   

|Reset time |cost |availability|Build quality|  
|:---------:|:---:|:----------:|:-----------:|
|5 - 10 min |$7   |sufficient  |Mediocre     |  
Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o" ></i><i class="fa fa-star-o" ></i>

|Pro's            |Con's                                   |
|-----------------|----------------------------------------|
|Affordable       |Higher error rate                       |
|Available        |More expensive than the 6050 counterpart|
|Smooth           |known to have bad batches               |

`Comment: Tracking identical to the 6050 but appears to be ever so slightly better.`

---
## MPU9250  
The MPU 9250 (currently ran in several modes) is a newer installment of the MPU lineup.  
Whilst the 9250 does have a magnetometer, it is currently not being utilised.  

|Reset time |cost |availability|Build quality|  
|:---------:|:---:|:----------:|:---------:|
|10 - 40 min|$7   |sufficient  |Decent     |  
Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o" ></i><i class="fa fa-star-o" ></i>

|Pro's            |Con's                                            |
|-----------------|-------------------------------------------------|
|Decent tracking  |Prone to clones/counterfeit units                |
|Affordable       |Potentially sensitive to bad magnetic enviroments|
|High availability|Magnetometer not currently utilised             |

`Comment: Some sellers out there sell clones which do not work so beware!`

---
## ICM 20948
The ICM 20948 is a more modern chip in the line-up.  
While initial testing seems positive, this chip has not had enough field time for conclusive results.  

|Reset time |cost |availability|Build quality|  
|:---------:|:---:|:----------:|:---------:|
|15 - 60 min|$15  |sufficient  |Good       |  
Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>

|Pro's            |Con's                                |
|-----------------|-------------------------------------|
|Accurate         |Currently still in testing           |
|reliable         |sensitive to bad magnetic enviroments|
|smooth           |Availability is not guaranteed       |  

`Comment: Prone to some drift when moving really fast (in 6DoF mode).`

---
## BMI 160
The BMI 160 is a relatively new and yet to be properly tested chip.  
The chip is made by Bosch and could potentially improve with more testing.  


|Reset time |cost |availability|Build quality|  
|:---------:|:---:|:----------:|:---------:|
|1 - 10min  |$2.50|sufficient  |Good       |  
Score: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o" ></i>

|Pro's            |Con's                                            |
|-----------------|-------------------------------------------------|
|Cheap            |Currently still in testing                       |
|reliable         |equal to the MPU6050 but better Build quality      |

`Comment: Still in very early stages of testing.`

---
### Credits
*Created by Smeltie#1999*  
A big thanks to everyone who took the time to fill out the survey.    
Icons used in this document are provided by fork awesome.  
*https://forkaweso.me*