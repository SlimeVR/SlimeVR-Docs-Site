---
layout: page
title: Skeleton Auto-Config
nav_order: 4
---
# How to use Skeleton Auto-Configuration
Before using skeleton auto-configuration, you must "reset" your body proportion values by standing straight up and pressing the "Reset All" button under the "Body proportions" section. If this is not done, then the height value used in calculations will be incorrect.

**VERY IMPORTANT:** During recording, you **must** keep your heels in the same position, otherwise the values will be invalid.

To use skeleton auto-configuration, follow these steps:
1. Stand straight up and pressing the **"Reset All"** button under the "Body proportions" section of the SlimeVR server window
2. Locate and press the **"Auto"** button under the "Body proportions" section to open the skeleton auto-configuration window
3. Stand in front of a chair
4. Keep your heels on the ground in the same position for the duration of recording
5. Press the **"Start Recording"** on the skeleton auto-configuration window, the text on the button will change to indicate that recording has started - recording will take approximately 20 seconds
6. **Move** until the text on the button changes back to "Start Recording", the current best known movements for calibration are as follows:
    1. Twist upper body left, then lean right (toward toes) 
    2. Twist upper body right then lean left (toward toes)
    3. Sit down on a chair then stand up
    4. Bend down to touch toes then back up
    5. Sit down and wiggle knees then stand up
    6. Random wiggles and movements
7. When the button text changes to "Start Recording" again, other buttons should become enabled
8. **OPTIONAL:** If you want to save your recording to be used later, click the "Save Recording" button, this is currently mostly helpful for debugging purposes, to load recordings later, they must be placed in a subdirectory titled "`LoadRecordings`" within the SlimeVR server directory
9. To calculate your body proportions from the recording (current or saved) press the **"Auto Adjust"** button; you should be able to see new values for the lengths of your body reported in meters
10. To use the calculated values, press the **"Apply Values"** button. If the values do not look right, you can try recording again
## How does it work?
Skeleton auto-configuration works by recording movement data and simulating that movement rapidly while gradually adjusting the bone lengths. When adjusting bone lengths, the algorithm measures the amount the feet slide to know whether it's doing better or worse with each adjustment. By iterating over the data multiple times, the algorithm is able to obtain reasonable bone length values with minimal foot sliding.

The skeleton auto-configuration algorithm uses classic machine learning technique called [gradient descent][1] to acquire the bone length values. First, many samples of movement data are recorded, then using [gradient descent][1], the algorithm gradually adjusts the bone lengths to minimize the error of foot sliding. Error is calculated through multiple different methods, but generally it is formulated to retain the headset's reported height, "average" human body proportionality, and reduce the amount that the feet slide during movement.

Almost all of the algorithm's internal values are exposed through the config file, read the following [Configuration Documentation](#configuration-documentation) section to learn more.
## Configuration Documentation
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
| --------------------------- | :----------: | :-----------: | ------------------------------------------------------------ |
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
| `manualTargetHeight`        |    Float     |    `-1.0`     | The height to use for the height error calculation, this is calculated automatically when negative but can be overrided with this when set to a positive value in meters |

[1]: https://wikipedia.org/wiki/Gradient_descent "Wikipedia - Gradient descent is an algorithm that optimizes an error value by gradually adjusting a set of variables"

*Created by Butterscotch!#7878, editted and styled by CalliePepper#0666*
