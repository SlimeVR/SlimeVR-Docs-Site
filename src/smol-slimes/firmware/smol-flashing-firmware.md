# Smol Flashing Firmware

## Table Of Contents

* TOC
{:toc}

## Flashing Boards with Adafruits UF2 Bootloader (SuperMini / XIAO)

### Flashing the Bootloader
1. For the SuperMini, download <a href="https://github.com/SlimeVR/Adafruit_nRF52_Bootloader/releases/download/0.9.2-SlimeVR.7/update-slimenrf_promicro_bootloader-0.9.2-SlimeVR.7_nosd.uf2" target="_blank">update-slimenrf_promicro_bootloader-0.9.2-SlimeVR.7_nosd.uf2</a>. For the XIAO, download <a href="https://github.com/SlimeVR/Adafruit_nRF52_Bootloader/releases/download/0.9.2-SlimeVR.7/update-slimenrf_xiao_sense_bootloader-0.9.2-SlimeVR.7_nosd.uf2" target="_blank">update-slimenrf_xiao_sense_bootloader-0.9.2-SlimeVR.7_nosd.uf2</a>.
1. Connect the device to your computer using a USB data cable.
1. The device should initially start in DFU mode when new and without a bootloader. The LED should fade on and off.
1. If the device's LED is not fading on and off, press the reset button twice (or briefly short the RST and GND pins) twice within 0.5 seconds. If the device has existing SlimeNRF firmware, reset it four times.
1. Navigate to your Downloads folder and copy the UF2 file.
1. Navigate to the Mass Storage Drive (ex. NICENANO/XIAO-SENSE) from ThisPC.
1. Paste the file there, and the window should close, causing the device to reboot.

```admonish important
Update the bootloader on your SuperMini and XIAO boards before flashing the firmware; otherwise, there is a significant risk of bricking your device. eByte and Nordic dongles are not included in this category.
```

### Flashing the Firmware using UF2
1. Connect the device to your computer using a USB data cable.
1. The device should initially start in DFU mode when new and without a bootloader. The LED should fade on and off.
1. If the device's LED is not fading on and off, press the reset button twice (or briefly short the RST and GND pins) twice within 0.5 seconds. If the device has existing SlimeNRF firmware, reset it four times.
1. Obtain the fimware:
   1. For local builds, navigate to the local Receiver or Tracker repository, then go to ```build\REPOSITORY_NAME\zephyr\``` and copy the "zephyr.uf2" file.
   1. Alternatively, use the [precompiled firmware](./smol-pre-compiled-firmware.md).
1. Navigate to the Mass Storage Drive (ex. NICENANO/XIAO-SENSE) from ThisPC.
1. Paste the file there, and the window should close, causing the device to reboot.

### Flashing the Firmware using adafruit-nrfutil
This uses the bootloaders serial protocol to flash it using command line tools. <br>
See <a href="https://github.com/adafruit/Adafruit_nRF52_nrfutil">Adafruit nRF52 nrfutil Github Repo</a> for install and usage instructions. <br>
Recommended: Use a python venv to install the adafruit-nrfutil python tool.

## Flashing Dongles with SoftDevice/Nordic Bootloader (eByte/Nordic)

This bootloader will appear as "Open DFU Bootloader" by Nordic Semiconductor. Currently, the only confirmed method for flashing firmware onto these devices is through <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop">nRF Connect for Desktop</a>, though it should also be possible to use <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Util">nRF Util</a> (but it is more complex and practically equivalent). <br>
NOTE: Installing the Segger J-Link is not required for this bootloader. <br>
NOTE: On Linux, nRF Connect for Desktop installs nodeJS tools into `~/.nrfconnect-apps/`, nRF Util installs binary tools into `~/.nrfutil/`.

### Flashing using nRF Connect for Desktop
1. Open "Programmer" in the nRF Connect.
1. Put the device into DFU mode using either of these methods:
    1. Press the reset button — the LED should begin to fade on and off, indicating the device is in DFU Mode. For the eByte dongle, this is the right button. For the Nordic dongle, it is the side button (not the round white button).
    2. For the HolyIOT-21017 Dongle, place the provided magnet (from the USB port) near the LED area. The red LED should begin fading on and off.
    3. For Receivers with pre-existing SlimeNRF Firmware flashed, open the Serial Terminal in nRF Connect and enter ```dfu```. (This only works for some Open DFU Bootloader Devices)
2. In the top left corner, select your Device.
3. Click on "Add File".
4. Select the firmware (.hex) you want to flash:
    1. For local builds, navigate to your local Receiver repository, then select the file located at ```build\REPOSITORY_NAME\zephyr\zephyr.hex```.
    2. Alternatively, use [precompiled firmware](./smol-pre-compiled-firmware.md).
5. Click the "Write" button.

### Flashing using nRF Util
Not documented yet. Relevant documentation:
- <a href="https://docs.nordicsemi.com/bundle/nrfutil/page/nrfutil-device/guides/programming.html">device command documentation</a>
- <a href="https://docs.nordicsemi.com/bundle/nrfutil/page/guides-nrf5sdk/dfu_generating_packages.html">nrf5sdk pkg building guide</a>

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
