---
layout: page
nav_order: 2
parent: Applications and Variants
---

# What is this?

Using this, you can install Termux, a linux "emulator" for Android. The Quest 2 happens to run android, so you can host the SlimeVR server on it using this.

***joycons still require a PC for now and the Wrangler: https://github.com/carl-anders/slimevr-wrangler

# INSTRUCTIONS - QUEST 2
1. Install a file explorer on your quest, CX File Explorer is good. You can get the APK from https://apkpure.com

2. Download Termux (quest 1/2 is arm64) from here: https://github.com/termux/termux-app/releases
    DO NOT INSTALL FROM GOOGLE PLAY.

3. Click the downloaded file, allowing it to be installed.

4. Open Termux, and run the following commands.
```
apt update
termux-change-repo # SELECT MAIN THEN BFSU.
apt install openssl wget && wget https://raw.githubusercontent.com/lordbagel42/slimevr-termux-installer/main/install.sh && chmod +x install.sh && ./install.sh
```
5. Go to https://beta-slimevr-gui.bscotch.ca/ on the device with the server.

# INSTRUCTIONS - ANDROID PHONES
1. Enable developer mode on your phone. You can do this by opening settings, going to about phone, and finding the "Build Number" and tapping it seven times.

2. Download Termux (most phones are arm64, you can google what yours is) from here: https://github.com/termux/termux-app/releases
    **DO NOT INSTALL FROM GOOGLE PLAY.**

3. Click the APK, and allow it to be installed.

4. Open Termux, and run the following commands.
```
apt update
termux-change-repo # SELECT MAIN THEN BFSU.
apt install openssl wget && wget https://raw.githubusercontent.com/lordbagel42/slimevr-termux-installer/main/install.sh && chmod +x install.sh && ./install.sh
```
5. Go to https://beta-slimevr-gui.bscotch.ca/ on the device with the server.

# Remote GUI Access

The first step is enabling this on whatever browser you use: https://www.damirscorner.com/blog/posts/20210528-AllowingInsecureWebsocketConnections.html
  Enable it for https://beta-slimevr-gui.bscotch.ca/
Now that you have done this, you can go to https://beta-slimevr-gui.bscotch.ca/?ip=[QUEST OR PHONE IP}&port=21110 and access the site. Substitute [QUEST OR PHONE IP] with your quest or phones IP address, no brackets.

Credit goes to Butterscotch!#2066 for making all of this work and Bagel#6705 for the documentation, idea, and motivation.
