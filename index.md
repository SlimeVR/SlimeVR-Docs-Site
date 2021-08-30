# SlimeVR DIY GUIDE

Welcome to the SlimeVR DIY guide. In this guide you will learn how to build your own SlimeVR trackers or use your mobile phones as SlimeVR trackers.

**You need to build a minimum of 5 trackers or use 5 phones/tablets. You can use more (currently 8), but not less than 5!!!**

You can build trackers from available boards (that you can buy from shops such as AliExpress), create your own custom PCB, or buy an official DIY kit.

**Guide still WIP, there will be building instructions**

### Routes of DIY:

1. ##### Very Rough One

    You get yourself a **NodeMCU** or analog (a dev board with ESP8266, currently recommended is the D1 Mini due to it's small size and feature set), a **BNO085 module**, **some battery**, **way to charge the battery** (depends on the battery, might be a usb charger module or something else). You then connect it all together.

   

2. ##### Some Soldering Required

   You get yourself the same **BNO085 module** and a **li-po battery** (flat like in phones basically), and you **order a base board from jlcpcb** (gerber and BOM will be provided). You solder the battery to the board, solder the module onto the board, and you're good to go. 

   Pros: much cleaner, smaller, almost the same as production unit 

   Cons: might cost a bit more than buying official SlimeVR trackers because of economics of scale, and depending on the finished board design it might be a bit bigger than buying from me (because of the BNO085 module)

   

3. ##### Some Assembly Required

   You buy the **DIY Kit from me** which includes all the boards and cables you need, get a **li-po battery**, attach batteries to the boards. All you need is to print (or build) yourself a nice casing and get straps (or tape them with electrical tape to your body, idk :D) 

   Pros: no or almost no soldering required, tested boards, smallest possible design, cheaper than buying completed SlimeVR trackers, you can customize cases and straps for yourself as you want 

   Cons: at this point you could just buy completed SlimeVR trackers, all import limitations and shipping costs apply. It might cost a bit more than the first option (but that remains to be seen, because economics of scale)



### Common guides

**Regardless of the path you choose you will still need to go trough these steps for configuration:**

1. ##### Prepare your firmware using [this guide](upload_firmware_guide) (pay close attention to step eight)

2. ##### Setup your server using [this guide](slimevr-setup)

3. ##### Use [autoconfig guide](skeleton_auto_config) to calibrate body values 

#### 

**If you have any problems feel free to ask on [official discord](https://discord.gg/39C3RcEU)**





Created by adigyran#1121
