# Smol LED Codes

## Table Of Contents

- TOC
  {:toc}

## LED Codes

### 1 Short Blink Per Second - Pairing Mode

*SuperMini:* [🔴 Red Led] Short Blinks, [🔵 Blue Led] Irrelevant

### 1 Long Blink Per Second - Low Battery

*SuperMini:* [🔴 Red Led] Long Blinks, [🔵 Blue Led] Irrelevant

### 2 - 4 Long Blinks Every 5 Seconds - Error

#### 2 Blinks Every 5 Seconds - Sensor Error

*SuperMini:* [🔴 Red Led] 2 Blinks Every 5 Seconds, [🔵 Blue Led] Irrelevant

##### Troubleshooting Sensor Error

Check `info` command output. If it contain `IMU: None` and it IMU is soldered than there is no continuity on one of points or IMU soldered in wrong position. 

If IMU soldered correctly try to test continuity using multimeter or resolder connections.


#### 3 Blinks Every 5 Seconds - Connection Error

*SuperMini:* [🔴 Red Led] 3 Blinks Every 5 Seconds, [🔵 Blue Led] Irrelevant

#### 4 Blinks Every 5 Seconds - Hardware Error

*SuperMini:* [🔴 Red Led] 4 Blinks Every 5 Seconds, [🔵 Blue Led] Irrelevant

### Fade On And Off - DFU Mode

*SuperMini:* [🔵 Blue Led] Irrelevant, [🔴 Red Led] Fade On And Off

### Very short blink - Normal Operation Or Wake On Motion

## LED Codes While Plugged In

### While Plugged In: Pulsing - Charging

*SuperMini:* [🔵 Blue Led] Solid, [🔴 Red Led] Fade On And Off if connected to SlimeVR server, 1 Short blink if not connected to SlimeVR server

*XIAO:* [🟢 Green Led] Solid

### While Plugged In: Solid - Fully Charged

*SuperMini:* [🔵 Blue Led] Off, [🔴 Red Led] Fade On And Off if connected to SlimeVR server, 1 Short blink if not connected to SlimeVR server