# Smol Firmware

* TOC
{:toc}


## Pre-Compiled Firmware for Default Pins

```admonish important
This is the recommended method of getting the firmware if you don't need custom config or pin defines.
```

### Required Tools

You only need the following if you are using precompiled firmware:
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop">nRF Connect for Desktop</a> (Programmer) for flashing Nordic or eByte Dongles only
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop">nRF Connect for Desktop</a> (Serial Terminal) for sending commands to your Receiver/Trackers, [see alternatives](#accessing-the-serial-console)
* <a href="https://slimevr.dev/download">SlimeVR Server</a>
    * 0.13.2 or later version

### Latest Builds (Automated)

#### 📡 Receiver

| Device       | Download                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Nordic/eByte | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Receiver_Nordic_eByte_Dongle.hex) |
| SuperMini    | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Receiver_SuperMini.uf2)           |
| XIAO         | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Receiver_XIAO.uf2)                |

#### 🏃 Tracker

<table class="table-sort table-arrows">
    <thead>
        <tr>
            <td>Device</td>
            <td>Stacked</td>
            <td>Clock (ICM)</td>
            <td>Sleep (WOM[^WOM])</td>
            <td class="disable-sort">SW0 Disabled (no button)</td>
            <td class="disable-sort">SW0 Enabled (button)</td>
        </tr>
    </thead>
    <tbody>
        <td>SuperMini</td>
        <td>✖️</td>
        <td>✖️</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SuperMini.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_SuperMini.uf2">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>✖️</td>
        <td>✖️</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_SuperMini.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleep_SuperMini.uf2">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_CLK_SuperMini.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_CLK_SuperMini.uf2">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleepCLK_SuperMini.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleepCLK_SuperMini.uf2">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>🥪</td>
        <td>✅</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SuperMiniStacked.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_SuperMiniStacked.uf2">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>🥪</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_SuperMiniStacked.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleep_SuperMiniStacked.uf2">Link</a></td>
    </tr>
    <tr>
        <td>XIAO</td>
        <td>✖️</td>
        <td>✖️</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_XIAO.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_XIAO.uf2">Link</a></td>
    </tr>
    <tr>
        <td>XIAO</td>
        <td>✖️</td>
        <td>✖️</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_XIAO.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleep_XIAO.uf2">Link</a></td>
    </tr>
    <tr>
        <td>XIAO</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_CLK_XIAO.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_CLK_XIAO.uf2">Link</a></td>
    </tr>
    <tr>
        <td>XIAO</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleepCLK_XIAO.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleepCLK_XIAO.uf2">Link</a></td>
    </tr>
    <tr>
        <td>R3</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_R3.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>R3</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_R3.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>SlimeVR Mini (Prototype 1)</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SlimevrMini.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>SlimeVR Mini (Prototype 1)</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_SlimevrMini.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>SlimeVR Mini (Prototype 2)</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SlimevrMini2.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>SlimeVR Mini (Prototype 2)</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_SlimevrMini2.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
    </tbody>
</table>

[^WOM]: WOM stands for Wake On Motion.

#### Previous Firmware Builds

Previous builds can be found here: <a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/actions">https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/actions</a>

1. Click on a successful workflow run ✅ for the specified date range.
2. Scroll down to the **Artifacts** section.
3. Download the desired device firmware.
4. Extract the ZIP file.

## Compiling Firmware

### Required Tools
For those interested in building the firmware yourself:
* <a href="https://git-scm.com/download/win">Git Client</a>
* <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop">nRF Connect for Desktop</a> with various integrated tools:
    * Programmer (for flashing Nordic and eByte Dongles only)
    * Serial Terminal (for sending commands to your Receiver/Trackers, [see alternatives](#accessing-the-serial-console))
    * Toolchain Manager (for automatic setup of the toolchain for building firmware)
        * 2.9.0 (Inside Toolchain Manager) Do not use a newer version!
    * NOTE: Installing the Segger J-Link is not necessary for pre-defined boards.
* <a href="https://code.visualstudio.com/download">VS Code</a> (For development purposes only)
    * <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-VS-Code">nRF Connect for VS Code</a> (Recommended)
        * Install within VS Code extension tab, see the <a href="https://youtu.be/EAJdOqsL9m8">video tutorial</a>
        * You may either install the <a href="https://marketplace.visualstudio.com/items?itemName=nordic-semiconductor.nrf-connect">extension itself</a> or the <a href="https://marketplace.visualstudio.com/items?itemName=nordic-semiconductor.nrf-connect-extension-pack">extension pack</a> for additional development tools
    * You may also set up a manual build environment in VS Code as the extension is known to fail on some certain Linux distributions.
* <a href="https://slimevr.dev/download">SlimeVR Server</a>
    * 0.13.2 or later version

### Cloning Repositories
1. Open the Command Prompt by typing ```cmd``` in the Start Menu.
1. Navigate to the directory where you want to clone the repositories.. (Type "cd" followed by a space and then the full path to the desired folder or drive.)
1. Cloning SlimeNRF Receiver Repository.
```bash
git clone --single-branch --recurse-submodules -b master https://github.com/SlimeVR/SlimeVR-Tracker-nRF-Receiver.git
```
4. Cloning the SlimeNRF Tracker Repository.
```bash
git clone --single-branch --recurse-submodules -b master https://github.com/SlimeVR/SlimeVR-Tracker-nRF.git
```

If you're using an existing case design, you can opt for prebuilt firmware; otherwise, build your own. See Smol Firmware for more details.

**Note:** It is recommended to clone to a file path that does not contain whitespace or Unicode characters. You may encounter errors when building the firmware.

### Building Firmware using nRF Connect for VS Code
```admonish important
***Bug Fix for Zephyr 2.9.0***

1. Open ```C:\ncs\v2.9.0\zephyr\drivers\retained_mem\retained_mem_nrf_ram_ctrl.c``` in your preferred code editor.
1. Add a comma at the end of Line 15.
1. Save the file.
<img src="../../assets/img/zephyr290_fix.png" alt="Zephyr 2.9.0 bug fix">
```

1. Launch VS Code using the nRF Connect's Toolchain Manager.
1. Open the folder for one of the repositories.
1. Make any pin changes or necessary adjustments to ```boards\MANUFACTURER\BOARD_NAME.dts```.
1. Click on the nRF Connect tab located on the left side of your screen, approximately halfway down.
1. Under "Applications" , click on "+ Add build configuration."
1. Select a preset from the "Board Target".
1. Scroll down and click the "Build Configuration" button.

**Note:** For trackers, settings can be found in the "nRF Kconfig GUI" under "Actions" and expand the "SlimeNRF" section.

#### Changing Board Defines
Board defines can be found in ```\boards\``` for overlays (Boards within the Zephyr library), while custom boards are located in ```boards\MANUFACTURER\BOARD_NAME.dts```.
1. Navigate to the board's .dts file.
1. The I2C (SCL/SDA) lines can be assigned to different pins. Ensure that you are using "High Frequency" pins and that you change the pins for both lines accordingly.
1. SW0 can be ✅ by uncommenting (removing the ```// ```) from the lines below the description comment. If you are using VS Code, you can select the lines and press **Ctrl /** if you are using VS Code. Additionally, redefine the GPIO pin if necessary.
1. The INT (int0-gpios) can be redefined in the Zephyr user section.
1. The CLK (clk-gpios) can be uncommented and redefined if you are using an IMU with an external clock or crystal oscillator, such as the ICM-42688 or ICM-45686.

#### Adjusting settings in the Kconfig
1. Navigate to the nRF Connect tab of VS Code.
1. Build the desired board once.
1. A section titled **Actions** should be displayed on the left navigation panel.
1. Select your built board under **Applications**, then scroll down to the **Actions** section.
1. Double-click **nRF Kconfig GUI**.
1. Scroll down to the **SlimeNRF** section.
1. Enable or disable any necessary configurations, or adjust them as needed.
1. Click the "Apply" button, then click the "Save to File" button.
1. If prompted to select a file to save, choose **prj.conf**.
1. Click the "Pristine Build" button located next to **Build** in the **Actions** section.

### Building Firmware Manually (Linux)
This is only recommended if you are experiencing issues with nRF Connect for Desktops Toolchain Manager or nRF Connect for VS Code, as you will need to manually set up the toolchain.

#### Setup Python Venv
Using a virtual environment (venv) will keep all build tools for Zephyr, such as `west`, contained. <br>
`python3 -m venv ~/.venv/nrf52` <br>
`source ~/.venv/nrf52/bin/activate` (Run the setup whenever you use or modify it.) <br>
`pip3 install west`

#### Setup nRF Connect SDK code
Please select an appropriate folder for installing the toolchain, such as `~/.toolchain-nrf52`. <br>
Then execute: <br>
`west init -m https://github.com/nrfconnect/sdk-nrf --mr v2.9.0 nrf52-sdk-2.9.0` <br>
`cd nrf52-sdk-2.9.0` <br>
`west update` (This will download dozens of Git repositories; it may take some time.) <br>
`pip install -r zephyr/scripts/requirements-base.txt` (Install the remaining requirements for building.) <br>
`west zephyr-export` (This will register the necessary CMake files in your home directory.) <br>
If you move this folder, you simply need to re-run the last command.

#### Setup Zephyr SDK
The nRF Connect SDK depends on the Zephyr SDK, so please return to your toolchain folder (e.g. `~/.toolchain-nrf52`) to install it: <br>
`wget -q https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.17.0/zephyr-sdk-0.17.0_linux-x86_64_minimal.tar.xz` <br>
`tar xf zephyr-sdk-0.17.0_linux-x86_64_minimal.tar.xz -C .` <br>
`cd zephyr-sdk-0.17.0` <br>
`./setup.sh -c -t arm-zephyr-eabi` (This will register the necessary CMake files in your home directory.) <br>
If you move this folder, you simply need to re-run the last command.

#### Compiling Manually
Assuming your toolchain is installed in `~/.toolchain-nrf52` and you are in the firmware directory:
``` sh
source ~/.venv/nrf52/bin/activate
source ~/.toolchain-nrf52/nrf52-sdk-2.9.0/zephyr/zephyr-env.sh
west build --board BOARD --build-dir build . -- -DNCS_TOOLCHAIN_VERSION=NONE -DBOARD_ROOT=.
```
Replace BOARD with your specific board (e.g. `supermini_uf2/nrf52840` for the SuperMini, `nrf52840dongle/nrf52840` for a dongle receiver). <br>
The compiled firmware will be located at `PROJECT_DIR/build/PROJECT_DIR/zephyr/zephyr[.hex|.uf2]`.

#### Compiling with VS Code (Without Extensions)
Assuming your toolchain is installed in `~/.toolchain-nrf52`, use the following tasks, which should be placed in `.vscode/tasks.json`:
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
Replace BOARD with your specific board (e.g. `supermini_uf2/nrf52840` for the SuperMini, `nrf52840dongle/nrf52840` for a dongle receiver). <br>
The compiled firmware will be located at `PROJECT_DIR/build/PROJECT_DIR/zephyr/zephyr[.hex|.uf2]`.

### Flashing Boards with Adafruits UF2 Bootloader (SuperMini / XIAO)

#### Flashing the Bootloader
1. You can download them here: <a href="https://github.com/adafruit/Adafruit_nRF52_Bootloader/releases">https://github.com/adafruit/Adafruit_nRF52_Bootloader/releases</a>
1. For the SuperMini, download ```update-nice_nano_bootloader-x.x.x_nosd.uf2```. For the XIAO, download ```update-xiao_nrf52840_ble_sense_bootloader-x.x.x_nosd.uf2```. (The appropriate non-Sense version does not update the bootloader.)
1. Connect the device to your computer using a USB data cable.
1. The device should initially start in DFU mode when new and without a bootloader. The LED should fade on and off.
1. If the device's LED is not fading on and off, press the reset button twice (or briefly short the RST and GND pins) twice within 0.5 seconds. If the device has existing SlimeNRF firmware, reset it four times.
1. Navigate to your Downloads folder and copy the UF2 file.
1. Navigate to the Mass Storage Drive (ex. NICENANO/XIAO-SENSE) from ThisPC.
1. Paste the file there, and the window should close, causing the device to reboot.

```admonish important
Update the bootloader on your SuperMini and XIAO boards before flashing the firmware; otherwise, there is a significant risk of bricking your device. eByte and Nordic dongles are not included in this category.
```

#### Flashing the Firmware using UF2
1. Connect the device to your computer using a USB data cable.
1. The device should initially start in DFU mode when new and without a bootloader. The LED should fade on and off.
1. If the device's LED is not fading on and off, press the reset button twice (or briefly short the RST and GND pins) twice within 0.5 seconds. If the device has existing SlimeNRF firmware, reset it four times.
1. Navigate to your local Receiver or Tracker repository, then go to ```build\REPOSITORY_NAME\zephyr\```.
1. Copy zephyr.uf2 file.
1. Navigate to the Mass Storage Drive (ex. NICENANO/XIAO-SENSE) from ThisPC.
1. Paste the file there, and the window should close, causing the device to reboot.

#### Flashing the Firmware using adafruit-nrfutil
This uses the bootloaders serial protocol to flash it using command line tools. <br>
See <a href="https://github.com/adafruit/Adafruit_nRF52_nrfutil">Adafruit nRF52 nrfutil Github Repo</a> for install and usage instructions. <br>
Recommended: Use a python venv to install the adafruit-nrfutil python tool.

### Flashing Dongles with SoftDevice/Nordic Bootloader (eByte/Nordic)

This bootloader will appear as "Open DFU Bootloader" by Nordic Semiconductor. Currently, the only confirmed method for flashing firmware onto these devices is through <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop">nRF Connect for Desktop</a>, though it should also be possible to use <a href="https://www.nordicsemi.com/Products/Development-tools/nRF-Util">nRF Util</a> (but it is more complex and practically equivalent). <br>
NOTE: Installing the Segger J-Link is not required for this bootloader. <br>
NOTE: On Linux, nRF Connect for Desktop installs nodeJS tools into `~/.nrfconnect-apps/`, nRF Util installs binary tools into `~/.nrfutil/`.

#### Flashing using nRF Connect for Desktop
1. Open "Programmer" in the nRF Connect.
1. Press the reset button, and the LED should begin to fade on and off, placing the device in DFU Mode. For eByte dongle, this is the right button. For Nordic dongle, it is the side button (not the round white button).
1. In the top left corner, select your Device.
1. Click on "Add File".
1. Navigate to your local Receiver repository, then select the file located at ```build\REPOSITORY_NAME\zephyr\zephyr.hex```.
1. Click the "Write button".

#### Flashing using nRF Util
Not documented yet. Relevant documentation:
- <a href="https://docs.nordicsemi.com/bundle/nrfutil/page/nrfutil-device/guides/programming.html">device command documentation</a>
- <a href="https://docs.nordicsemi.com/bundle/nrfutil/page/guides-nrf5sdk/dfu_generating_packages.html">nrf5sdk pkg building guide</a>

### Firmware Setup

#### Accessing the Serial Console

You can interact with the firmware by connecting to the serial console it provides, which is used for pairing and calibration. <br>
The following examples will utilize nRF Connect for Desktop; however, you may choose from a wide variety of alternative tools. <br>
For example, by using the standard Linux `screen` utility, you can access the serial console as follows: <br>
`sudo screen /dev/ttyACMX 115200` <br>
You can determine which serial port to use by running `sudo dmesg` after connecting your nRF device. <br>
For Windows, there are similar tools available, such as <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html">PuTTY</a> that you can use to <a href="https://documentation.help/PuTTY/using-serial.html">access a serial console</a>.

#### Pairing Mode

```admonish warning
**Disclaimer:** For trackers to appear on SlimeVR server for the first time it usually required to reboot receivers and trackers after pairing. 
Trackers appear in server list only after being moved.
```

#### Tracker

##### Method 1: Console
1. Launch nRF Connect for Desktop.
1. Open the Serial Terminal in nRF Connect.
1. Ensure that your tracker is connected to your computer using a cable.
1. In the top left corner, select your tracker from the Device menu.
1. Click the "Connect to Port" button.
1. Type ```pair``` into the console.

##### Method 2: Button
1. Press the Reset button (or short RST/GND pins) or the Function button (if SW0 is defined) three times.

The device's LED should blink once every second.

#### Receiver

1. Launch nRF Connect for Desktop.
1. Open the Serial Terminal in nRF Connect.
1. Ensure that your tracker is connected to your computer using a cable.
1. In the top left corner, select your dongle from the Device menu.
1. Click the "Connect to Port" button.
1. Type ```pair``` into the console.

The device's LED should blink once every second.

Once the trackers are paired, the LED indicator should stop blinking once per second. To exit pairing mode on the Receiver, type ```reboot``` in the console, or press the left button once on the eByte Dongle, or the round white button once on the Nordic Dongle.

### Calibration

#### Basic

##### Method 1: Console

1. Launch nRF Connect for Desktop.
1. Open the Serial Terminal in nRF Connect.
1. Ensure that your tracker is connected to your computer using a cable.
1. In the top left corner, select your tracker under Devices.
1. Click the "Connect to Port" button.
1. Type ```calibrate``` into the console while the tracker is placed on a flat surface.
1. Wait for the logs to reboot and print out again.

##### Method 2: Button
1. Press the Reset or SW0 (Functional) button twice, then place the tracker on a flat surface and allow it to remain still for a few seconds.

#### 6-Sided
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

#### Magnetometer
1. Please note that this calibration is passively active and does not require any command or button press combination to initiate.
1. Rotate your tracker 360 degrees on each of the six sides of the tracker while it is placed on a flat surface.

Note: The LED will blink when you place it flat on each side and will blink continuously when it is ready to save.

### Updating Firmware
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

### Status Codes

Status codes consist of one or more status values (added together) listed below:

* SYS_STATUS_SENSOR_ERROR - 1,
* SYS_STATUS_CONNECTION_ERROR - 2
* SYS_STATUS_SYSTEM_ERROR - 4
* SYS_STATUS_USB_CONNECTED - 8
* SYS_STATUS_PLUGGED - 16

## Protocols
```admonish important
This section offers advanced information about the communication protocol and is not necessary for building your own smol slimes.
```

<details>
  <summary>HID Protocol</summary>

```admonish warning
The HID Protocol is not finalized and is subject to change in future versions of the SlimeVR Server.
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
Please open a GitHub issue for any firmware bugs or issues in the corresponding repositories.
```

### Check Console Logs

1. Launch nRF Connect for Desktop.
1. Open the Serial Terminal in nRF Connect.
1. Ensure that your tracker is connected to your computer using a cable.
1. In the top left corner, select your tracker under Devices.
1. Click the "Connect to Port" button.

#### Improving Logging

- In order to change the log level you see (e.g., LOG_DBG instead of just LOG_INF), you may need to edit the `LOG_MODULE_REGISTER` macro at the top of the relevant module or file you are interested in and then recompile the firmware.<br>

- If you need to view the logs prior to connecting to the serial console, you may need to explicitly initiate the logging backend by adding the following code snippet in the main function of main.c:
    ``` C
    const struct log_backend *backend = log_backend_get_by_name("log_backend_uart");
    log_backend_enable(backend, backend->cb->ctx, CONFIG_LOG_MAX_LEVEL);
    ```
    Additionally, add the following include to the top of the main.c file: <br>
    ```C
    #include <zephyr/logging/log_ctrl.h>
    ```
- If you notice that the logs are truncated at a certain point, the buffer size may be insufficient. This issue has not been fully resolved yet, as simply increasing `CONFIG_LOG_BUFFER_SIZE` in `prj.conf` does not appear to be effective.

#### SWD Debugging
* Instructions for the Raspberry Pi, Raspberry Pi Pico, ST-Link V2, and other debuggers will be added in the future.
**Resource:** <a href="https://github.com/joric/nrfmicro/wiki/Bootloader">https://github.com/joric/nrfmicro/wiki/Bootloader</a>

##### J-Link, nRF52/nRF52840 Development Kit, and OB-ARM Debugger
1. Install J-Link Software and Documentation Pack: <a href="https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack">https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack</a>
1. Download Bootloader HEX File for your device (SuperMini - ```nice_nano_bootloader-x.x.x_sxxx_x.x.x.hex```, XIAO - ```xiao_nrf52840_ble_sense_bootloader-x.x.x_sxxx_x.x.x.hex```): <a href="https://github.com/adafruit/Adafruit_nRF52_Bootloader/releases">https://github.com/adafruit/Adafruit_nRF52_Bootloader/releases</a>
1. Connect Debugger to SWD IO, CLK, and GND Pins. (It is safer to power up your device by plugging into USB instead of using the VDD pin)

###### Flashing/Fixing bricked bootloader
1. Launch "J-Flash Lite."
    * **Target Device:** NRF52840_XXAA
    * **Target Interface:** SWD
    * **Speed:** 4000
1. Click the "OK" button.
1. Click on the "..." button and select the downloaded HEX file.
1. Click the "Program Device" button.

###### RTT/Debugging
1. Launch "RTT Viewer."
    * **Connection to J-Link:** USB
    * **Specify Target Device:** NRF52840_XXAA
    * **Force go on connect:** Checked
    * **Target Interface & Speed:** SWD / 4000 hKz
    * **RTT Control Block:** Auto Detect
1. Click the "OK" button.

##### Recommended Hardware/Tools
**OB-ARM Debugger:** <a href="https://www.aliexpress.us/item/3256806507382540.html">https://www.aliexpress.us/item/3256806507382540.html</a>

**Pogo Pin Test Clip (1.5mm Pitch, 4P, Single Row):** <a href="https://www.aliexpress.us/item/3256805646654844.html">https://www.aliexpress.us/item/3256805646654844.html</a>

**Note:** This clip is designed exclusively for SuperMini. While there are less expensive clips available, they do not convert the pins from a 1.5mm pitch to a 2.54mm pitch suitable for Dupont wires.

## Links

### Firmware Source Code
| Name                         | Links                                                             |
| ---------------------------- | ----------------------------------------------------------------- |
| SlimeVR Tracker nRF Receiver | [Github](https://github.com/SlimeVR/SlimeVR-Tracker-nRF-Receiver) |
| SlimeVR Tracker nRF          | [Github](https://github.com/SlimeVR/SlimeVR-Tracker-nRF)          |

### Community Firmware

| Name              | Author     | Description                                                                | Links                                                      |
| ----------------- | ---------- | -------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Stacked-SmolSlime | LyallUlric | Fork of main branch with firmware tailored for stacked SuperMini trackers. | [Github](https://github.com/LyallUlric/Stacked-SmolSlime/) |

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
