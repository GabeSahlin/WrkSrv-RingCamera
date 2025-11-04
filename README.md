# Workstation & Server - Doorbell Camera and Web Application
In my workstation and server IoT course, my semester project is to create my own doorbell camera to detect movement in front of the camera and detect when the door is open. Then, the data received will be sent to a web application built to display the captured data.

## Project Outline Requirements

### Hardware
 ESP32-CAM $5-10 (https://www.aliexpress.com/p/tesla-landing/index.html?scenario=c_ppc_item_bridge&productId=3256806669911836&_immersiveMode=true&withMainCard=true&src=google&aff_platform=true&isdl=y)

PIR Motion Sensor : Detect motion in front of camera

Reed Switch : Detect if door is open/closed

Push Button : The actual doorbell

Buzzer : Audio feedback of doorbell

LEDs *OPTIONAL* : Display current ESP status (power, network, etc)

MicroSD Card *OPTIONAL* : Store photo/video locally in case of error sending data or loss of power/connection

Resistors and Jumper Wires : Connect system

# --- FINALIZED PART LIST ---

Core Controller

1. AEDIKO ESP32-CAM WiFi Bluetooth Board + ESP32-CAM-MB (CH340G) with OV2640 Camera
Handles camera capture, WiFi, and programming via USB

Storage

2. PNY 32GB Elite Class 10 U1 microSDHC

Local storage for images/videos
Plug-and-play (FAT32 formatted, fully compatible with ESP32-CAM)

Motion Detection

3. HC-SR501 PIR Motion Sensor Detector (Infrared, 4.8–20V DC)
Detects motion for camera trigger
Adjustable sensitivity and delay

Doorbell Trigger

4. Momentary Push Button Switch (12V/24V Prewired, Adhesive Mount)
Used as the actual doorbell button
Simple pull-up/pull-down wiring to ESP32 GPIO

Audio Feedback

5. Tegg Passive Buzzer Module
Provides audible feedback when button pressed or motion detected
GPIO controlled (3.3V logic compatible)

Door Status Sensor

6. 2 Pack Magnetic Reed Switch NO/NC, Wired
Detects door open/closed
Connects to GPIO with pull-up/pull-down resistor

Prototyping / Wiring

7. Smraza Basic Starter Kit
Includes breadboard, jumper wires, resistors, LEDs, buzzers, buttons, and extra prototyping components
Provides all wiring/resistor/LED needs for your project

### Software
 - NOTE : VS Code PlatformIO extension support

Frontend (React Native) : Handle web application UI and logic
 - Fetch event data
 - display camera live stream, snapshots, motion events, door status
 - send push notifications
 - *OPTIONAL* Futue Mobile app development

Backend (Python) : Handle API and data transitions from/to frontend, database, and ESP32
 - NOTE : Flask or FastAPI to utilize /motion-events or /door-status
 - ESP32 sends POST requests to backend on timer and events occur
 - Backend send POST/GET requests to database


Database (MySQL) *OPTIONAL* : Handle storing photo/video long term instead of only streaming the data
 - NOTE : implementing database will be kept in mind during     beginning implementation. If within scope of semester, complete database support and deploy into project.



// Generated Design Diagram
          ┌───────────────┐
          │    Doorbell   │
          │   Button      │
          └──────┬────────┘
                 │
                 ▼
          ┌───────────────┐
          │  ESP32-CAM    │
          │               │
          │ ┌───────────┐ │
          │ │ Camera    │ │ ← Captures video/images
          │ └───────────┘ │
          │ ┌───────────┐ │
          │ │ PIR Sensor│ │ ← Detects motion
          │ └───────────┘ │
          │ ┌───────────┐ │
          │ │ Reed Sw.  │ │ ← Detects door open/close
          │ └───────────┘ │
          │ ┌───────────┐ │
          │ │ SD Card   │ │ ← Optional local storage
          │ └───────────┘ │
          └──────┬────────┘
                 │
                 ▼
          ┌───────────────┐
          │  Wi-Fi/HTTP   │
          │  Transmission │
          └──────┬────────┘
                 │
                 ▼
          ┌───────────────┐
          │ Python Backend│
          │  (Flask/FastAPI) │
          │  Stores events │
          │  Serves API    │
          └──────┬────────┘
                 │
                 ▼
          ┌───────────────┐
          │ React Frontend│
          │  Dashboard    │
          │  Live Images  │
          │  Door/Motion  │
          └───────────────┘
