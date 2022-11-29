---
layout: page
nav_order: 2
parent: Applications and Variants
---

# Termux Setup

This guide will help you install Termux, a Linux "emulator" for Android to use for SlimeVR. The Quest 2 happens to run Android, so you can run the SlimeVR server on it using Termux.

Note: Joycons still require a PC for now and [SlimeVR Wrangler](https://github.com/carl-anders/slimevr-wrangler).

# INSTRUCTIONS - QUEST 2

1. Download Termux (quest 1/2 is arm64) from here: [https://github.com/termux/termux-app/releases](https://github.com/termux/termux-app/releases)

2. Install the .APK file using either Sidequest, ADB, or an already installed file explorer.

3. Open Termux, and run the following command:

```
pkg install openssl wget && wget https://raw.githubusercontent.com/lordbagel42/slimevr-termux-installer/main/install.sh && chmod +x install.sh && ./install.sh
```

4. Go to [https://beta-slimevr-gui.bscotch.ca/](https://beta-slimevr-gui.bscotch.ca/) on the device with the server.

# INSTRUCTIONS - ANDROID PHONES

1. Enable developer mode on your phone. You can do this by opening settings, going to about phone, and finding the "Build Number" and tapping it seven times.

2. Download Termux (most phones are arm64, you can google what yours is) from here: [https://github.com/termux/termux-app/releases](https://github.com/termux/termux-app/releases)
   **DO NOT INSTALL FROM GOOGLE PLAY.**

3. Click the APK, and allow it to be installed.

4. Open Termux, and run the following command:

```
pkg install openssl wget && wget https://raw.githubusercontent.com/lordbagel42/slimevr-termux-installer/main/install.sh && chmod +x install.sh && ./install.sh
```

5. Go to [https://beta-slimevr-gui.bscotch.ca/](https://beta-slimevr-gui.bscotch.ca/) on the device with the server.

# Remote GUI Access

The first step is enabling this on whatever browser you use: [https://www.damirscorner.com/blog/posts/20210528-AllowingInsecureWebsocketConnections.html](https://www.damirscorner.com/blog/posts/20210528-AllowingInsecureWebsocketConnections.html)
Enable it for https://beta-slimevr-gui.bscotch.ca/
Now that you have done this, you can go to https://beta-slimevr-gui.bscotch.ca/?ip=[QUEST OR PHONE IP]&port=21110 and access the site. Substitute [QUEST OR PHONE IP] with your Quest's or phone's IP address, without the brackets.

Credit goes to Butterscotch!#2066 for making all of this work and Bagel#6705 for the documentation, idea, and motivation.
