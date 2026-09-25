# Social Profile Viewer...Overview

A modern, dynamic web application built with **Node.js, Express, and EJS**. This project serves as a dynamic directory of user profiles, rendering data dynamically with a premium glassmorphism dark-theme UI and also helps in understanding the use of ejs.

## Features
- **Dynamic Routing & Rendering**: Utilizes Express routing (`/ig/:username`) and EJS templating to generate pages on the fly based on mock data.
- **Premium UI/UX**: Built with Vanilla CSS featuring a sleek dark mode, glassmorphism card components, and smooth hover animations.
- **Responsive Layout**: CSS Grid and Flexbox ensure the application looks stunning on both desktop and mobile devices.
- **Error Handling**: Custom 404 error pages for invalid routes or non-existent user profiles.
- **Modular Architecture**: EJS partials (`head`, `navbar`, `footer`) are used to maintain DRY (Don't Repeat Yourself) code principles.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript), HTML5, Vanilla CSS3 (Custom Variables, Flexbox, Grid)
- **Development Tooling**: Nodemon

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd "Second Year/EJS"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   *The server will start on `http://localhost:8080`. Nodemon will automatically restart the server if you make file changes.*

4. **Production Start:**
   ```bash
   npm start
   ```

## Folder Structure

```
├── public/
│   └── css/
│       └── style.css       # Global stylesheet (Glassmorphism & Layouts)
├── views/
│   ├── includes/           # Reusable EJS partials
│   │   ├── head.ejs
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   ├── home.ejs            # Profile directory page
│   ├── instagram.ejs       # Individual user profile gallery view
│   └── error.ejs           # Custom 404 page
├── data.json               # Mock database for user profiles
├── index.js                # Express server entry point & routing logic
└── package.json            # Project metadata and dependencies
```

## Future Improvements
- Integrate a real database (MongoDB) instead of `data.json`.
- Add user authentication and the ability to upload real posts.
- Connect a REST or GraphQL API to fetch dynamic content.

---
*Created by Yash Sharma.*
