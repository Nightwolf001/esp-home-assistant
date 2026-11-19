# Mission: ESP-IDF firmware for a home assistant and family intercom

## Why
Build a smart home assistant and family communication device for the house: the kids can say "send dad a message", dad can say "call the kids", and it can answer questions, see what the camera sees, play music and eventually recognise who is in the room. Francois wants to understand the firmware he runs, not paste it, so he is learning Espressif's ESP-IDF as he builds.

## Success looks like
- Flash and debug either DFR1154 from the command line without looking up the steps
- Write an ESP-IDF app from an empty folder: tasks, GPIO, Wi-Fi, HTTP, I2S audio, camera
- A room terminal that records a spoken question plus a snapshot, sends it to the hub, and plays the spoken answer
- Two terminals that can pass voice messages to each other and to his phone
- Read an unfamiliar ESP-IDF example or driver and explain what each part does

## Constraints
- Learn by doing: he writes the code; lessons and reviews guide, they do not supply finished features
- Hardware on hand: 2 x DFR1154 (ESP32-S3), 1 x 5W speaker, 1 x CYD 2.8" display (classic ESP32)
- macOS (Apple Silicon), ESP-IDF from the command line
- Strong TypeScript, Node and React Native background; C and embedded level not yet confirmed
- No hub hardware yet: the hub runs on his Mac until a Pi or mini PC arrives

## Out of scope
- Arduino framework (the earlier Arduino sketch is a reference only, kept out of this repo)
- Custom PCBs, enclosures, battery power
- On-device ML beyond wake word
- Home Assistant integration until the terminal firmware works end to end
