---
layout: page
title: Common Issues
nav_order: 8
---
# Common Issues

So something isn't working and you find yourself stuck, this page is here to give answers to common issues. If nothing here answers your question please feel free to ask in the #technical-support channel on the discord

* [Please specify upload_port while updating firmware](#please-specify-upload_port-while-updating-firmware)
* [The SlimeVR Server won't start](#the-slimevr-server-wont-start)
* [My aux tracker isn't working](#my-aux-tracker-isnt-working)
* [Sensor was reset error](#sensor-was-reset-error)
* [The trackers are connected to my wifi but don't turn up on SlimeVR](#the-trackers-are-connected-to-my-wifi-but-dont-turn-up-on-slimevr)
* [The trackers are connected to the SlimeVR server but aren't turning up on Steam](#the-trackers-are-connected-to-the-slimevr-server-but-arent-turning-up-on-steam)
* [My trackers are bound to the wrong controllers in SteamVR](#my-trackers-are-bound-to-the-wrong-controllers-in-steamvr)
* [Getting extreme drift](#getting-extreme-drift)
* [Trackers are moving in the wrong direction when I move](#trackers-are-moving-in-the-wrong-direction-when-i-move)


## Please specify upload_port while updating firmware 

Something is messing with your physical connection to the tracker. Make sure that your trackers are plugged in via USB, the USB cable is a data and charging cable and that your drivers are up to date. Additionally, this can be caused by software hogging ports (VSCode and Cura can be the cause of this).

## The SlimeVR Server won't start

A lot of the time this issue is due to Java not being installed / issues with your installation of Java. Check [the setup page for more info](slimevr-setup#install-java)

## My aux tracker isn't working

In order to make sure your aux tracker is set up you need to specify it in your defines.h uploaded to the primary tracker's firmware. Check the [bottom of the section mentioning defining the pins on the defines guide page](defines_guide#define-pins-of-the-selected-board)

## Sensor was reset error

Check your INT wire, there is either a bad conenction or you have it connected to the flash pin.

## The trackers are connected to my wifi but don't turn up on SlimeVR

This is most likely a firewall issue, you'll need to go to your firewall settings and grant permission to the SlimeVR server to make sure it can access them.

## The trackers are connected to the SlimeVR server but aren't turning up on Steam

Double check your firewall settings to make sure it isn't blocking the connection. Additionally, check that [your driver_SlimeVR.dll is in the right folder](slimevr-setup#install-driver) as some antivirus programs will remove this file.


## My trackers are bound to the wrong controllers in SteamVR

You have to set them to the right location within Steam, check [the setup page for more info](slimevr-setup#configure-proportions-and-trackers)

## Getting Extreme drift

Make sure that when you turn on your tracker it's sitting flat on the table, the sensors need to calibrate for 10-20 seconds in a stable environment.


## Trackers are moving in the wrong direction when I move

When you set up your defines file you may have put in the wrong rotation. Take note of which trackers are the issue and refer to the [defines guide page](defines_guide#adjust-board-rotation) to get the board's rotation right.


