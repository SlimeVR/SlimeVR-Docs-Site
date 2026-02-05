# OSC/VMC (Open Sound Control) Live Recording

## Table of Contents

- TOC
{:toc}

## Protocols Used

### OSC (Open Sound Control) Protocol
OSC (Open Sound Control) is a protocol for networking sound synthesizers, computers, and other multimedia devices for purposes such as musical performance or show control.

SlimeVR uses OSC as output protocol to send tracking data to various applications in real-time.

### VMC (Virtual Motion Capture) Protocol

Virtual Motion Capture Protocol (VMCProcotol, OSC/VMC Protocol) is avatar motion communication protocol for virtual motion capture.

SlimeVR uses VMC as tracking data format to be sent.

## Known Recording Approaches

### Recording Motion with Blender Through VMC4B Add-On

**Requirements**

- VMC4B add-on: https://booth.pm/ja/items/3432915 
  - Paid
  - Supported blender versions: 2.93.5, 3.0.0, 3.2.2
- Blender 2.93.5, 3.0.0 or 3.2.2

#### Video Guide

<div class="video-container">
  <iframe 
    width="100%"
    height="auto"
    src="https://www.youtube.com/embed/WuQsmxaALx8"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

#### Text Guide

In SlimeVR Server:

1. Open **Settings**
2. Navigate to **OSC/VMC** tab
3. Enable **OSC Tracker** output
![alt text](./assets/img/OSC/VMC-Enable.webp)
4. Disable **Anchor at hips**
![alt text](./assets/img/OSC/VMC-Enable-Anchor-at-hips.webp)

In Blender:
1. In Blender tools panel open VMC4B panel. Click **Connect**.
![alt text](./assets/img/OSC/VMC4B-Click-Connect.webp)
1. At first you will get rough looking pose in blender. It's okay.
![alt text](./assets/img/OSC/VMC4B-Cursed-And-It's-okay.webp)

In SlimeVR Server:
1. In **Home** tab do "Full Reset" and "Reset Mounting"
Head needs to tilt forward during "Reset Mounting" 

In Blender:
1. In Blender tools panel on VMC4B panel click "Start Recording". 
![alt text](./assets/img/OSC/VMC4B-Start-Recording.webp)
2. When you finished recording, you press "Stop Recording" in same panel.

If you play recording, without disconnecting, it will bug out. This is purely visual glitch.

## Additional Resources

- SlimeVR Discord #motion-capture channel
- OSC Specification: [https://opensoundcontrol.stanford.edu/](https://opensoundcontrol.stanford.edu/)
- Open Sound Control wikipeia: [https://en.wikipedia.org/wiki/Open_Sound_Control](https://en.wikipedia.org/wiki/Open_Sound_Control)
- VMC Protocol specification: [https://protocol.vmc.info/english.html](https://protocol.vmc.info/english.html)
- VRChat OSC Overview: [https://docs.vrchat.com/docs/osc-overview](https://docs.vrchat.com/docs/osc-overview)

---

_Created by Shine Bright ✨, [ZRock35](https://github.com/ZRock35) and [Depact](https://github.com/Depact)_