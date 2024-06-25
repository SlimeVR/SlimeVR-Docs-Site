# IMU Calibration

If you have BNO085, MPU6050, or MPU6500-based trackers, make sure that when you turn on your tracker it's lying on a flat surface. The sensors need to calibrate for 20-30 seconds in a stable environment. This should be done every time you turn on your trackers, failing to do so will result in an increased rate of drift.

If you have a BMI160, BMI270, MPU9250, or MPU+QMC5883L-based tracker you need to calibrate the IMU before it will work correctly. This calibration only needs to be done once. You can only calibrate one IMU at a time, so if you have any extensions, they will also need to be calibrated.

Other IMUs, such as the BNO085 or ICM20948 do not require any specific manual calibration and can be used immediately.

## BMI160 with firmware v0.3.2 and below, MPU9250, or MPU+QMC5883L

1. Plug in your microcontroller (D1 Mini, NodeMCU, or other)
1. Open the SlimeVR server, and click **Settings**, and then click **Serial Console** under **Utilities**.
1. Flip the IMU you want to calibrate upside down and press the reset button on your microcontroller or the reboot button in the SlimeVR server. You should see a message indicating that you need to flip the IMU right side up to begin calibration.
1. Upon flipping the IMU over, calibration should begin. To successfully calibrate your IMU you need to gently rotate the IMU in all 3 axes.
1. After approximately 60 seconds has passed, the tracker should be successfully calibrated and will begin to show rotation in the SlimeVR server.

## BMI160 with firmware v0.3.3 and above

If you have a BMI160 and firmware v0.3.3 or higher, you will need to calibrate your IMU in a different way, unless specified otherwise in the firmware:
1. To get the best possible calibration, it is advisable to heat your trackers to their normal operating temperature. To do this, put on your trackers for at least 20 minutes before starting calibration.
1. To get additional feedback on the calibration process, you can connect to the serial console. This is entirely optional.
   * Plug in your microcontroller (D1 Mini, NodeMCU, or other)
   * Open the SlimeVR server, and click **Settings**, and then click **Serial Console** under **Utilities**.
1. Flip the IMU you want to calibrate upside down and press the reset button on your microcontroller or the reboot button in the SlimeVR server. You should see a message indicating that you need to flip the IMU right side up to begin calibration.
1. Upon flipping the IMU over, calibration should begin. Leave the IMU still for at least 10 seconds.
1. Now, set the IMU on a flat surface on each of the remaining 5 sides, waiting until the serial console or led indicates that you can change position for each side.
1. The IMU should now be calibrated and will begin to show rotation in the SlimeVR server.

### BMI160 temperature calibration (tcal)

Optionally, you can perform temperature calibration for BMI160 IMUs, which is a more advanced process but significantly reduces drift:

1. Place your trackers in a fridge or freezer for a period of time to cool them down to below 15°C. If you're unsure about the temperature of your trackers, you can check it in the SlimeVR Server when the tracker is turned on.
1. Turn on your trackers and gradually heat them, calibration will automatically begin if the temperature is below 15°C.
   - You can use something like a 3D printer bed or a heat gun, but be careful not to overheat your battery or melt your case.
   - It is important to not rush this. Temperature calibration should take at least 15 minutes, otherwise you risk having a partial calibration, which can lead to increased drift.
1. The calibration will be complete and automatically saved once the IMU reaches 45°C.

The tracker can be moved around during temperature calibration, but it will not record any data while it's in motion.

It may be difficult to determine how the calibration process is going. Setting `#define BMI160_TEMPCAL_DEBUG` to true in the `defines_bmi160.h` file in the firmware exposes more information about the process, replacing the regular temperature readout with temperature calibration debug info in the SlimeVR Server.
The format is AXXYY, where A is calibration status (1 - not in calibration mode, 2 - calibration in progress), XX represents calibration progress from 0 to 60, and YY is the temperature. A fully temperature calibrated tracker would show up as 160YY.

## BMI270 with firmware SlimeVR/main

If you have a BMI270 tracker with SlimeVR/main firmware, you will need to calibrate your IMU the same way as you would calibrate a [BMI160 tracker with firmware v0.3.3 and above](#bmi160-with-firmware-v033-and-above).
