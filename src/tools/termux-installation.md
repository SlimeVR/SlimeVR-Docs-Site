# Termux Setup

**This guide is no longer recommended. Please see [Mobile Setup](mobile-installation.md) for an updated method of running SlimeVR on standalone.**

This guide will help you install Termux, a Linux "emulator" for Android to use for SlimeVR. The Quest 2 happens to run Android, so you can run the SlimeVR server on it using Termux.

Note: Joycons still require a PC for now and [SlimeVR Wrangler](https://github.com/carl-anders/slimevr-wrangler).

# INSTALLATION - QUEST 2

1. Download Termux (Quest 1/2 is arm64) from here: [https://github.com/termux/termux-app/releases](https://github.com/termux/termux-app/releases)

2. Install the .APK file using either Sidequest, ADB, or an already installed file explorer.

3. Open Termux, and run the following command:

```
bash <(curl https://raw.githubusercontent.com/SlimeVR/SlimeVR-Termux-Installer/main/install.sh)
```

4. Go to [https://slimevr-gui.bscotch.ca/](https://slimevr-gui.bscotch.ca/) on the device with the server if it doesn't auto open.

## If you want to start the server again after closing, DO NOT run the setup commands again. Run:

```
./start.sh
```

# INSTALLATION - ANDROID PHONES

1. Enable developer mode on your phone. You can do this by opening settings, going to about phone, and finding the "Build Number" and tapping it seven times.

2. Download Termux (most phones are arm64, you can google what yours is) from here: [https://github.com/termux/termux-app/releases](https://github.com/termux/termux-app/releases)
   **DO NOT INSTALL FROM GOOGLE PLAY.**

3. Click the APK, and allow it to be installed.

4. Open Termux, and run the following command:

```
bash <(curl https://raw.githubusercontent.com/SlimeVR/SlimeVR-Termux-Installer/main/install.sh)
```

5. Go to [https://slimevr-gui.bscotch.ca/](https://slimevr-gui.bscotch.ca/) on the device with the server if it doesn't auto open.

## If you want to start the server again after closing, DO NOT run the setup commands again. Run:

```
./start.sh
```

# Updating

On both Android and Quest, to update, all you need to do is start it, it automatically checks for update.

# Remote GUI Access

The first step is enabling this on whatever browser you use: [https://www.damirscorner.com/blog/posts/20210528-AllowingInsecureWebsocketConnections.html](https://www.damirscorner.com/blog/posts/20210528-AllowingInsecureWebsocketConnections.html)
Enable it for https://slimevr-gui.bscotch.ca/
Now that you have done this, you can go to https://slimevr-gui.bscotch.ca/?ip=[QUEST OR PHONE IP]&port=21110 and access the site. Substitute [QUEST OR PHONE IP] with your Quest's or phone's IP address, without the brackets.

*Credit goes to butterscotch.v for making all of this work, and lordbagel42 for the documentation, idea, and motivation.*
