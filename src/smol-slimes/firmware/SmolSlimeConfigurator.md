# SmolSlimeConfigurator
Pure Simple UI Configurator for SlimeVR Smol Slimes (Unofficial)
Github page: [SmolSlimeConfigurator](https://github.com/ICantMakeThings/SmolSlimeConfigurator/tree/main)

![Screenshot from 2025-06-25 18-38-02](https://github.com/user-attachments/assets/45befd55-a713-4ea4-a25e-0064ceee10c3)

# Features
- Easy UI
- Configure the trackers via simple buttons 
- Tooltips explaining breafly what each button does
- Auto Firmware updater, Only required to plug your tracker in via USB
- Firmware list fetches latest daily builds 
- Linux and Windows (Untested Mac) support.

# Download
There are 2 options to run the Configurator:
- Single file executable from [Releases](https://github.com/ICantMakeThings/SmolSlimeConfigurator/releases) (Windows + Linux)
- Python file from the uploaded files above.


# Instructions
**Note: There is a [Video](https://youtu.be/2PHelwy7Rcs) explaining usage.**
### **First install**

+ Plug in the tracker or reciever, hold one side of a wire on rst pin ![image](https://github.com/user-attachments/assets/7cdaae27-21f9-428f-9327-d39bbf8dabc2)
and doubble tap gnd (usbc connector on the Nice!Nano)![image](https://github.com/user-attachments/assets/c1efbc20-bb2f-4fd8-9ecd-8869648ebf17)
+ Press "↻" refresh, then select the port from the dropdown menu on the left of the refresh button, then press "Connect"
+ Select the version of hardware from the dropdown menu called "Select Firmware", press "⬇ Firmware",  Wait ~20 seconds, the tracker will flash.

### **Pairing**
  
+ Plug in your Reciever, press "↻" refresh and select the port And then press "Connect"
+ To Configure your reciever, select the reciever tab, press pairing mode and power on each reciever one by one, you should notice ![image](https://github.com/user-attachments/assets/ab48dff0-e0f6-4113-a7f7-222260115964) the trackers being added, once all the trackers have been paired, press "Exit Pairing Mode"

### **Calibration**

+ Plug in a tracker, Press "↻" refresh, select the COM port & "Connect", press "Calibrate 6 Sides", do what the terminal says.
+ Then press "Calibrate", leave the tracker on a desk for 5~ seconds and done!
**Note: You can also doubble tap the trackers button instead of pressing "Calibrate"**

### **Updating Firmware**

+ Connect to the port, select the firmware, press "⬇ Firmware" and wait ~20 seconds.

**Note: Trackers and recievers need to be all updated on the same version or they wont want to pair**

Official SmolSlime docs [Here](https://docs.slimevr.dev/smol-slimes/)
