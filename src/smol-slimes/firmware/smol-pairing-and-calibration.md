# Smol Pairing & Calibration

## Overview

This guide covers how to pair, calibrate, and update your Smol Slime trackers and receiver.
You’ll use a serial terminal (such as <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop" target="_blank">nRF Connect</a> or <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank">PuTTY</a>) to run setup and troubleshooting commands.

## Table Of Contents

* TOC
{:toc}

## Setup & Software

You’ll need a serial terminal program to send commands to your trackers and receiver.

* **Recommended:** Download and install <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop" target="_blank">nRF Connect for Desktop</a>.
  * Install the Serial Terminal module inside it.
* **Linux/Mac:**
  * ```
    sudo screen /dev/ttyACMX 115200
    ```
    *(Find your port with `sudo dmesg`.)*
* **Windows Alternative:** <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank">PuTTY</a>

```admonish tip
Prefer an easy-to-use app? Check out [SmolSlimeConfigurator](SmolSlimeConfigurator.md)
```

## Pairing Trackers (First Time)

When first flashed, trackers and receivers boot into pairing mode automatically.

1. If the devices are not in pairing mode:
   * **Receiver:** Run `pair`
   * **Tracker:** Hold the **SW0** (Function) button for 5 seconds (*or short RST/GND 3 times*)
     * The LED blinks once per second while in pairing mode.
2. Watch for `esb_event` output in the receiver console:
   * ```<inf> esb_event: Added device on id 0 with address 95CB23A0FDF7```
3. Plug the tracker into your computer via USB.
4. The tracker’s LED flashes four times once pairing is successful.
5. Repeat for all trackers.
6. Exit pairing mode by entering `exit` on your receiver.

## Adding More Trackers

You can pair individual trackers to your receiver one at a time using the `add` command (on the *receiver*) and then the `set` command (on the *tracker*).

1. On the tracker, run: `info`
2. Copy its "Device Address" (e.g. `95CB23A0FDF7`).
3. On your **receiver:** `add 95CB23A0FDF7` (replace the device address with yours).
4. Copy the pairing ID from the receiver output:
    * ```[00:46:06.485,778] <inf> esb_event: Pair the device with D94BDEF1E442005B```
5. On your **tracker**: `set D94BDEF1E442005B`
6. Confirm pairing on the **tracker** — you should see:
    * ```[00:30:51.060,028] <inf> esb_event: Paired```
7. Repeat all steps for each additional **tracker**.

```admonish tip
The tracker LED will stop blinking once paired. Verify it is connected by moving it to appear in SlimeVR Server. If they don't, `reboot` both trackers/receiver, then `exit` pairing mode on the receiver.
```

## Calibrate Trackers

### Basic Calibration

The basic calibration runs an accelerometer and gyroscope zero rate offset. This is usually all you need. There are two methods. When calibrating, place the tracker flat on a surface and keep it still until the LED indicates completion.

- **Method 1:** Press the **SW0** (Function) button twice, then wait until the LED blinks four times to confirm calibration.
- **Method 2:** Connect your tracker to your computer and run `calibrate`.

### 6-Sided Calibration
The 6-sided calibration aligns the accelerometer across all six axes. This method requires you to hold the tracker perfectly still on all 6 sides.

1. Connect your tracker to your machine while it is powered on.
2. Run the `6-side` command.
3. Place the tracker on each side as prompted. The console will tell you when to rotate, or you can watch for the LED success blinks.

```admonish tip
You can unplug the cable immediately after executing the `6-side` command. When prompted for the final side, it can be easier to disconnect your USB cable and position the side with the USB port on a flat surface.
```

```admonish warning
Incorrect `6-side` calibration can make tracking worse! Hold your tracker steady on a **flat, stable** surface during calibration.
```

### Magnetometer

Magnetometer calibration is disabled by default. When enabled, it runs automatically — no button or command required. Slowly rotate your tracker 360° on each of its six sides while it’s flat on a surface.

The LED will blink when you place it flat on each side and will blink continuously when it is ready to save.

```admonish warning
Magnetometers can improve tracking; however, in environments with strong magnetic interference (like metal desks or PCs), performance may worsen.
```

## Update Firmware (Optional)

For flashing new trackers and receivers, check the [Flashing Firmware Guide](/smol-slimes/firmware/smol-flashing-firmware.html).

1. Download the latest firmware version from [Pre-Compiled Firmware](/smol-slimes/firmware/smol-pre-compiled-firmware.html).
2. Connect your tracker to your computer via USB, and ensure it is powered on.
3. Run the `dfu` command in your terminal.
4. Your tracker will appear as a USB drive labelled `SLIMENRFTRK` or `NICENANO` etc. (depending on your tracker hardware)
5. Copy the UF2 firmware file to your tracker.
6. If your tracker isn't paired after update, see [Adding More Trackers](/smol-slimes/firmware/smol-pairing-and-calibration.html#adding-more-trackers).

```admonish info
A Windows error after copying firmware is common and does **not** mean it failed. Check the commit version in the terminal if you are unsure.
```

```admonish warning
Be sure to flash the correct firmware version! Incorrect firmware can cause your tracker to become unresponsive.
```

## Troubleshooting

### Linux: SlimeVR Server Cannot Detect Receiver

For Linux systems, a udev rule may need to be created for the SlimeVR Server to detect your receiver as an HID device.

Create the rules file:
```bash
touch /etc/udev/rules.d/99-hid-dongle.rules
```
Add the following rules to the file:
```bash
sudo tee /etc/udev/rules.d/99-hid-dongle.rules > /dev/null <<'EOF'
SUBSYSTEM=="usb", ATTR{idVendor}=="1209", ATTR{idProduct}=="7690", MODE="0666"
KERNEL=="hidraw*", SUBSYSTEM=="hidraw", ATTRS{idVendor}=="1209", ATTRS{idProduct}=="7690", MODE="0666"
EOF
```
Ensure it worked:
```bash
cat /etc/udev/rules.d/99-hid-dongle.rules
```
**Note:** You may need to update the `idVendor` and `idProduct` values for your receiver. Use `lsusb` to find the correct IDs.

### Trackers Paired but Not Appearing in SlimeVR Server

* On your receiver: `exit`.
* Reboot the tracker: `reboot` or press the **SW0** button.
* Reboot the receiver: `reboot`.
* Ensure the IMU is detected on the tracker: `info`.
  * `IMU: ICM-45686` <-- Good
  * `IMU: None` <-- Bad. Go back to the build stage to troubleshoot.

## Reference

#### Receiver Commands

* `info` - Get receiver information
* `list` - Get paired trackers
* `reboot` - Soft reset the receiver
* `pair` - Enter pairing mode
* `add <address>` - Manually add a tracker
* `remove` - Remove last paired tracker
* `exit` - Exit pairing mode
* `clear` - Clear stored trackers
* `dfu` - Enter DFU bootloader
* `uptime` - Get receiver uptime
* `meow` - Meow!

#### Tracker Commands

* `info` - Get tracker information
* `reboot` - Soft reset the tracker
* `battery` - Get battery information
* `scan` - Restart sensor scan
* `calibrate` - Calibrate sensor ZRO
* `6-side` - Calibrate 6-side accelerometer
* `mag` - Clear magnetometer calibration
* `pair` - Enter pairing mode
* `set <address>` - Manually set receiver (Receiver's ```add``` command must be completed first)
* `clear` - Clear pairing data
* `dfu` - Enter DFU bootloader
* `uptime` - Get tracker uptime
* `debug` - Print debug log to troubleshoot tracker or firmware
* `reset <type>` - Reset calibration/stats for "zro", "acc" (6-Sided enabled only), "mag", "bat", or "all"
* `meow` - Meow!

#### Button Shortcuts

* Reset - 1 Press
* Calibration - 2 Presses
* Pairing Mode - Press and Hold for 5s
* DFU Bootloader - 4 Presses
* Deep Sleep - Press and Hold for 1s

### Status Codes

Status codes consist of one or more status values (added together) listed below:

| Code | Meaning                        |
| ---- | ------------------------------ |
| 1    | SYS_STATUS_SENSOR_ERROR        |
| 2    | SYS_STATUS_CONNECTION_ERROR    |
| 4    | SYS_STATUS_SYSTEM_ERROR        |
| 8    | SYS_STATUS_USB_CONNECTED       |
| 16   | SYS_STATUS_PLUGGED             |
| 32   | SYS_STATUS_CALIBRATION_RUNNING |
| 64   | SYS_STATUS_BUTTON_PRESSED      |

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral). Edited by [Brisfknibis](https://github.com/brisfknibis).*
