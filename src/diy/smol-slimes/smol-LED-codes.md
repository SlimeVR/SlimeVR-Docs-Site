# Smol LED Codes

## Table Of Contents

- TOC
  {:toc}

## LED Codes

### 1 short blink per second - Pairing Mode

### 1 long blink per second - Low Battery

### 2, 3, 4 long blinks every 5 seconds - Error

#### 2 blinks every 5 seconds - Sensor Error

##### Troubleshooting Sensor Error

Check `info` command output. If it contain `IMU: None` and it IMU is soldered than there is no continuity on one of points or IMU soldered in wrong position. 

If IMU soldered correctly try to test continuity using multimeter or resolder connections.


#### 3 blinks every 5 seconds - Connection Error

#### 4 blinks every 5 seconds - Hardware Error

### Fade on and off - DFU Mode

### Very short blink - Normal Operation Or Wake On Motion

### While Plugged In

#### While Plugged In: Pulsing - Charging

**SuperMini:** 🔵 Blue Led Solid

**XIAO:** 🟢 Green Led Solid

#### While Plugged In: Solid - Fully Charged