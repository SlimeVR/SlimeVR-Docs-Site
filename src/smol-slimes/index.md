# Smol Slime
Smol Slimes, also known as nRF Trackers, use a protocol called Enhanced ShockBurst (ESB) on Nordic Semiconductor’s nRF52 and nRF54L series System-on-Chip (SoC) devices. These trackers are highly power-efficient and can run for days or even weeks on a small battery—significantly longer than traditional ESP (WiFi-based) SlimeVR trackers.

A receiver (or dongle) is required to bridge communication between the trackers and the SlimeVR Server. The receiver can be connected to a computer for PCVR, or used with Quest standalone headsets through OSC (Open Sound Control).

Receivers can also be plugged directly into a Quest headset or Android device for fully standalone tracking. In these setups, SlimeVR Server v0.16.3 or later is required, and an OTG adapter may also be needed. OSC is always required for Quest standalone setups, whether the receiver is connected to a computer, another Android device, or the headset itself.

## 🦋 Introducing the Butterfly Tracker – SlimeVR's Official Smol Tracker
Looking for something simpler than building your own? The Butterfly Tracker is SlimeVR’s official take on the Smol Slime—ultra-thin, lightweight, and ready to use out of the box.

<img src="assets/img/ect/Butterfly_Tracker.webp" alt="SlimeVR's Butterfly Tracker">

🔗 Learn more and pre-order on <a href="https://www.crowdsupply.com/slimevr/slimevr-butterfly-trackers" target="_blank">CrowdSupply</a>.

## Getting Started

```admonish warning
**Disclaimer:** This project is highly experimental. These devices may be incompatible with newer versions of the SlimeVR Server and could require frequent firmware updates. Nothing is final at this stage, including hardware, firmware, and communication protocols.
```

- **[Community Builds](hardware/smol-slimes-community-builds.md)**
  Examples of completed builds, cases, and lists of components you will need to create your own set of matching trackers.

- **[Hardware](hardware/index.md)**
  Guides on hardware used for trackers and receiver, schematics for assembly, and cost calculator for planning out your project.

- **[Firmware](firmware/index.md)**
  Guides on using pre-compiled firmware, configuring and compiling your own firmware, and flashing firmware for your devices.

- **[Pairing & Calibration](firmware/smol-pairing-and-calibration.md)**
  Guides on pairing your trackers to your receiver, performing various calibrations for your trackers, lists of console commands, and button press functions.

Are you interested, have questions, or running into issues? Chat with us in ***#diy-smol*** on the <a href="https://discord.gg/SlimeVR" target="_blank">SlimeVR Discord</a>!

<hr/>

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
