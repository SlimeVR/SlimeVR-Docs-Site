# Smol Flashing Firmware

* TOC
{:toc}

## Flashing Boards with Adafruits UF2 Bootloader (SuperMini / XIAO)

### Flashing the Bootloader
1. For the SuperMini, download <a href="https://github.com/SlimeVR/Adafruit_nRF52_Bootloader/releases/download/0.9.2-SlimeVR.4/update-slimenrf_promicro_bootloader-0.9.2-SlimeVR.4_nosd.uf2" target="_blank">update-slimenrf_promicro_bootloader-0.9.2-SlimeVR.4_nosd.uf2</a>. For the XIAO, download <a href="https://github.com/SlimeVR/Adafruit_nRF52_Bootloader/releases/download/0.9.2-SlimeVR.4/update-slimenrf_xiao_bootloader-0.9.2-SlimeVR.4_nosd.uf2" target="_blank">update-slimenrf_xiao_bootloader-0.9.2-SlimeVR.4_nosd.uf2</a>. (The appropriate non-Sense version does not update the bootloader.)
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
1. Navigate to your local Receiver or Tracker repository, then go to ```build\REPOSITORY_NAME\zephyr\```.
1. Copy zephyr.uf2 file.
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
1. Press the reset button, and the LED should begin to fade on and off, placing the device in DFU Mode. For eByte dongle, this is the right button. For Nordic dongle, it is the side button (not the round white button).
1. In the top left corner, select your Device.
1. Click on "Add File".
1. Navigate to your local Receiver repository, then select the file located at ```build\REPOSITORY_NAME\zephyr\zephyr.hex```.
1. Click the "Write button".

### Flashing using nRF Util
Not documented yet. Relevant documentation:
- <a href="https://docs.nordicsemi.com/bundle/nrfutil/page/nrfutil-device/guides/programming.html">device command documentation</a>
- <a href="https://docs.nordicsemi.com/bundle/nrfutil/page/guides-nrf5sdk/dfu_generating_packages.html">nrf5sdk pkg building guide</a>

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
