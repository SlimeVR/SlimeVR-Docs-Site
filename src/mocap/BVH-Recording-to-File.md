# BioVision Motion Capture (BVH) Recording to File

BVH (BioVision Hierarchy) is a common file format used for storing humanoid motion capture data.

SlimeVR Server can record and export your tracking sessions as BVH files, making them compatible with common 3D animation software like Blender, Maya, MotionBuilder and game engines like Unity, and Unreal Engine.

## Table of Contents

- TOC
{:toc}

## Recording BVH in SlimeVR

1. **Prepare Your Setup**
   - Calibrate your trackers
   - Ensure all trackers are connected
   - Verify tracking quality

2. **Open Recording Interface**
   - In SlimeVR Server, go to **Home** tab
   - Use the **Record BVH** button, on tracking preview.
![alt text](./assets/img/BVH/Record%20BVH.webp)
   - Provide file name in opened dialog and press save.
   - Once you finished recording, use **Save BVH recording** button to save.
![alt text](./assets/img/BVH/Save%20BVH%20recording.webp)

## Recording Best Practices

**Before Recording:**
- Perform a fresh calibration
- Ensure stable trackers connection and signal strength
- Clear the recording area

**During Recording:**
- Start with a neutral pose for 1-2 seconds
- Keep within tracking volume

## What Is BVH?

BVH is a text-based file format that contains:

- **Header**: Hierarchy and initial pose of a human skeleton
- **Data**: Motion Data

### BVH File Structure

A BVH file consists of two main sections:

#### 1. HIERARCHY Section

Defines the skeletal structure:

```
HIERARCHY
ROOT HIP
{
	OFFSET 0.0 0.0 0.0
	CHANNELS 6 Xposition Yposition Zposition Zrotation Xrotation Yrotation
	JOINT WAIST
	{
		OFFSET 0.0 0.055808146 0.0
		CHANNELS 3 Zrotation Xrotation Yrotation
		JOINT CHEST
		{
            ...
        }
    ...
    }
...
}
```

#### 2. MOTION Section

Contains animation data:

```
MOTION
Frames: 2331               
Frame Time: 0.01
0.01291846 -0.6221236 0.004236113 -3.8948145 3.2102284...
...
```

## Importing BVH into Applications

### Blender

**Import Process:**

1. **File → Import → Motion Capture (.bvh)**
2. Select file
3. **Import** - skeleton appears in viewport

**Blender Workflow:**

1. Import BVH file
2. Select armature
3. Check animation in timeline
4. Clean up if needed:
   - Remove unwanted keyframes
   - Smooth rotations
   - Fix foot sliding

**References**
- [Blender BioVision Motion Capture (BVH) documentation page](https://docs.blender.org/manual/en/latest/addons/import_export/anim_bvh.html)

## Additional Resources

- SlimeVR Discord #motion-capture channel
- Biovision Hierarchy Wikipedia: [https://en.wikipedia.org/wiki/Biovision_Hierarchy](https://en.wikipedia.org/wiki/Biovision_Hierarchy)

---

_Created by Shine Bright ✨ and [Depact](https://github.com/Depact)_