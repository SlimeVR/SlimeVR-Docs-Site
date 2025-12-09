# Smol Tracker Soldering

This guide offers two ways to learn to solder your Smol Tracker: a video and a step-by-step text tutorial. Choose the method that works best for you!


## Table of Contents

* TOC
{:toc}

## Soldering Tutorials

### Lyall Smol Tracker Soldering Video Tutorial

If you prefer to watch a demonstration, you can follow along with the video below.

<div class="video-container">
  <iframe
    width="100%"
    height="auto"
    src="https://www.youtube.com/embed/nlxK9ISl_DQ"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

### Depact Smol Tracker Soldering Text Tutorial

#### Tools Needed

##### Essential Tools
- Side cutter pliers
- Tweezers (used for holding buttons and header pins in place)
- Soldering iron
- Soldering sponge (used for cleaning the soldering iron tip)
- Flux-cored solder wire (recommended for ease of use over separate solder and flux)
- Scissors (used for cutting Kapton tape)

##### Optional Additional Tools

- Soldering jig (optional, but makes holding the board easier)
- Soldering mat (optional, protects your workspace)

#### Soldering Steps

1. **Solder the Button**
   - Prefill the through-holes under the button contacts with solder.
   - Place the button onto the solder-filled holes.
   - Heat the area with the soldering iron until the solder connects the button pads securely.
   <img src="..\assets\img\soldering\depact-soldering-guide\1.webp" loading="lazy" class="big-size-image"/>

2. **Solder the Breakaway Header**
   - Break off a segment of 6 pins from the breakaway header strip.
   - Insert the header into the through-holes, leaning it slightly toward the center of the board to hold it in place.
   - Solder each pin one by one, making sure they remain straight and securely attached.
   <img src="..\assets\img\soldering\depact-soldering-guide\2.webp" loading="lazy" class="big-size-image"/>

3. **Insulate the IMU**
   - Cover the back of the IMU module with Kapton tape to prevent shorts.
   <img src="..\assets\img\soldering\depact-soldering-guide\3.webp" loading="lazy" class="big-size-image"/>

4. **Solder Headers to the IMU**
   - Solder a row of breakaway headers to one side of the IMU.
   <img src="..\assets\img\soldering\depact-soldering-guide\4.webp" loading="lazy" class="big-size-image"/>
   - Solder the headers on the other side at a slight angle so they make solid contact with the IMU pads.
   <img src="..\assets\img\soldering\depact-soldering-guide\5.webp" loading="lazy" class="big-size-image"/>

5. **Trim and Inspect Header Pins**
   - Use side cutter pliers to trim excess length from the header pins.
   - Inspect the solder joints and add more solder if needed, but avoid overheating, as this can loosen the pins.
   <img src="..\assets\img\soldering\depact-soldering-guide\6.webp" loading="lazy" class="big-size-image"/>

6. **Solder the Antenna Mod and Battery**
   - Solder the antenna wire and the battery leads to their respective pads.
   - **The antenna wire must be exactly 31.2 mm long. Any deviation will reduce performance.**
   <img src="..\assets\img\soldering\depact-soldering-guide\7.webp" loading="lazy" class="big-size-image"/>

Double-check each connection carefully before powering the board.

Use the `info` command in a serial terminal to check if the IMU is detected. If it is not detected, this usually means there is a soldering issue, or less commonly, a hardware fault.

<hr/>

## Additional Materials

### Ibis Soldering Fixture

<img src="..\assets\img\soldering/Ibis-IMU-Soldering-fixture.webp" loading="lazy" class="small-size-image"/>

You can optionally use the Ibis soldering fixture to hold your IMU and headers securely in place while soldering.
Note: That this fixture does **not** work for every IMU, as it is specifically designed for the LSM6DSR and ICM-45686 from SlimeVR Store.

[Download STL file](https://github.com/brisfknibis/ibis-trackers/blob/main/3D%20Print%20Models/Solder%20Cube.stl)

<hr/>

*Created by Shine Bright ✨ and [Depact](https://github.com/Depact)*