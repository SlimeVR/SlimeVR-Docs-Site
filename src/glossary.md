# SlimeVR Terminology / Glossary
```admonish warning
Definitions provided in this page are relative to their use in this documentation and for SlimeVR. They may be inaccurate or lack information relative to other, non-SlimeVR projects.
```

## Table Of Contents

- TOC
  {:toc}

## SlimeVR Server

The main SlimeVR application for receiving, processing, and outputting tracking data. This application runs locally using Java and connects to the [SlimeVR GUI](#slimevr-gui) for a visual interface.

### Synonyms {#slimevr-server-synonyms}

- SlimeVR (contextual)
- SlimeVR App
- SlimeVR Software
- SlimeVR Program

### Related Terms {#slimevr-server-related}

- [SlimeVR GUI](#slimevr-gui)
- [SteamVR Driver](#steamvr-driver)

## SlimeVR GUI

The visual interface for the [SlimeVR Server](#slimevr-server). This GUI runs as a webview and connects to the [SlimeVR Server](#slimevr-server) over a websocket connection.

### Related Terms {#slimevr-gui-related}

- [SlimeVR server](#slimevr-server)

## SteamVR Driver

The SlimeVR driver for SteamVR that sends the [VR Headset](#vr-headset) position and rotation to the [SlimeVR Server](#slimevr-server), receives tracking data from the [SlimeVR Server](#slimevr-server), and uses the received tracking data to emulate Vive trackers in SteamVR.

### Synonyms {#steamvr-driver-synonyms}

- SlimeVR Driver

### Related Terms {#steamvr-driver-related}

- [SlimeVR Server](#slimevr-server)

## Feeder App

The feeder app is a program that connects to SteamVR and forwards tracker data from external sources to the [SlimeVR Server](#slimevr-server). The trackers forwarded are generally VR controllers, Vive trackers, or Tundra trackers.

It is a common misconception that the feeder app also forwards the [VR Headset](#vr-headset) tracking data, but that is done by the [SteamVR Driver](#steamvr-driver).

### Synonyms {#feeder-app-synonyms}

- SlimeVR Feeder
- Feeder

### Related Terms {#feeder-app-related}

- [SlimeVR Server](#slimevr-server)

## Drift
Commonly used to describe the loss of tracking accuracy that an [IMU](#imu)-based tracker experiences due to the accumulation of error over time. A tracker with high drift experiences a noticeable loss of accuracy within 20 minutes. Drift is also commonly measured as degrees per hour—with 1-3 degrees per hour being an acceptable level of drift for modern SlimeVR trackers at the time of writing.

Note that drift refers to the *gradual* loss of tracking accuracy and is inherent to the tracker itself. Poor [Mounting Orientation](#mounting-orientation) [Session Calibration](#session-calibration) by the user will lead to a constant level of tracking inaccuracy.

### Synonyms {#drift-synonyms}
- Tracking accuracy
- IMU accuracy

### Related Terms {#drift-related}
- Accelerometer
- Gyroscope
- Magnetometer
- [IMU](#imu)
- Stay Aligned
- [Reset Time](#reset-time)

## Session Calibration

There are multiple different session calibrations within the SlimeVR Server; these are commonly referred to as "resets". These are forms of calibration that are generally not saved and need to be done during each session of SlimeVR. See the [Sub-Terms](#session-calibration-sub-terms) for the types of session calibrations.

### Synonyms {#session-calibration-synonyms}

- Full Reset
- Mounting Calibration
- Feet Mounting Calibration
- Software Calibration
- VRChat Calibration

### Sub-Terms {#session-calibration-sub}

- [Yaw Reset](#yaw-reset)
- [Mounting Calibration](#mounting-calibration)

## Full Reset

A "full reset" is a [Session Calibration](#session-calibration) that re-orients trackers to have zero rotation in the pitch and roll axes and have the same yaw axis rotation as the head tracker (usually a [VR Headset](#vr-headset)), essentially "resetting" (or "zeroing") the "full" orientation. This is usually the first calibration used when starting a session with SlimeVR.

## Mounting Calibration

Mounting Reset (or Mounting Calibration) is part of the [Session Calibration](#session-calibration) that allows the server to automatically measure the mounting orientation of trackers. This is usually the second calibration used when starting a session with SlimeVR if the user chooses to use automatic mounting. When mounting calibration is used, the results of the calibration will override any manually set [Mounting Orientation](#mounting-orientation).

Mounting Calibration is also commonly referred to in conjunction with Feet Mounting Calibration, which allows the server to correct the orientation of feet trackers.

### Synonyms {#mounting-calibration-synonyms}
- Reset Mounting
- Automatic Mounting
- Automatic Mounting Orientation

### Related Terms {#mounting-calibration-related}

- [Mounting Orientation](#mounting-orientation)

## Yaw Reset

A "yaw reset" is a [Session Calibration](#session-calibration) that re-orients trackers to have the same yaw axis rotation as the head tracker (usually a [VR Headset](#vr-headset)). Since this only calibrates the yaw axis, the user can be in any position where the trackers are all facing in their forward orientation with the head tracker. This is a calibration mainly used to correct for drift after a subjective amount of time since the last yaw reset or [Full Reset](#full-reset).

### Synonyms {#yaw-reset-synonyms}

- Fast Reset
- Quick Reset

## Reset Time
Reset time refers to the rough amount of time any given IMU will take to accumulate enough drift to require a [Yaw Reset](#yaw-reset)

### Related Terms {#reset-time-related}
- Yaw Reset
- [Drift Time](#drift)

## Mounting Orientation

Mounting orientation is a type of correction for SlimeVR trackers. It defines the server's measurement of the rotation of trackers with respect to how they are physically mounted to your body. This can be automatically set by the server (preferred) or manually corrected by the user (not recommended due to inaccuracy).

### Synonyms {#mounting-orientation-synonyms}

- Mounting Direction
- Manual Mounting

### Related Terms {#mounting-orientation-related}

- [Mounting Calibration](#mounting-calibration)

## VR Headset

A VR headset is a head mounted device that tracks its position and rotation, usually with a display for each eye. For more information, see <https://wikipedia.org/wiki/Virtual_reality_headset>.

### Synonyms {#vr-headset-synonyms}

- Virtual Reality Headset
- HMD
- Head Mounted Device
- Headset

## Smol Slime
A type of SlimeVR tracker that uses an nRF wireless dongle instead of WiFi to connect to the server.

### Synonyms {#smol-slime-synonyms}
- Smols
- Smol Trackers

### Related Terms {#smol-slime-related}
- Big/normal slime (wifi-based slime)

## Breakout Board
A type of PCB designed to simplify integrating one or more integrated circuits into a larger device. Breakout boards are typically used for [IMUs](#imu), charging circuits, and microcontrollers, among other components.

### Synonyms {#breakout-synonyms}
- Breakout
- External PCB

### Related Terms {#breakout-related}
- Microcontroller

## IMU
An acronym for Inertial Measurement Unit. It is a type of integrated circuit that contains one or more devices used to measure movement. SlimeVR requires that an IMU integrates both an accelerometer and a gyroscope to allow for the measurement of acceleration and rotation relative to the last reset. As the IMU itself has no positional reference, it is susceptible to the unavoidable accumulation of error in its sensors over time, called [drift](#drift). A low-quality IMU accumulates error faster than a high quality IMU.

### Related Terms {#imu-related}
- [Drift](#drift)
- Accelerometer
- Gyroscope
- Magnetometer
- [Full Reset](#full-reset)
- [Mounting Calibration](#mounting-calibration)
- [Yaw Reset](#yaw-reset)

*Updated and edited by Amebun.*
