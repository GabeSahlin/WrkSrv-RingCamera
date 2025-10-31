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
