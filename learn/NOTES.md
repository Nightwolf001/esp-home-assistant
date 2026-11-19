# Notes

## How Francois wants to be taught
- Learn as he goes while building the real project.
- Do not generate all the code into the repo in one go. Set it up, have a plan, let him learn.
- He chose Espressif's framework (ESP-IDF) over Arduino.

## Assumptions made on 19 Nov 2026 (he skipped these questions; confirm when he replies)
- ESP-IDF from the command line, not the VS Code extension.
- No prior C or microcontroller experience. Lessons introduce C as needed.
- DFR1154 first; the CYD display comes at stage 7.

## Working notes
- The Arduino sketch and Node proxy written earlier in the conversation are a reference for the teacher only. They are not in this repo.
- Board facts from DFRobot's examples: LED GPIO3, BOOT button GPIO0, PDM mic CLK 38 / DATA 39, amp BCLK 45 / LRCLK 46 / DIN 42. Some boards ship with a GC2145 sensor instead of the OV3660.
- Unverified until lesson 0001 runs on the real board: that `hello_world` output appears over the USB-C port with default settings, and that auto-reset into download mode works without holding BOOT.
