<link rel="stylesheet" href="smol-slimes.css">

# Pre-Compiled Firmware for Default Pins

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
| Holyiot      | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Holyiot_Dongle_Receiver.hex)      |
| SuperMini    | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Receiver_SuperMini.uf2)           |
| XIAO         | [Link](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Receiver_XIAO.uf2)                |

#### 🏃 Tracker

<table class="table-sort table-arrows">
  <thead>
      <tr>
          <td>Device</td>
          <td>Protocol</td>
          <td>Stacked</td>
          <td>Clock (ICM)</td>
          <td style="white-space: nowrap;">Sleep
              <span class="tooltip-text-container">
                    (WOM)
                  <span class="tooltip-text">
                        Wake On Motion.
                  </span>
              </span>
          </td>
          <td class="disable-sort">SW0 Disabled (no button)</td>
          <td class="disable-sort">SW0 Enabled (button)</td>
      </tr>
  </thead>
  <tbody>
    <tr>
        <td>SuperMini</td>
        <td>SPI</td>
        <td>✖️</td>
        <td>✖️</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SPI_SuperMini.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_SPI_SuperMini.uf2">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>SPI</td>
        <td>✖️</td>
        <td>✖️</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_SPI_SuperMini.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleep_SPI_SuperMini.uf2">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>SPI</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_CLK_SPI_SuperMini.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_CLK_SPI_SuperMini.uf2">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>SPI</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleepCLK_SPI_SuperMini.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleepCLK_SPI_SuperMini.uf2">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✖️</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_I2C_SuperMini.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_I2C_SuperMini.uf2">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✖️</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_I2C_SuperMini.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleep_I2C_SuperMini.uf2">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_CLK_I2C_SuperMini.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_CLK_I2C_SuperMini.uf2">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleepCLK_I2C_SuperMini.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleepCLK_I2C_SuperMini.uf2">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>SPI</td>
        <td>🥪</td>
        <td>✅</td>
        <td>✅</td>
        <td>N/A</td>
        <td><a href="https://github.com/LyallUlric/Stacked-SmolSlime/releases" target="_blank">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>SPI</td>
        <td>🥪</td>
        <td>✅</td>
        <td>✖️</td>
        <td>N/A</td>
        <td><a href="https://github.com/LyallUlric/Stacked-SmolSlime/releases" target="_blank">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>I2C</td>
        <td>🥪</td>
        <td>✅</td>
        <td>✅</td>
        <td>N/A</td>
        <td><a href="https://github.com/LyallUlric/Stacked-SmolSlime/releases" target="_blank">Link</a></td>
    </tr>
    <tr>
        <td>SuperMini</td>
        <td>I2C</td>
        <td>🥪</td>
        <td>✅</td>
        <td>✖️</td>
        <td>N/A</td>
        <td><a href="https://github.com/LyallUlric/Stacked-SmolSlime/releases" target="_blank">Link</a></td>
    </tr>
    <tr>
        <td>XIAO</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✖️</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_XIAO.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_XIAO.uf2">Link</a></td>
    </tr>
    <tr>
        <td>XIAO</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✖️</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_XIAO.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleep_XIAO.uf2">Link</a></td>
    </tr>
    <tr>
        <td>XIAO</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_CLK_XIAO.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_CLK_XIAO.uf2">Link</a></td>
    </tr>
    <tr>
        <td>XIAO</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleepCLK_XIAO.uf2">Link</a></td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SW0_NoSleepCLK_XIAO.uf2">Link</a></td>
    </tr>
    <tr>
        <td>R3</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_R3.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>R3</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_R3.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>SlimeVR Mini (P1)</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SlimevrMini.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>SlimeVR Mini (P1)</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_SlimevrMini.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>SlimeVR Mini (P2)</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✅</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_SlimevrMini2.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>SlimeVR Mini (P2)</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_SlimevrMini2.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>SlimeVR Mini (P3, R6)</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_SlimevrMini3_R6.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>SlimeVR Mini (P3, R7)</td>
        <td>I2C</td>
        <td>✖️</td>
        <td>✅</td>
        <td>✖️</td>
        <td><a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/download/latest/SlimeNRF_Tracker_NoSleep_SlimevrMini3_R7.uf2">Link</a></td>
        <td>N/A</td>
    </tr>
  </tbody>
</table>

#### Previous Firmware Builds

Previous builds can be found here: <a href="https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/actions">https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/actions</a>

1. Click on a successful workflow run ✅ for the specified date range.
2. Scroll down to the **Artifacts** section.
3. Download the desired device firmware.
4. Extract the ZIP file.

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
