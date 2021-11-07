---
layout: page
nav_order: 1
parent: SlimeVR setup
---

# Body proportions configuration

SlimeVR creates a virtual skeleton for applying data it receives from your trackers, in order to pass relevant data to your HMD. As part of the setup procedure you will be required to provide measurements (in cm) for various lengths for the rotations of your trackers to be read correctly.


## Measurements

<table class="bpTable">
   <tr>
      <td>
         <img id="bpImage" src="assets/img/skeleton.png" alt="Body proportion image"/>
      </td>
      <td>
         <div class="bp" id="chest">Chest</div>
         <div class="bpdata" id="chest_data">The chest value is from the shoulders to around the midpoint of your torso.</div>
         <div class="bp" id="waist">Waist</div>
         <div class="bpdata" id="waist_data">The waist value is full torso length, from the shoulders to the pelvis.</div>
         <div class="bp" id="hw">Hips width</div>
         <div class="bpdata" id="hw_data">The hips width value is the distance between your femurs.</div>
         <div class="bp" id="legs">Legs length</div>
         <div class="bpdata" id="legs_data">The legs length value is the full length of your legs, from your pelvis to your ankles.</div>
         <div class="bp" id="knee">Knee height</div>
         <div class="bpdata" id="knee_data">The knee height value is from the knee to your ankles.</div>
         <div class="bp" id="foot">Foot Length</div>
         <div class="bpdata" id="foot_data">The foot length value is your foot length, from your ankles to your toes.</div>
         <div class="bp" id="ho">Head offset</div>
         <div class="bpdata" id="ho_data">The head offset value is from your headset to about the middle of your head.</div>
         <div class="bp" id="nl">Neck length</div>
         <div class="bpdata" id="nl_data">The neck length value is from about the middle of your head to your shoulders.</div>
         <div class="bp" id="vw">Virtual waist</div>
         <div class="bpdata" id="vw_data"> The virtual waist value is the offset from the bottom of your torso to your pelvis.</div>
      </td>
   </tr>
</table>

While these values can be inputted directly into the SlimeVR server, it is recommended you use the skeleton auto-configuration system. Once it is complete, use the measurements above to eyeball the accuracy before finalising the values. There is also an option to [visually check within VR](#configuring-body-proportions-in-vr) at the bottom of this page.

## Skeleton auto-configuration

Skeleton auto-configuration removes the need to manually input bone lengths using automatic bone length calculations through recording player movements.

This bypasses the need to manually set the bone lengths, although they can still be fine tuned if needed.

### How to use

Before using skeleton auto-configuration, you must "reset" your body proportion values by standing straight up and pressing the "Reset All" button under the "Body proportions" section. If this is not done, then the height value used in calculations will be incorrect.

**VERY IMPORTANT:** During the recording, you **must** keep your heels in the same position, otherwise the values will be invalid.

<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/z_HhxXvwkk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

To use skeleton auto-configuration, follow these steps:

1. Stand straight up and pressing the **"Reset All"** button under the "Body proportions" section of the SlimeVR server window.
1. Locate and press the **"Auto"** button under the "Body proportions" section to open the skeleton auto-configuration window.
1. Stand in front of a chair.
1. Keep your heels on the ground in the same position for the duration of recording.
1. Press the **"Start Recording"** on the skeleton auto-configuration window, the text on the button will change to indicate that recording has started - recording will take approximately 20 seconds.
1. **Move** until the text on the button changes back to "Start Recording", the current best known movements for calibration are as follows:
   1. Twist upper body left, then lean right (toward toes).
   1. Twist upper body right then lean left (toward toes).
   1. Sit down on a chair then stand up.
   1. Bend down to touch toes then back up.
   1. Sit down and wiggle knees then stand up.
   1. Random wiggles and movements.
1. When the button text changes to "Start Recording" again, other buttons should become enabled.
1. **OPTIONAL:** If you want to save your recording to be used later, click the "Save Recording" button, this is currently mostly helpful for debugging purposes, to load recordings later, they must be placed in a subdirectory titled "`LoadRecordings`" within the SlimeVR server directory.
1. To calculate your body proportions from the recording (current or saved) press the **"Auto Adjust"** button; you should be able to see new values for the lengths of your body reported in cm.
1. To use the calculated values, press the **"Apply Values"** button. If the values do not look right, you can try recording again.

### How it works

Skeleton auto-configuration works by recording movement data and simulating that movement rapidly while gradually adjusting the bone lengths. When adjusting bone lengths, the algorithm measures the amount the feet slide to know whether it's doing better or worse with each adjustment. By iterating over the data multiple times, the algorithm is able to obtain reasonable bone length values with minimal foot sliding.

The skeleton auto-configuration algorithm uses classic machine learning technique called [gradient descent][1] to acquire the bone length values. First, many samples of movement data are recorded, then using [gradient descent][1], the algorithm gradually adjusts the bone lengths to minimize the error of foot sliding. Error is calculated through multiple different methods, but generally it is formulated to retain the headset's reported height, "average" human body proportionality, and reduce the amount that the feet slide during movement.

Almost all of the algorithm's internal values are exposed through the config file, read the following [Configuration documentation](#configuration-documentation) section to learn more.

### Configuration documentation

All configuration options should be placed in the `vrconfig.yml` file and are sub-configs to `autobone`, for example:

```yaml
zoom: 1.0
virtualtrackers: 3
autobone:
    sampleCount: 1000
    slideErrorFactor: 1.0
    calculateInitialError: True
```

| Config Option               |  Value Type  | Default Value | Description                                                  |
| :-------------------------- | :----------: | :-----------: | :----------------------------------------------------------- |
| `sampleCount`               |   Integer    |    `1000`     | The number of pose samples to record                         |
| `sampleRateMs`              | Long Integer |     `20`      | The millisecond interval between each sample to record       |
| `saveRecordings`            |   Boolean    |    `False`    | When true, recordings will automatically be saved            |
| `minimumDataDistance`       |   Integer    |      `2`      | The minimum distance between samples to be used while adjusting |
| `maximumDataDistance`       |   Integer    |     `32`      | The maximum distance between samples to be used while adjusting |
| `epochCount`                |   Integer    |      `5`      | The number of epochs (full loops) to iterate over the data   |
| `adjustRate`                |    Float     |     `2.5`     | The factor to adjust the values by each iteration            |
| `adjustRateDecay`           |    Float     |    `1.01`     | The factor to decay the adjust rate by each epoch (divided by this value) |
| `slideErrorFactor`          |    Float     |     `1.0`     | The factor of which the foot slide error is used in the error calculation |
| `offsetErrorFactor`         |    Float     |     `0.0`     | The factor of which the foot offset error is used in the error calculation |
| `proportionErrorFactor`     |    Float     |     `0.2`     | The factor of which the body proportion error is used in the error calculation |
| `heightErrorFactor`         |    Float     |     `0.1`     | The factor of which the body height error is used in the error calculation |
| `positionErrorFactor`       |    Float     |     `0.0`     | The factor of which the absolute position error is used in the error calculation |
| `positionOffsetErrorFactor` |    Float     |     `0.0`     | The factor of which the absolute position offset error is used in the error calculation |
| `calculateInitialError`     |   Boolean    |    `True`     | When true, the initial error over the data is reported as epoch 0 |
| `manualTargetHeight`        |    Float     |    `-1.0`     | The height to use for the height error calculation, this is calculated automatically when negative but can be overridden with this when set to a positive value in cm |

## Configuring body proportions in VR
{:.no_toc}

All this configuration is done from SteamVR dashboard. All measurements are in centimeters. Press `+` or `-` to change lengths by 1 cm. Pressing `Reset` will change the value to a default based on the HMDs current height. This guide assumes you have only `Waist` and `Legs` selected as SteamVR Trackers on the SlimeVR server.

![img](https://eiren.cat/atSL)

##### Neck Length
{:.no_toc}

Move your head up and down as if you're nodding. All trackers should stay in place as you do so, any movement should be negligible. If they move too much, adjust your neck length and head offset. Neck length should be the main contributing factor as head offset is usually the same for everyone at roughly 10 cm.

##### Waist
{:.no_toc}

![img](https://eiren.cat/Mlkd)

Put one of your controllers near where your thighbone connects to your hips, the point around which your legs rotate.

Adjust Waist Length so that your Waist tracker is at the same height as your controller.

##### Chest
{:.no_toc}

Start with Chest Length set to half of Waist Length. After configuring everything else, you can experiment with it to better match how you bend your back during movements.

##### Legs
{:.no_toc}

Adjust Legs Length so that your legs joints Y coordinate is 0. You can do this quickly by standing up and pressing "Reset" near the Legs Length. This will also reset Knees Length to 50% of your Legs Length.

##### Knees
{:.no_toc}

*It can help to set Foot length to 0 before trying these steps.*

Bend your knees slightly while keeping your back straight. Watch if your feet trackers move forwards or backwards as you do so.

Adjust Knees Length to make this movement minimal. If your feet trackers move forward when you bend your knees, your Knee Length is too high, if they move backwards it is too low.

##### Feet
{:.no_toc}

Set Feet Length to 5 centimeters. Experiment with it if you feel like your feet don't match well your avatar's feet.

##### Virtual Waist
{:.no_toc}

Virtual Waist is the shift from the Waist that will be reported to SteamVR, but not used to resolve other trackers. It can be useful for different strangely proportioned avatars, but can be left at 0 if you do not see any issues.

[1]: https://wikipedia.org/wiki/Gradient_descent "Wikipedia - Gradient descent is an algorithm that optimizes an error value by gradually adjusting a set of variables"

*Created by Butterscotch!#7878, Eiren and CalliePepper#0666, edited and styled by CalliePepper#0666 and Emojikage#3095. Video by adigyran#1121 with help of MightyGood#1341.*
<script src="assets/js/bp.js"></script>