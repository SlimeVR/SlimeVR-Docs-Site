---
layout: page
parent: Updating the tracker firmware
nav_order: 1
---

# Configuring the firmware project
{:.no_toc}

In order to build SlimeVR firmware and upload it to your tracker, you need to configure the project to match your specific hardware configuration. To do this, you need to modify two files: `platformio.ini` and `defines.h`.

## Table of contents
{:.no_toc}

* TOC
{:toc}

## Configuring platformio.ini

The `platformio.ini` file specifies the information about your MCU.

This file can be found in the root directory of the project:

![platformio.ini file location](https://i.imgur.com/CsBcxYL.png)

The contents of `platformio.ini` file should look as follows:

![platformio.ini file contents](https://i.imgur.com/9EmR158.png)

### Select your hardware settings

#### Monitor speed

This field set your serial monitor speed in VSCode `monitor_speed = 115200` change this if your board datasheet and documentation said so, but default should work fine.

**For the platform and board fields, visit [PlatformIO Boards documentation](https://docs.platformio.org/en/latest/boards/index.html) and find your board there. If it's not there, keep default ones or ask on [SlimeVR Discord](https://discord.gg/SlimeVR).**

#### env

> **Important:** Other env lines must be commented out with preceding semicolon (`;`) character.

Use `[env:esp12e]` if you're using board on ESP8266 processor by uncommenting the following lines:

```
[env:esp12e]
platform = espressif8266
board = esp12e
```

Use `[env:esp32]` if you're using board on ESP32 processor by uncommenting the following lines:

```
[env:esp32]
platform = espressif32
board = esp32dev
```

#### WiFi

If you're having problems with setting the wifi credentials through the server (like you tracker keeps resetting wifi settings after restart) you can hardcode your wifi credentials to firmware.

For that you need to uncomment the following lines and replace `SSID` and `PASSWORD` with your corresponding wifi credentials:

```
build_flags =
  -DWIFI_CREDS_SSID='"SSID"'
  -DWIFI_CREDS_PASSWD='"PASSWORD"'
```

## Configuring defines.h

The `defines.h` file specifies the information about your IMU and MCU.

This file can be found in the `src` directory of the project:

![defines.h file location](https://i.imgur.com/KlAq8tT.png)

The contents of `defines.h` file should look as follows:

![defines.h file contents](https://i.imgur.com/QWwc7kH.png)

### Select your hardware settings

First you need to change these lines which would select your IMU model and MCU.

```c
#define IMU IMU_BNO085
#define BOARD BOARD_NODEMCU
#define SECOND_IMU true
#define IMU_ROTATION PI / 2.0
```

#### Change the IMU model

```c
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

#### Change board model

```c
#define BOARD BOARD_NODEMCU
```

Default would be `BOARD_SLIMEVR`. You can change to `BOARD_NODEMCU` if you are using NodeMCU type board with an ESP8266 processor or similar. If you are using board with an ESP32 processor (single core is not supported), set it to `BOARD_WROOM32`.

#### Adjust board rotation

Set `IMU_ROTATION` to value that corresponds to how the sensor board is placed inside the case of your tracker.

```c
#define IMU_ROTATION PI / 2.0
```

Use one of these values. Top of this picture is the ceiling (or your head).

![](https://i.imgur.com/09x76XB.png)

### Define pins of the selected board

**Example 1:**

```c
#elif BOARD == BOARD_NODEMCU
  #define PIN_IMU_SDA D2
  #define PIN_IMU_SCL D1
  #define PIN_IMU_INT D5
  #define PIN_IMU_INT_2 D6
  #define BNO_ADDR_1 0x4A
  #define BNO_ADDR_2 0x4B
```

**Example 2:**

```c
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

You need to put here your selected pins for I2C. Check pinout for details in terms of which ports could be used for I2C.

```c
  #define PIN_IMU_SDA D2
  #define PIN_IMU_SCL D1
```

If you are using BNO you need to define INT pin:

```c
  #define PIN_IMU_INT D5
```

If you are using the second BNO you need to define INT pin for the second BNO, it must be another pin:

```c
#define PIN_IMU_INT_2 D6
```

You need to change only the section between `#elif` symbols with the selected board, if you are using VSCode, selected board section will light up, while other ones will be grayed out.

_Battery level pin guide WIP._

### Done!
{:.no_toc}

**This is all you need to configure firmware for your MCU and IMU configuration!**

If you have problems and need help, you can go to the official [SlimeVR Discord Server](https://discord.gg/SlimeVR) and ask for help in the #diy channel.

*Created by adigyran#1121 with help from Musicman247#1341, edited and styled by CalliePepper#0666 and Emojikage#3095*
