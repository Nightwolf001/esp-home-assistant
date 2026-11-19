# Roadmap

A compass, not a contract. Each line is one short lesson with one tangible win. Only the current lesson exists as a file; the next one is written after you finish this one, based on what you showed and where you got stuck.

How each lesson runs: you read it (10 minutes), you type the code yourself, you flash it, you tell me what happened, I review. C is taught only as each lesson needs it.

Status: `[ ]` not started, `[~]` in progress, `[x]` done with evidence.

## Stage 0: Toolchain
- [~] 0001 Install ESP-IDF and flash `hello_world` to a DFR1154
- [ ] 0002 Anatomy of an ESP-IDF project: `CMakeLists.txt`, `main/`, `app_main`, `sdkconfig`. Win: your own message on the serial monitor

## Stage 1: The board
- [ ] 0003 Blink the onboard LED (GPIO3). C: functions, `#include`, `#define`. FreeRTOS: `vTaskDelay`
- [ ] 0004 Read the BOOT button (GPIO0). Pull-ups, active-low, debounce
- [ ] 0005 Two tasks and a queue: a button task tells an LED task what to do
- [ ] 0006 `menuconfig`, logging levels, 16MB flash and 8MB PSRAM. C: pointers and `malloc` vs `heap_caps_malloc`

## Stage 2: Network
- [ ] 0007 Join Wi-Fi as a station. The event loop, NVS
- [ ] 0008 HTTP GET to a tiny server on your Mac
- [ ] 0009 Keep secrets out of git: Kconfig options for SSID, password and hub URL

## Stage 3: Audio
- [ ] 0010 Read the PDM microphone over I2S and print a level meter
- [ ] 0011 Play a tone through the MAX98357 amplifier and the 5W speaker
- [ ] 0012 Record while BOOT is held, play it back. Buffers in PSRAM

## Stage 4: Camera
- [ ] 0013 Add the `esp32-camera` component with the component manager; capture one JPEG
- [ ] 0014 POST the JPEG to your Mac and open it

## Stage 5: The assistant (hub work starts here)
- [ ] 0015 Hub: a Node endpoint that takes audio plus image and returns speech (you know this side)
- [ ] 0016 Terminal: one full push-to-talk turn against the hub
- [ ] 0017 Wake word instead of the button

## Stage 6: Intercom
- [ ] 0018 Voice message from a terminal to your phone
- [ ] 0019 Terminal to terminal: push-to-talk between the two DFR1154s

## Stage 7: The screen
- [ ] 0020 CYD display: text and touch with LVGL (classic ESP32, a different target)
- [ ] 0021 Show who is calling

## Later
- Face recognition on the hub, music, Home Assistant
