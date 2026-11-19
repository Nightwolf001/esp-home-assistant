# ESP-IDF on the DFR1154: Resources

## Knowledge

- [ESP-IDF Programming Guide, ESP32-S3, stable (v6.1 as of Nov 2026)](https://docs.espressif.com/projects/esp-idf/en/stable/esp32s3/get-started/)
  Espressif's own documentation. Use for: everything about the framework. Always check that the version in the page header matches `idf.py --version`.
- [Installation of ESP-IDF and Tools on macOS](https://docs.espressif.com/projects/esp-idf/en/stable/esp32s3/get-started/macos-setup.html)
  The installer (EIM) route that became the default in v6.0. Use for: lesson 0001, reinstalling, updating.
- [Start a Project on Linux and macOS from Command Line](https://docs.espressif.com/projects/esp-idf/en/stable/esp32s3/get-started/linux-macos-start-project.html)
  The build, flash, monitor loop. Use for: lesson 0001 and any time `idf.py` misbehaves.
- [DFRobot wiki: ESP32-S3 AI Camera Module (DFR1154)](https://wiki.dfrobot.com/dfr1154/)
  Board specs, pin diagram, schematic download. Use for: which GPIO does what.
- [DFRobot/DFR1154_Examples on GitHub](https://github.com/DFRobot/DFR1154_Examples)
  The vendor's examples. They are Arduino, not ESP-IDF, but the pin numbers and peripheral choices are authoritative. Use for: confirming pins before wiring up a driver.
- [Beej's Guide to C Programming](https://beej.us/guide/bgc/)
  Free, readable C book. Use for: any C concept a lesson touches (pointers, structs, headers) when you want more than the lesson gives.

## Wisdom (Communities)

- [ESP32 Forum (esp32.com)](https://esp32.com/)
  Espressif's official forum, with Espressif staff answering. Use for: errors you cannot find in the docs, ESP-IDF version quirks.

## Gaps

- No ESP-IDF example exists from DFRobot for this board. Camera and audio lessons will be built from Espressif's generic drivers plus DFRobot's pin map, and need testing on the real board.
- Whether the `esp32-camera` component supports ESP-IDF v6.1 is unchecked. Verify before lesson 0013.
- Wake word (ESP-SR) resources not gathered yet. Needed before lesson 0017.
- How this board's USB-C port is wired (native USB Serial/JTAG assumed, no separate USB-UART chip seen in the board layout) is not confirmed. Lesson 0001 will tell us.
