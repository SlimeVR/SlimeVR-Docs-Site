<link rel="stylesheet" href="smol-slimes.css">

# Smol Hardware

- TOC
  {:toc}

## 📡 Receiver Hardware

To ensure optimal signal integrity and range, it is essential to use boards equipped with high-quality antennas. Boards featuring a PCB antenna or external antenna are generally the most effective option for use as receivers.

### 📶 Receiver Options (Ranked by Signal Strength)

<a href="#NordicDongle">Nordic Semiconductor nRF52840 Dongle</a>, <a href="#XIAOAsDongle">Seeed Studio XIAO nRF52840</a> are not included due to lack of data.

1. <a href="#HolyIOT">HolyIOT-21017</a>: Highest performance for highest price. Reported to have significantly higher signal strength than other options due to included amplifier.
2. <a href="#third-option-wifi-antenna-mod">SuperMini nRF52840 with Wi-Fi Antenna Mod</a>: Recommended go-to option. Offers the best price-to-performance ratio.
3. <a href="#second-option-wire-mod">SuperMini nRF52840 with Wire Antenna Mod</a>
4. <a href="#eByteDongle">eByte Dongle (E104-BT5040U)</a>: Signal starts to degrade at distances over 3 meters, especially when obstructed by body parts.
5. <a href="#first-option-unmodified-board">SuperMini nRF52840 (Unmodified)</a>

### 📡 USB Dongles

These dongles are equipped with relatively well-optimized PCB antennas. For improved signal integrity, especially in constrained environments, consider using a USB extension cable.

<table>
  <thead>
    <tr>
      <th>Dongle</th>
      <th>Description</th>
      <th>Links</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span id="eByteDongle">
          eByte Dongle (E104-BT5040U)
        </span>
      </td>
      <td>
        Cheapest option with a PCB antenna.<br />
        - <strong>E104-BT5040U</strong> is the correct model to use. It is fully
        compatible with the Nordic Semiconductor nRF52840 Dongle.<br />
        - <strong>E104-BT5040UA</strong> is not compatible. It is only capable
        of capturing BLE4.2 and BLE5.0 protocol packets.
      </td>
      <td>
        <ul>
          <li>
            <a href="https://www.nordicsemi.com/Products/Development-hardware/nRF52840-Dongle">Manufacturer page</a>
          </li>
          <li>
            <a href="https://www.alibaba.com/product-detail/Ebyte-ODM-E104-BT5040U-nRF52840-BLE4_1600579144016.html?spm=a2756.trade-list-buyer.0.0.535476e9B4p1qV">Alibaba</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <span id="NordicDongle">
          Nordic Semiconductor nRF52840 Dongle (PCA10059)
        </span>
      </td>
      <td>Official Nordic development hardware.</td>
      <td>
        <ul>
          <li>
            <a href="https://www.cdebyte.com/products/E104-BT5040U">Manufacturer page</a>
          </li>
          <li>
            <a href="https://www.digikey.com/en/products/detail/nordic-semiconductor-asa/NRF52840-DONGLE/9491124">Digikey</a>
          </li>
          <li>
            <a href="https://eu.mouser.com/ProductDetail/Nordic-Semiconductor/nRF52840-Dongle?qs=gTYE2QTfZfTbdrOaMHWEZg%3D%3D">Mouser</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <span id="HolyIOT">
          HolyIOT-21017 aka HOLYIOT-21017-nRF52840
        </span>
      </td>
      <td>
        Has a FEM (Front End Module), specifically an <strong>RFX2401C</strong> radio booster.
      </td>
      <td>
        <ul>
          <li>
            <a href="http://www.holyiot.com/eacp_view.asp?id=336">Manufacturer page</a>
          </li>
          <li>
            <a href="https://www.aliexpress.com/item/1005004673179004.html">AliExpress</a>
          </li>
          <li>
            <a href="https://holyiot.en.alibaba.com/search/product?SearchText=HOLYIOT-21017-nRF52840">Alibaba</a>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### 📡 Microcontrollers Modified Into USB Dongles

#### Option 1: Unmodified Board

Consist of <a href="#SuperMini">SuperMini nRF52840</a> or <a href="#XIAO">Seeed Studio XIAO nRF52840</a>. 

⚠️ Not recommended due to the simplicity of upgrading to a modified version.

#### Option 2: Wire Antenna Mod

Consist of a <a href="#SuperMini">SuperMini nRF52840</a> or <a href="#XIAO">Seeed Studio XIAO nRF52840</a> attached with a 31.2 mm wire to the antenna pin to form a basic monopole antenna.

Refer to <a href="./smol-schematics.md">Smol Schematics -> Antenna extra option</a> for the solder point location.

##### Wire Options

- Solid core or stranded copper wire (e.g., 23-26 AWG).
- Wire salvaged from an Ethernet cable.

#### Option 3: Wi-Fi Antenna Mod

Consist of a <a href="#SuperMini">SuperMini nRF52840</a> or <a href="#XIAO">Seeed Studio XIAO nRF52840</a> attached with a Wi-Fi antenna.

Refer to <a href="./smol-schematics.md">Smol Schematics -> Antenna extra option</a> for the area to remove and solder the IPEX or SMA connector.

##### Components Options

<table>
  <thead>
    <tr>
      <th>Image</th>
      <th>Listing</th>
      <th>Notes</th>
      <th>Variant</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          src="assets\smol-hardware\wifi_antenna.webp"
          loading="lazy"
        />
      </td>
      <td>
        2PCS Mini Rubber 3dBi 2.4ghz WIFI Antenna SMA Male Router Bluetooth Antennas Wireless Module 2.4g Antena External Aerial
      </td>
      <td>
         Best tested performance (based on Lyall’s tests)
      </td>
      <td>
        Color: B
      </td>
      <td>
        <ul>
          <li>
            <a href="https://www.aliexpress.com/item/1005006686310444.html">AliExpress</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <img
          src="assets\smol-hardware\wifi_antenna_adapter.webp"
          loading="lazy"
        />
      </td>
      <td>
        IPX to SMA RF Coax Adapter Assembly Pigtail Cable,SMA Connector Cable Female to UFL
      </td>
      <td>
         Any IPEX or SMA cable should do.
         <br/>
         Cut cable at marked location on the image.
      </td>
      <td>
        Shorter cables preferred.
      </td>
      <td>
        <ul>
          <li>
            <a href="https://www.aliexpress.com/item/32896039259.html">AliExpress</a>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>


## 🏃 Trackers

Before you start, decide on [how many trackers you may need](../../slimevr101.md#how-many-trackers-do-you-need).

Trackers are required to have a battery and an inertial measurement unit (IMU). A magnetometer is optional.\
Buttons and slide switches are recommended but not required. Buttons can be added to control the tracker, and a slide switch can be used to physically disconnect a tracker's battery.

### 📻 Microcontroller Boards

<table>
  <thead>
    <tr>
      <th>Board</th>
      <th>Description</th>
      <th>Obtaining</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span id="SuperMini">
          SuperMini nRF52840
        </span>
      </td>
      <td>
        A clone of the <strong>nice!nano</strong> board. Cheapest option overall.
        <br/> Signal strength can be improved with antenna mod.
      </td>
      <td>
        Available on AliExpress with <code>compatible with nice!nano</code> or <code>Pro Micro</code> branding.
        <ul>
          <li>
            <a href="https://pl.aliexpress.com/item/1005007738886550.html">AliExpress TENSTAR 2pcs pack</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <span id="XIAO">
          Seeed Studio XIAO nRF52840
        </span>
      </td>
      <td>Compact board.</td>
      <td>
        <ul>
          <li>
            <a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html">Manufacturer listing</a>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### 🧭 Inertial Measurement Units

Some of the supported sensor modules are described on the [IMU Comparison page](../imu-comparison.md).

- BMI270
- ICM-42688-P
- ICM-42688-V
- ICM-45686
- ISM330BX
- ISM330DHCX
- ISM330DLC
- LSM6DS3
- LSM6DS3TR-C
- LSM6DSL
- LSM6DSM
- LSM6DSO
- LSM6DSR
- LSM6DSV
- LSM6DSV16B

### 🧲 Magnetometers

- AK09940
- <div class="tooltip-text-container">BMM150
   <span class="tooltip-text">Sensor driver has not been tested.</span>
  </div>
- <div class="tooltip-text-container">BMM350
   <span class="tooltip-text">Sensor driver has not been tested.</span>
  </div>
- IIS2MDC
- IST8306
- IST8308
- LIS2MDL
- <div class="tooltip-text-container">LIS3MDL
   <span class="tooltip-text">Sensor driver has not been tested.</span>
  </div>
- MMC5983MA
- QMC6309

### 🟩 Sensor Modules with IMU and Magnetometer

##### Meia IMU + Magnetometer Modules

Meia, a member of the SlimeVR Discord, produces and sells IMUs with an onboard magnetometer suitable for stacked builds.

<table>
  <thead>
    <tr>
      <th>IMU + Magnetometer</th>
      <th>Product Page</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="../imu-comparison.md#ICM-45686">ICM-45686</a> + QMC6309
      </td>
      <td>
        <a href="https://store.kouno.xyz/products/icm-45686-qmc6309-module">
          store.kouno.xyz
        </a>
      </td>
    </tr>
    <tr>
      <td>LSM6DSR + QMC6309</td>
      <td>
        <a href="https://store.kouno.xyz/products/lsm6dsr-qmc6309-module">
          store.kouno.xyz
        </a>
      </td>
    </tr>
  </tbody>
</table>

### 🖲️ Buttons

Push buttons and momentary switches are utilized to control the tracker. The functions of this button—Reset, Calibration, Pairing, Deep Sleep, and entering DFU Mode—depends on the number of press combinations. A tracker can be equipped with either a reset button, a user-specified (SW0) button, or both.

The reset button is designed to support all functionalities. If an user-specified button (SW0) is defined, it will be utilized instead.

If a button is unavailable, tweezers can be used to short the pins for the initial tracker setup.

### 🕹️ Switches

A slide switch can be used to physically disconnect a battery. Some boards have a high standby power draw and will require a switch.

If a switch is not utilized, a tracker can enter Deep Sleep mode by pressing and holding down the user-specified button (SW0).

### 🔋 Batteries

Safe battery charging rates (C) are correlated to their rated capacity (mAh). A 100mAh battery charging at 100mA is 1C, and a 200mAh battery charging at 100mA is 0.5C. Charging at lower rates near 0.5C is recommended to reduce battery stress and extend lifespan.

| Board                      | Default charge rate | Minimum battery capacity | Recommended battery capacity |
| -------------------------- | ------------------- | ------------------------ | ---------------------------- |
| Seeed Studio XIAO nRF52840 | 50mA                | 50mAh                    | 80-300mAh                    |
| SuperMini nRF52840         | 100mA               | 100mAh                   | 180-300mAh                   |

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
