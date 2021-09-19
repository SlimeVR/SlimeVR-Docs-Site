---
layout: page
title: Configuring PlatformIO project
nav_order: 6
---

# Configuring PlatformIO project

To use the PlatformIO project with your specific configuration, you need to make changes in the `platformio.ini` file.

The contents of `platformio.ini` file should look as follows:
![platformio.ini file contents](https://i.imgur.com/9EmR158.png)

## Select your hardware settings

### Monitor speed

This field set your serial monitor speed in VSCode `monitor_speed = 115200` change this if your board datasheet and documentation said so, but default should work fine.

**For the platform and board fields, visit [PlatformIO Boards documentation](https://docs.platformio.org/en/latest/boards/index.html) and find your board there. If it's not there, keep default ones or ask on [SlimeVR Discord](https://discord.gg/SlimeVR).**

### env

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

### WiFi

If you're having problems with setting the wifi credentials through the server (like you tracker keeps resetting wifi settings after restart) you can hardcode your wifi credentials to firmware.

For that you need to uncomment the following lines and replace `SSID` and `PASSWORD` with your corresponding wifi credentials:

```
build_flags =
  -DWIFI_CREDS_SSID='"SSID"'
  -DWIFI_CREDS_PASSWD='"PASSWORD"'
```

*Created by adigyran#1121, edited and styled by CalliePepper#0666 and Emojikage#3095*
