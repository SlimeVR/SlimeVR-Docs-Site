# Smol Tracker Soldering

This guide will walk you through soldering the Smol Tracker step by step. Follow each instruction carefully for best results.

## Tools Needed
- Side cutter pliers
- Tweezers (helpful for holding buttons and header pins in place)
- Soldering jig (optional, but makes holding the board easier)
- Soldering iron
- Soldering sponge (for cleaning the soldering iron tip)
- Flux-cored solder wire (recommended for ease of use)
- Soldering mat (optional, protects your workspace)
- Scissors (for cutting Kapton tape)

## Soldering Steps

### 1. Solder the Button
- Prefill the through-holes under the button contacts with solder.
- Place the button onto the prefilled holes.
- Heat the area with the soldering iron until the solder connects the button pads securely.
<img src="1.webp" loading="lazy" class="big-size-image"/>

### 2. Solder the Breakaway Header
- Break off a segment of 6 pins from the breakaway header strip.
- Insert the header into the through-holes, leaning it toward the center of the board.
- Solder each pin one by one, ensuring they are straight and secure.
<img src="2.webp" loading="lazy" class="big-size-image"/>

### 3. Insulate the IMU
- Cover the backs of the IMUs with Kapton tape to prevent shorts.
<img src="3.webp" loading="lazy" class="big-size-image"/>

### 4. Solder Headers to the IMU
- Solder a row of breakaway headers to one side of the IMU.
<img src="4.webp" loading="lazy" class="big-size-image"/>

- Solder the headers on the other side at an angle to reach the IMU pads.
<img src="5.webp" loading="lazy" class="big-size-image"/>

### 5. Trim and Inspect Header Pins
- Use side cutter pliers to trim any excess length from the header pins.
- Inspect the solder joints and add more solder if needed, but avoid overheating to prevent pins from loosening.
<img src="6.webp" loading="lazy" class="big-size-image"/>

### 6. Solder the Antenna Mod and Battery
- Solder the antenna wire and battery connections.
- For the antenna, cut a wire approximately the length of the board. As long as it is longer than 31.2mm, it will work well.
<img src="7.webp" loading="lazy" class="big-size-image"/>

Take your time and double-check each connection. 

Use the `info` command in a serial terminal to check if the IMU is detected. If it is not detected, this usually means there is a soldering issue, or less commonly, a hardware fault.

## Stacked Soldering Tutorial 

<div class="video-container">
  <iframe
    width="100%"
    height="auto"
    src="https://www.youtube.com/embed/qTmIfa_Asic"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

<hr/>

*Created by Shine Bright ✨ and [Depact](https://github.com/Depact)*