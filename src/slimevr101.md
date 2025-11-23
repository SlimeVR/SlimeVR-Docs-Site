<link rel="stylesheet" href="slimevr101.css">

# SlimeVR 101

## What is SlimeVR?

SlimeVR is an affordable solution for full-body tracking in virtual reality. It uses forward kinematics[^note] to create a model of your body by calculating the position of each tracker based on its rotation.
The only fixed point is your headset, which serves as the primary reference position.

Since the headset is the only fixed data point, SlimeVR doesn’t need extra tracking equipment like lighthouses. It relies on Inertial Measurement Units (IMUs) to track the rotation of each device. The more IMUs used, the more tracking points are available for your body.

[^note]: Forward kinematics is the process of calculating the position of a body part (like a foot or arm) based on the angles of the bones. Given how your joints (like knee or elbow) are positioned, forward kinematics tells you where your foot or arm will be in space. It's like figuring out where your foot will go when you bend your leg a certain way.

## How Many Trackers Do You Need?

Each tracker measures the rotation of a bone, and when the data from all the bones is combined, it creates a simulation of your physical poses and movements. For this reason, you should aim to use enough trackers to meet your specific Full Body Tracking needs.

<div class="embeddedVideo">
	<video name="Tracking Example" playsinline autoplay muted loop>
	  <source src="./assets/videos/ostriches.webm" type="video/webm">
	  <source src="./assets/videos/ostriches.mov" type="video/quicktime">
	</video><br>
	GIF thanks to Butterscotch. Dance thanks to ToriKari. Each line represents a tracked "bone".
</div>

Depending on how you plan to use FBT in VR, choose one of the following options:

<table>
  <thead>
    <tr>
      <th>Set Variant</th>
      <th>IMUs</th>
      <th>Additional Trackers Compared to Previous Set</th>
      <th>Expected Audience</th>
      <th>Benefits</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lower-Body Set</td>
      <td data-label="IMUs">5</td>
      <td data-label="Tracker placement:">Spine, Knees, Ankles</td>
      <td data-label="Expected Audience:">Casual VR users</td>
      <td>
        Provides positional tracking for legs and spine. Limited tracking for
        foot orientation and lower spine bending.
      </td>
    </tr>
    <tr>
      <td>Core Set</td>
      <td data-label="IMUs">6</td>
      <td data-label="Additional Trackers:">+ Extra Spine Tracker</td>
      <td data-label="Expected Audience:">Users who want hip rotation</td>
      <td>
        Adds an extra spine tracker on the hip for improved stability, especially when
        sitting, lying down, or bending over.
      </td>
    </tr>
    <tr>
      <td>Enhanced Core Set</td>
      <td data-label="IMUs">8</td>
      <td data-label="Additional Trackers:">+ Feet Orientation (Extra Feet Trackers)</td>
      <td data-label="Expected Audience:">Users who sit or lie down often</td>
      <td>
        Adds foot movement tracking for more expressive, emotive poses when
        seated or lying down.
      </td>
    </tr>
    <tr>
      <td>Full-Body Set</td>
      <td data-label="IMUs">10</td>
      <td data-label="Additional Trackers:">+ Elbows</td>
      <td data-label="Expected Audience:">Dancers, role-players, immersive users</td>
      <td>
        Enables independent elbow movement, providing more realistic upper-body
        motion and increased immersion in VR.
      </td>
    </tr>
    <tr>
      <td>Deluxe Tracker Set</td>
      <td data-label="IMUs">16</td>
      <td data-label="Additional Trackers:">Fully Customizable</td>
      <td data-label="Expected Audience:">Motion capture professionals, animators</td>
      <td>
        Can be used for motion capture without VR gear, split into two Enhanced
        Core Sets, or customized as needed for flexibility and precision.
      </td>
    </tr>
  </tbody>
</table>

For more visuals on what these tracking options look like, watch this video:

<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/KN3dxGNAq34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## What is an Extension?

An extension is a singular auxiliary IMU attached to a primary tracker and placed at another location. This allows you to build a secondary tracker without the need for an extra battery, a charge board, and a microcontroller. These are sometimes referred to as AUX trackers (auxiliary trackers).

Extensions make it possible to track areas with two bend points close together, like the lower leg and foot, without needing another tracker that requires separate charging and communication.

![Extension Image](assets/img/extension.jpg)<br>
*Devkit picture by erimel*

The length of the extension is dependent on the cabling used to connect them (shorter than 80cm is a safe range). For more information please [check the tracker schematics page.](diy/tracker-schematics.md)

The suggested extension locations are:

1. A hip extension attached to the chest tracker.
1. A left foot extension attached to the left ankle tracker.
1. A right foot extension attached to the right ankle tracker.

On the Crowd Supply store page and our Discord server, you may find a notation that specifies the number of primary and auxiliary IMUs with a plus sign. For example, the Enhanced Core Set noted above would be called a 6+2 set up, which consists of 6 microcontrollers and 8 IMUs. For a better visual on how this looks when on a person, please check the [recommended mounting points section of the server set up](server/putting-on-trackers.md#recommended-mounting-points).

Please note: Building extensions is not necessary, as the feet and hip locations can be provided by standalone trackers if you prefer. However, these docs assume that you are building them as extensions.

*Created by calliepepper. Edited by spazzwan and [Depact](https://github.com/Depact). Video created by zrock35*
