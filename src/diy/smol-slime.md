# Smol Slime
Smol Slimes, also known as nRF Trackers, uses a protocol called Enhanced ShockBurst (ESB) on Nordic Semiconductor nRF52 and nRF54L series System-on-Chip (SoC). These are very power-efficient trackers, requiring a much smaller battery that can last for days to weeks compared to traditional ESP (WiFi) SlimeVR Trackers. A Receiver, or dongle, is required to bridge communication between trackers and the SlimeVR Server. This method does not work with Quest Standalone without using a computer for OSC.

```admonish warning
**Disclaimer:** This project is highly experimental. These devices may be incompatible with newer versions of SlimeVR Server and may require frequent firmware updates. Nothing is final yet; this includes hardware, firmware, protocols used, etc.
```

Interested, have questions, or issues with this project? Chat with us in ***#smol-slimes*** on <a href="https://discord.gg/SlimeVR" target="_blank">SlimeVR Discord</a>!

## Table of Contents
* TOC
{:toc}

## 📡 Receiver Hardware
It is important to use boards with a good antenna to maintain signal integrity and range. Hardware with PCB antennas are generally the best option to use as a receiver.

### USB Dongles
These dongles have a fairly optimized PCB antenna. If you have issues with signal integrity, it is recommended to use a USB extension cable.

| Dongle                                          | Description                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eByte Dongle (E104-BT5040U)                     | Cheapest option with a PCB antenna. It is available on AliExpress, with free shipping. <br /> Also available on Alibaba by `Chengdu Ebyte Electronic Technology Co., Ltd.` <br/> - `E104-BT5040U` is fully compatible with the Nordic Semiconductor nRF52840 Dongle. <br/> - `E104-BT5040UA` is not compatible. It is only capable of capturing BLE4.2 and BLE5.0 protocol packets. |
| Nordic Semiconductor nRF52840 Dongle (PCA10059) | Official Nordic development hardware. It is available on Digikey or Mouser.                                                                                                                                                                                                                                                                                                         |

### Microcontroller Boards
These boards use antenna designs that are not optimized for range. If you are using the same boards for both trackers and receiver, they will likely perform poorly without modification.

| Board                      | Description                                                                                                                                            |                                                                                                                                         |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| SuperMini nRF52840         | Cheapest option overall. It is a clone of the nice!nano board. It is available on AliExpress with `compatible with nice!nano` or `Pro Micro` branding.<br>If you want to improve signal strength, you can replace the built-in antenna with a 31 mm wire. This creates a basic monopole antenna. |
| Seeed Studio XIAO nRF52840 | Compact board, available on Seeed Studio.                                                                                                                                                                                                                                                        |


## 🏃 Tracker Hardware
Before you start, decide on [how many trackers you may need](../slimevr101.md#how-many-trackers-do-you-need).

Trackers are required to have a battery and an inertial measurement unit (IMU). A magnetometer is optional.

Buttons and slide switches are recommended but not required. Buttons can be added to control the tracker, and a slide switch can be used to physically disconnect a tracker's battery.

### Microcontroller Boards

| Board                      | Description                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SuperMini nRF52840         | Cheapest option overall. It is a clone of the nice!nano board. It is available on AliExpress with `compatible with nice!nano` or `Pro Micro` branding. |
| Seeed Studio XIAO nRF52840 | Compact board, available on Seeed Studio.                                                                                                              |

### Inertial Measurement Units
 - BMI270
 - ICM-42688-P
 - ICM-42688-V
 - ICM-45686
 - ISM330BX
 - ISM330DHCX
 - LSM6DSO
 - LSM6DSR
 - LSM6DSV
 - LSM6DSV16B

### Magnetometers
 - AK09940
 - BMM150*
 - BMM350*
 - IIS2MDC
 - IST8306
 - IST8308
 - LIS2MDL
 - LIS3MDL*
 - MMC5983MA

*Sensor driver has not been tested.

### Sensor Modules

#### IMU Modules
Some of the supported sensor modules are described on the [IMU Comparison page](imu-comparison.md). Note that most common sensor modules are not supported.

#### IMU + Magnetometer Modules
Meia, a member of the [SlimeVR Discord](#discord), produces and sells sensor modules with an onboard magnetometer. They are compatible with common sensor modules, and the form factor is suitable for stacked builds.

| IMU + Magnetometer                                 | Product Page                                                                 |
| -------------------------------------------------- | ---------------------------------------------------------------------------- |
| [ICM-45686](imu-comparison.md#ICM-45686) + IST8306 | [store.kouno.xyz](https://store.kouno.xyz/products/icm-45686-ist8306-module) |
| LSM6DSR + IST8306                                  | [store.kouno.xyz](https://store.kouno.xyz/products/lsm6dsr-ist8306-module)   |

### Buttons
Push buttons/momentary switches are used to control the tracker. Multiple button configurations are supported. A tracker can have either a reset button, a user button, or both.

The reset button is suitable for all functionality. If a user button is available, it will be used instead.

If a button is not available, tweezers can be used to short the pins for initial tracker setup.

### Switches
A slide switch can be used to physically disconnect a battery. Some boards have a high standby power draw and will require a switch.

If a switch is not used, a tracker can enter deep sleep by holding down the user button.

### Batteries
Most boards will support a 3.7V Li-ion/LiPo battery. Usually, batteries have a maximum charge rate of 1C, or a 1 hour charge rate. Do not use a battery if the charge rating will be exceeded.

To extend the lifespan of the battery, a much lower charge rate close to 0.5C is recommended.

| Board                      | Default charge rate | Minimum battery capacity | Recommended battery capacity |
| -------------------------- | ------------------- | ------------------------ | ---------------------------- |
| SuperMini nRF52840         | 100mA               | 100mAh                   | 180-300mAh                   |
| Seeed Studio XIAO nRF52840 | 50mA                | 50mAh                    | 80-300mAh                    |

## Schematics

| Default SuperMini Build                                                                                                                                         | Stacked 🥪 SuperMini Build[^note]                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="../assets/img/smol_slime_schematic.png" target="_blank"><img src="../assets/img/smol_slime_schematic.png" height="500" alt="Smol Slime Schematic"></a> | <a href="../assets/img/smol_slime_stacked_schematic.png" target="_blank"><img src="../assets/img/smol_slime_stacked_schematic.png" height="500" alt="Smol Slime (Stacked 🥪) Schematic"></a> |

[^note]: Requires special firmware that provides power from the GPIO pins. <a href="https://youtu.be/qTmIfa_Asic" target="_blank">YouTube Tutorial</a>

## Software
For building the firmware yourself:
* <a href="https://git-scm.com/download/win" target="_blank">Git Client</a>
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop" target="_blank">nRF Connect for Desktop</a> with various integrated tools:
    * Programmer (for flashing Nordic and eByte Dongles only)
    * Serial Terminal (for sending commands to your Receiver/Trackers, [see alternatives](#accessing-the-serial-console))
    * Toolchain Manager (for automatic setup of the toolchain for building firmware)
        * 2.9.0 (Inside Toolchain Manager) Don't use a newer version!
    * NOTE: Installing Segger J-Link is not required for known boards.
* <a href="https://code.visualstudio.com/download" target="_blank">VS Code</a> (For building only)
    * <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-VS-Code" target="_blank">nRF Connect for VS Code</a> (Recommended)
        * Install within VS Code extension tab, see <a href="https://youtu.be/EAJdOqsL9m8" target="_blank">video guide</a>
        * You may install only the <a href="https://marketplace.visualstudio.com/items?itemName=nordic-semiconductor.nrf-connect" target="_blank">extension itself</a> or the <a href="https://marketplace.visualstudio.com/items?itemName=nordic-semiconductor.nrf-connect-extension-pack" target="_blank">extension pack</a> for additional development tools
    * You may also set up a manual build environment in VS Code as the extension is known to fail on some linux distros
* <a href="https://slimevr.dev/download" target="_blank">SlimeVR Server</a>
    * 0.13.2 or later version

Of those, you only need the following if you use precompiled firmware:
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop" target="_blank">nRF Connect for Desktop</a> (Programmer) for flashing Nordic or eByte Dongles only
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop" target="_blank">nRF Connect for Desktop</a> (Serial Terminal) for sending commands to your Receiver/Trackers, [see alternatives](#accessing-the-serial-console)
* <a href="https://slimevr.dev/download" target="_blank">SlimeVR Server</a>
    * 0.13.2 or later version

## Firmware
```admonish important
The recommended method of getting the firmware is in the [pre-compiled section](#pre-compiled-firmware-for-default-pins) if you don't need custom config or pin defines.
```

### Cloning Repositories
1. Open Command Prompt (Type ```cmd``` in Start Menu).
1. Change to a directory you want the repositories to clone to. (Use "cd" followed by space and then a full path to a folder or drive.)
1. Cloning SlimeNRF Receiver Repository.
```
git clone --single-branch --recurse-submodules -b master https://github.com/SlimeVR/SlimeVR-Tracker-nRF-Receiver.git
```
4. Cloning SlimeNRF Tracker Repository.
```
git clone --single-branch --recurse-submodules -b master https://github.com/SlimeVR/SlimeVR-Tracker-nRF.git
```
**Note:** It is recommended to clone to a filepath without whitespaces and/or unicode characters. You may encounters errors when building the firmware.

### Building firmware using nRF Connect for VS Code
1. Launch VS Code using nRF Connect's Toolchain Manager.
1. Open the folder to one of the repositories.
1. Make any pin changes or necessary adjustments to ```boards\MANUFACTURER\BOARD_NAME.dts```.
1. Click on the nRF Connect tab on the left side of your screen (about half way down).
1. Under "Applications" , click on "+ Add build configuration."
1. Select preset from "Board Target".
1. Scroll down and click on the "Build Configuration" button.

**Note:** For trackers, settings are found in "nRF Kconfig GUI" under "Actions" and expand the "SlimeNRF" section.

#### Changing board defines
Board defines can be found in ```\boards\``` for overlays (Boards within the Zephyr library) and custom boards are found in ```boards\MANUFACTURER\BOARD_NAME.dts```.
1. Navigate to the board's .dts file.
1. I2C (SCL/SDA) can be changed to other pins. Make sure you are using "High Frequency" pins and that you change the pins for both lines.
1. SW0 can be enabled by uncommenting (removing the ```// ```) from lines below the description commment. You can select the lines and press **Ctrl /** if you are using VS Code. Re-define the gpio pin if necessary.
1. INT (int0-gpios) can be re-defined under the Zephyr user section.
1. CLK (clk-gpios) can be uncommented and re-defined if you are using an IMU with an external clock/crystal oscillator such as the ICM-42688 or ICM-45686.

#### Adjusting settings in the Kconfig
1. Go to the nRF Connect tab of VS Code.
1. Build the desired board once.
1. A section called **Actions** should appear on the left navigation board.
1. Select your built board under **Applications**, then scroll down to the **Actions**.
1. Double click **nRF Kconfig GUI**.
1. Scroll down to the **SlimeNRF** section.
1. Enable/Disable or adjust any configs needed.
1. Click the "Apply" button", then click the "Save to file" button.
1. If prompted which file to save to, select **prj.conf**.
1. Click on the "Pristine Build" button next to **Build** in the **Actions** section.

### Building firmware manually (Linux)
This is only recommended if you have problems with nRF Connect for Desktops Toolchain Manager or nRF Connect for VS, as you will have to manually setup the toolchain.

#### Setup python venv
Using a virtual environment (venv) will keep all build tools for zephyr (like `west`) contained. <br>
`python3 -m venv ~/.venv/nrf52` <br>
`source ~/.venv/nrf52/bin/activate` (run whenever you use or modify your setup) <br>
`pip3 install west`

#### Setup nRF Connect SDK code
Pick a suitable folder to install the toolchain into, like `~/.toolchain-nrf52`. <br>
Then execute: <br>
`west init -m https://github.com/nrfconnect/sdk-nrf --mr v2.9.0 nrf52-sdk-2.9.0` <br>
`cd nrf52-sdk-2.9.0` <br>
`west update` (this will download dozens of git repositories, it may take a bit) <br>
`pip install -r zephyr/scripts/requirements-base.txt` (Install remaining requirements for building) <br>
`west zephyr-export` (this will register the required cmake files in your home directory) <br>
If you end up moving this folder you just need to re-run the last command.

#### Setup Zephyr SDK
The nRF Connect SDK relies on the Zephyr SDK, so go back to your toolchain folder (e.g. `~/.toolchain-nrf52`) to install it: <br>
`wget -q https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.17.0/zephyr-sdk-0.17.0_linux-x86_64_minimal.tar.xz` <br>
`tar xf zephyr-sdk-0.17.0_linux-x86_64_minimal.tar.xz -C .` <br>
`cd zephyr-sdk-0.17.0` <br>
`./setup.sh -c -t arm-zephyr-eabi` (this will register the required cmake files in your home directory) <br>
If you end up moving this folder you just need to re-run the last command.

#### Compiling manually
Assuming your toolchain is installed in `~/.toolchain-nrf52` and your are in the firmware directory:
``` sh
source ~/.venv/nrf52/bin/activate
source ~/.toolchain-nrf52/nrf52-sdk-2.9.0/zephyr/zephyr-env.sh
west build --board BOARD --build-dir build . -- -DNCS_TOOLCHAIN_VERSION=NONE -DBOARD_ROOT=.
```
Replace BOARD with your board (e.g. `supermini_uf2/nrf52840` for the SuperMini, `nrf52840dongle/nrf52840` for a dongle receiver). <br>
The compiled firmware will be `PROJECT_DIR/build/PROJECT_DIR/zephyr/zephyr[.hex|.uf2]`.

#### Compiling with VS Code (without extensions)
Assuming your toolchain is installed in `~/.toolchain-nrf52`, use the following tasks (placed in `.vscode/tasks.json'):
``` JSON
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Build",
            "type": "shell",
            "group": "build",
            "command": "source",
            "args": [
                "~/.venv/nrf52/bin/activate", "&&",
                "source", "~/.toolchain-nrf52/nrf52-sdk-2.9.0/zephyr/zephyr-env.sh", "&&",
                "west", "build", "--board", "BOARD", "--build-dir", "build",
                "${workspaceFolder}", "--",
                "-DNCS_TOOLCHAIN_VERSION=NONE", "-DBOARD_ROOT=${workspaceFolder}"
            ]
        },
    ]
}
```
Replace BOARD with your board (e.g. `supermini_uf2/nrf52840` for the SuperMini, `nrf52840dongle/nrf52840` for a dongle receiver). <br>
The compiled firmware will be `PROJECT_DIR/build/PROJECT_DIR/zephyr/zephyr[.hex|.uf2]`.


### Pre-Compiled firmware for default pins

#### Latest builds (Automated)
| Type         | Device                     | Clock (ICM) | Sleep (WOM) | SW0 Disabled                                                                                                                             | SW0 Enabled                                                                                                                                  |
| ------------ | -------------------------- | ----------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 📡 Receiver | Nordic/eByte               | N/A         | N/A         | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Receiver_Nordic_eByte_Dongle.hex)     | N/A                                                                                                                                          |
| 📡 Receiver | SuperMini                  | N/A         | N/A         | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Receiver_SuperMini.uf2)               | N/A                                                                                                                                          |
| 📡 Receiver | XIAO                       | N/A         | N/A         | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Receiver_XIAO.uf2)                    | N/A                                                                                                                                          |
| 🏃 Tracker  | SuperMini                  | Disabled    | Enabled     | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SuperMini.uf2)                | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_SuperMini.uf2)                |
| 🏃 Tracker  | SuperMini                  | Disabled    | Disabled    | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_SuperMini.uf2)        | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleep_SuperMini.uf2)        |
| 🏃 Tracker  | SuperMini                  | Enabled     | Enabled     | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_CLK_SuperMini.uf2)            | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_CLK_SuperMini.uf2)            |
| 🏃 Tracker  | SuperMini                  | Enabled     | Disabled    | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleepCLK_SuperMini.uf2)     | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleepCLK_SuperMini.uf2)     |
| 🏃 Tracker  | SuperMini (Stacked 🥪)    | Enabled     | Enabled     | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SuperMiniStacked.uf2)         | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_SuperMiniStacked.uf2)         |
| 🏃 Tracker  | SuperMini (Stacked 🥪)    | Enabled     | Disabled    | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_SuperMiniStacked.uf2) | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleep_SuperMiniStacked.uf2) |
| 🏃 Tracker  | XIAO                       | Disabled    | Enabled     | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_XIAO.uf2)                     | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_XIAO.uf2)                     |
| 🏃 Tracker  | XIAO                       | Disabled    | Disabled    | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_XIAO.uf2)             | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleep_XIAO.uf2)             |
| 🏃 Tracker  | XIAO                       | Enabled     | Enabled     | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_CLK_XIAO.uf2)                 | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_CLK_XIAO.uf2)                 |
| 🏃 Tracker  | XIAO                       | Enabled     | Disabled    | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleepCLK_XIAO.uf2)          | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleepCLK_XIAO.uf2)          |
| 🏃 Tracker  | R3                         | Enabled     | Enabled     | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_R3.uf2)                       | N/A                                                                                                                                          |
| 🏃 Tracker  | R3                         | Enabled     | Disabled    | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_R3.uf2)               | N/A                                                                                                                                          |
| 🏃 Tracker  | SlimeVR Mini (Prototype 1) | Enabled     | Enabled     | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SlimevrMini.uf2)              | N/A                                                                                                                                          |
| 🏃 Tracker  | SlimeVR Mini (Prototype 1) | Enabled     | Disabled    | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_SlimevrMini.uf2)      | N/A                                                                                                                                          |
| 🏃 Tracker  | SlimeVR Mini (Prototype 2) | Enabled     | Enabled     | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SlimevrMini2.uf2)             | N/A                                                                                                                                          |
| 🏃 Tracker  | SlimeVR Mini (Prototype 2) | Enabled     | Disabled    | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_SlimevrMini2.uf2)     | N/A                                                                                                                                          |

<details>
  <summary>Previous builds</summary>

Previous builds can be found here: <a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/actions" target="_blank">https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/actions</a>

1. Click on a successful workflow run ✅ for a date period.
2. Scroll down to the **Artifacts** section.
3. Download desired device firmware.
4. Extract zip file.

</details>

### Flashing boards with Adafruits UF2 Bootloader (SuperMini / XIAO)

#### Flashing the Bootloader
1. You can download them here. <a href="https://github.com/adafruit/Adafruit_nRF52_Bootloader/releases" target="_blank">https://github.com/adafruit/Adafruit_nRF52_Bootloader/releases</a>
1. For SuperMini, download ```update-nice_nano_bootloader-x.x.x_nosd.uf2```. For XIAO, download ```update-xiao_nrf52840_ble_sense_bootloader-x.x.x_nosd.uf2```. (The proper non-Sense version doesn't update the bootloader.)
1. Plug the device into your computer via data USB cable.
1. The device should start off in DFU mode when new without a bootloader. The LED should be fading on and off.
1. If device's LED is not fading on and off, press the reset button twice (or short RST/GND pins) twice within 0.5s. If device with existing SlimeNRF firmware, reset 4 times.
1. Navigate to your Downloads folder and copy the uf2 file.
1. Navigate to the Mass Storage Drive (ex. NICENANO/XIAO-SENSE) from ThisPC.
1. Paste the file into there, and the window should close and the device will reboot.

```admonish important
Update the bootloader to your SuperMini and XIAO boards before flashing firmware; there is a very high chance that you will brick your device otherwise. eByte and Nordic dongles don't fall in this category.
```

#### Flashing the firmware using UF2
1. Plug the device into your computer via data USB cable.
1. The device should start off in DFU mode when new without a bootloader. The LED should be fading on and off.
1. If device's LED is not fading on and off, press the reset button twice (or short RST/GND pins) twice within 0.5s. If device with existing SlimeNRF firmware, reset 4 times.
1. Navigate to your local Receiver or Tracker repository, then go to ```build\REPOSITORY_NAME\zephyr\```.
1. Copy zephyr.uf2 file.
1. Navigate to the Mass Storage Drive (ex. NICENANO/XIAO-SENSE) from ThisPC.
1. Paste the file into there and the window should close and device will reboot.

#### Flashing the firmware using adafruit-nrfutil
This uses the bootloaders serial protocol to flash it using command line tools. <br>
See <a href="https://github.com/adafruit/Adafruit_nRF52_nrfutil" target="_blank">Adafruit nRF52 nrfutil Github Repo</a> for install and usage instructions. <br>
Recommended: Use a python venv to install the adafruit-nrfutil python tool.

### Flashing dongles with nordic bootloader (eByte/Nordic)

This bootloader will appear as "Open DFU Bootloader" by Nordic Semiconductor. Currently, the only confirmed method to flash firmware onto these devices uses <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop" target="_blank">nRF Connect for Desktop</a>, though it should also be possible with <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Util" target="_blank">nRF Util</a> (but it is more complicated and practically equivalent). <br>
NOTE: Installing Segger J-Link is not required for this bootloader. <br>
NOTE: On linux, nRF Connect for Desktop installs nodejs tools into `~/.nrfconnect-apps/`, nRF Util installs binary tools into `~/.nrfutil/`.

#### Flashing using nRF Connect for Desktop
1. Open "Programmer" in nRF Connect.
1. Press the reset button, and the LED should start fading on and off, putting the device in DFU Mode. For eByte, it is the right button. For Nordic, it is a side button (not the round white button).
1. On the top left corner, select your Device.
1. Click on "Add File".
1. Navigate to your local Receiver repository, then select file in ```build\REPOSITORY_NAME\zephyr\zephyr.hex```.
1. Click the "Write button".

#### Flashing using nRF Util
Not documented yet. Relevant documentation:
- <a href="https://docs.nordicsemi.com/bundle/nrfutil/page/nrfutil-device/guides/programming.html" target="_blank">device command documentation</a>
- <a href="https://docs.nordicsemi.com/bundle/nrfutil/page/guides-nrf5sdk/dfu_generating_packages.html" target="_blank">nrf5sdk pkg building guide</a>

## Firmware Setup

### Accessing the serial console

You can interact with the firmware by connecting to the serial console it exposes (used for pairing and calibration). <br>
The following examples will use nRF Connect for Desktop, though you may use a wide variety of alternative tools. <br>
For example, using the standard linux `screen` utility, you can access the serial console like this: <br>
`sudo screen /dev/ttyACMX 115200` <br>
You can check which serial port to use by checking `sudo dmesg` after plugging in your nRF device. <br>
For windows, there exist similar tools like <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank">PuTTY</a> that you can use to <a href="https://documentation.help/PuTTY/using-serial.html" target="_blank">access a serial console</a>.

### Pairing Mode

#### Tracker

##### Method 1: Console
1. Open nRF Connect for Desktop.
1. Open Serial Terminal from nRF Connect.
1. Ensure your tracker is connected to your computer via cable.
1. On the top left corner, select your tracker under Devices.
1. Click the "Connect to Port" button.
1. Type ```pair``` into the console.

##### Method 2: Button
1. Press the Reset (or short RST/GND pins) or Function button (if you have SW0 defined) 3 times.

Device's LED should blink once every sec.

#### Receiver

1. Open nRF Connect for Desktop.
1. Open Serial Terminal from nRF Connect.
1. Ensure your tracker is connected to your computer via cable.
1. On the top left corner, select your dongle under Devices.
1. Click the "Connect to Port" button.
1. Type ```pair``` into the console.

Device's LED should blink once every sec.

Once trackers are paired, the LED should stop blinking once per sec. To exit pairing mode on Receiver, type ```reboot``` in the console or press the left button once on eByte Dongle or the white button once on Nordic Dongle.

### Calibration

#### Basic

##### Method 1: Console
1. Open nRF Connect for Desktop.
1. Open Serial Terminal from nRF Connect.
1. Ensure your tracker is connected to your computer via cable.
1. On the top left corner, select your tracker under Devices.
1. Click the "Connect to Port" button.
1. Type ```calibrate``` into the console while tracker is on a flat surface.
1. Wait for the logs to reboot and print out again.

##### Method 2: Button
1. Press your Reset or SW0 (Functional) button twice and leave the tracker still on a flat surface for a few seconds.

#### 6-Side
1. Make sure the power switch is on. (So the tracker can run on battery when unplugged.)
1. Open nRF Connect for Desktop.
1. Open Serial Terminal from nRF Connect.
1. Ensure your tracker is connected to your computer via cable.
1. On the top left corner, select your tracker under Devices.
1. Click the "Connect to Port" button.
1. Enter ```6-side``` command in console. (At the moment, there is no button press combination to start this calibration.)
1. Follow the console log on rotating sides on a flat surface. Leave the cable side for last.
1. When prompted for the last side, unplug your USB cable and place the side with the USB port onto the flat surface.
1. Wait a bit until calibration is complete.

### Updating firmware
1. If your Receiver needs firmware updated, do this first.
1. Open nRF Connect's Serial Terminal.
1. Select your Receiver from the Device list.
1. Click the "Connect to Port" button.
1. Enter ```clear``` to unpair all of your trackers from the Receiver. The Receiver will automatically enter pairing mode.
1. Connect a tracker to your computer via USB cable and make sure the power switch is on. (So the tracker can run on battery when unplugged for 6-Side calibration.)
1. Select your tracker from the Device List.
1. Click the "Connect to Port" button.
1. Enter ```dfu``` to go into DFU Mode.
1. Copy the UF2 file onto your tracker.
1. Enter ```6-side``` to start 6-Side calibration.
1. After 6-Side calibration, enter ```calibrate``` to calibrate the ZRO.
1. Enter ```pair``` to enter pairing mode.
1. Wait for the tracker to pair to the Receiver, and then disconnect.
1. Repeat process for all trackers.
1. Select your Receiver from the Device list.
1. Click the "Connect to Port" button.
1. Enter ```reboot``` to exit pairing mode.

### Console Commands

#### Receiver
* ```info``` - Get device information
* ```list``` - Get paired devices
* ```reboot``` - Soft reset the device
* ```pair``` - Enter pairing mode
* ```clear``` - Clear stored devices
* ```dfu``` - Enter DFU bootloader (only available if your device has one)
* ```uptime``` - Get device uptime
* ```meow``` - Meow!

#### Tracker
* ```info``` - Get device information
* ```reboot``` - Soft reset the device
* ```calibrate``` - Calibrate sensor ZRO
* ```6-side``` - Calibrate 6-side accelerometer
* ```pair``` - Enter pairing mode
* ```dfu``` - Enter DFU bootloader (only available if your device has one)
* ```uptime``` - Get device uptime
* ```meow``` - Meow!

### Button
* Reset - 1 Press
* Calibration - 2 Presses
* Pairing Mode - 3 Presses
* DFU Bootloader - 4 Presses
* Deep Sleep - Press and Hold

### LED Codes
* 1 short blink per second - Pairing mode.
* 1 long blink per second - Low battery.
* 2, 3, 4 long blinks every 5 seconds - Error.
    * 2 blinks - Sensor error.
    * 3 blinks - Connection error.
    * 4 blinks - Hardware error.
* Fade on and off - DFU mode.
* Very short blink - Normal operation or wake on motion.
* While plugged in: Pulsing - Charging.
* While plugged in: Solid - Fully charged.

## Protocols
```admonish important
This section provides advanced information about the communication protocol and is not required for building your own smol slimes.
```

<details>
  <summary>HID Protocol</summary>

```admonish warning
The HID Protocol is not final and is subject to change with upcoming versions of the SlimeVR Server.
```

### Tracker -> Server
```b0      |b1      |b2      |b3      |b4      |b5      |b6      |b7      |b8      |b9      |b10     |b11     |b12     |b13     |b14     |b15     |
type    |id      |packet data                                                                                                                  |
0       |id      |proto   |batt    |batt_v  |temp    |brd_id  |mcu_id  |imu_id  |mag_id  |fw_date          |major   |minor   |patch   |rssi    | info
1       |id      |q0               |q1               |q2               |q3               |a0               |a1               |a2               | full precision quat
2       |id      |batt    |batt_v  |temp    |q_buf                              |a0               |a1               |a2               |rssi    | reduced precision quat
3       |id      |svr_stat|status  |resv                                                                                              |rssi    | status
```

### Tracker <-> Receiver
```b0      |b1      |b2      |b3      |b4      |b5      |b6      |b7      |b8      |b9      |b10     |b11     |b12     |b13     |b14     |b15     |
type    |id      |packet data                                                                                                                  |
64      |id      |addr                                                 |resv                                                                   | pairing data from tracker
65      |id      |addr                                                 |addr_rcv                                             |channel |resv    | pairing data to tracker
66      |id      |addr                                                 |time                                                                   | timing data to tracker (why addr?)
67      |id      |addr                                                 |cmd_data                                                               | some command to tracker? (need to be part of timing?)
```

### Tracker <-> Server
```b0      |b1      |b2      |b3      |b4      |b5      |b6      |b7      |b8      |b9      |b10     |b11     |b12     |b13     |b14     |b15     |
type    |id      |packet data                                                                                                                  |
128     |id      |addr                                                 |cmd_data                                                               | some command to tracker? (field too large?)
128     |id      |addr                                                 |ack                                                                    | acknowledge?
```

### Receiver <-> Server
```b0      |b1      |b2      |b3      |b4      |b5      |b6      |b7      |b8      |b9      |b10     |b11     |b12     |b13     |b14     |b15     |
type    |id      |packet data                                                                                                                  |
192     |id      |resv                                                                                                                         | 192+ should be some interaction b/w receiver and server
254     |resv                                                                                                                                  | filler, this packet is ignored by the server
255     |id      |addr                                                 |resv                                                                   | tracker id association
```

</details>

## Troubleshooting
```admonish important
Please open a Github Issue for firmware bugs/issues in the corresponding repositories.
```

### Check Console Logs
1. Open nRF Connect for Desktop.
1. Open Serial Terminal from nRF Connect.
1. Ensure your tracker is connected to your computer via cable.
1. On the top left corner, select your tracker under Devices.
1. Click the "Connect to Port" button.

#### Improving Logging
- In order to change the level of logs you see (e.g. LOG_DBG instead of just LOG_INF), you may need to edit the `LOG_MODULE_REGISTER` macro at the top of the relevant module/file you are interested in and recompile the firmware. <br>
- If you need to see the logs before you connected to the serial console, you may need to explicitly start the logging backend by adding the following somewhere in the main function in main.c:
    ``` C
    const struct log_backend *backend = log_backend_get_by_name("log_backend_uart");
    log_backend_enable(backend, backend->cb->ctx, CONFIG_LOG_MAX_LEVEL);
    ```
    Additionally, add the following include to the top of the main.c file: <br>
    ```C
    #include <zephyr/logging/log_ctrl.h>
    ```
- If you see the logs are cut off at some point, the buffer size may be too small. This has not been fully resolved yet, merely increasing `CONFIG_LOG_BUFFER_SIZE` in `prj.conf` does not seem to work.

#### SWD Debugging
* Instructions for the Raspberry Pi, Raspberry Pi Pico, ST-Link V2, and other debuggers will be added in the future.
**Resource:** <a href="https://github.com/joric/nrfmicro/wiki/Bootloader" target="_blank">https://github.com/joric/nrfmicro/wiki/Bootloader</a>

##### J-Link, nRF52/nRF52840 Development Kit, and OB-ARM Debugger
1. Install J-Link Software and Documentation Pack: <a href="https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack" target="_blank">https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack</a>
1. Download Bootloader HEX File for your device (SuperMini - ```nice_nano_bootloader-x.x.x_sxxx_x.x.x.hex```, XIAO - ```xiao_nrf52840_ble_sense_bootloader-x.x.x_sxxx_x.x.x.hex```): <a href="https://github.com/adafruit/Adafruit_nRF52_Bootloader/releases" target="_blank">https://github.com/adafruit/Adafruit_nRF52_Bootloader/releases</a>
1. Connect Debugger to SWD IO, CLK, and GND Pins. (It is safer to power up your device by plugging into USB instead of using the VDD pin)

###### Flashing/Fixing bricked bootloader
1. Open "J-Flash Lite."
    * **Target Device:** NRF52840_XXAA
    * **Target Interface:** SWD
    * **Speed:** 4000
1. Click the "OK" button.
1. Click on the "..." button and select downloaded HEX file.
1. Click the "Program Device" button.

###### RTT/Debugging
1. Open "RTT Viewer."
    * **Connection to J-Link:** USB
    * **Specify Target Device:** NRF52840_XXAA
    * **Force go on connect:** Checked
    * **Target Interface & Speed:** SWD / 4000 hKz
    * **RTT Control Block:** Auto Detect
1. Click the "OK" button.

##### Recommended Hardware/Tools
**OB-ARM Debugger:** <a href="https://www.aliexpress.us/item/3256806507382540.html" target="_blank">https://www.aliexpress.us/item/3256806507382540.html</a>

**Pogo Pin Test Clip (1.5mm Pitch, 4P, Single Row):** <a href="https://www.aliexpress.us/item/3256805646654844.html" target="_blank">https://www.aliexpress.us/item/3256805646654844.html</a>

**Note:** The clip is for SuperMini only. There are cheaper clips out there, but they don't break out the pins from 1.5mm pitch to 2.54mm pitch for dupont wires.

## Links

### Discord

**SlimeVR Discord:** <a href="https://discord.gg/SlimeVR" target="_blank">https://discord.gg/SlimeVR</a>

### Firmware Source Code
| Name                         | Links                                                             |
| ---------------------------- | ----------------------------------------------------------------- |
| SlimeVR Tracker nRF Receiver | [Github](https://github.com/SlimeVR/SlimeVR-Tracker-nRF-Receiver) |
| SlimeVR Tracker nRF          | [Github](https://github.com/SlimeVR/SlimeVR-Tracker-nRF)          |

## Community projects

### Firmware

| Name              | Author     | Description                                                                | Links                                                      |
| ----------------- | ---------- | -------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Stacked-SmolSlime | LyallUlric | Fork of main branch with firmware tailored for stacked SuperMini trackers. | [Github](https://github.com/LyallUlric/Stacked-SmolSlime/) |


### Hardware

#### Aed-Slimes
| USB | PCB | Battery                                   | Links                                         |
| --- | --- | ----------------------------------------- | --------------------------------------------- |
| Yes | Yes | Rechargeable Coin Battery LIR2450(120mAh) | [Github](https://github.com/Aed-1/Aed-Slimes) |

[
<img src="https://raw.githubusercontent.com/Aed-1/Aed-Slimes/refs/heads/main/img/Aed-Slime.png"
    class="caseImage"
    alt="Aed-Slimes Case"/>
](https://github.com/Aed-1/Aed-Slimes)

<hr/>

#### Gremlin

| USB | PCB        | Battery        | Links                                                   |
| --- | ---------- | -------------- | ------------------------------------------------------- |
| Yes | Not needed | 401230(110mAh) | [Github](https://github.com/ManicQuinn/SlimeVR-Gremlin) |

[
<img src="https://raw.githubusercontent.com/ManicQuinn/SlimeVR-Gremlin/refs/heads/main/photos/GremlinTrackers.png"
    class="caseImage"
    alt="Gremlin case"/>
](https://github.com/ManicQuinn/SlimeVR-Gremlin)

<hr/>

#### Marzipan
| USB | PCB | Battery                         | Links                                          |
| --- | --- | ------------------------------- | ---------------------------------------------- |
| Yes | Yes | 401230(110mAh) / 501230(170mAh) | [Github](https://github.com/colasama/Marzipan) |

[
<img src="https://raw.githubusercontent.com/colasama/Marzipan/refs/heads/main/assets/sample.jpg"
    class="caseImage"
    alt="Marzipan case"/>
](https://github.com/colasama/Marzipan)


<hr/>

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
