# Smol LED Codes

## Table Of Contents

- TOC
  {:toc}

## LED Codes

### 1 Short Blink Per Second - Pairing Mode

### 1 Long Blink Per Second - Low Battery

### 2 - 4 Long Blinks Every 5 Seconds - Error

#### 2 Blinks Every 5 Seconds - Sensor Error

Run the `scan` command on nRF connect, then check the `info` command output.
If it contains `IMU: None` and, the IMU is soldered to the PCB, than there is no continuity on one of points or the IMU is soldered in wrong position. 

If IMU soldered correctly try to test continuity using multimeter or resolder connections.


#### 3 Blinks Every 5 Seconds - Connection Error

Check the receiver is paired correctly and that the firmware build date matches the receiver via the ``info`` command. Manual pairing may be required instead of automatic.

#### 4 Blinks Every 5 Seconds - Hardware Error

Typically means that the underlying PCB or nRF52 is faulty in some way.

### LED Fades On And Off - DFU Mode

Reboot the tracker or re-flash the firmware to exit dfu mode.

### Very short blink - Normal Operation Or Wake On Motion

## LED Codes While Plugged In

### While Plugged In: Pulsing or stable - Charging

### While Plugged In: Off or intermittent blinks - Fully Charged

<hr/>

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral). Expanded by Amebun.*