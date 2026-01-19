# Smol LED Codes

## Table Of Contents

- TOC
  {:toc}

## Standard operation codes
#### While not plugged in:

|LED State   |Status   |
|---|---|
|Very short Blinking   |Normal Operation Or Wake On Motion   |
|1 Long Blink per second   |Low battery   |
|Off   |Deep sleep or dead battery  |

#### While plugged in:
|LED State   |Status   |
|---|---|
|Pulsing  |Charging   |
|Off   |Fully charged   |

## Pairing and flashing codes
|LED State   |Status   |
|---|---|
|1 Short Blink per second   |Pairing mode   |
|Fading on and off   |DFU (firmware flash) mode   |

## Error codes
|LED State   |Status   |
|---|---|
|2 Long Blinks every 5 seconds   |Sensor error (see below)   |
|3 Long Blinks every 5 seconds   |Connection error   |
|4 Long Blinks every 5 seconds   |Hardware error   |

##### Troubleshooting Sensor Error

Check `info` command output. If it contains `IMU: None` and IMU is soldered then there is no continuity on one of the solder points or IMU soldered in wrong position. 

If IMU soldered correctly try to test continuity using multimeter or resolder connections.
<hr/>

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral), formatted by otter_oasis.*
