# 3D Model Hub (Updated)

[Live Site URL](https://your-live-site-url.com)  
(Replace with your actual deployed client URL)

---

## About

**3D Model Hub** is a modern full-stack web application designed to upload, manage, preview, and explore 3D models in formats like `.glb`, `.gltf`, and `.obj`. Inspired by popular platforms like Sketchfab and TurboSquid, this project offers an immersive experience in managing digital 3D assets with features like user authentication, real-time file handling, interactive 3D previews, and responsive design.

This project is built using React.js, Node.js/Express, MongoDB, Firebase Authentication, and Cloudinary for file storage, providing a practical and exciting learning opportunity for those interested in web development and 3D content.

---

## Features

- **User Authentication:** Secure login and registration using Firebase Authentication with email/password and Google Sign-In.
- **Upload & Manage 3D Models:** Authenticated users can upload models with thumbnails, descriptions, and categorize them.
- **Interactive 3D Preview:** Users can preview 3D models directly in the browser using WebGL powered by `@react-three/fiber`.
- **Model Browsing & Filtering:** Explore 3D models with category multi-select filters and full-text search with regex support.
- **User-Specific Views:** Users can view, update, or delete only their own models and track their downloaded assets.
- **Download Counter:** Track downloads of each model, updating counts atomically using MongoDB’s `$inc` operator.
- **Responsive Design:** Fully responsive UI optimized for mobile, tablet, and desktop devices.
- **Theme Toggle:** Light and dark mode support with smooth toggling.
- **Toast Notifications:** Elegant and non-intrusive notifications for success and error messages.
- **Secure API:** Backend API secured via Firebase Admin SDK token verification to restrict unauthorized access.
- **Error Handling:** Custom 404 page with friendly messaging and navigation.
- **Deployment:** Client deployed on Netlify (or your choice), server on Vercel with environment variables securely configured.

---

## Tech Stack

- **Frontend:** React.js, React Router, Tailwind CSS, Daisy UI, `@react-three/fiber`
- **Backend:** Node.js, Express.js, Firebase Admin SDK, MongoDB
- **Authentication:** Firebase Authentication (Email/Password + Google Sign-In)
- **File Storage:** Cloudinary (for model thumbnails)
- **Deployment:** Netlify (client), Vercel (server)
- **Notifications:** React Toastify (or similar)
- **Others:** Environment variables for sensitive keys, robust CRUD operations with loading spinners

---



