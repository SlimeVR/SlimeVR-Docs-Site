# Smol Updating Firmware


## Required Tools

You only need the following if you are using precompiled firmware:
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop">nRF Connect for Desktop</a> (Programmer) for flashing Nordic or eByte Dongles only
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop">nRF Connect for Desktop</a> (Serial Terminal) for sending commands to your Receiver/Trackers, [see alternatives](smol-pairing-and-calibration.md#required-tools)
* Or [SmolSlimeConfigurator](SmolSlimeConfigurator.md), an all-in-one programming and configuration tool for your Smol Slimes.
* <a href="https://slimevr.dev/download">SlimeVR Server</a>
    * 0.13.2 or later version

## Steps

For flashing new trackers and receivers, check the [Flashing Firmware Guide](smol-flashing-firmware.md).

1. Download the latest firmware version from [Pre-Compiled Firmware](smol-pre-compiled-firmware.md).
2. Connect your tracker to your computer via USB, and ensure it is powered on.
3. Run the `dfu` command in your terminal.
4. Your tracker will appear as a USB drive labelled `SLIMENRFTRK` or `NICENANO` etc. (depending on your tracker hardware)
5. Copy the UF2 firmware file to your tracker.
6. If your tracker isn't paired after update, see [Adding More Trackers](smol-pairing-and-calibration.md#adding-more-trackers).

```admonish info
A Windows error after copying firmware is common and does **not** mean it failed. Check the commit version in the terminal if you are unsure.
```

```admonish warning
Be sure to flash the correct firmware version! Incorrect firmware can cause your tracker to become unresponsive.
```

---

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral). Edited by [Brisfknibis](https://github.com/brisfknibis).*