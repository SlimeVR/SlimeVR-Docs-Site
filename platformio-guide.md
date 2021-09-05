---
layout: page
title: PlatformIo.ini
nav_order: 6
---
# DIY guide for Platformio.ini file

**To use this project with your specific configuration, you need to make changes in platformio.ini file**

![](https://i.imgur.com/9EmR158.png)



## Select your hardware settings

**Monitor speed**

This field set your serial monitor speed in VSCode ```monitor_speed = 115200``` change this if your board datasheet and documentation said so, but default work fine



**For the platform and board fields you have to go to https://docs.platformio.org/en/latest/boards/index.html and find your board there. If it's not there keep default ones or ask on [SlimeVR Discord](https://discord.gg/SlimeVR)**



**ENV**

**You're need to comment other env lines**

Use ```[env:esp12e]``` if you're using board on ESP8266 processor by uncommenting the lines below

```[env:esp12e]
[env:esp12e]
platform = espressif8266
board = esp12e
```



Use ```[env:esp32]```  if you're using board on ESP32 processor by uncommenting the lines below. 

```;[env:esp32]
[env:esp32]
platform = espressif32
board = esp32dev
```



**Wifi**

If you're having problems with setting the wifi credentials through the server (like you tracker keeps resetting wifi settings after restart) you can hardcode your wifi credentials to firmware.

For that you need to uncomment these lines. You should keep the quotes as they are. 

``` ;build_flags =
build_flags =
  -DWIFI_CREDS_SSID='"SSID"'
  -DWIFI_CREDS_PASSWD='"PASSWORD"'
```







*Created by adigyran#1121, editted and styled by CalliePepper#0666*



