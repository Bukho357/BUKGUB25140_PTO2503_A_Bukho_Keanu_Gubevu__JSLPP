## 🗂️ JSL Kanban Task Management App

A client-side task management web application designed to help organize tasks into TODO, DOING, and DONE columns—mimicking a Kanban board. Users can create, edit, delete, and categorize tasks with persistent storage using localStorage.

## ✨ Key Features

🆕 Create, Edit & Delete Tasks: Manage tasks quickly through a reusable modal interface.

📋 Task Status Columns: Visualize tasks in TODO, DOING, and DONE columns.

💾 Persistent Storage: All tasks are saved in localStorage to maintain data between sessions.

🔢 Dynamic Task Counts: Column headers automatically update with the current number of tasks.

🎨 Theme Toggle: Switch between light and dark modes for a personalized workspace.

📂 Sidebar Toggle: Collapse or expand the sidebar for a cleaner interface.

⏳ Loading Indicator: Shows a loading message while tasks are fetched asynchronously.

## 🌐 Live Demo

Try the app live on Netlify:https://jslkanban-bukgub25140.netlify.app/

## 💻 Installation & Running Locally

Prerequisites

Modern web browser (Chrome, Firefox, Edge, Safari)

Optional: Local HTTP server for proper ES module support

Steps

Clone or download the repository:

git clone <your-repo-url>
cd <your-repo-folder>

Using a local server (recommended):

npm install -g live-server # install live-server globally
live-server # start the server in project folder

The app will open in your browser with full ES module support.

Note: Directly opening index.html may cause issues due to ES module restrictions in some browsers.

## ⚙️ How It Works

On load, tasks are fetched asynchronously from localStorage or fallback default tasks.

Tasks are rendered dynamically into columns based on their status (todo, doing, done).

Clicking a task opens a modal for editing or deleting it.

The "Add New Task" button opens a modal to create new tasks.

All changes are saved to localStorage and reflected immediately on the board.

Users can toggle themes and sidebar visibility to customize their workspace.

## 🚀 Deployment & Features Implementation

Project deployed to Netlify with a custom URL.

Fully responsive for desktop and mobile users.

Sidebar interaction and mobile menu mimic the Figma reference.

Dark/light mode implemented using CSS variables and toggle switch.

Modular, documented JavaScript ensures maintainability and scalability.

## 🔮 Future Enhancements

## ☁️ Sync tasks with a backend or cloud storage.

## 🖱️ Drag-and-drop functionality for easy task management.

## 🔐 User authentication for personalized boards.

## 📅 Add due dates, priorities, and notifications.

## 🎥 Project Walkthrough

Watch my 5–10 minute recorded walkthrough showcasing the app, code structure, and feature implementation:
Presentation Link:

## 🛠️ Technologies Used

HTML, CSS, JavaScript (ES Modules)

localStorage API for data persistence

Responsive design principles for mobile and desktop

## 💡 Notes

All features follow clean code and modular design principles.

Fully functional Kanban board that meets the original user stories and Figma design.
