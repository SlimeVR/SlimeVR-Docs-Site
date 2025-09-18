# TODO: Things to finish before public version

- Links to parts
- Firmware table to contain links directly to firmware like smols do
- Firmware flashing guide

# TODO: Things that good to improve before public version
- Building guide


# Slime Glove

```admonish warning
**Disclaimer:** This project is highly experimental. These devices may be incompatible with newer versions of the SlimeVR Server and could require frequent firmware updates. Nothing is final at this stage, including hardware, firmware, and communication protocols.
```

```admonish info
Are you interested, have questions, or running into issues? Chat with us in ***#finger-tracking*** on the <a href="https://discord.gg/SlimeVR" target="_blank">SlimeVR Discord</a>!
```

Looking for a way to add finger tracking to your VR setup? Slime Glove is a community-driven project focused on making finger tracking accessible and easy to build.

It uses flex sensors and microcontrollers to capture finger movement.

These gloves are designed to be compatible with SlimeVR server.


## 🧤 Guizmo12 Glove
Currently Guizmo12 Glove is the main Slime Glove project.


<div class="embeddedVideo">
    <img src="assets/index/img/Guizmo12-glove.webp" alt="Slime Glove Example" loading="lazy">
  Guizmo12 glove
</div>

## Glove Hardware

### Required Components

| Component             | Example/Notes                      | Price      | Store Link                                                       |
| --------------------- | ---------------------------------- | ---------- | ---------------------------------------------------------------- |
| Microcontroller       | Adafruit ESP32 Feather V2          | $19.95     | [Adafruit](https://www.adafruit.com/product/5400)                |
| Flex sensors (5x)     | For each finger                    | ~$5-8 each | [Amazon](https://www.amazon.com/Flex-Sensor-2-2in/dp/B00B8871NM) |
| Glove base            | Any fabric glove                   | ~$5-10     | [Amazon](https://www.amazon.com/s?k=fabric+glove)                |
| Resistors             | For voltage divider                | <$1        | [Amazon](https://www.amazon.com/s?k=resistor+kit)                |
| Wires                 | Thin, flexible                     | ~$5        | [Amazon](https://www.amazon.com/s?k=hookup+wire)                 |
| Soldering supplies    | Solder, iron, etc.                 | Varies     | [Amazon](https://www.amazon.com/s?k=soldering+kit)               |
| Battery               | LiPo, e.g. 150-300mAh              | ~$5-10     | [Adafruit](https://www.adafruit.com/product/1317)                |
| Connectors (optional) | JST or similar for battery/sensors | ~$2-5      | [Amazon](https://www.amazon.com/s?k=jst+connector)               |


## Building Guide


Cut some slit of the glove to waive the flexsensor trough.

Be sure the base is fixed and the tip can move foward and backward easily

<div style="display: flex">
  <img src="assets/index/img/Glove-Building/Glove-FlexSensor-insertion.jpg" loading="lazy" class="small-size-image">
  <img src="assets/index/img/Glove-Building/Glove-FlexSensor-inserted.jpg" loading="lazy" class="small-size-image">
</div>

Solder wires to all of the same side of the flex sensor and solder to Feather GND pin.

And the other site to the Feather pins in that order:
- A9: Thumb
- A7: Index
- A2: Middle
- A3: Ring
- A4: Little

<img src="assets/index/img/Glove-Building/flex-sensor-soldering-diagram.webp" loading="lazy" class="big-size-image">

<div class="embeddedVideo">
    <img src="assets/index/img/Glove-Building/Adafruit-ESP32-Feather-V2-Pinout.svg" alt="Adafruit ESP32 Feather V2 Pinout" loading="lazy" class="big-size-image">
  Adafruit ESP32 Feather V2 Pinout
</div>

<img src="assets/index/img/Glove-Building/soldered-board.webp" loading="lazy" class="big-size-image">

Put the resistors on one side of the Featherv2 and solder all of them together. Solder a wire on the 3v to the joint resistor.

<img src="assets/index/img/Glove-Building/board-soldering.webp" loading="lazy" class="big-size-image">





Here I'm using the USB of the FeatherV2 to power it from the wrist tracker.

<img src="assets/index/img/Glove-Building/glove-powered-by-waist-tracker.webp" loading="lazy" class="big-size-image">

## Firmware

### Firmware Flashing

To compile and flash the glove firmware, you'll need the [Arduino IDE](https://www.arduino.cc/en/software):
- Clone the firmware from the [Guizmo12GloveMocap GitHub repository](https://github.com/Guizmo12/Guizmo12glovesmocap).

### Firmware variants
| Firmware Name   | Usage Description                                                            |
| --------------- | ---------------------------------------------------------------------------- |
| ConnectToSlime  | For use with the [SlimeVR Server](https://github.com/SlimeVR/SlimeVR-Server) |
| FullGloveWIFI   | For use with server_tester.py                                                |
| FullGloveNoWiFi | For use with a serial console                                                |


## References

- 🔗 [Guizmo12 Mocap Glove GitHub repository](https://github.com/Guizmo12/gizmoglovesmocap/tree/main)

<hr/>

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Guizmo12](https://github.com/Guizmo12)*