# SlimeVR 101

## What is SlimeVR?

SlimeVR is a low-cost solution to full-Body tracking in virtual reality. It uses forward kinematics[^note] to build a model of your skeleton calculated from the rotation of each individual tracker, with your headset and controllers being the only absolute known position.

Because the headset is the only required absolute data point and that the rest of the skeleton is derived from it, SlimeVR does not require lighthouses or other forms of additional tracking to model your movement. SlimeVR uses data from Inertial Measurement Units (IMU) to determine the rotation of each tracker, and the number of IMUs used determines how many tracking points are available.

<hr/>

[^note]: Forward kinematics is the process of calculating the position of a body part (like a foot or arm) based on the angles of its joints. In simple terms, given how your joints (like knee or elbow) are positioned, forward kinematics tells you where your foot or arm will be in space. It's like figuring out where your foot will go when you bend your leg a certain way.

## How many trackers do you need?

<div class="embeddedVideo">
	<video name="Tracking Example" playsinline autoplay muted loop>
	  <source src="./assets/videos/ostriches.webm" type="video/webm">
	  <source src="./assets/videos/ostriches.mov" type="video/quicktime">
	</video><br>
	GIF thanks to Butterscotch. Dance thanks to ToriKari.
</div>

If you look at the GIF above, each line there represents a tracked "bone". The more points of rotation you add, the more defined the final tracking will be. As an example, the GIF above uses the "Core Set" and as such, there is no foot rotation.

Depending on how you plan to use FBT in VR, choose one of the following options.

| Set Variant        | IMUs | Additional Trackers Compared to Previous Set | Expected Audience                       | Benefits                                                                                                                                  |
| ------------------ | ---- | -------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Lower-Body Set     | 5    | Spine, Knees, Feet                           | Casual VR users                         | Provides positional tracking for legs and spine. Limited tracking for foot orientation and lower spine bending.                           |
| Core Set           | 6    | + Extra Spine Tracker                        | Users who want better stability         | Adds an extra spine tracker for improved stability, especially when sitting, lying down, or bending over.                                 |
| Enhanced Core Set  | 8    | + Foots Orientation (Extra Foot Trackers)    | Users who sit or lie down often         | Adds foot movement tracking for more expressive, emotive poses when seated or lying down.                                                 |
| Full-Body Set      | 10   | + Elbows                                     | Dancers, role-players, immersive users  | Enables independent elbow movement, providing more realistic upper-body motion and increased immersion in VR.                             |
| Deluxe Tracker Set | 16   | Fully Customizable                           | Motion capture professionals, animators | Can be used for motion capture without VR gear, split into two Enhanced Core Sets, or customized as needed for flexibility and precision. |

For more visuals on what these tracking options look like, watch this video:

<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/KN3dxGNAq34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## What is an extension?

An extension is a singular auxiliary IMU attached to a primary tracker and placed at another location. This allows you to build a secondary tracker without the need for an extra battery, charge board and microcontroller. These are sometimes referred to as AUX trackers (auxiliary trackers).

Extensions allows a tracker to give accurate detail between two bend points that sit close to each other, such as tracking both the lower leg and the foot without needing another tracker that needs to communicate and be charged separately.

![Extension Image](assets/img/extension.jpg)<br>
*Devkit picture by erimel*

The length of the extension is dependent on the cabling used to connect them (shorter than 80cm is a safe range). For more information please [check the tracker schematics page.](diy/tracker-schematics.md)

The suggested extension locations are:

1. A hip extension attached to the chest tracker.
1. A left foot extension attached to the left ankle tracker.
1. A right foot extension attached to the right ankle tracker.

On the Crowd Supply store page and on our discord server, you may find a notation that specifies the number of primary and auxiliary IMUs with a plus sign. For example, the Enhanced Core Set noted above would be called a 5+3 set up, which consists of 5 microcontrollers and 8 IMU. For a better visual on how this looks when on a person, please check the [recommended mounting points section of the server set up](server/putting-on-trackers.md#recommended-mounting-points).

Please note: Building extensions is not necessary, as the foot and chest trackers will work as standalone trackers if you prefer. However, these docs assume that you are building them as extensions.

*Created by calliepepper. Edited by spazzwan and [Depact](https://github.com/Depact). Video created by zrock35*
