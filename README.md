# 🗂️ JSL Kanban Task Management App

A fully responsive **Kanban-style task management application** built
with **HTML, CSS, and modular JavaScript (ES6 modules)**.\
The app allows users to **create, edit, delete, categorize, and persist
tasks** using `localStorage`.\
It includes a **dynamic sidebar**, **light/dark mode toggle**, **task
counter**, and **loading indicator**, following clean UI/UX principles

## 🚀 User Stories Implemented

### 📋 Task Management

- Create new tasks using a reusable modal form.
- Edit task **title, description, and status**.
- Delete tasks with a confirmation prompt.
- Display tasks in **To Do**, **Doing**, and **Done** columns.
- Dynamic task counters update automatically.
- Tasks persist using `localStorage` even after closing the browser.
- Show a **loading message** while tasks are fetched from storage.

### 🧭 Sidebar & Layout

- **Toggle sidebar** (expand/collapse) for better workspace control.
- Responsive sidebar that adapts to both desktop and mobile screens.
- Clean, intuitive layout inspired by Kanban workflow systems.

### 🎨 Theming

- **Light/Dark mode toggle** using CSS variables.
- Theme automatically persists across sessions.
- UI adjusts for accessibility and readability.

### 🛠 Developer Features

- Fully modular JavaScript using **ES6 modules**:
  - `taskManager.js` → task CRUD logic\
  - `formUtils.js` → reusable form helpers\
  - `render.js` & `taskElement.js` → DOM rendering\
  - `taskCounter.js` → live column stats\
  - `theme.js` → theme logic\
  - `status.js` → defines and manages task categories\
- Clean, scalable folder structure.
- Readable and maintainable code.

## 📂 Project Structure

    project-root/
    │── index.html
    │── styles.css
    │── main.js
    │
    │── utils/
    │   └── localStorage.js
    │
    │── ui/
    │   ├── render.js
    │   ├── modalHandlers.js
    │   ├── status.js
    │   ├── sortTasks.js
    │   ├── sidebarManager.js
    │   ├── taskCounter.js
    │   ├── taskElement.js
    │   └── theme.js
    │
    │── tasks/
    │   ├── taskManager.js
    │   └── formUtils.js
    │
    │── images/
    │   ├── dark-modeModal.png
    │   ├── desktopSidebar.png
    │   ├── lightVsDarkMode.png
    │   └── mobileModal.png
    │
    │── assets/
    │   ├── favicon.svg
    │   ├── logo-light.svg
    │   ├── logo-dark.svg
    │   └── icons.svg
    │
    └── README.md

## ⚙️ Setup & Running Locally

### **Prerequisites**

- Modern browser (Chrome, Edge, Firefox, Safari)
- Optional: Local server for ES module support

### **Steps**

1.  Clone the repository:

    ```bash
    git clone <your-repo-url>
    cd <your-repo-folder>
    ```

2.  Run locally (recommended):

    ```bash
    npm install -g live-server
    live-server
    ```

3.  The app will open automatically in your browser.

> ⚠️ _Opening `index.html` directly may cause module errors depending on
> your browser settings._

## 🌐 Deployment

This project is deployed on **Netlify**.

**Deployment Steps:** 1. Push project to GitHub. 2. Go to Netlify →
**Deploy site** → Import from GitHub. 3. Choose the repository and
deploy. 4. Assign a custom Netlify domain.

💻 **Live App** → https://jslkanban-bukgub25140.netlify.app/

## 🎥 Walkthrough Presentation

A 5--10 minute walkthrough explains: - UI layout\

- Code structure\
- Feature implementations\
- Responsiveness and theme toggle

🎞️ **Presentation Link:** Add your Loom/YouTube link here.

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (flexbox, grid, variables)
- **JavaScript ES6 Modules**
- **localStorage API**
- **Netlify Hosting**

## 📸 Preview

###### Desktop sidebar view

![Desktop Sidebar](/images/desktopSidebar.png)

###### Mobile modal menu

![Mobile Modal](/images/mobileModal.png)

###### Edit/Delete modal

![Dark Mode Modal](/images/dark-modeModal.png)

###### Light vs Dark mode

![Light vs Dark](/images/lightVsDarkMode.png)

## 🧑‍💻 Author

Created by **_Bukho Keanu Gubevu_**.
