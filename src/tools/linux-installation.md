# Installing OpenVR Plugin

In order for SlimeVR to communicate with SteamVR, you'll need to install the OpenVR driver into your Steam installation. On Windows, this happens automatically with SlimeVR's installer. On Linux, this needs to be done manually.

If you don't plan to use SlimeVR with SteamVR, this section can be skipped.

### 1. Download

[The latest OpenVR plugin can be downloaded here](https://github.com/SlimeVR/SlimeVR-OpenVR-Driver/releases/latest/download/slimevr-openvr-driver-x64-linux.zip), or obtained by downloading `slimevr-openvr-driver-x64-linux.zip` from [the latest SlimeVR-OpenVR-Driver release](https://github.com/SlimeVR/SlimeVR-OpenVR-Driver/releases/).

### 2. Identify target directory

You'll then need to identify the root directory of the Steam installation on your system. In most cases, it should be located at `~/.steam/steam/`.

### 3. Extract and install

Extract the archive you downloaded in step 1. This should give you a bunch of files and folders nested in a root `slimevr` folder.

Now run `<steam path>/steamapps/common/SteamVR/bin/vrpathreg.sh adddriver path/to/slimevr`, filling in the path to your Steam installation and replacing the last argument with the path to the `slimevr` folder.

You will need to restart SteamVR for changes to take effect, though you likely won't notice any difference until you have SlimeVR trackers set up.

### 4. Set the SteamVR launch argument

SteamVR needs a launch argument to allow the SlimeVR driver to connect to the server.
To set the launch argument, open Steam, right-click on SteamVR in your library, select "Properties" and you should see a field to input the launch argument.
In most cases, your launch argument should be something like `PRESSURE_VESSEL_FILESYSTEMS_RW="$XDG_RUNTIME_DIR/SlimeVRDriver" %command%`, but you might need to adjust the command if you already have one set.

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

The recommended way to run SlimeVR on Linux (in a desktop environment) is to use the package made for your distribution. This comes with the server, GUI, and udev rules (required for serial console) all bundled into one. Config and logs will be stored in `~/.config/dev.slimevr.SlimeVR/`.

### Arch Linux

Install [`slimevr-beta-bin`](https://aur.archlinux.org/packages/slimevr-beta-bin) from the AUR.

### Fedora

Install the [.rpm package](https://github.com/SlimeVR/SlimeVR-Server/releases/latest/download/SlimeVR-amd64.rpm) from the latest server release on GitHub.

### Debian/Ubuntu/Mint

Install the [.deb package](https://github.com/SlimeVR/SlimeVR-Server/releases/latest/download/SlimeVR-amd64.deb) from the latest server release on GitHub.

### NixOS

Add the [`slimevr`](https://search.nixos.org/packages?channel=unstable&show=slimevr&query=slimevr) package to `environment.systemPackages` in your system configuration.

### AppImage (for other distributions)

The latest AppImage can be downloaded [from the GitHub releases](https://github.com/SlimeVR/SlimeVR-Server/releases/latest/download/SlimeVR-amd64.appimage). The package made for your distribution should be preferred if available, since the AppImage does not include the udev rules.
You should then be able to start SlimeVR by simply executing the AppImage.

# Serial Console

If you are not using a distribution package of SlimeVR, you will need to grant your user account access to PlatformIO devices. Without the correct access, the Serial Console will continue to display "Connection to serial lost, Reconnecting..." after a SlimeVR tracker has been connected via USB.

The recommended way to gain access is by installing PlatformIO's udev rules. This can be done using the instructions on this page: <https://docs.platformio.org/en/latest/core/installation/udev-rules.html>

# Firewall Rules

On Linux, SlimeVR does not automatically add any firewall rules. If you have a firewall installed, you will need to add the rules manually yourself.

You will need to open ports on:
* `35903/udp`
* `6969/udp`
* `21110/tcp`
* `8266/udp`

Source: [firewall.bat](https://github.com/SlimeVR/SlimeVR-Server/blob/main/server/core/resources/firewall.bat)

# Legacy Setup

If the above installation methods work for you, then you can disregard everything in this section.

If for some reason the above setup does not work for you, then you may need to retrieve and run the SlimeVR components manually.

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

## Running the program

Once everything is all set up, all you need to do to run it is execute the AppImage and it should run everything else on its own.

Note: Only tested on Debian and Ubuntu, if you use Arch please ping lordbagel42 in the SlimeVR Discord server.

*Created by butterscotch.v*
