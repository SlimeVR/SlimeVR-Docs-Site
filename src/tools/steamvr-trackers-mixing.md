# Using SteamVR trackers (Vive/Tundra) along with SlimeVR

## Technical details

SteamVR trackers (such as Vives and Tundras) do work in tandem with SlimeVR _to some extent_.

They are basically treated as Slime trackers within the SlimeVR server, meaning their position is currently ignored.

Further complete support for making use of the Vives' positional data is planned, but no ETA.

## Adding SlimeVR elbow trackers with SteamVR trackers

There are 2 ways to do this:

1. From the HMD, requiring 1 **chest** tracker + 2 **upper arm** trackers.
2. From the controllers, requiring only 2 **lower arm** trackers.

Before doing this, make sure shoulder tracking is disabled in the VRChat settings!

#### From HMD (most comfortable, allows for easy knee trackers)

1. Make sure that `Force arms from HMD` in Tracking settings is **enabled**.
2. (optional) _make sure the Feeder App is running (if not, run the installer and make sure it's checked)_
3. Wear and assign trackers on the upper arms, chest, and (optional) _upper legs_.
4. Enable the SteamVR trackers for elbows and (optional) _knees_. Only enable the SteamVR tracker for chest if you are using lock-hip or lock-head in VRChat. If you use lock-all, you will probably want to keep the single vive on your hip as that will provide you greater spine tracking fidelity.
5. (optional) _if you want knees, assign your Vive waist/hip tracker as a waist/hip in SlimeVR. Other Vive trackers (feet) do not need to be assigned._
   Note: if you wear Vives on your ankles, you do not need to use knee trackers, only if you wear them on your feet.

#### From controllers (takes less trackers)

1. Make sure that `Force arms from HMD` in Tracking settings is **disabled**.
2. Make sure the Feeder App is running (if not, run the installer and make sure it's checked)
3. Wear and assign trackers on the lower arms.
4. Enable the SteamVR trackers for elbows only.

Up to v0.9.1, the reset pose is an i-pose (arms straight down to the side), and the current mounting calibration pose is upper arms going back, and lower arms and hands going forward. v0.10.0+ will have settings to change those.

## Other combinaisons

Pretty much any combinaison is possible and will get you decent results **as long as you're not skipping a body part**.

For example “slime chest + vive hip + slimes thighs + vive feet” would work.

“Vive hip + feet and either slime elbows (lower arm) or slime chest + elbows (upper arms)” would also work just fine (see [above](steamvr-trackers-mixing.md#adding-slimevr-elbow-trackers-with-steamvr-trackers)).

1. Make sure the SlimeVR Feeder App is running
2. Assign your Vive trackers to their respective body parts.
3. Only enable the SteamVR trackers you want to add in SlimeVR's settings.

_Written by erimel_
