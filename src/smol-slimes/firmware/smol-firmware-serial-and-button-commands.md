# Smol Firmware Serial And Button Commands

#### Receiver Commands

* `info` - Get receiver information
* `list` - Get paired trackers
* `reboot` - Soft reset the receiver
* `pair` - Enter pairing mode
* `add <address>` - Manually add a tracker
* `remove` - Remove last paired tracker
* `exit` - Exit pairing mode
* `clear` - Clear stored trackers
* `dfu` - Enter DFU bootloader
* `uptime` - Get receiver uptime
* `meow` - Meow!

#### Tracker Commands

* `info` - Get tracker information
* `reboot` - Soft reset the tracker
* `battery` - Get battery information
* `scan` - Restart sensor scan
* `calibrate` - Calibrate sensor ZRO
* `6-side` - Calibrate 6-side accelerometer
* `mag` - Clear magnetometer calibration
* `pair` - Enter pairing mode
* `set <address>` - Manually set receiver (Receiver's ```add``` command must be completed first)
* `clear` - Clear pairing data
* `dfu` - Enter DFU bootloader
* `uptime` - Get tracker uptime
* `debug` - Print debug log to troubleshoot tracker or firmware
* `reset <type>` - Reset calibration/stats for "zro", "acc" (6-Sided enabled only), "mag", "bat", or "all"
* `meow` - Meow!

#### Button Shortcuts

* Reset - 1 Press
* Calibration - 2 Presses
* Pairing Mode - Press and Hold for 5s
* DFU Bootloader - 4 Presses
* Deep Sleep - Press and Hold for 1s

---

*Created by Shine Bright ✨, [Depact](https://github.com/Depact) and [Seneral](https://github.com/Seneral). Edited by [Brisfknibis](https://github.com/brisfknibis).*