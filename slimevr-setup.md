---
layout: page
nav_order: 4
---

# SlimeVR setup
{:.no_toc}

This guide should help you set up SlimeVR trackers and software.

**If something can't be resolved using these instructions, please contact us in the [official SlimeVR discord](https://discord.gg/SlimeVR) #technical-support channel for help!**

## Table of contents
{:.no_toc}

* TOC
{:toc}

## Readiness checklist

* Download the latest [SlimeVR Installer](https://github.com/SlimeVR/SlimeVR-Installer/releases/latest/download/slimevr_web_installer.exe) and install it.
* Turn each tracker on and see if they work.

Make sure that when you turn on your tracker, it's lying on a flat surface. The sensors need to calibrate for 10-20 seconds in a stable environment (dependent on the model of your IMU).

Each tracker should blink a LED briefly on startup, and then blink every few seconds to indicate its status as follows:

| Number of blinks | Status                                             |
| :--------------: |:-------------------------------------------------- |
| 1                | Tracker is ready                                   |
| 2                | Connecting to SlimeVR server                       |
| 3                | Connecting to wifi                                 |
| 5                | IMU error                                          |


If a tracker doesn't start up, try charging it. Connect the tracker via USB port to your PC or any USB charger. Red LED light should light up to indicate that it's charging. Green LED light means it's fully charged. Try turning the tracker on during charging to see if it works.

**Please note that as a rule, DIY trackers should be kept off while charging outside of this specific case.**

## Before you start

#### Check that driver loads and connects
{:.no_toc}

1. Start SteamVR, go to **Settings** > **Manage Add-Ons**. Check if SlimeVR exists here, set it to **On**.

   ![img](https://eiren.cat/XHKh)
1. Start the SlimeVR Server through the start menu via the "SlimeVR Server" shortcut.
1. Restart SteamVR. Now you should see 3 trackers active in SteamVR:

   ![img](https://eiren.cat/Dhh2)
1. In SlimeVR Server, you should see HMD tracker position and rotation change as you move your headset around (interface subject to major changes!):

   ![img](https://eiren.cat/Wf2v)

## Connect trackers

> **Note:** If you are using DIY trackers and have hardcoded the WiFi credentials, you can skip these steps.

1. Turn a tracker on and connect it to your PC's USB port.
1. In SlimeVR Server, click **WiFi**.
1. In the opened **WiFi Settings** window, enter your wifi credentials in **Network name** and **Network password** fields, then click **Send**.
1. If all work fine, you'll see the message `[OK] CMD SET WIFI OK: New wifi credentials set, reconnecting` and in a few seconds, you will see the tracker appear in SlimeVR Server.
1. Close the **WiFi Settings** window and disconnect the tracker.
1. Repeat the steps for each tracker.

![img](https://cdn.discordapp.com/attachments/852339724731154494/867484289775042570/unknown.png)

### Troubleshooting

If all trackers don't show up, this can be caused by Windows Firewall blocking the connection. To fix this, go to SlimeVR Server folder and run `firewall.bat` as administrator. There are additional steps that can be taken on the [common issues page](common-issues.md#the-trackers-are-connected-to-my-wifi-but-dont-turn-up-on-slimevr) if this does not work.

If some trackers don't show up, try turning them off and on again. You can rotate tracker around and see it change rotation in the server to figure out which tracker is which.

If some trackers don't change their rotation as you move them (including extensions), or display 0 0 0 rotation, try turning them off and on again, usually it should fix the issue.

If any tracker displays ERROR as it's status, or have orange and blue light permanently on, that's not good. Try restarting them and see if it helps. If not, contact Eiren.

## Putting trackers on

Put trackers on according to the pictures. These are the recommended positions, you can use any comfortable position for you, but there are a few rules:

![img](https://i.imgur.com/gkXCPMv.png)

1. You should set Tracker role to the proper role according to body part you put your tracker on. This includes tracker extensions. Use pictures to reference role names and their recommended mounting points.
1. You should set Tracker direction according to your mounting direction. **You can only mount trackers facing forward, left, backwards, or right. You can not mount trackers facing other directions (yet). When you mount it, make sure they sit tight, and face as much in this direction as possible when you're standing straight. I.e. "Forward" should face the same way your HMD is facing when you look forward while standing!**
1. You can mount trackers tiled forward/backward or on the side, this will not mess up the tracking. 
1. You can mount trackers in any place on the designated body part you find comfortable, however the less the area is deformed by muscular movement the better the tracking will be. Make sure the tracker moves when you bend the joint to register movement. **Pay special attention to the waist tracker, there are many places where you can mount it and it won't register you bending over.**


### Recommended mounting points

![img](https://eiren.cat/ECvD)

![img](https://eiren.cat/DvJi)

#### Alternative mounting points

<iframe width="560" height="315" src="https://www.youtube.com/embed/MMJ8843zqNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Recommended tracker positions are:

* Waist: facing left above waist or in the centre of the waist depending on your build.
* Chest: facing forward middle of the chest (or facing left the same as waist, whatever is more comfortable). Pay attention to tracker extension "front" and "up" sides (see picture below).
* Leg: right above the knee or higher up the thigh depending on your build.
* Ankle: on the ankle.
* Foot: top of the foot. Tracker's "up" facing towards ankle, and "front" facing up.

You can also put the main tracker on the chest, and tracker extension on the waist. It's more comfortable and stable this way, since your hand won't bump into waist tracker.


![img](https://eiren.cat/TyTd)
*Form and direction of axes are subject to change in future revisions!*

## Configure proportions and trackers

Before launching SteamVR, check the checkboxes relative to how many SteamVR virtual trackers you wish to spawn.

![img](https://i.imgur.com/To9z4Pd.png)

Please note that this only affects the virtual trackers in Steam and not your SlimeVR trackers. If you only have Waist and Legs ticked, they will still be accessing up to an 8 IMU setup (waist,chest,legs,ankles and feet). Additionally, VRChat only supports 3 virtual trackers so it does not require more than Waist and Legs.

Launch SteamVR when you're ready.

### Set tracker roles in SteamVR

![img](https://images-ext-2.discordapp.net/external/htrUQYMIEtpmFQJEYjOBGQjtJUnru0UNb2qhCwQPUos/https/i.imgur.com/ftWpluV.png)

Check your Vive Trackers roles in SteamVR config. They should be set to WAIST, LEFT_FOOT, RIGHT_FOOT in this order for trackers named `/devices/SlimeVR/SlimeVRTracker*` in a standard waist and legs virtual tracker setup.

After you go into SteamVR, you should see 3 floating trackers under you. They're all in the wrong place, it's okay, follow the instructions to make it right.

### Access SlimeVR Server in VR

Use one of the ways to access SlimeVR Server GUI out of the SteamVR. We recommend adding SlimeVR Server as a view on your SteamVR dashboard, but you can use any program that lets you interact with your PC in VR, including just SteamVR desktop view.

![img](https://eiren.cat/fUqZ)

### Reset trackers

Perform a trackers reset:

1. Stand straight, legs vertical (not together), trackers facing their designated direction.
1. Press **RESET** button in SlimeVR Server.
1. Look forward as the timer on the button ticks.
1. After timer ends you should see trackers align in the right direction and be under you.

Look down. Ideally, after reset trackers should be directly under you. If you're using feet trackers, they can be shifted a bit forward. Refer to [Configure body proportions](#configure-body-proportions) to place trackers in their right place.

### Configure body proportions

#### Using skeleton auto-configuration (AutoBone)
{:.no_toc}

Refer to [Skeleton auto-configuration](skeleton-auto-config.md) for more information.

#### Manually
{:.no_toc}

Check the "Body proportions" section of SlimeVR. You can do rough calibration by pressing a `Reset All` button. Stand straight and face forward like you do when resetting trackers before pressing it, wait for the timer to end. Quick calibration will configure your body based on HMD position (your height). It's not perfect, you can adjust it further using instructions below.

All this configuration is done from SteamVR dashboard. All measurements are in centimeters. Press `+` or `-` to change lengths by 1 cm. Press `Reset` to set it to default value based on your height, You should see 3 trackers: waist tracker, and two feet trackers. They're referenced in this manual in this way.

![img](https://eiren.cat/atSL)

##### Neck
{:.no_toc}

Move your head up and down like you're nodding. All trackers should stay in place as you do so, their movement should be negligible. If they move too much, adjust your neck length and headset shift. Start with neck length, and see how it changes stability. Headset shift is usually the same for everyone and is roughly 10 cm.

##### Waist
{:.no_toc}

![img](https://eiren.cat/Mlkd)

Put one of your controllers near your Thighbone (also known as Femur) - the bone around which your legs rotate.

Adjust Waist Length so that your Waist tracker is at the same height as your controller.

##### Chest
{:.no_toc}

Start with Chest Length set to half of Waist Length. After configuring everything else, you can experiment with it to better match how you bend your back during movements.

##### Legs
{:.no_toc}

Adjust Legs Length so that your legs joints Y coordinate is 0. You can do this quickly by standing up and pressing "Reset" near the Legs Length. This will also reset Knees Length to 50% of your Legs Length.

##### Knees
{:.no_toc}

*Set Feet Length to 0 before configuring your knees length!*

Bend your knees slightly while keeping your back straight. Watch if your feet trackers move forward or backwards as you do so.

Adjust Knees Length to make this movement minimal. If your feet trackers move forward when you bend your knees, your Knee Length is too high, if they move backwards - too low.

##### Feet
{:.no_toc}

Set Feet Length to 5 centimeters. Experiment with it if you feel like your feet don't match well your avatar's feet.

##### Other
{:.no_toc}

Virtual Waist is the shift from the Waist that will be reported to SteamVR, but not used to resolve other trackers. Can sometimes be useful for different strangely proportioned avatars. You can leave it at 0 for now.

## Using 1 or more than 3 SteamVR trackers

By default SlimeVR will spawn 3 trackers for SteamVR - Waist and 2 Feet. If you're using only 1 tracker (waist), you need to set selector on top to "Waist". If you want to play games that support more than 3 trackers, you can set them to more trackers - add Knees if you're using 5 trackers, or Knees and Chest if you also have chest. **After you change this configuration, you will need to restart SlimeVR Server.**

Currently maximum 6 trackers mode is supported. Their tracker roles should be set to WAIST, LEFT_FOOT, RIGHT_FOOT, CHEST, LEFT_KNEE, RIGHT_KNEE in this order for trackers named `/devices/SlimeVR/SlimeVRTracker*`.

## Setting up the reset key bindings

The SlimeVR Server has the following default key bindings:

- `CTRL+ALT+SHIFT+U` for Quick reset.
- `CTRL+ALT+SHIFT+Y` for Reset.

These keybindings can be configured by editing the following line of the `vrconfig.yml` file:

```yaml
keybindings: {reset: CTRL+ALT+SHIFT+Y, quickReset: CTRL+ALT+SHIFT+U}
```

If you want to be able to bind these to your controller, you will need an additional application such as [OVR Advanced Settings](https://store.steampowered.com/app/1009850/OVR_Advanced_Settings/).

### OVR Advanced Settings bindings

1. In the Windows Explorer window, enter `%appdata%\AdvancedSettings-Team\OVR Advanced Settings.ini` in **Address bar** and press Enter. Notepad with the `OVR Advanced Settings.ini` file contents should open.
1. Find the `keyboardOne` and `keyboardTwo` lines and replace them with the following lines:

   ```ini
   keyboardOne=^*>y ; CTRL+ALT+SHIFT+Y - Reset
   keyboardTwo=^*>u ; CTRL+ALT+SHIFT+U - Quick reset
   ```

   > **Note:** If you changed default SlimeVR Server key bindings, refer to [Keyboard Input Guide](https://github.com/OpenVR-Advanced-Settings/OpenVR-AdvancedSettings/blob/master/docs/keyboard_input_guide.md).

1. In SteamVR Dashboard, open OVR Advanced Settings and select **Bindings**. If you don't see the icon for OVR Advanced Settings on your dashboard, try running OVR Advanced Settings from your Steam library and check if the icon appeared on your dashboard.
1. In the opened window, select the **Misc** tab.
1. Double-click the plus sign near the desired button name to add a binding.
1. In the opened dialog window, select **BUTTON**.
1. Click **None** near the desired button action. To see more button actions, click **Show more**.
1. In the opened **Boolean Actions** window, select **Keyboard Shortcut One**.
1. Repeat previous two steps for **Keyboard Shortcut Two**.

<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/KuCjmHBpH7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Notes

- If you reset your playspace (for example long pressing Oculus button on Quest), you will need to do a [tracker reset](#reset-trackers).
- SlimeVR Server uses [Java 11](https://adoptium.net/releases.html?variant=openjdk11&jvmVariant=hotspot).
- If you need the SlimeVR Steam driver you can find it [here](https://github.com/SlimeVR/SlimeVR-OpenVR-Driver/releases/latest/download/slimevr-openvr-driver-win64.zip).

## References

* [BNO08X calibration documentation](https://xdevs.com/doc/CEVA/BNO080-BNO085-Sesnor-Calibration-Procedure.pdf)
* [MPU-9250 product specification](https://invensense.tdk.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

*Created by Eiren, edited by adigyran#1121, CalliePepper#0666 and Emojikage#3095, styled by CalliePepper#0666. Videos created by ZRock35#9574*
