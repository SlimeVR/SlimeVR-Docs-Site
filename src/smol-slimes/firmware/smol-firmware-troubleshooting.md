# Smol Firmware Troubleshooting

## Table Of Contents

- TOC
  {:toc}

## Tracker Not Responding to Serial Commands

If your tracker doesn't respond to commands (`info`, `scan`, `calibrate`) the same way the receiver does:

1. **Check your connection** — Verify the tracker is connected via USB and appears as a serial port (e.g. `/dev/cu.usbmodem*` on macOS/Linux or `COM*` on Windows).
2. **Run `reboot`** — A soft reset can resolve temporary firmware glitches.
3. **Run `pair`** — If the tracker hasn't been paired, many commands won't behave as expected. The tracker must be paired to a receiver first.
4. **Use `debug`** — Prints a debug log to the serial console, useful for diagnosing sensor or communication issues.
5. **Run `scan` then `info`** — These are the primary diagnostic commands. Compare the output with your receiver's output to spot discrepancies.

See [Serial and Button Commands](smol-firmware-serial-and-button-commands.md) for the full command list.

## Firmware Disconnects or Freezes

Some users report occasional disconnects, freezes, or sluggish behavior. This is often related to specific firmware versions or pairing mismatches.

**Solution:** Try alternative firmware builds:
- JitingCat's firmware: [SlimeNRF-Firmware-CI Releases](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/releases/tag/latest) (look for filenames containing "JitingCat")
- Previous builds: [SlimeNRF-Firmware-CI Actions](https://github.com/Shine-Bright-Meow/SlimeNRF-Firmware-CI/actions)

```admonish warning
Tracker and receiver firmware must be from the same repository and approximately the same date. Mixing firmware versions between trackers and receivers will cause pairing and communication failures.
```

## Bricked Promicro NRF

If a Promicro NRF board appears bricked (no serial port, no response):

1. **Try DFU mode** — Press the button 4 times rapidly or send the `dfu` command if the serial port is still accessible.
2. **Reflash via bootloader** — Use `nrfutil` or `adafruit-nrfutil` to flash firmware directly to the bootloader.
3. **Hardware recovery** — If the bootloader itself is corrupted, a J-Link or SWD programmer may be needed to re-flash the bootloader firmware.

## Magnetometer Not Working

**INT Pin Wiring:** The INT pin **must be wired correctly** even if sleep mode is disabled.

### MMC5603NJ Magnetometer

Not currently officially supported. Use QMC6309 for guaranteed compatibility.

---

*Created with community input from the SlimeVR Discord. Edited by Depact and Shine Bright ✨*
