# Smol Slimes vs Normal Wifi-based Slimes
Currently, Official SlimeVR and commonly made DIY trackers connect to your computer via a 2.4ghz WiFi network. Smol Slimes change this by communicating wirelessly to a dongle plugged into the users' computer, circumventing the need for an available WiFi network.
<details>
<summary><u>Quick Comparison Table</u></summary>
<table>
  <thead>
    <tr>
      <th>Tracker Type</th>
      <th>Communication Method</th>
      <th>Average Size</th>
      <th>Battery Life</th>
      <th>Range</th>
      <th>Summary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Official WiFi Slimes</td>
      <td data-label="Communication Protocol">2.4ghz WiFi</td>
      <td data-label="Average Size">50g</td>
      <td data-label="Battery Life<">18-20 h</td>
      <td data-label="Range">WiFi coverage</td>
      <td>
        Much greater range. Trackers are bulkier and have lower battery life. Requires WiFi setup and are dependent on network conditions
      </td>
    </tr>
    <tr>
      <td>Smol/Butterfly Slimes</td>
      <td data-label="Communication Protocol">Enhanced ShockBurst (ESB)</td>
      <td data-label="Average Size">~10-15g</td>
      <td data-label="Battery Life">40-60 h</td>
      <td data-label="Range">7-12m from receiver (21-36ft) </td>
      <td>
         Lower range. Trackers have much greater battery life and are smaller. Trackers must be paired to a dongle connect to host computer.
      </td>
    </tr>
  </tbody>
</table>
</details>

```admonish warning
**Disclaimer:** This project is highly experimental. These devices may be incompatible with older versions of the SlimeVR Server and could require frequent firmware updates. Nothing is final at this stage, including hardware, firmware, and communication protocols.
```

## So what are the actual differences?
### 1. Protocol
As mentioned earlier, normal Slimes communicate over a WiFi network to the host computer. This has the benefits of increased range and expandability—as much as the router will allow—at the cost of size, power draw, and setup complexity. Any interruption in the process such as a firewall, incorrectly configured router, or channel congestion will cause reliability issues with WiFi based Slimes.

On the other hand, Smol Slimes circumvent this by use a forked version of the Enhanced ShockBurst Protocol on Nordic Semiconductor’s nRF52 and nRF54L series System-on-Chip (SoC) devices to communicate with a dongle plugged into the host computer. This method reduces range—largely requiring the user to be within 10 metres (45 feet) of the dongle—and expandability—requiring one dongle per eight trackers. However, it comes with significant benefits over WiFi based slimes.

### 3. Size and Battery Life
Current Official Slimes utilize a 1350mah battery, which will last on average between twelve to eighteen hours of use. The most common Smol Slime design uses a 120mah battery, achieving an average battery life between 40 to 60 hours depending on use.
Smol Slimes have the additional benefit of a much smaller PCB, which leads to an average weight between 10-15 grams depending on the design. Official slimes are significantly bulkier, weighing approximately 50 grams.

<details>
<summary><u>Size Comparison between Official 1.2 Slimes and an Ibis 2.0 Smol Slime</u></summary>
[IMG_1449](https://github.com/user-attachments/assets/f729a103-1b92-4a4d-b222-130af3671576)
</details>

### 4. DIY differences
*This is explained in greater detail in the respective DIY guides for [WiFi-based](diy/README.md) and [nRF-based](hardware/index.md) slimes.*
- WiFi based slimes currently require a carrier PCB, an IMU board, and a charging board, alongside a battery.
- The current iteration of stacked smol slimes use a Promicro nRF52 board and an IMU board, with the battery. However, smol slimes also require the trackers to be paired to a dongle running custom firmware.

### 5. Standalone?
Yes, smol slimes are compatible with standalone. An OTG adapter is required to plug the dongle into your headset or phone; and OSC must be used to connect the server to VRChat.

## 🦋 Introducing the Butterfly Tracker – SlimeVR's Official Smol Tracker
Looking for something simpler than building your own? The Butterfly Tracker is SlimeVR’s official take on the Smol Slime—ultra-thin, lightweight, and ready to use out of the box.

<img src="assets/img/ect/Butterfly_Tracker.webp" alt="SlimeVR's Butterfly Tracker">

🔗 Learn more and pre-order on <a href="https://www.crowdsupply.com/slimevr/slimevr-butterfly-trackers" target="_blank">CrowdSupply</a>.

*Created by Shine Bright ✨, Amebun, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral)*
