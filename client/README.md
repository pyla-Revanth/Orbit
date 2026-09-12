# Orbit - Frontend Client

## Overview
This is the frontend client for the Orbit project, built with modern web technologies for a fast and responsive user experience.

## Tech Stack
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)
- **Routing**: React Router DOM
- **Authentication**: Clerk
- **Environment Variables**: dotenv

## Project Setup

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Development Progress

### Checkpoint 1: Project Initialization
1. **Project Initialization**
   - Initialized React project with Vite (latest version)
   - Configured Vite for optimal development experience

2. **Styling Configuration**
   - Installed and configured Tailwind CSS
   - Removed default `App.css`
   - Cleared and configured `index.css` with Tailwind directives

3. **UI Components**
   - Installed Lucide React for icon components
   - Integrated Google Fonts (Inter) for typography

4. **Project Assets**
   - Set custom favicon
   - Removed default placeholder assets

5. **Version Control**
   - Initialized Git repository
   - Created initial commit with base setup

### Checkpoint 2: Routing & Authentication
1. **Page Components**
   - Created all application pages: Chatbox, Connections, CreatePost, Discover, Login, Feed, Profile, Messages

2. **Layout Structure**
   - Created Layout folder for organized component structure

3. **Routing Setup**
   - Installed React Router DOM
   - Created routes configuration file with nested routes
   - Implemented layout-based routing with Clerk authentication

4. **Login Page**
   - Built complete Login page UI with ChatGPT-inspired design
   - Set background image via assets/index.js
   - Integrated Clerk authentication with `useUser()` hook

5. **Authentication**
   - Installed Clerk for user authentication
   - Installed dotenv for environment variable management
   - Configured protected routes using Clerk auth

## Project Structure
```
client/
├── src/
│   ├── pages/
│   │   ├── Chatbox.jsx       # Chatbox page component
│   │   ├── Connections.jsx   # Connections page component
│   │   ├── CreatePost.jsx    # Create post page component
│   │   ├── Discover.jsx      # Discover page component
│   │   ├── Login.jsx         # Login page with Clerk auth
│   │   ├── Feed.jsx          # Feed page component
│   │   ├── Profile.jsx       # Profile page component
│   │   └── Messages.jsx      # Messages page component
│   ├── Layout/
│   │   └── Layout.jsx        # Main layout component with auth
│   ├── assets/
│   │   └── index.js          # Asset configurations (images, etc.)
│   ├── routes/
│   │   └── index.jsx         # Route configuration with nested routes
│   ├── App.jsx               # Main application component
│   ├── index.css             # Global styles with Tailwind
│   └── main.jsx              # Application entry point
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── .env                      # Environment variables (Clerk keys)
└── package.json              # Dependencies and scripts
```

## Next Steps
- [x] Build out application components
- [x] Implement routing
- [x] Implement authentication
- [ ] Complete page UI implementations (Feed, Profile, Messages, etc.)
- [ ] Connect to backend API
- [ ] Add state management (Context API or Redux)
- [ ] Implement real-time features (chat, notifications)
- [ ] Add form validation and error handling
- [ ] Optimize performance and add loading states

## License
MIT