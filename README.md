# 🗂️ JSL Kanban Task Management App

A fully responsive **Kanban-style task management application** built
with **HTML, CSS, and JavaScript**.\
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

A 5--10 minute

🎞️ **Presentation Link:** Add your Loom/YouTube link here.

## 🛠️ Technologies Used

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

## 💡 Notes

All features follow clean code and modular design principles.

Fully functional Kanban board that meets the original user stories and Figma design.
