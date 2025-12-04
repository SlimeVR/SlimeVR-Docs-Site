# SlimeVR Terminology / Glossary

- [SlimeVR Server](#slimevr-server)
- [SlimeVR GUI](#slimevr-gui)
- [SteamVR Driver](#steamvr-driver)
- [Feeder App](#feeder-app)
- [Session Calibration](#session-calibration)
- [Full Reset](#full-reset)
- [Yaw Reset](#yaw-reset)
- [Mounting Reset](#mounting-reset)
- [Mounting Orientation](#mounting-orientation)
- [VR Headset](#vr-headset)
- [Smol Slime](#smol-slime)

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

## Session Calibration

There are multiple different session calibrations within the SlimeVR Server; these are commonly referred to as "resets". These are forms of calibration that are generally not saved and need to be done during each session of SlimeVR. See the [Sub-Terms](#session-calibration-sub-terms) for the types of session calibrations.

### Synonyms {#session-calibration-synonyms}

- Resets (Full Reset; Mounting Reset; Feet Mounting Reset)
- Software Calibration
- VRChat Calibration

### Sub-Terms {#session-calibration-sub}

- [Yaw Reset](#yaw-reset)
- [Mounting Reset](#mounting-reset)

## Full Reset

A "full reset" is a [Session Calibration](#session-calibration) that re-orients trackers to have zero rotation in the pitch and roll axes and have the same yaw axis rotation as the head tracker (usually a [VR Headset](#vr-headset)), essentially "resetting" (or "zeroing") the "full" orientation. This is usually the first calibration used when starting a session with SlimeVR.

## Mounting Reset

A "mounting reset" (or "reset mounting") is a [Session Calibration](#session-calibration) that corrects the base orientation of trackers in regards to how they are physically mounted to your body. This is usually the second calibration used when starting a session with SlimeVR if the user chooses to use automatic mounting. When mounting reset is used, the results of the calibration will override any manually set [Mounting Orientation](#mounting-orientation).

### Synonyms {#mounting-reset-synonyms}

- Reset Mounting
- Mounting Calibration
- Automatic Mounting
- Automatic Mounting Orientation

## Yaw Reset

A "yaw reset" is a [Session Calibration](#session-calibration) that re-orients trackers to have the same yaw axis rotation as the head tracker (usually a [VR Headset](#vr-headset)). Since this only calibrates the yaw axis, the user can be in any position where the trackers are all facing in their forward orientation with the head tracker. This is a calibration mainly used to correct for drift after a subjective amount of time since the last yaw reset or [Full Reset](#full-reset).

### Synonyms {#yaw-reset-synonyms}

- Fast Reset
- Quick Reset

### Related Terms {#mounting-reset-related}

- [Mounting Orientation](#mounting-orientation)

## Mounting Orientation

Mounting orientation is a type of correction for SlimeVR trackers. Mounting orientation corrects the base orientation of trackers in regards to how they are physically mounted to your body.

### Synonyms {#mounting-orientation-synonyms}

- Mounting Direction
- Manual Mounting

### Related Terms {#mounting-orientation-related}

- [Mounting Reset](#mounting-reset)

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
- Ibis (a specific type of smol slime)
- Big/normal slime (wifi-based slime)

*Updated and edited by Amebun.*
