# SlimeVR Terminology / Glossary

- [SlimeVR server](#slimevr-server)
- [SlimeVR GUI](#slimevr-gui)
- [SteamVR driver](#steamvr-driver)
- [Feeder app](#feeder-app)
- [Session calibration](#session-calibration)
- [Full reset](#full-reset)
- [Yaw reset](#yaw-reset)
- [Mounting reset](#mounting-reset)
- [Mounting orientation](#mounting-orientation)
- [VR headset](#vr-headset)
- [Smol Slime](#smol-slime)

## SlimeVR server

The main SlimeVR application for receiving, processing, and outputting tracking data. This application runs locally using Java and connects to the [SlimeVR GUI](#slimevr-gui) for a visual interface.

### Synonyms {#slimevr-server-synonyms}

- SlimeVR (contextual)
- SlimeVR app
- SlimeVR software
- SlimeVR program

### Related terms {#slimevr-server-related}

- [SlimeVR GUI](#slimevr-gui)
- [SteamVR driver](#steamvr-driver)

## SlimeVR GUI

The visual interface for the [SlimeVR server](#slimevr-server). This GUI runs as a webview and connects to the [SlimeVR server](#slimevr-server) over a websocket connection.

### Related terms {#slimevr-gui-related}

- [SlimeVR server](#slimevr-server)

## SteamVR driver

The SlimeVR driver for SteamVR that sends the [VR headset](#vr-headset) position and rotation to the [SlimeVR server](#slimevr-server), receives tracking data from the [SlimeVR server](#slimevr-server), and uses the received tracking data to emulate Vive trackers in SteamVR.

### Synonyms {#steamvr-driver-synonyms}

- SlimeVR driver

### Related terms {#steamvr-driver-related}

- [SlimeVR server](#slimevr-server)

## Feeder app

The feeder app is a program that connects to SteamVR and forwards tracker data from external sources to the [SlimeVR server](#slimevr-server). The trackers forwarded are generally VR controllers, Vive trackers, or Tundra trackers.

It is a common misconception that the feeder app also forwards the [VR headset](#vr-headset) tracking data, but that is done by the [SteamVR driver](#steamvr-driver).

### Synonyms {#feeder-app-synonyms}

- SlimeVR feeder
- Feeder

### Related terms {#feeder-app-related}

- [SlimeVR server](#slimevr-server)

## Session calibration

There are multiple different session calibrations within the SlimeVR Server; these are commonly referred to as "resets". These are forms of calibration that are generally not saved and need to be done during each session of SlimeVR. See the [sub-terms](#session-calibration-sub-terms) for the types of session calibrations.

### Synonyms {#session-calibration-synonyms}

- Resets (full reset; mounting reset; feet reset)
- Software calibration
- VRChat calibration

### Sub-terms {#session-calibration-sub}

- [Full reset](#full-reset)
- [Yaw reset](#yaw-reset)
- [Mounting reset](#mounting-reset)

## Full reset

A "full reset" is a [session calibration](#session-calibration) that re-orients trackers to have zero rotation in the pitch and roll axes and have the same yaw axis rotation as the head tracker (usually a [VR headset](#vr-headset)), essentially "resetting" (or "zeroing") the "full" orientation. This is usually the first calibration used when starting a session with SlimeVR.

## Mounting reset

A "mounting reset" (or "reset mounting") is a [session calibration](#session-calibration) that corrects the base orientation of trackers in regards to how they are physically mounted to your body. This is usually the second calibration used when starting a session with SlimeVR if the user chooses to use automatic mounting. When mounting reset is used, the results of the calibration will override any manually set [mounting orientation](#mounting-orientation).

### Synonyms {#mounting-reset-synonyms}

- Reset mounting
- Mounting calibration
- Automatic mounting
- Automatic mounting orientation

## Yaw reset

A "yaw reset" is a [session calibration](#session-calibration) that re-orients trackers to have the same yaw axis rotation as the head tracker (usually a [VR headset](#vr-headset)). Since this only calibrates the yaw axis, the user can be in any position where the trackers are all facing in their forward orientation with the head tracker. This is a calibration mainly used to correct for drift after a subjective amount of time since the last yaw reset or [full reset](#full-reset).

### Synonyms {#yaw-reset-synonyms}

- Fast reset
- Quick reset

### Related terms {#mounting-reset-related}

- [Mounting orientation](#mounting-orientation)

## Mounting orientation

Mounting orientation is a type of correction for SlimeVR trackers. Mounting orientation corrects the base orientation of trackers in regards to how they are physically mounted to your body.

### Synonyms {#mounting-orientation-synonyms}

- Mounting direction
- Manual mounting

### Related terms {#mounting-orientation-related}

- [Mounting reset](#mounting-reset)

## VR headset

A VR headset is a head mounted device that tracks its position and rotation, usually with a display for each eye. For more information, see <https://wikipedia.org/wiki/Virtual_reality_headset>.

### Synonyms {#vr-headset-synonyms}

- Virtual reality headset
- HMD
- Head mounted device
- Headset

## Smol slime
A type of slimevr tracker that uses an nRF wireless dongle instead of WiFi to connect to the server.
### Synonyms {#smol-slime-synonyms}
- Smols
- Smol trackers

### Related Terms {#smol-slime-related}
- Ibis (a specific type of smol slime)
- Big/normal slime (wifi-based slime)

*Updated and edited by Amebun.*
