
```admonish warning
**Disclaimer:** This project is highly experimental. These devices may be incompatible with older versions of the SlimeVR Server and could require frequent firmware updates. Nothing is final at this stage, including hardware, firmware, and communication protocols.
```

# Smol (nRF-Based) vs Normal ESP (WiFi-Based) SlimeVR Trackers
Currently, Official SlimeVR trackers and most DIY trackers connect to the SlimeVR Server via a 2.4 Ghz WiFi network. Smol Trackers change this by communicating wirelessly with a dongle plugged into the user’s computer/headset/phone, removing the need for an available WiFi network.

<details>

## Quick Comparison Table

<div class="table-wrapper">
<table>
  <thead>
    <tr>
      <th>Tracker Type</th>
      <th>Communication Method</th>
      <th>Average Weight</th>
      <th>Battery Life</th>
      <th>Range</th>
      <th>Summary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Official WiFi Trackers</td>
      <td data-label="Communication Protocol">2.4 Ghz WiFi</td>
      <td data-label="Average Weight">50 g</td>
      <td data-label="Battery Life">18-20 h</td>
      <td data-label="Range">WiFi coverage</td>
      <td>
        Much greater range. Trackers are bulkier and have lower battery life. Requires WiFi setup and is dependent on network conditions.
      </td>
    </tr>
    <tr>
      <td>Smol/Butterfly Trackers</td>
      <td data-label="Communication Protocol">Enhanced ShockBurst (ESB)</td>
      <td data-label="Average Weight">~10-15 g</td>
      <td data-label="Battery Life">40-60 h</td>
      <td data-label="Range">7-12m from receiver (21-36 ft) </td>
      <td>
         Lower range. Trackers have much greater battery life and are smaller. Trackers must be paired to a dongle connected to host device.
      </td>
    </tr>
  </tbody>
</table>
</div>
</details>

## So what are the actual differences?
### 1. Protocol
Typical WiFi-based Trackers communicate via WiFi directly with the SlimeVR Server. Smol Trackers instead use a heavily modified fork of the Enhanced ShockBurst (ESB) protocol on an nRF52 or nRF54 microcontroller to communicate with the host device via a receiver; allowing for lower latency and lower power draw at the cost of range.

### 2. Size and Battery Life
Current Official Trackers utilize a 1350 mAh battery, lasting on average from twelve to eighteen hours of use.

The recommended Smol Tracker design uses a 401230 110 mAh battery, targeting a minimum battery life of 24 hours; though it often exceeds 40 hours in recommended configurations.

Smol Trackers have the additional benefit of a much smaller PCB, leading to an average weight between 10 to 15 grams depending on the design. Official Trackers are larger and heavier, weighing around 50 grams.

#### An Official Tracker (left) and Ibis 2.0 Smol Tracker (right)
 <img src="../assets/img/IMG_1449.webp" loading="lazy" />
*Image by Zrock35. Note that the Ibis 2.0 Tracker pictured is roughly 3 cm by 3 cm and weighs 10 grams.*

### 3. DIY differences
*This is explained in greater detail in the respective DIY guides for [WiFi-based](diy/README.md) and [nRF-based](hardware/index.md) trackers.*
- WiFi-based trackers currently require a carrier PCB, an IMU board, and a charging board, alongside a battery.
- A typical Stacked Smol set consists of five or more trackers connected to one or more receivers.
  - Trackers based on nRF52840 boards, with one IMU and battery per board
  - Receivers, aka dongles, are required to connect trackers to the server. These are also typically based on nRF52840 or nRF54L boards.
  - For more information, see the [official Smol documentation](https://docs.slimevr.dev/smol-slimes/hardware/index.html)

### 4. Standalone Compatible?
Yes, Smol Trackers are compatible with standalone VRChat.
An OTG adapter is required if the device running SlimeVR does not have a USB-A port.

The Open Sound Control (OSC) protocol must be configured in SlimeVR to send tracking data from the server over WiFi to standalone VRChat.

## I heard Butterfly. What's that?
### 🦋 Introducing the Butterfly Tracker – SlimeVR's Official Smol Tracker
Looking for something simpler than building your own? The Butterfly Tracker will be SlimeVR’s official take on the Smol Tracker—ultra-thin, lightweight, and ready to use out of the box.

<img src="assets/img/ect/Butterfly_Tracker.webp" alt="SlimeVR's Butterfly Tracker">

🔗 Learn more and view the campaign on <a href="https://www.crowdsupply.com/slimevr/slimevr-butterfly-trackers" target="_blank">CrowdSupply</a>.
<hr/>

*Created by Shine Bright ✨, Amebun, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
