<link rel="stylesheet" href="assets/css/smol-slimes.css">

# Smol Receiver

# Table Of Contents

- TOC
  {:toc}

## 📶 Receiver Options (Ranked by Signal Strength)

To ensure optimal signal integrity and range, it is essential to use boards equipped with high-quality antennas. Boards featuring a PCB antenna or external antenna are generally the most effective option for use as receivers.

<a href="#NordicDongle">Nordic Semiconductor nRF52840 Dongle</a>, <a href="#XIAOAsDongle">Seeed Studio XIAO nRF52840</a> are not included due to lack of data.

1. <a href="#HolyIOT">HolyIOT-21017</a>: Highest performance for highest price. Reported to have significantly higher signal strength than other options due to included amplifier.
2. <a href="#third-option-wifi-antenna-mod">SuperMini nRF52840 with Wi-Fi Antenna Mod</a>: Recommended go-to option. Offers the best price-to-performance ratio.
3. <a href="#second-option-wire-mod">SuperMini nRF52840 with Wire Antenna Mod</a>
4. <a href="#eByteDongle">eByte Dongle (E104-BT5040U)</a>: Signal starts to degrade at distances over 3 meters, especially when obstructed by body parts.
5. <a href="#first-option-unmodified-board">SuperMini nRF52840 (Unmodified)</a>

## 📡 USB Dongles

These dongles are equipped with relatively well-optimized PCB antennas. For improved signal integrity, especially in constrained environments, consider using a USB extension cable.

<div class="table-wrapper">
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
          <span id="eByteDongle"> eByte Dongle (E104-BT5040U) </span>
        </td>
        <td>
          Cheapest option with a PCB antenna.<br />
          - <strong>E104-BT5040U</strong> is the correct model to use. It is
          fully compatible with the Nordic Semiconductor nRF52840 Dongle.<br />
          - <strong>E104-BT5040UA</strong> is not compatible. It is only capable
          of capturing BLE4.2 and BLE5.0 protocol packets.
        </td>
        <td>
          <ul>
            <li>
              <a
                href="https://www.nordicsemi.com/Products/Development-hardware/nRF52840-Dongle"
              >
                Manufacturer page
              </a>
            </li>
            <li>
              <a
                href="https://www.alibaba.com/product-detail/Ebyte-ODM-E104-BT5040U-nRF52840-BLE4_1600579144016.html?spm=a2756.trade-list-buyer.0.0.535476e9B4p1qV"
              >
                Alibaba
              </a>
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
              <a href="https://www.cdebyte.com/products/E104-BT5040U">
                Manufacturer page
              </a>
            </li>
            <li>
              <a
                href="https://www.digikey.com/en/products/detail/nordic-semiconductor-asa/NRF52840-DONGLE/9491124"
              >
                Digikey
              </a>
            </li>
            <li>
              <a
                href="https://eu.mouser.com/ProductDetail/Nordic-Semiconductor/nRF52840-Dongle?qs=gTYE2QTfZfTbdrOaMHWEZg%3D%3D"
              >
                Mouser
              </a>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <span id="HolyIOT"> HolyIOT-21017 aka HOLYIOT-21017-nRF52840 </span>
        </td>
        <td>
          Has a FEM (Front End Module), specifically an
          <strong>RFX2401C</strong> radio booster.
        </td>
        <td>
          <ul>
            <li>
              <a href="http://www.holyiot.com/eacp_view.asp?id=336">
                Manufacturer page
              </a>
            </li>
            <li>
              <a href="https://www.aliexpress.com/item/1005004673179004.html">
                AliExpress
              </a>
            </li>
            <li>
              <a
                href="https://holyiot.en.alibaba.com/search/product?SearchText=HOLYIOT-21017-nRF52840"
              >
                Alibaba
              </a>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## 📡 Microcontrollers Modified Into USB Dongles

#### Option 1: Unmodified Board

Consist of <a href="#SuperMini">SuperMini nRF52840</a> or <a href="#XIAO">Seeed Studio XIAO nRF52840</a>.

⚠️ Not recommended due to the simplicity of upgrading to a modified version.

#### Option 2: Wire Antenna Mod

Consist of a <a href="#SuperMini">SuperMini nRF52840</a> or <a href="#XIAO">Seeed Studio XIAO nRF52840</a> attached with a 31.2 mm wire to the antenna pin to form a basic monopole antenna.

Refer to <a href="./smol-tracker-schematics.md">Smol Schematics -> Antenna extra option</a> for the solder point location.

##### Wire Options

- Solid core or stranded copper wire (e.g., 23-26 AWG).
- Wire salvaged from an Ethernet cable.

#### Option 3: Wi-Fi Antenna Mod

Consist of a <a href="#SuperMini">SuperMini nRF52840</a> or <a href="#XIAO">Seeed Studio XIAO nRF52840</a> attached with a Wi-Fi antenna.

Refer to <a href="./smol-tracker-schematics.md">Smol Schematics -> Antenna extra option</a> for the area to remove and solder the IPEX or SMA connector.

##### Components Options

<div class="table-wrapper">
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
          <img src="assets\img\smol-receiver\wifi_antenna.webp" loading="lazy" />
        </td>
        <td>
          2PCS Mini Rubber 3dBi 2.4ghz WIFI Antenna SMA Male Router Bluetooth
          Antennas Wireless Module 2.4g Antena External Aerial
        </td>
        <td>Best tested performance (based on Lyall’s tests)</td>
        <td>Color: B</td>
        <td>
          <ul>
            <li>
              <a href="https://www.aliexpress.com/item/1005006686310444.html">
                AliExpress
              </a>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="assets\img\smol-receiver\wifi_antenna_adapter.webp"
            loading="lazy"
          />
        </td>
        <td>
          IPX to SMA RF Coax Adapter Assembly Pigtail Cable,SMA Connector Cable
          Female to UFL
        </td>
        <td>
          Any IPEX or SMA cable should do.
          <br />
          Cut cable at marked location on the image.
        </td>
        <td>Shorter cables preferred.</td>
        <td>
          <ul>
            <li>
              <a href="https://www.aliexpress.com/item/32896039259.html">
                AliExpress
              </a>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<hr/>

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
