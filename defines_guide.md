

# DIY GUIDE FOR DEFINES.H FILE



#### To use this project with your specific configuration,  you're need to make changes in defines.h file



![](https://i.imgur.com/QWwc7kH.png)





##### First you need to change these lines which would select your IMU model, board and defines if you have second IMU or not (works only for BNO).

```c
#define IMU IMU_BNO085
#define BOARD BOARD_NODEMCU   
#define SECOND_IMU true
#define IMU_ROTATION PI / 2.0
```





##### Change the IMU model.

```
#define IMU IMU_BNO085
```



You can use these values depending on your IMU model:

```
IMU_MPU9250 
IMU_MPU6500 
IMU_BNO6050
IMU_BNO080
IMU_BNO085
IMU_BNO055
```



Change Board model:

``` 
#define BOARD BOARD_NODEMCU
```



Default would be:

``` 
BOARD_SLIMEVR
```



You can change to:

```
BOARD_NODEMCU
```



if you are using NodeMcu type board with an ESP8266 processor:

```
BOARD_NODEMCU
```





If you are using board with an ESP32 processor (single core is not supported)

``` 
BOARD_WROOM32
```



You need to select if you using second IMU or not (AUX BNO). Currently works only with BNO models:

```
#define SECOND_IMU false // true if you have second IMU
```



This is what you should put in the, this is right for BNO IMUs. Top of this picture is the ceiling (or your head)

```
#define IMU_ROTATION PI / 2.0
```



![](https://i.imgur.com/MZ9paIP.png)



____

##### Now you need to define pins of selected board.

example 1:

``` 
#elif BOARD == BOARD_NODEMCU
  #define PIN_IMU_SDA D3
  #define PIN_IMU_SCL D2
  #define PIN_IMU_INT D1
  #define PIN_IMU_INT_2 14
  #define BNO_ADDR_1 0x4A
  #define BNO_ADDR_2 0x4B
```

example 2:

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



SDA and SDL pin for main and AUX tracker always the same.

You can define pins either by using pin name, like D1 or by Pin number like 21. Check you board pinout for details



You need to put here your selected pins for I2C. Check pinout for details in terms of which ports could be used for I2C

```
  #define PIN_IMU_SDA D3
  #define PIN_IMU_SCL D2
```





If you are using BNO you need to define INT pin:

```
  #define PIN_IMU_INT D1
```

if you are using second BNO you need to define INT pin for second BNO, it must be other pin

```
#define PIN_IMU_INT_2 D7
```



You need to change only  section between #elif symbols with selected board, if you using VSCode selected board section will light up, while other ones will be greyed out.



Battery level pin guide in WIP



#### This is all you need to configure firmware for your MCU and IMU configuration

If you have problems and need help, you can go to official  [SlimeVR Discord Server](https://discord.gg/TEWhH5MaeK) and ask help in #diy channel.



This guide is still WIP



Made by adigyran#1121 with help from Musicman247#1341 :) 







