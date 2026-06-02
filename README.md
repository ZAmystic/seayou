# PRJ381 - SeaYou

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
