---
layout: page
nav_order: 5
parent: SlimeVR Setup
---

# Body Proportions Configuration

SlimeVR uses a virtual skeleton to compute positions from the data it receives from your trackers. As part of the setup procedure, this skeleton is made using your real world measurements (in cm) for various body parts in order for SlimeVR to compute its skeleton accurately to your real body.
While these values can be input directly into the SlimeVR server, it is recommended you use the skeleton auto-configuration system. Once you have completed the auto-configuration process, it is also recommended to use the measurements above to confirm the accuracy before finalising the automatic values. There is also an option to [visually check within VR](#configuring-body-proportions-in-vr), described at the bottom of this page.


## Measurements

<table class="bpTable">
   <tr>
      <td>
         <img id="bpImage" src="../assets/img/skeleton.png" alt="Body proportion image"/>
      </td>
      <td>
         <div class="bp" id="torso">Torso length</div>
         <div class="bpdata" id="torso_data">The torso length is from your shoulders to your pelvis.</div>
         <div class="bp" id="chest">Chest distance</div>
         <div class="bpdata" id="chest_data">The chest distance is from your shoulders to around the midpoint of your torso (around the bottom of your sternum).</div>
         <div class="bp" id="waist">Waist distance</div>
         <div class="bpdata" id="waist_data">The waist distance is from your waist to your hip (pelvis).</div>
         <div class="bp" id="hw">Hips width</div>
         <div class="bpdata" id="hw_data">The hips width value is the distance between your femurs.</div>
         <div class="bp" id="legs">Legs length</div>
         <div class="bpdata" id="legs_data">The legs length value is the full length of your legs, from your pelvis to your ankle.</div>
         <div class="bp" id="knee">Knee height</div>
         <div class="bpdata" id="knee_data">The knee height value is from the knee to your ankle.</div>
         <div class="bp" id="foot">Foot length</div>
         <div class="bpdata" id="foot_data">The foot length value is the length of your foot, from your ankle to your toes.</div>
         <div class="bp" id="ho">Head shift</div>
         <div class="bpdata" id="ho_data">The head shift value is from your headset to about the middle of your head.</div>
         <div class="bp" id="nl">Neck length</div>
         <div class="bpdata" id="nl_data">The neck length value is the distance from about the middle of your head to your shoulders.</div>
         <div class="bp" id="offsets">Hip offset / Foot shift</div>
         <div class="bpdata" id="offsets_data">These values offset your real trackers from virtual one, if your avatar has non-human or unusual proportions. A good example of this use is in avatars with digitigrade legs that may have the foot further out or back.</div>
         <div class="bp" id="skelloffsets">Skeleton offset</div>
         <div class="bpdata" id="skelloffsets_data">The Skeleton offset value offsets all your trackers from their physical position forward or backwards. This can be left untouched unless you need it.</div>
      </td>
   </tr>
</table>


## Skeleton Auto-Configuration

Skeleton auto-configuration removes the need to manually input bone lengths using automatic bone length calculations recorded through user movements.

This bypasses the need to manually set the bone lengths, although it is still possible to fine-tune values manually if needed.

### How to Use

*Make sure the headset is ON and worn on your head during this process.*

Before using skeleton auto-configuration, you must prepare your body proportion values by standing straight up and pressing the "Reset All" button under the "Body proportions" section. If this is not done, then the height value used in calculations will be incorrect.

**VERY IMPORTANT:** During the recording, you **must** keep your heels in the same position, otherwise the values will be invalid.

<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/z_HhxXvwkk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

To use skeleton auto-configuration, follow these steps:

1. Stand up straight and press the **"Reset All"** button under the "Body proportions" section of the SlimeVR server window.
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
1. **OPTIONAL:** If you want to save your recording to be used later, click the "Save Recording" button. This is primarily used for debugging purposes. To load recordings later, they must be placed in a subdirectory titled "`Load AutoBone Recordings`" within the SlimeVR server root directory.
1. To calculate your body proportions from the recording (current or saved) press the **"Auto Adjust"** button. You should now be able to see new values for the lengths of your body reported in cm.
1. To use the calculated values, press the **"Apply Values"** button. If the values do not look right, you can try recording again.

### Debugging

If you are having issues with skeleton auto-configuration:
- Make sure you kept your heels in the same position while recording, don't lift your legs or walk around
- Make sure your headset isn't lagging, freezing, or teleporting (use the desktop view in SteamVR to start recording)
- Double check that your trackers are mounted correctly and functioning properly
- Verify that you pressed the "Reset All" button for "Body proportions" while standing up straight to calibrate your height properly
- Make sure the height in the "Body proportions" section is accurate to your own height

If none of these help, you can ask for help in the [#autobone](https://discord.com/channels/817184208525983775/932251355886809118) channel in the SlimeVR Discord.

To help with debugging in the SlimeVR Discord, you can send a recording while asking for help. A recording includes a recording of all your tracker information to help recreate your setup, and will include any movements you do, but no personally identifying information. If you are comfortable with sharing your tracker data, you can find your recordings in the server install directory under the "`AutoBone Recordings`" folder. The most recent recording is auto-saved as "`LastABRecording.pfr`" and any manually saved recordings will be "`ABRecording1.pfr`", "`ABRecording2.pfr`", etc, with the highest number being the most recent.

### How it Works

Skeleton auto-configuration works by recording movement data and simulating that movement rapidly while gradually adjusting the bone lengths. When adjusting bone lengths, the algorithm measures the amount the feet slide to know whether it's achieving a better or worse outcome with each adjustment. By iterating over the data multiple times, the algorithm is able to obtain reasonable bone length values with minimal foot sliding.

The skeleton auto-configuration algorithm uses classic machine learning technique called [hyperparameter optimization][1] to acquire the bone length values. First, many samples of movement data are recorded, then using [hyperparameter optimization][1], the algorithm gradually adjusts the bone lengths to minimize the error of foot sliding. Error is calculated through multiple different methods, but generally it is formulated to retain the headset's reported height, "average" human body proportionality, and reduce the amount that the feet slide during movement.

Almost all of the algorithm's internal values are exposed through the config file. Read the following [Configuration documentation](#configuration-documentation) section to learn more.

### Configuration Documentation

All configuration options should be placed in the `vrconfig.yml` file and are sub-configs to `autoBone`, for example:

```yaml
autoBone:
  numEpochs: 100
  initialAdjustRate: 10.0
  adjustRateMultiplier: 0.995
```

| Config Option                 |  Value Type  | Default Value | Description |
| :---------------------------- | :----------: | :-----------: | :---------- |
| `sampleCount`                 | Integer      | `1000`        | The number of pose samples to record |
| `sampleRateMs`                | Long Integer | `20`          | The millisecond interval between each sample to record |
| `saveRecordings`              | Boolean      | `false`       | When true, recordings will automatically be saved |
| `minDataDistance`             | Integer      | `1`           | The minimum distance between samples to be used while adjusting |
| `maxDataDistance`             | Integer      | `1`           | The maximum distance between samples to be used while adjusting |
| `numEpochs`                   | Integer      | `100`         | The number of epochs (full loops) to iterate over the data |
| `printEveryNumEpochs`         | Integer      | `25`          | The number of epochs before the progress is logged |
| `randomizeFrameOrder`         | Boolean      | `true`        | When true, the frame order will be shuffled for each epoch |
| `scaleEachStep`               | Boolean      | `true`        | When true, the proportions will be scaled to the target height at the end of each epoch |
| `initialAdjustRate`           | Float        | `10.0`        | The factor to adjust the values by each iteration |
| `adjustRateMultiplier`        | Float        | `0.995`       | The factor to decay the adjust rate by each epoch (multiplied by this value) |
| `slideErrorFactor`            | Float        | `0.0`         | The factor of which the foot slide error is used in the error calculation |
| `offsetSlideErrorFactor`      | Float        | `1.0`         | The factor of which the foot offset error is used in the error calculation (captures sliding) |
| `footHeightOffsetErrorFactor` | Float        | `0.0`         | The factor of which the foot height (y axis) offset error is used in the error calculation |
| `bodyProportionErrorFactor`   | Float        | `0.2`         | The factor of which the body proportion error is used in the error calculation (based on human averages) |
| `heightErrorFactor`           | Float        | `0.0`         | The factor of which the body height error is used in the error calculation |
| `positionErrorFactor`         | Float        | `0.0`         | The factor of which the absolute position error is used in the error calculation |
| `positionOffsetErrorFactor`   | Float        | `0.0`         | The factor of which the absolute position offset error is used in the error calculation |
| `calcInitError`               | Boolean      | `false`       | When true, the initial error over the data is reported as epoch 0 |
| `targetHeight`                | Float        | `-1.0`        | The height to use for the height error calculation, this is calculated automatically when negative but can be overridden with this when set to a positive value in meters |

## Configuring Body Proportions Manually
{:.no_toc}

All this configuration can be done from the SteamVR dashboard or within VRChat (in front of a mirror). All measurements are in centimeters. Press `+` or `-` to change lengths by 1 cm. Pressing **Reset** will change the value to a default based on the HMDs current height.

Make sure you have proper mounting before doing this as it will influence your results: [mounting page](putting-on-trackers.md):

You can use a mirror in VRChat to see your trackers' positions. However, compare SteamVR tracker position to IRL joint's position, not your VRChat avatar's joints positions.

Alternatively, you can use the [SlimeVR Overlay](https://github.com/SlimeVR/SlimeVR-Rust#installation) in SteamVR to visualize your bones.

Make sure to adjust the values from the top-down.

##### Head shift (8-12)
{:.no_toc}

Shake your head left to right as if you’re disagreeing. Adjust your head offset until any movement is negligible. All trackers should stay in place.

##### Neck length (8-14)
{:.no_toc}

Move your head up and down as if you’re nodding OR tilt your head to the left and right like a cute, confused, dog. Adjust your neck length until any movement is negligible. All trackers should stay in place.

##### Torso length (50-70)
{:.no_toc}

Modify the value until your SteamVR waist tracker lines up with your belt line (you can use your controller to line them up).

##### Chest (25-40) and Waist (2-6) (when using additional spine trackers)
{:.no_toc}

Sit down hunched and modify values until the waist tracker is closest to hip.

##### Legs (80-100)
{:.no_toc}

Modify until trackers line up vertically with your real feet.

##### Knees (45-60)
{:.no_toc}

Bend your knees slightly while keeping your back straight and modify the value until your feet move the least amount possible OR sit down and modify until your feet touch the floor (not floating above ground).

##### Feet (when using feet extensions)
{:.no_toc}

Set “foot length” at 0, change “foot offset” until feet trackers are inside your avatar’s ankles or at the same level horizontally and set “foot length” back to 5.

##### Hips width (26-32)
{:.no_toc}

Default value is good. Can try to tweak to make your leg trackers line up when resetting, but do not increase in the goal of preventing leg crossing.

##### Hip offset (0)
{:.no_toc}

Keep at 0 unless you have a particular problem with your avatar.

##### Skeleton offset (0)
{:.no_toc}

Keep at 0 unless you have a particular problem with your avatar.

##### Shoulders distance (4-10) and Shoulders width (30-42)
{:.no_toc}

Set Upper arm length to 0 and adjust the values until the elbow trackers are on your shoulders.

##### Upper/Lower arm distance (20-35)
{:.no_toc}

Adjust so that the SteamVR tracker is on your elbow.

##### Controller distance z (10-20) and Controller distance y (2-8)
{:.no_toc}

Rotate wrist and adjust until elbow tracker has the least amount of sliding.

##### Elbow offset (0)
{:.no_toc}

Keep at 0 unless you have arm tracking problems using lower + upper arm tracking from controller.

[1]: https://wikipedia.org/wiki/Hyperparameter_optimization "Wikipedia - In machine learning, hyperparameter optimization or tuning is the problem of choosing a set of optimal hyperparameters for a learning algorithm."

***Next step - [Setting up the reset bindings](setting-reset-bindings.md)***

*Created by Butterscotch!#0226, Eiren and CalliePepper#0666, edited and styled by CalliePepper#0666, Erimel#7159, Emojikage#3095, Butterscotch!#0226, and Spazzwan#0001. Video by adigyran#1121 with help of MightyGood#1341.*

<script src="../assets/js/bp.js"></script>
