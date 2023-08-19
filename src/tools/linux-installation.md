# Running SlimeVR

The recommended way to run SlimeVR on Linux (in a desktop environment) is to use the standalone AppImage executable. This comes with the server, GUI, and Java runtime all bundled into one.

[The latest AppImage can be downloaded here](https://github.com/SlimeVR/SlimeVR-Server/releases/latest/download/SlimeVR-amd64.appimage), or obtained by downloading 
SlimeVR-amd64.appimage from the latest release.

For most common Linux distros, you should then be able to start SlimeVR by simply executing the AppImage. Config and logs will be stored in `~/.config/dev.slimevr.SlimeVR/`

# Firewall Rules

On Linux, SlimeVR does not automatically add any firewall rules. If you have a firewall installed, you will need to add the rules manually yourself.

You will need to open ports on:
* `35903/udp`
* `6969/udp`
* `21110/tcp`

Source: [firewall.bat](https://github.com/SlimeVR/SlimeVR-Server/blob/main/server/core/resources/firewall.bat)

# Legacy Setup

If the above AppImage works for you, then you can disregard everything in this section.

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

## Java

The simplest way to do this is to download a portable Java JRE.

### 1. Download Java 17 JRE archive

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

### 2. Extract and rename

1. Extract the downloaded archive (ex. `OpenJDK17U-jre_x64_linux_hotspot_17.0.5_8.tar.gz`) to get a folder named something like `jdk-17.0.5+8-jre`.
2. Rename the extracted folder (ex. `jdk-17.0.5+8-jre`) to `jre`, such that the directory structure looks something like `/jre/bin/java`.

## Setting up the install folder

To most easily use the program, you'll need to have things structured in a specific way.

1. Make a new folder to contain your installation, name it whatever you want (ex. `SlimeVR Server`).
2. Place the SlimeVR Server, SlimeVR GUI, and Java JRE components you downloaded into the folder you made

Example of the final directory structure:

```
/SlimeVR Server/
    |- /jre/bin/java
    |- /slimevr.jar
    |- /slimevr-ui_0.0.0_amd64.AppImage
```

## Running the program

Once everything is all set up, all you need to do to run it is execute the AppImage and it should run everything else on its own.

Note: Only tested on Debian and Ubuntu, if you use Arch please ping lordbagel42 in the SlimeVR Discord server.

*Created by butterscotch.v*
