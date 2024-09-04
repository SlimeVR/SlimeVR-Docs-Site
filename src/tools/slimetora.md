# SlimeTora

SlimeTora is a program that connects the HaritoraX trackers to the SlimeVR server so you can use them as SlimeVR trackers, coming with additional features such as per-tracker settings. It supports the `HaritoraX Wireless` and `HaritoraX Wired` (1.1b/1.1/1.0) models.

![Screenshot of the app's main section showing the status and amount of trackers connected (6 trackers)](../assets/img/SlimeTora.png)

## Prerequisites

- A PC and VR headset capable of running/streaming SteamVR (Windows/Linux)
  - Optionally, you can instead use OSC in SlimeVR to forward the data to a standalone HMD (e.g. Quest, Pico, etc).
- A supported set of HaritoraX trackers (see [this](https://github.com/OCSYT/SlimeTora/wiki/FAQ#what-devices-are-supported) for the supported models)
- Latest version of [SlimeTora](https://github.com/OCSYT/SlimeTora/releases/latest)
- Latest version of [SlimeVR server](https://github.com/SlimeVR/SlimeVR-Server/releases/latest)
  - **New to SlimeVR and SlimeVR server?** Read the SlimeVR basics wiki page [here](https://github.com/OCSYT/SlimeTora/wiki/SlimeVR).
- Latest version of [HaritoraConfigurator](https://shop.shiftall.net/en-us/products/haritoraconfigurator-global)
  - The trackers must be paired/connected via the software at least once (and to make sure connections are working).

## Setup

> More details on setting up the software can be found on SlimeTora's `Getting Started` wiki page: [https://github.com/OCSYT/SlimeTora/wiki/Getting-Started](https://github.com/OCSYT/SlimeTora/wiki/Getting-Started)

### SlimeTora setup

- Download the latest release of the app in SlimeTora's [releases](https://github.com/OCSYT/SlimeTora/releases/latest) page.
- Extract the zip archive into its own folder and run the program (`SlimeTora[.exe]`).
  - On Linux, make sure to mark the binary as executable: `chmod +x ./SlimeTora`
- The "onboarding" screen will appear. Choose how you want to set up SlimeTora, automatic or manual.
  - Automatic setup is recommended and will guide you through the setup process in-app. You may skip the following instructions and focus on the app's instructions instead.
  - If you would like to set it up manually (or automatic setup does not work for whatever reason), read on.
- Press "Manual setup (skip)" and scroll down to "Program settings":
  - Select the model of HaritoraX trackers you have under "Tracker model" (`HaritoraX Wireless`/`HaritoraX 1.1b/1.1/1.0`).
  - Select the supported connection mode you want to use to connect to your trackers (`Bluetooth`/`COM / GX(6/2)`).
    - These two modes can also be used at the same time if on `HaritoraX Wireless`.
  - (`COM`/`HaritoraX 1.1b/1.1/1.0`) Select the COM port your bluetooth adapter has assigned the trackers to.
    - The port for the `HaritoraX 1.1b/1.1/1.0` (wired) trackers can be found in HaritoraConfigurator's "communication settings".
  - (`COM`/`GX(6/2)`/`HaritoraX Wireless`) Select up to 4 COM ports that your trackers are on (3 if only using GX6, 4 if using GX6+GX2).
    - Usually, this is the first four (consecutive) available ports. Some COM ports (e.g. `COM1`) are usually already used by other devices like your motherboard, so the ports are likely `COM2`, `COM3`, `COM4` (and `COM5` for GX2).
    - Check `Device Manager` to see what ports are being used by the trackers as `USB Serial Device`s.
- Change the program's settings to your liking (see [this](https://github.com/OCSYT/SlimeTora/wiki/Settings) for explanations).
- Continue to [SlimeVR setup](#slimevr-setup).

### SlimeVR setup

- Install and run [SlimeVR](../server/initial-setup.md) server, turn on your trackers, and press `Start connection` in SlimeTora.
- If running SlimeVR server for the first time, go through the initial setup:
  - Accept all popups that mention a "new tracker" was detected at any point during the setup (these are your trackers!)
  - Skip the `Input Wi-Fi credentials` screen by pressing `Skip Wi-Fi settings`.
  - Press `I put stickers and straps!`.
  - Assign the trackers to your body (shake to identify the trackers, or physically double tap them).
  - Perform `Automatic Mounting` to calibrate the mounting positions.
    - Manual mounting seems to be quite finicky and you may need to mess with it to get it right (which is why automatic is recommended)
  - Choose a proportion calibration method (automatic/manual).
- If this isn't your first time (or skipped initial setup):
  - Accept all popups that mention a "new tracker" was detected (these are your trackers!)
  - Assign the trackers to your body (shake to identify the trackers, or physically double tap them) in `Tracker Assignment`.
  - Perform an `Automatic Mounting` calibration or a `mounting reset` (you should be in the ski pose).
- Check out the rest of SlimeVR and its settings, and you're done!

## Troubleshooting & FAQ

> For the full troubleshooting and FAQ pages, check out the SlimeTora wiki: [https://github.com/OCSYT/SlimeTora/wiki](https://github.com/OCSYT/SlimeTora/wiki)

### I'm stuck on "searching" forever!

If on the `HaritoraX Wired` or `HaritoraX Wireless` with any of the `GX(6/2)` dongles, make sure the correct COM ports have been selected (refer to [this](https://github.com/OCSYT/SlimeTora/wiki/Getting-Started)). Also, HaritoraConfigurator should be closed; both SlimeTora and HaritoraConfigurator should not be open at the same time as more than one app cannot communicate with a COM port at a time.

If you are using the `HaritoraX Wireless` with any of the `GX(6/2)` dongles and you don't have all your trackers connected, you may experience a ~5 second delay before the program actually finds your trackers (instead of being instant) from `v1.2.0` and upwards. This is due to backend changes with `haritorax-interpreter`, it should eventually connect to your trackers however it may or may not be buggy. It is highly recommended you turn on all your trackers before starting a connection - this logic will be redone at some point to prevent this.

### Some of my trackers aren't connecting to SlimeTora!

The most common fix for this is to open the `HaritoraConfigurator` software and make sure they are paired/can connect to the trackers before connecting via SlimeTora again. Unsure why this happens, but this is the most likely fix for you (other than the general checklist) - this especially applies for `HaritoraX Wireless` users using any of the `GX(6/2)` dongles.

If you are using Bluetooth (Classic/LE), the trackers have a pretty large delay when you stop the connection on SlimeTora. This is especially noticeable when you restart the connection quickly as the trackers will have not fully disconnected yet. Make sure to wait at least 10 seconds before attempting a reconnection, or wait until the tracker LEDs indicate it has disconnected (slow blinking).

### My legs (or other parts) are going backwards!

Double check your tracker assignments and make sure you have done `Automatic mounting calibration` in SlimeVR server - you may want to attempt it multiple times if the first doesn't work. Manual mounting calibration seems to be a bit finicky with the trackers and may need some messing with to get right.

### My full body tracking is off!

The most likely cause for this is an incorrect calibration - try to redo the calibration steps in SlimeVR to improve the results. The following video by ZRock35 is a great guide on how to get the best results for SlimeVR calibration: [https://www.youtube.com/watch?v=SYqfQdVseF4](https://www.youtube.com/watch?v=SYqfQdVseF4)

By default, SlimeVR uses the `prediction` filtering setting to estimate where your trackers will be, so switching from it to `smoothing` or `no filtering` may also help with the trackers being out-of-place (unconfirmed).

If you are experiencing issues specifically with lower-body, it is still usually a calibration issue so as mentioned above, try to redo the calibration. You may also try disabling the knees in SlimeVR's settings under `SteamVR Trackers` to see if it helps (disable `Automatic tracker assignment` then disabling both knees). The knee trackers will still be used for the skeletal tracking in SlimeVR but not appear as extra trackers in SteamVR, which _may_ help with some tracking issues in your lower-body.

### My trackers are not aligned correctly to my body!

Make sure you've done the `Body proportions calibration` correctly, either manually or automatically, and also make sure you have done `Automatic mounting calibration` (as manual mounting is quite finicky with these trackers). You can also change settings in the game you are running (e.g. VRChat's IK settings like `Legacy calibration`) or change the positions of the trackers physically.

If running VRChat, there are some recommended settings for it [here](./vrchat-config.md).

### "Automatic proportions" is disabled/trackers won't show up in SteamVR!

Assuming of course you have your VR headset on at this stage, make sure the SlimeVR add-on in SteamVR has been installed/enabled correctly. You can check this by looking for `slimevr` in SteamVR settings > Manage Add-ons and enable if it disabled. If it is not installed correctly and isn't showing up, try reinstalling the SlimeVR server.

You may also install the SlimeVR add-on manually by downloading the [latest release](https://github.com/SlimeVR/SlimeVR-OpenVR-Driver/releases/latest) of the driver, then copying the `slimevr` folder from the archive into `C:\Program Files (x86)\Steam\steamapps\common\SteamVR\drivers\` for Windows or `~/.steam/root/steamapps/common/SteamVR/drivers/` for Linux (create the `slimevr` directory if it doesn't exist).

_Written by JovannMC, software developed by BracketProto & JovannMC_
