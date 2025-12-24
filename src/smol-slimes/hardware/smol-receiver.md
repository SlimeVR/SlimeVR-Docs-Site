<link rel="stylesheet" href="../assets/css/smol-slimes.css">

# Smol Receiver

# Table Of Contents

- TOC
  {:toc}

## 📶 Receiver Options (Ranked by Signal Strength)

To ensure optimal signal integrity and range, it is essential to use boards equipped with high-quality antennas. Boards featuring a PCB antenna or external antenna are generally the most effective option for use as receivers.

<a href="#NordicDongle">Nordic Semiconductor nRF52840 Dongle</a>, <a href="#-microcontrollers-modified-into-usb-dongles">Seeed Studio XIAO nRF52840</a> are not included due to lack of data.

<div class="table-wrapper">
  <table class="community-builds-table">
    <thead>
      <tr>
        <th>Receiver</th>
        <th>Tier</th>
        <th>Typical Price (USD)</th>
        <th>Notes / Best For</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>🟢 <a href="#HolyIOT">HolyIOT-21017</a></td>
        <td><span style="color:#2ecc40;font-weight:bold">Superior</span></td>
        <td>~8-18 USD</td>
        <td>
          Highest performance for the highest price.
          <br/>
          Includes an RFX2401C FEM amplifier — reported to provide significantly increased signal strength.
        </td>
      </tr>
      <tr>
        <td>🟠 <a href="#option-3-wi-fi-antenna-mod">ProMicro nRF52840 with Wi‑Fi Antenna Mod</a></td>
        <td><span style="color:#27ae60;font-weight:bold">Affordable</span></td>
        <td>~7 USD</td>
        <td>Recommended go‑to option; best price‑to‑performance when modified with a Wi‑Fi antenna.</td>
      </tr>
      <tr>
        <td>🟠 <a href="#option-2-wire-antenna-mod">ProMicro nRF52840 with Wire Antenna Mod</a></td>
        <td><span style="color:#27ae60;font-weight:bold">Affordable</span></td>
        <td>~6 USD</td>
        <td>Simple 31.2 mm wire monopole antenna; low cost and easy to build; modest range improvement.</td>
      </tr>
      <tr>
        <td>🟠 <a href="#eByteDongle">eByte Dongle (E104-BT5040U)</a></td>
        <td><span style="color:#e67e22;font-weight:bold">Limited</span></td>
        <td>~6,25 USD for min pack of 2 on Alibaba</td>
        <td>Cheapest PCB‑antenna dongle. Signal tends to degrade beyond ~3 m, especially when obstructed by body parts.</td>
      </tr>
      <tr>
        <td>🚫 <a href="#option-1-unmodified-board">ProMicro nRF52840 (Unmodified)</a></td>
        <td><span style="color:#e74c3c;font-weight:bold">Avoid</span></td>
        <td>~2-4 USD</td>
        <td>Unmodified board; Same as trackers. Not recommended, as antenna mods are better.</td>
      </tr>
    </tbody>
  </table>
</div>

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
          <span id="eByteDongle">🟠 eByte Dongle (E104-BT5040U) </span>
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
                href="https://www.cdebyte.com/products/E104-BT5040U"
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
              <a href="https://www.nordicsemi.com/Products/Development-hardware/nRF52840-Dongle">
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
          <span id="HolyIOT">🟢 HolyIOT-21017 aka HOLYIOT-21017-nRF52840 </span>
        </td>
        <td>
          Has a FEM (Front End Module), specifically an
          <strong>RFX2401C</strong> radio booster.
          Currently regarded as the highest-performance option.
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

#### 🚫 Option 1: Unmodified Board
```admonish warning
Not recommended due to the simplicity of upgrading to a modified version.
```

Consist of <a href="#-microcontrollers-modified-into-usb-dongles">ProMicro nRF52840</a> or <a href="#-microcontrollers-modified-into-usb-dongles">Seeed Studio XIAO nRF52840</a>.

#### 🟠 Option 2: Wire Antenna Mod

Consist of a <a href="#-microcontrollers-modified-into-usb-dongles">ProMicro nRF52840</a> or <a href="#-microcontrollers-modified-into-usb-dongles">Seeed Studio XIAO nRF52840</a> attached with a 31.2 mm wire to the antenna pin to form a basic monopole antenna.

Refer to <a href="./smol-tracker.md#schematics">Smol Schematics -> Antenna (extra option)</a> for the solder point location.

##### Wire Options

- Solid core or stranded copper wire (e.g., 23-26 AWG).
- Wire salvaged from an Ethernet cable.

#### 🟠 Option 3: Wi-Fi Antenna Mod

Consist of a <a href="#-microcontrollers-modified-into-usb-dongles">ProMicro nRF52840</a> or <a href="#-microcontrollers-modified-into-usb-dongles">Seeed Studio XIAO nRF52840</a> attached with a Wi-Fi antenna.

Recommended due to a good balance between build difficulty, performance, and cost.

<div class="embeddedVideo">
  <img src="../assets\img\smol-receiver\Lyall_brick_receiver.webp" loading="lazy" class="big-size-image"/>
  Example receiver from <a href="./smol-slimes-community-builds.md#LyallUlric-Stacked-SmolSlime-build">LyallUlric's Stacked SmolSlime build</a>, equipped with an OOTDTY 2.4G/5.8G Dual Band Antenna.
</div>

```admonish info
Refer to <a href="./smol-tracker.md#schematics">Smol Schematics -> Antenna (extra option)</a> for the area to remove and solder the IPEX or SMA connector.
```

##### Community-Tested Antennas

###### Community Recommendation

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Image</th>
        <th>Listing</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <img src="../assets\img\smol-receiver\OOTDTY_2.4G-5.8G_Dual_Band_Antenna_Receiver.webp" loading="lazy" alt="OOTDTY dual-band antenna" />
        </td>
        <td>
          OOTDTY 5 Pcs 2.4G/5.8G Dual Band Antenna 8DBI High Gain Internal PCB Aerial for WiFi Router WiFi Antenna
        </td>
        <td>
          <ul>
            <li>
              <a href="https://pl.aliexpress.com/item/4000298368244.html">
                AliExpress
              </a>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>


###### IPX–SMA Conversion Setup

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
          <img src="../assets\img\smol-receiver\wifi_antenna.webp" loading="lazy" />
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
            src="../assets\img\smol-receiver\wifi_antenna_adapter.webp"
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
