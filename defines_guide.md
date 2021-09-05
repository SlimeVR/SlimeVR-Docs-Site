---
layout: page
title: Defines.h file
nav_order: 5
---
# DIY guide for defines.h file

**To use this project with your specific configuration, you need to make changes in defines.h file**

![](https://i.imgur.com/QWwc7kH.png)

## Select your hardware settings

First you need to change these lines which would select your IMU model and board.

```c
#define IMU IMU_BNO085
#define BOARD BOARD_NODEMCU   
#define SECOND_IMU true
#define IMU_ROTATION PI / 2.0
```

### Change the IMU model

```
#define IMU IMU_BNO085
```

You can use one of these values depending on your IMU model:

```
IMU_MPU9250 
IMU_MPU6500 
IMU_MPU6050
IMU_BNO080
IMU_BNO085
IMU_BNO055
IMU_BNO086
```

### Change Board model

``` 
#define BOARD BOARD_NODEMCU
```

Default would be `BOARD_SLIMEVR`. You can change to `BOARD_NODEMCU` if you are using NodeMCU type board with an ESP8266 processor or similar. If you are using board with an ESP32 processor (single core is not supported), set it to `BOARD_WROOM32`.


### Adjust board rotation

Set `IMU_ROTATION` to value that corespons to how the sensor board is placed inside the case of your tracker.
```
#define IMU_ROTATION PI / 2.0
```

Use one of these values. Top of this picture is the ceiling (or your head).

![](https://i.imgur.com/09x76XB.png)


## Define pins of the selected board

**Example 1:**

``` 
#elif BOARD == BOARD_NODEMCU
  #define PIN_IMU_SDA D2
  #define PIN_IMU_SCL D1
  #define PIN_IMU_INT D5
  #define PIN_IMU_INT_2 D6
  #define BNO_ADDR_1 0x4A
  #define BNO_ADDR_2 0x4B
```

**Example 2:**

```
#elif BOARD == BOARD_WROOM32
  #define PIN_IMU_SDA 21
  #define PIN_IMU_SCL 22
  #define PIN_IMU_INT 19
  #define PIN_IMU_INT_2 4
  #define PIN_BATTERY_LEVEL 36
  #define BNO_ADDR_1 0x4A
  #define BNO_ADDR_2 0x4B
```

SDA and SDL pin for main and AUX trackers are always the same. You can define pins either by using pin name, like D1 or by Pin number like 21. Check you board pinout for the details, or connect your tracker to the default pins, they're recommended ones.

You need to put here your selected pins for I2C. Check pinout for details in terms of which ports could be used for I2C

```
  #define PIN_IMU_SDA D2
  #define PIN_IMU_SCL D1
```

If you are using BNO you need to define INT pin:

```
  #define PIN_IMU_INT D5
```

If you are using the second BNO you need to define INT pin for the second BNO, it must be another pin:

```
##define PIN_IMU_INT_2 D6
```

You need to change only the section between `#elif` symbols with the selected board, if you are using VSCode, selected board section will light up, while other ones will be greyed out.


_Battery level pin guide WIP._

## Done!

**This is all you need to configure firmware for your MCU and IMU configuration!**

If you have problems and need help, you can go to the official  [SlimeVR Discord Server](https://discord.gg/TEWhH5MaeK) and ask help in the #diy channel.


_Made by adigyran#1121 with help from Musicman247#1341_
