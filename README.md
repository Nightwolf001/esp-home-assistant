# esp-home-assistant

A DIY smart home assistant and family intercom: ESP32 room terminals (mic, speaker, camera) talking to a hub that does the thinking.

This repo is also a course. Francois is learning ESP-IDF by building it, one small lesson at a time, so the code here is written by him, not generated in bulk.

## Layout

| Path | What lives there |
|---|---|
| `learn/` | The teaching workspace: mission, roadmap, lessons, reference sheets, learning records |
| `firmware/` | One ESP-IDF project per lesson stage, created during the lessons |
| `hub/` | The Node service the terminals talk to (starts at stage 5 of the roadmap) |

## Start here

1. Read `learn/MISSION.md` (one screen).
2. Skim `learn/ROADMAP.md`.
3. Open `learn/lessons/0001-install-esp-idf-and-say-hello.html` in a browser.

## Hardware on hand

- 2 x DFRobot ESP32-S3 AI Camera Module (DFR1154)
- 1 x 5W 4 ohm speaker
- 1 x CYD ESP32 2.8" resistive touch display (E32R28T)
