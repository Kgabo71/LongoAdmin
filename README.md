# Longo Admin Panel

## Overview
Longo Admin Panel is a robust and flexible React-based dashboard for managing Longo's services. It is built with Material UI and utilizes modern frontend technologies for an optimized and user-friendly experience.

## Features
- **User Authentication** (Firebase Authentication)
- **Dashboard Analytics**
- **Support Ticketing System**
- **Bidding Management**
- **Settings & Configurations**
- **Notifications System**
- **Responsive UI with Material UI & Tailwind CSS**

## Requirements
To run the Longo Admin Panel locally, ensure you have the following installed:

### Prerequisites
- **Node.js** (>=16.0)
- **Yarn** or **npm** (package manager)
- **Git** (version control system)
- **Firebase Account** (for authentication & real-time database)
- **Google Cloud API Key** (for location-based services)

## Installation
### Clone the repository
```sh
git clone https://github.com/Kgabo71/LongoAdmin.git
cd LongoAdmin
```

### Install dependencies
Using Yarn:
```sh
yarn install
```
Or using npm:
```sh
npm install
```

## Running the Project
To start the development server, run:
```sh
yarn start
```
Or using npm:
```sh
npm run start
```

The admin panel will be accessible at `http://localhost:3000/`.

## Environment Variables
Create a `.env` file in the project root and configure the following:
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## Build for Production
To generate a production build:
```sh
yarn build
```
The build files will be available in the `build` directory.

## Deployment
Longo Admin Panel can be deployed on any static hosting provider such as Firebase Hosting, Vercel, or Netlify. To deploy to Firebase:
```sh
firebase deploy
```

## Contributing
Feel free to fork the repository and submit pull requests. We welcome improvements and feature additions.

## License
This project is licensed under the MIT License.

## Contact
For any issues or feature requests, reach out via GitHub Issues or contact the development team.

