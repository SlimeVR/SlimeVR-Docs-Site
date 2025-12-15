
```admonish warning
**Disclaimer:** This project is highly experimental. These devices may be incompatible with older versions of the SlimeVR Server and could require frequent firmware updates. Nothing is final at this stage, including hardware, firmware, and communication protocols.
```
# Smol Slimes vs Normal Wifi-based Slimes
Currently, Official SlimeVR and most DIY trackers connect to the SlimeVR server via a 2.4ghz WiFi network. Smol Slimes change this by communicating wirelessly to a dongle plugged into the users' computer, circumventing the need for an available WiFi network.

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
      <td>Official WiFi Slimes</td>
      <td data-label="Communication Protocol">2.4ghz WiFi</td>
      <td data-label="Average Weight">50g</td>
      <td data-label="Battery Life<">18-20 h</td>
      <td data-label="Range">WiFi coverage</td>
      <td>
        Much greater range. Trackers are bulkier and have lower battery life. Requires WiFi setup and are dependent on network conditions.
      </td>
    </tr>
    <tr>
      <td>Smol/Butterfly Slimes</td>
      <td data-label="Communication Protocol">Enhanced ShockBurst (ESB)</td>
      <td data-label="Average Weight">~10-15g</td>
      <td data-label="Battery Life">40-60 h</td>
      <td data-label="Range">7-12m from receiver (21-36ft) </td>
      <td>
         Lower range. Trackers have much greater battery life and are smaller. Trackers must be paired to a dongle connected to host computer.
      </td>
    </tr>
  </tbody>
</table>
</div>
</details>

## So what are the actual differences?
### 1. Protocol
Typical WiFi based Slimes communicate via WiFi to a host computer. Smol Slimes instead use a heavily modified fork of the Enhanced ShockBurst (ESB) protocol on an nRF52 or nRF54 microcontroller to communicate to the host computer via a receiver—allowing for lower latency and lower power draw at the cost of range.

### 3. Size and Battery Life
Current Official Slimes utilize a 1350mah battery, lasting on average between twelve to eighteen hours of use. 

The recommended Smol Slime design recommends a 401230 110mah battery, targeting a minimum battery life of 24 hours—although it often exceeds 40 hours of battery life in recommended configurations.

Smol Slimes have the additional benefit of a much smaller PCB, leading to an average weight between 10 to 15 grams depending on the design. Official Slimes are larger and heavier, weighing around 50 grams.

#### An Official Slime (left) and Ibis 2.0 Smol Slime (right)
 <img src="../assets/img/IMG_1449.webp" loading="lazy" />
*Picture by zrock35. Note that the Ibis 2.0 slime pictured is roughly 3cm by 3cm and weighs 10 grams.*

### 4. DIY differences
*This is explained in greater detail in the respective DIY guides for [WiFi-based](diy/README.md) and [nRF-based](hardware/index.md) slimes.*
- WiFi based slimes currently require a carrier PCB, an IMU board, and a charging board, alongside a battery.
- A typical Stacked Smol set consists of five or more trackers connected to one or more receiver.
  - Trackers based on nRF52840 boards, with one IMU and battery per board
  - Receivers, aka dongles, are required to connect trackers to the server. These are also typically based on nRF52840 or nRF54L boards.
  - For more information, see the [official Smol documentation](https://docs.slimevr.dev/smol-slimes/hardware/index.html)

### 5. Standalone?
Yes, Smol Slimes are compatible with standalone VRChat.
An OTG adapter is required to plug the dongle into the device running SlimeVR if a USB-A port is not available.

The Open Sound Control (OSC) protocol must be configured inside SlimeVR to send data from the server over WiFi to standalone VRChat.

## I heard Butterfly. What's that?
### 🦋 Introducing the Butterfly Tracker – SlimeVR's Official Smol Tracker
Looking for something simpler than building your own? The Butterfly Tracker will be SlimeVR’s official take on the Smol Slime—ultra-thin, lightweight, and ready to use out of the box. 

<img src="assets/img/ect/Butterfly_Tracker.webp" alt="SlimeVR's Butterfly Tracker">

🔗 Learn more and view the future campaign on <a href="https://www.crowdsupply.com/slimevr/slimevr-butterfly-trackers" target="_blank">CrowdSupply</a>.
<hr/>

*Created by Shine Bright ✨, Amebun, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
