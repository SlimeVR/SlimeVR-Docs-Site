# SlimeTora

SlimeTora is a program that connects the HaritoraX trackers to the SlimeVR server so you can use them as SlimeVR trackers, coming with additional features such as per-tracker settings.

![Screenshot of the app's main section showing the status and amount of trackers connected (6 trackers)](../assets/img/SlimeTora.png)

## Setup

> More details on setting up the software can be found on SlimeTora's `Getting Started` wiki page: https://github.com/OCSYT/SlimeTora/wiki/Getting-Started

### SlimeTora setup

> Your trackers must be paired/connected via the HaritoraConfigurator at least once to work. This is also done to make sure there are no issues with the trackers connecting to the PC in general.

- Download the latest release of [SlimeTora](https://github.com/OCSYT/SlimeTora/releases) and run the program
- Select the connection mode you want to use to connect to your trackers (`Bluetooth`/`GX(6/2)`)
  - These two modes can also be used at the same time (e.g. GX6+BT for elbows)
- (`GX(6/2)` dongles) Select up to 4 COM ports that your trackers are on (3 if using GX6, 4 if using GX6+GX2)
- Change the other global settings to your liking (see [this](https://github.com/OCSYT/SlimeTora/wiki/Settings#global-settings))
- Turn on your trackers and press `Start connection`
- Continue to `SlimeVR setup`

### SlimeVR setup

- Download and install [SlimeVR](../server/initial-setup.md) and go through the initial setup:
  - Skip the `Input Wi-Fi credentials` screen by pressing `Skip Wi-Fi settings`
  - Press `I put stickers and straps!`
  - Assign the trackers to your body (shake to identify the trackers)
  - (**IMPORTANT**) Perform `Automatic Mounting` to calibrate the mounting positions
  - Choose a proportion calibration method (automatic/manual)
- (**IMPORTANT**) Open SlimeVR settings and **disable knees** under `SteamVR trackers`
    - This fixes weird tracking issues, especially when sitting/laying
    - Also, this does not make knee trackers useless as they are still used in SlimeVR's skeleton for tracking

## Troubleshooting

> For the full troubleshooting and FAQ pages, check out the SlimeTora wiki: https://github.com/OCSYT/SlimeTora/wiki

### Some of my trackers aren't connecting to SlimeTora!

The most common fix for this is to open the `HaritoraConfigurator` software and make sure they are paired/can connect to the trackers before connecting via SlimeTora again.

### My legs are going backwards!

Make sure you have done `Automatic mounting calibration` in SlimeVR server. Manual mounting calibration does not seem to work well for these trackers.

### My lower-body tracking is weird/off, especially when sitting/laying!

Make sure you have disabled the knees in SlimeVR's settings, under `SteamVR Trackers`.

### My trackers are not aligned correctly to my body!

Make sure you've done the `Body proportions calibration` correctly, either manually or automatically, and also make sure you have done `Automatic mounting calibration`, **NOT** manual. You can also change settings in the game you are running (e.g. VRChat's IK settings like `Legacy calibration`) or change the positions of the trackers physically.

You can also use the recommended settings for VRChat found in the SlimeVR documentation [here](./vrchat-config.md)

*Written by JovannMC, software developed by BracketProto & JovannMC*
