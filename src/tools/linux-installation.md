# Installing OpenVR Plugin

In order to SlimeVR to communicate with SteamVR, you'll need to install an OpenVR plugin into your Steam installation. On Windows, this happens automatically with SlimeVR's installer. On Linux, this needs to be done manually.

If you don't plan to use SlimeVR with SteamVR, this section can be skipped.

### 1. Download the SlimeVR drivers for OpenVR

[The latest OpenVR plugin can be downloaded here](https://github.com/SlimeVR/SlimeVR-OpenVR-Driver/releases/latest/download/slimevr-openvr-driver-x64-linux.zip), or obtained by downloading `slimevr-openvr-driver-x64-linux.zip` from [the latest SlimeVR-OpenVR-Driver release](https://github.com/SlimeVR/SlimeVR-OpenVR-Driver/releases/).

Note: This is NOT the desktop application.

### 2. Identify target directory

You'll then need to identify the root directory of the Steam (not SteamVR) installation on your system. In most cases, it should be located at `~/.steam/steam/`.

From here, you'll need to navigate to `steamapps/common/SteamVR/drivers/`. For most common cases, this will result in a final path of `~/.steam/steam/steamapps/common/SteamVR/drivers/`.

This is where you will be installing the plugin.

### 3. Extract and install

Extract the archive you downloaded in step 1. This should give you a bunch of files and folders nested in a root `slimevr` folder. Simply move the `slimevr` folder into `~/.steam/steam/steamapps/common/SteamVR/drivers/`, and the plugin should now be installed. If done correctly, you should now have a `steamapps/common/SteamVR/drivers/slimevr/bin/linux64/` folder (among other things).

You will need to restart SteamVR for changes to take effect, though you likely won't notice any difference until you have SlimeVR trackers set up.

### 4. Set the SteamVR launch argument

SteamVR will sometimes need a launch argument in order to load the SlimeVR driver.  
To set the launch argument, open Steam, right-click on SteamVR in your library, select "Properties" and you should see a field to input the launch argument.  
In most cases, your launch argument should be something like `~/.steam/steam/steamapps/common/SteamVR/bin/vrmonitor.sh %command%`, but you might need to adjust the path based on where Steam is installed.  

# Installing Java

The SlimeVR Server depends on Java 17, so you'll need to install it on your system in a way that SlimeVR can access.

### Option 1: Install Java globally

The simplest and most straight-forward way to setup Java is to install it through your distro's package manager. The specific package name will vary distro to distro, but it will most likely be listed as "`openjdk`", and you'll most likely want the `jre` (though `jdk` will work fine).

Ubuntu:

```
sudo apt install openjdk-17-jre
```

Arch Linux:

```
sudo pacman -S jre17-openjdk
```

Once installed, the SlimeVR AppImage should automatically detect and use this version of Java to run the internal server.

### Option 2: Portable Java

An alternative method to installing Java globally is to download and extract a portable version of the Java runtime.

#### 1. Download Java 17 JRE archive

You can press this button to download the latest Adoptium JRE archive directly:

<script>
async function downloadLatestAdoptium() {
  const latestFiles = await(await fetch('https://api.adoptium.net/v3/assets/latest/17/hotspot?os=linux&architecture=x64&image_type=jre')).json();

  if (!latestFiles || (Array.isArray(latestFiles) && !latestFiles.length)) {
    console.log('Unable to find any releases :c');
    return;
  }

  let latestFile = (Array.isArray(latestFiles) ? latestFiles[0] : latestFiles).binary.package.link;
  console.log('Found latest Adoptium release:', latestFile);

  window.open(latestFile);
}
</script>

<button onclick="downloadLatestAdoptium()">Download Latest Adoptium 17 LTS</button>

Or you can download it yourself from the releases page here:

<https://adoptium.net/temurin/releases/?version=17>

#### 2. Extract and rename

1. Extract the downloaded archive (ex. `OpenJDK17U-jre_x64_linux_hotspot_17.0.5_8.tar.gz`) to get a folder named something like `jdk-17.0.5+8-jre`.
2. Rename the extracted folder (ex. `jdk-17.0.5+8-jre`) to `jre`, such that the directory structure looks something like `/jre/bin/java`.

#### 3. Bundle with SlimeVR

In order for SlimeVR to locate the portable version of Java, you will need to include it in the same directory as the AppImage. When using the all-in-one AppImage under the "Running SlimeVR" section of this guide, your folder structure should look like so:

```
Parent Directory
    |- /jre/bin/java
    |- /SlimeVR-amd64.appimage
```

# Running SlimeVR

> [!WARNING]
> The Linux download located at [slimevr.dev/download](https://slimevr.dev/download) currently links to the Flatpak version of the SlimeVR Server. For this guide, it is not used, so it is recommended to download the AppImage linked below instead.

The recommended way to run SlimeVR on Linux (in a desktop environment) is to use the standalone AppImage executable. This comes with the server and GUI both bundled into one.

[The latest AppImage can be downloaded here](https://github.com/SlimeVR/SlimeVR-Server/releases/latest/download/SlimeVR-amd64.appimage), or obtained by downloading 
`SlimeVR-amd64.appimage` from [the latest SlimeVR-Server release](https://github.com/SlimeVR/SlimeVR-Server/releases/).

For most common Linux distros, you should then be able to start SlimeVR by simply executing the AppImage. Config and logs will be stored in `~/.config/dev.slimevr.SlimeVR/`

> [!NOTE]
> If you want to install the server natively like a .deb file, but still want to use the .AppImage file, then it is recommended to use an application like [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher).

# SteamVR Controller Implementation

If you're receiving a warning during the automatic mounting phase mentioning that you aren't in VR mode even when you are, it's most likely due to the SlimeVR Feeder App not being installed.

The AppImage release of the SlimeVR server does not include the SlimeVR Feeder App, which allows the SlimeVR Server to read the position of everything in an OpenVR instance (in this case, SteamVR) so the positions of the controllers and HMD are able to be marked as trackers. This helps with quickly and accurately seeing the rig of your full body in a small preview, and allows for tools like Virtual Motion Capture (VMC) to send your controllers' and headset's postional data. 

[The pre-release version of the SlimeVR Feeder App for Linux can be downloaded here](https://github.com/SlimeVR/SlimeVR-Feeder-App/releases/pre-release/download/SlimeVR-Feeder-App-Linux.zip), or obtained by downloading `SlimeVR-Feeder-App-Linux.zip` from [the pre-release SlimeVR Feeder App release](https://github.com/SlimeVR/SlimeVR-Feeder-App/releases)

> [!NOTE]
> Downloading the pre-release release instead of the latest release is recommended, as the latest release is dated back to July 2nd, 2023 as of writing. (July 1st, 2025) 

After opening the SlimeVR Feeder App (by extracting the `SlimeVR-Feeder-App-Linux.zip` file double clicking the `SlimeVR-Feeder-App` executable, or by going into the terminal, `cd`ing into the extracted directory and typing `./SlimeVR-Feeder-App`), you should see your controllers alongside your other trackers in the SlimeVR Server after you have completed your first setup. This should also remove the warning in the automatic mounting phase of the setup.

> [!IMPORTANT]
> If you have closed and restarted either SteamVR, SlimeVR or your entire Desktop/PC, and the controllers have stopped tracking, then you may have to reopen the SlimeVR Feeder App. **HOWEVER,** they do track again, then you won't need to reopen it. Make sure you don't reopen it by accident, as it can lead to potential errors and performance issues.

# Serial Console

The Serial Console is a debugging tool which is used for checking if a tracker is functioning properly or not via a USB cable.

In able to gain access to the Serial Console on Linux, you will need to grant your user account access to PlatformIO devices. Without the correct access, the Serial Console will continue to display "Connection to serial lost, Reconnecting..." after a SlimeVR tracker has been connected via USB.

The recommended way to gain access is by installing PlatformIO's udev rules. This can be done using the instructions on this page: <https://docs.platformio.org/en/latest/core/installation/udev-rules.html>

# Firewall Rules

On Linux, SlimeVR does not automatically add any firewall rules. If you have a firewall installed, you will need to add the rules manually yourself.

You will need to open ports on:
* `35903/udp`
* `6969/udp`
* `21110/tcp`

Source: [firewall.bat](https://github.com/SlimeVR/SlimeVR-Server/blob/main/server/core/resources/firewall.bat)

# Legacy Setup

> [!IMPORTANT]
> If for some reason the above setup does not work for you, then you may need to retrieve and run the SlimeVR components manually. In order to do so, follow the Legacy Setup instructions below.

<details>

<summary>Legacy Setup Instructions</summary>

## SlimeVR Server

You can download the latest required `slimevr.jar` file from this link:

<https://github.com/SlimeVR/SlimeVR-Server/releases/latest/download/slimevr.jar>

## SlimeVR GUI

You can download the latest required GUI from here:

<https://github.com/SlimeVR/SlimeVR-Server/actions/workflows/build-gui.yml?query=branch%3Amain+is%3Asuccess>

### 1. Open the latest workflow run

Click on the title of the latest workflow run, this is simply an example and the exact one at the top will change.

### 2. Download the desired artifact

Once you have the workflow run open, you can find a list of built artifacts. The simplest to use is the AppImage build since it includes all required dependencies and can be run very easily.

You must be logged into a GitHub account in order to download build artifacts.

### 3. Extract the GUI AppImage/Deb

Once you have the file downloaded (ex. `SlimeVR-GUI-AppImage.zip`), extract it to get a file like `slimevr-ui_0.0.0_amd64.AppImage`.

## Setting up the install folder

To most easily use the program, you'll need to have things structured in a specific way.

1. Make a new folder to contain your installation, name it whatever you want (ex. `SlimeVR Server`).
2. Place the SlimeVR Server, SlimeVR GUI, and optional Java JRE components you downloaded into the folder you made

Example of the final directory structure:

```
/SlimeVR Server/
    |- /jre/bin/java  (if using portable Java)
    |- /slimevr.jar
    |- /slimevr-ui_0.0.0_amd64.AppImage
```

</details>

## Running the program

Once everything is all set up, all you need to do to run it is execute the AppImage and it should run everything else on its own.

> [!WARNING]
> It is highly recommended to open the SlimeVR server **after** you open SteamVR, as doing the opposite is known for causing desync issues with the headset, and can easily cause motion sickness, even to experienced VR users.

> [!TIP]
> If you are in VR, it is recommended to download WlxOverlay-S, which is an overlay for SteamVR which allows you to view your desktop within VR. This is recommended to download for the mounting calibration, as the positions that are requested may be hard to do without being able to follow the instructions in headset. It is also recommended to download for general use, as the default desktop sharing that is built into SteamVR does not work as intended.

> [!NOTE]
> This was only tested on Debian and Ubuntu. If you use Arch, please notify @lordbagel42 in the [SlimeVR Discord server](https://discord.gg/slimevr).

*Created by butterscotch.v*  
*Edited by fineminekine*
