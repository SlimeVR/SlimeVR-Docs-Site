# Glossary

## Resets

There are multiple different "resets" within the software. These are forms of calibration that are generally not saved and need to be done during each session of SlimeVR.

### Full reset

A "full reset" is a [reset](#resets) that re-orients trackers to have zero rotation in the pitch and roll axes and have the same yaw axis rotation as the head tracker, essentially "resetting" (or "zeroing") the "full" orientation. This is usually the first calibration used when starting a session with SlimeVR.

### Yaw reset

A "yaw reset" is a [reset](#resets) that re-orients trackers to have the same yaw axis rotation as the head tracker. Since this only calibrates the yaw axis, the user can be in any position where the trackers are all facing in their forward orientation with the head tracker. This is a calibration mainly used to correct for drift after a subjective amount of time since the last yaw reset or [full reset](#full-reset).

### Mounting reset

A "mounting reset" (or "reset mounting") is a [reset](#resets) that corrects the base orientation of trackers in regards to their physical mounting orientation. This is usually the second calibration used when starting a session with SlimeVR if the user chooses to use automatic mounting.
