# SlimeVR DIY GUIDE

Welcome to the SlimeVR DIY guide. In this guide you will learn how to build your own SlimeVR trackers or use your mobile phones as SlimeVR trackers.

**You need to build a minimum of 5 trackers or use 5 phones/tablets for full body tracking. You can use more (currently up to 8), but not less than 5!!!**
**Alternatively, you can build a single tracker or use 1 phone/tablet for just waist tracking. This is useful when you want to test the tracking of SlimeVR or custom hardware designs without investing in a full kit immediately.**

You can build trackers from available boards (that you can buy from shops such as AliExpress), create your own custom PCB, or [buy an official DIY kit (once available).](https://www.crowdsupply.com/slimevr/slimevr-full-body-tracker)

**Guide still WIP, building instructions to come**

### Routes of DIY:

1. ##### Very Rough One

    You get yourself a [**NodeMCU**](https://www.aliexpress.com/wholesale?SearchText=NodeMCU) or analog (a dev board with an ESP8266 or ESP32, currently recommended is the [WeMos D1 Mini](https://www.aliexpress.com/wholesale?SearchText=D1+Mini) for it's small size or the [TTGO T-Base ESP8266](https://www.aliexpress.com/wholesale?SearchText=TTGO+T-Base+ESP8266) for it's integrated battery charging circuit), an **IMU** [supported IMUs](https://github.com/SlimeVR/SlimeVR-Tracker-ESP/blob/main/README.md), **a battery**, and a **battery charger** (depends on the battery, for Li-ion's and LiPo's the most commonly used is the TP4056). You then solder it all together (soldering is important as good connections to the pins is required for your tracker to function).

   

2. ##### Some Soldering Required

   You get yourself an **IMU** and a **LiPo battery** (flat like in phones basically), and you **order a base board from a custom PCB manufacturer like [jlcpcb](https://jlcpcb.com/)** (gerber and BOM files will be provided). You solder the battery to the board, solder the module onto the board, and you're good to go.

   Pros: much cleaner, smaller, almost the same as production unit 

   Cons: might cost a bit more than buying official SlimeVR trackers due to economics of scale, and depending on the finished board design it might be a bit bigger than buying from me (because of the IMU breakout board)

   

3. ##### Some Assembly Required

   You buy the [**DIY Kit from me**](https://www.crowdsupply.com/slimevr/slimevr-full-body-tracker) which includes all the boards and cables you need, get a **LiPo battery**, attach batteries to the boards. All you need is to 3D print (or build) yourself a nice casing and get straps (or get creative and tape them with electrical tape to your body, idk :D)

   Pros: no or almost no soldering required, tested boards, smallest possible design, cheaper than buying completed SlimeVR trackers. You can customize cases and straps for yourself as you want.

   Cons: at this point you could just buy completed SlimeVR trackers, all import limitations and shipping costs apply. It might cost a bit more than the first option (but that remains to be seen, due to economics of scale).



### Common guides

**Regardless of the path you choose, you will still need to go trough these steps for configuration:**

1. ##### Prepare your firmware using [this guide](upload_firmware_guide) (pay close attention to step eight)

2. ##### Setup SlimeVR Server using [this guide](slimevr-setup)

3. ##### Use [autoconfig guide](skeleton_auto_config) to calibrate body values

#### 

**If you have any problems, feel free to reach out on the [SlimeVR discord](https://discord.gg/39C3RcEU)**





Written by adigyran#1121 and edited by QuantumRed#0001
