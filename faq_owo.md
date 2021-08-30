**Use this guide to setup SlimeVR server - https://docs.slimevr.dev/slimevr-setup**



#### **Table of contents**

[How many trackers or phones do I need to use for leg tracking?](#How many trackers or phones do I need to use for leg tracking?)

[I heard I could use 3 phones for leg tracking](#I heard I could use 3 phones for leg tracking)

[I have only one/two phones](#I have only one/two phones)

[I try to run SlimeVR server by clicking run.bat but nothing happens. Why?](#I try to run SlimeVR server by clicking run.bat but nothing happens. Why?)

[My trackers are connected to the SlimeVR Server, but they are not moving in SteamVR](#My trackers are connected to the SlimeVR Server, but they are not moving in SteamVR)

[My controller is a tracker. How do I fix this?](#My controller is a tracker. How do I fix this?)

[In what order should I start SteamVR and SlimeVR Server?](#In what order should I start SteamVR and SlimeVR Server?)

[My phone isn't connecting to the server](#My phone isn't connecting to the server)

[I have an Iphone and it disconnects after 10 minutes](#I have an Iphone and it disconnects after 10 minutes)

[Virtual trackers on steamVR are greyed out](#Virtual trackers on steamVR are greyed out)

[I can't find Ios version in the store](#I can't find Ios version in the store)

[Other issues](#Other issues)

#### ***FAQ:***

##### How many trackers or phones do I need to use for leg tracking?

​	5

​	You can use Waist+Legs mode or Waist+Knees+Legs mode, but for both modes 5 trackers/phones is needed. 

​	This modes only change amount of virtual vive trackers, created by SlimeVR.

​	Waist+Legs create 3 virtual trackers suitable for VrChat

​	Waist+Knees+Legs create 5 virtual trackers for NeosVR for example

​	Using sixth tracker/phone you can track your chest for better sitting accuracy and it you can enable one of two modes with chest:

​		1. Waist+Legs+Chest mode for 4 virtual trackers

​		2. Waist+Legs+Chest+Knees mode for 6 virtual trackers.  



##### I heard I could use 3 phones for leg tracking

​	You can't. You will have a bad time, and that's not our fault. Your knees won't bend and it's overall worst experience. Minimum is 5



##### I have only one/two phones

​	You can use official owoTrack driver for waist or SlimeVR server for waist (+ chest if you have 2 phones). This will not track your legs



##### I try to run SlimeVR server by clicking run.bat but nothing happens. Why?

​	You need to install Java for the SlimeVR Server to open. Click here to go to the download page: https://www.java.com/en/download/manual.jsp

​	Use this guide to setup SlimeVR server - https://docs.slimevr.dev/slimevr-setup



##### My trackers are connected to the SlimeVR Server, but they are not moving in SteamVR

​	Make sure you have the correct roles selected in the SlimeVR Server for your trackers/phones. They should be Waist, Left Leg, Right Leg, Left Ankle and 	Right Ankle.

​	Use this guide to see how to setup tracker roles -  https://docs.slimevr.dev/slimevr-setup



##### My controller is a tracker. How do I fix this?

​	You need to assign roles to your trackers in SteamVR. Go to SteamVR Settings > Devices > Manage Trackers. In the tracker list find the ones named

​	"/devices/SlimeVR/SlimeVRTracker#" and give them the roles Waist, Left Foot, Right Foot from top to bottom. You then need to restart SteamVR.

​	Use this guide to see how to setup tracker roles -  https://docs.slimevr.dev/slimevr-setup



##### In what order should I start SteamVR and SlimeVR Server?

​	SlimeVR Server needs to be started before SteamVR.



##### My phone isn't connecting to the server

​	Check that the IP is correct. 

​	**You can input 255.255.255.255 as IP to owotrack android app**

​	You have to open command panel (cmd.exe) and execute ipconfig command and get your PC IPv4 address field - for example 192.168.1.2 and put it in 	Owo app



##### I have an Iphone and it disconnects after 10 minutes

​	**Possible workaround**

​		Enable guided access.

​		You can find this under settings -> accessibility -> guided access.

​		Disable "display auto lock", set it to "never"

​		Then start owo track app.

​		**Turn down the screen brightness completely to save battery**



​	**Apple has restrictions on apps for networking in background. Currently under investigation.** 

​	You should avoid using apple devices if you don't want to reconnected them. 



##### Virtual trackers on steamVR are greyed out

​	It's normal, check if trackers present in VR

##### I can't find Ios version in the store

​	Ios version of OwoTrack
​	https://testflight.apple.com/join/1DZAkuCX
​	You can access the public beta via this link.
​	You'd have to download the "Testflight" app from Apple first and then open the link on your iPhone.
​	created by @ferdimarti#2111
​	**Be aware of 10 minutes background time limit due to Apple restrictions. Workaround currently under investigation**

##### Other issues

- You may also need to set correct Firewall settings for OwO Track to work correctly. Download this bat, move it to a directory without spaces or symbols in the name and run it as Admin. 
  [firewall.bat](/files/firewall.bat) 

created by adigyran#1121 with help of MightyGood#1341