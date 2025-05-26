# Smol Pairing & Calibration

* TOC
{:toc}

# Firmware Setup

## Accessing the Serial Console

You can interact with the firmware by connecting to the serial console it provides, which is used for pairing and calibration. <br>
The following examples will utilize nRF Connect for Desktop; however, you may choose from a wide variety of alternative tools. <br>
For example, by using the standard Linux `screen` utility, you can access the serial console as follows: <br>
`sudo screen /dev/ttyACMX 115200` <br>
You can determine which serial port to use by running `sudo dmesg` after connecting your nRF device. <br>
For Windows, there are similar tools available, such as <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html">PuTTY</a> that you can use to <a href="https://documentation.help/PuTTY/using-serial.html">access a serial console</a>.

## Pairing Mode

```admonish warning
**Disclaimer:** For trackers to appear on SlimeVR server for the first time it usually required to `exit` pairing mode on receiver after pairing your trackers.
Trackers appear in server list only after being moved.
```

## Tracker

### Method 1: Console
1. Launch nRF Connect for Desktop.
1. Open the Serial Terminal in nRF Connect.
1. Ensure that your tracker is connected to your computer using a cable.
1. In the top left corner, select your tracker from the Device menu.
1. Click the "Connect to Port" button.
1. Type ```pair``` into the console.

### Method 2: Button
1. Press the Reset button (or short RST/GND pins) or the Function button (if SW0 is defined) three times.

The device's LED should blink once every second.

## Receiver

1. Launch nRF Connect for Desktop.
1. Open the Serial Terminal in nRF Connect.
1. Ensure that your tracker is connected to your computer using a cable.
1. In the top left corner, select your dongle from the Device menu.
1. Click the "Connect to Port" button.
1. Type ```pair``` into the console.

The device's LED should blink once every second.

Once the trackers are paired, the LED indicator should stop blinking once per second. To exit pairing mode on the Receiver, type ```exit``` in the console.

# Calibration

## Basic

### Method 1: Console

1. Launch nRF Connect for Desktop.
1. Open the Serial Terminal in nRF Connect.
1. Ensure that your tracker is connected to your computer using a cable.
1. In the top left corner, select your tracker under Devices.
1. Click the "Connect to Port" button.
1. Type ```calibrate``` into the console while the tracker is placed on a flat surface.
1. Wait for the logs to reboot and print out again.

### Method 2: Button
1. Press the Reset or SW0 (Functional) button twice, then place the tracker on a flat surface and allow it to remain still for a few seconds.

## 6-Sided
1. Ensure that the power switch is turned on so that the tracker can operate on battery power when unplugged.
1. Launch the nRF Connect for Desktop.
1. Open the Serial Terminal in nRF Connect.
1. Ensure that your tracker is connected to your computer using a cable.
1. In the top left corner, select your tracker under Devices.
1. Click the "Connect to Port" button.
1. Enter the ```6-side``` command in the console. (Currently, there is no button combination available to initiate this calibration.)
1. Follow the console log while rotating the sides on a flat surface. Leave the cable side for last.
1. When prompted for the final side, disconnect your USB cable and position the side with the USB port on a flat surface.
1. Wait a moment until the calibration is complete.

## Magnetometer
1. Please note that this calibration is passively active and does not require any command or button press combination to initiate.
1. Rotate your tracker 360 degrees on each of the six sides of the tracker while it is placed on a flat surface.

Note: The LED will blink when you place it flat on each side and will blink continuously when it is ready to save.

# Updating Firmware
1. If your receiver requires a firmware update, please do this first.
1. Open the Serial Terminal in nRF Connect's Serial Terminal.
1. Select your Receiver from the Device list.
1. Click the "Connect to Port" button.
1. Enter ```clear``` to unpair all of your trackers from the Receiver. The Receiver will automatically enter pairing mode.
1. Connect the tracker to your computer using a USB cable and ensure that the power switch is turned on. This allows the tracker to operate on battery power when unplugged for 6-Side calibration.
1. Select your tracker from the Device List.
1. Click the "Connect to Port" button.
1. Enter ```dfu``` to go into DFU Mode.
1. Copy the UF2 file to your tracker.
1. Enter ```6-side``` to begin the 6-Side calibration.
1. After completing the 6-side calibration, enter ```calibrate``` to adjust the ZRO.
1. Enter ```pair``` to enter pairing mode.
1. Wait for the tracker to pair with the Receiver, and then disconnect.
1. Please repeat process for all trackers.
1. Select your Receiver from the Device list.
1. Click the "Connect to Port" button.
1. Enter ```exit``` to exit pairing mode.

# Console Commands

## Receiver
* ```info``` - Get device information
* ```list``` - Get paired devices
* ```reboot``` - Soft reset the device
* ```pair``` - Enter pairing mode
* ```exit``` - Exit pairing mode
* ```clear``` - Clear stored devices
* ```dfu``` - Enter DFU bootloader (only available if your device has one)
* ```uptime``` - Get device uptime
* ```meow``` - Meow!

## Tracker
* ```info``` - Get device information
* ```reboot``` - Soft reset the device
* ```calibrate``` - Calibrate sensor ZRO
* ```6-side``` - Calibrate 6-side accelerometer
* ```mag``` - Clear magnetometer calibration
* ```pair``` - Enter pairing mode
* ```clear``` - Clear pairing data
* ```dfu``` - Enter DFU bootloader (only available if your device has one)
* ```uptime``` - Get device uptime
* ```meow``` - Meow!

# Button
* Reset - 1 Press
* Calibration - 2 Presses
* Pairing Mode - 3 Presses
* DFU Bootloader - 4 Presses
* Deep Sleep - Press and Hold

# Status Codes

Status codes consist of one or more status values (added together) listed below:

* SYS_STATUS_SENSOR_ERROR - 1
* SYS_STATUS_CONNECTION_ERROR - 2
* SYS_STATUS_SYSTEM_ERROR - 4
* SYS_STATUS_USB_CONNECTED - 8
* SYS_STATUS_PLUGGED - 16
* SYS_STATUS_CALIBRATION_RUNNING - 32

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
