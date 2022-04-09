---
layout: page
nav_order: 4
parent: DIY trackers guide
---

# IMU performance and issues

The community has been hard at work testing various IMUs for DIY SlimeVR trackers.  
Down below are a few extensively tested chips and their results/issues.  

## Index

- [BNO085](#bno085)
- [BNO055](#bno055)
- [MPU6050](#mpu6050)
- [MPU9250/6500](#mpu92506500)
- [ICM 20948](#icm20948)

## BNO085

This is the IMU used in production slimes.  
These are very reliable and stable chips but at this time impossible to find.  
*Please note these boards are both hard to get and may cost up to $80*  

|Reset time |cost |availability|reliability|  
|:---------:|:---:|:----------:|:---------:|
|30 - 60 min|$60  |insufficient|excellent  |

Score: ★★★★★

|Pro's         |Con's                                  |
|:------------:|:-------------------------------------:|
|High accuracy |High price during shortages            |
|Reliable      |Extra wiring required compared to MPU's|
|Very smooth   |More expensive                         |

## BNO055

The cheaper less fleshed out brother of the BNO085.  

|Reset time |cost |availability|reliability|  
|:---------:|:---:|:----------:|:---------:|
|TBD        |$50  |Mediocre    |decent     |

Score: ★★★★☆

|Pro's         |Con's                                  |
|:------------:|:-------------------------------------:|
|Great tracking|High price during shortages            |
|Reliable Chips|Extra wiring required compared to MPU's|
|High accuracy |More expensive                         |

## MPU6050

The MPU 6050 is the current go-to alternative for DIY SlimeVR.
Whilst being less reliable than BNO chips they offer a great value for money proposition.  

|Reset time |cost |availability|reliability|  
|:---------:|:---:|:----------:|:---------:|
|10 - 20 min|$1.15|sufficient  |mediocre   |  

Score: ★★☆☆☆

|Pro's            |Con's            |
|:---------------:|:---------------:|
|Decent tracking  |Higher error rate|
|Low cost         |Older technology |
|High availability|High failure rate|

## MPU9250/6500

The MPU 9250 (currently ran in 6500 mode) and 6500 are slightly newer installments of the MPU lineup.  
Whilst the 9250 does have a magnetrometer, it is currently not being utilised.  

|Reset time |cost |availability|reliability|  
|:---------:|:---:|:----------:|:---------:|
|tbd        |$7   |sufficient  |Decent     |  

Score: ★★★☆☆

|Pro's            |Con's                                   |
|:---------------:|:--------------------------------------:|
|Decent tracking  |Prone to clones/counterfeit units       |
|Affordable       |More expensive than the 6050 counterpart|
|High availability|Magnetrometer not currently utilised    |

## ICM 20948

Awaiting test results!