# SeaYou – Coastal Rescue System

SeaYou is an **IoT-enabled drowning prevention and rescue platform** developed at Belgium Campus iTversity. The project integrates **drone technology, camera-based monitoring, predictive drift modeling, and machine learning** to assist lifeguards in real-time.

---

## 🌊 Motivation
South Africa has one of the world’s highest drowning rates, especially during peak holiday seasons. Traditional lifeguard monitoring is limited by visibility, response time, and staffing. SeaYou addresses these challenges by combining **IoT sensors, AI-driven detection, and drone-assisted rescue** to improve situational awareness and reduce mortality.

## 🚀 Features
- **[Real-time swimmer tracking](ca://s?q=Explain_real_time_swimmer_tracking)** with IoT cameras  
- **[Drone deployment](ca://s?q=Explain_drone_deployment_in_rescue)** for flotation device delivery and live visuals  
- **[Predictive drift modeling](ca://s?q=Explain_predictive_drift_modeling)** to forecast victim movement in currents  
- **[Thermal/infrared detection](ca://s?q=Explain_thermal_infrared_detection)** for night-time or low-visibility rescues  
- **[Medical integration](ca://s?q=Explain_medical_integration_in_rescue_systems)** (possible future implementation) for vitals monitoring  
- **[Lifeguard dashboard](ca://s?q=Explain_lifeguard_dashboard_UI)** built with React + Vite + TypeScript  

## ⚙️ Tech Stack
- **Frontend:** React, Vite, TypeScript  
- **Backend:** Python (FastAPI/Flask), TensorFlow/PyTorch for ML models  
- **Streaming:** WebRTC/RTSP for drone and webcam feeds  
- **Data:** Real-time telemetry (GPS, battery, AI flags) stored in structured databases  

---

## 👥 The SeaYou Team

### Leadership
- **Theart Jooste [601288]** – ![Team Lead](https://img.shields.io/badge/Role-Leadership-blue)
  Oversees the entire project, ensures milestones are met, and coordinates across all teams.  

- **Jason Crous [601662]** – ![Project Manager](https://img.shields.io/badge/Role-Project%20Manager-green)  
  Handles planning, scheduling, and resource allocation, ensuring smooth execution.

<br>

### AI & Machine Learning
- **Rivan Martiz [601530]** – ![Machine Learning Lead](https://img.shields.io/badge/Role-Machine%20Learning%20Lead-lightblue)
  Guides the development of drowning detection models and predictive drift algorithms.  

- **Nicholas Vronka [601596]** – ![Machine Learning Engineer](https://img.shields.io/badge/Role-Machine%20Learning%20Engineer-lightblue)  
  Implements and optimizes machine learning models for real-time inference.

<br>

### Frontend Development
- **Jonathan Rossouw [601761]** – ![Front-End Development Lead](https://img.shields.io/badge/Role-Frontend%20Development%20Lead-pink)
  Designs and manages the lifeguard dashboard and user interface.  

- **Ryno Lourens [601845]** – ![Front-End Developer](https://img.shields.io/badge/Role-Frontend%20Developer-pink)
  Builds React components, integrates live video feeds, and ensures usability.

<br>

### Backend Development
- **Marcus Swanepoel [602162]** – ![Backend Development Lead](https://img.shields.io/badge/Role-Backend%20Developer%20Lead-blue)
  Architect of the backend services, APIs, and system integration.  

- **Declin Vorkel [601756]** – ![Backend Developer](https://img.shields.io/badge/Role-Backend%20Developer-blue)
  Implements server-side logic, communication protocols, and data handling.

<br>

### Data Engineering
- **Timothy Wubbeling [602543]** – ![Data Engineer Lead](https://img.shields.io/badge/Role-Data%20Engineer%20Lead-darkblue)  
  Manages data pipelines, telemetry storage, and analytics.  

- **Rudi Jan Du Plessis [601342]** – ![Data Engineer](https://img.shields.io/badge/Role-Data%20Engineer-darkblue)  
  Works on database design, performance metrics, and reporting.

## 🌟 Team Vision
Together, the SeaYou team combines **leadership, AI innovation, frontend usability, backend reliability, and data intelligence** to deliver a mission-critical coastal rescue system. Each role contributes to building a scalable, real-time platform that empowers lifeguards and saves lives.

---

## 🛠 Requirements

Before running the SeaYou application, ensure you have the following installed:

- **[Node.js](ca://s?q=Explain_Node.js)** v20+  
  Required for running the React + Vite frontend.  
- **[npm](ca://s?q=Explain_npm_package_manager)** (comes with Node.js)  
  Used to install project dependencies.  
- **[Python](ca://s?q=Explain_Python_3.11)** 3.11+  
  Required for backend services and machine learning models.  
- **[pip](ca://s?q=Explain_pip_package_manager)**  
  Python package manager to install backend dependencies.  
- **[Git](ca://s?q=Explain_Git_version_control)**  
  For cloning and managing the repository.  

Optional but recommended:
- **[VS Code](ca://s?q=Explain_Visual_Studio_Code)** with TypeScript + Python extensions  
- **[Docker](ca://s?q=Explain_Docker_for_deployment)** if you plan to containerize the system for deployment.  

---

1.Clone the repo
```bash
git clone https://github.com/YourOrg/SEAYOU.git
cd SEAYOU
```

2.Install dependencies
```bash
npm install
```

3.Run the dev server
```bash
npm run dev
```

Additional Commands
- Build for production
```bash
npm run build
```

- Preview the production build
```bash
npm run preview
```

---

# SeaYou System Architecture

```Frontend (React + Vite + TypeScript)
------------------------------------
[Dashboard.tsx] --> [DroneFeed.tsx] --> (WebRTC/RTSP stream)
                --> [WebcamFeed.tsx] --> (WebRTC stream)
                --> [TelemetryPanel.tsx] --> (WebSocket API)
                --> [Alerts.tsx] --> (ML predictions)

Backend (Python ML + API)
-------------------------
[app.py] --> REST/GraphQL API
          --> [drowning_model.py] (TensorFlow/PyTorch)
          --> [drift_predict.py] (Ocean current modeling)
          --> [preprocess.py] (Frame preprocessing)

Data Flow
---------
Drone/Webcam --> WebRTC --> React Dashboard
Telemetry --> WebSocket --> React Dashboard
Video Frames --> API --> Python ML --> Prediction --> React Alerts
```

---

File Structure (System Architecture)
------------------------------------
```
SEAYOU/
│
├── public/                  # Static assets served directly
│   ├── favicon.svg
│   ├── icons.svg
│   └── index.html           # Root HTML file
│
├── src/                     # Main source code
│   ├── assets/              # Images, SVGs, logos
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/          # Reusable UI components
│   │   ├── DroneFeed.tsx    # Live drone video feed
│   │   ├── WebcamFeed.tsx   # Lifeguard webcam feed
│   │   ├── TelemetryPanel.tsx # GPS, battery, AI flags
│   │   ├── Alerts.tsx       # Drowning alerts, rip current warnings
│   │   └── Dashboard.tsx    # Main lifeguard dashboard
│   │
│   ├── services/            # API and backend integration
│   │   ├── api.ts           # REST/GraphQL client
│   │   ├── websocket.ts     # Real-time communication
│   │   └── mlBridge.ts      # Connects to Python ML backend
│   │
│   ├── styles/              # CSS modules and global styles
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── App.tsx              # Root React component
│   ├── main.tsx             # Entry point, mounts React app
│   └── react-app-env.d.ts   # TypeScript environment definitions
│
├── backend/                 # Python ML + API backend
│   ├── models/              # ML models (TensorFlow/PyTorch)
│   │   └── drowning_model.py
│   ├── services/            # API endpoints
│   │   ├── app.py           # FastAPI/Flask server
│   │   └── drift_predict.py # Predictive drift modeling
│   ├── utils/               # Helper functions
│   │   └── preprocess.py
│   └── requirements.txt     # Python dependencies
│
├── tests/                   # Unit and integration tests
│   ├── frontend.test.tsx
│   └── backend.test.py
│
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js         # Linting rules
├── package.json             # Project metadata & scripts
├── package-lock.json
└── README.md                # Documentation
```

