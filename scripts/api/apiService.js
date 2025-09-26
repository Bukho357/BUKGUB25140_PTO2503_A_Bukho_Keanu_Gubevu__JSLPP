// apiService.js
import { renderTasks, clearExistingTasks } from "../ui/renderTasks.js";

// API endpoint
const API_URL = "https://jsl-kanban-api.vercel.app/";

// Fallback tasks in case the API is unavailable
const fallbackTasks = [
  {
    id: 1,
    title: "Understand the User Stories 🧠",
    description:
      "Read and interpret the provided user stories so I can plan and implement features that actually meet the user's needs.",
    status: "todo",
  },
  {
    id: 2,
    title: "Add Design Touches from Figma 🎨",
    description:
      "Bring in extra visual elements and layout improvements from Figma to make the UI look polished and professional.",
    status: "todo",
  },
  {
    id: 3,
    title: "Show Dynamic Data with JavaScript ⚡",
    description:
      "Fetch tasks from an API and display them on the board so the app feels responsive and up-to-date.",
    status: "doing",
  },
  {
    id: 4,
    title: "Keep Code Clean & Modular 🧼",
    description:
      "Organize my JavaScript into reusable functions or modules so it's easier to maintain, debug, and build upon.",
    status: "doing",
  },
  {
    id: 5,
    title: "Manually Test the App 🧪",
    description:
      "Go through each feature to make sure tasks can be edited, moved, and saved properly before sharing it.",
    status: "todo",
  },
  {
    id: 6,
    title: "Record a Demo Video 🎥",
    description:
      "Make a 3–5 minute walkthrough to show how the app works and highlight the features I built.",
    status: "todo",
  },
  {
    id: 7,
    title: "Pitch the Project Confidently 🎤",
    description:
      "Prepare a clear, short explanation of the problem, my solution, and what I learned so I can present it with confidence.",
    status: "todo",
  },
  {
    id: 8,
    title: "Reflect on the Learning Journey 💭",
    description:
      "Write or record a short reflection on what I learned and the challenges I overcame to grow from the experience.",
    status: "todo",
  },
];

// Show loading message
function showLoading() {
  const loadingDiv = document.getElementById("loading-message");
  if (loadingDiv) loadingDiv.style.display = "block";
}

// Hide loading message
function hideLoading() {
  const loadingDiv = document.getElementById("loading-message");
  if (loadingDiv) loadingDiv.style.display = "none";
}

// Show an error message
function showError(message) {
  const errorDiv = document.getElementById("error-message");
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
  } else {
    alert(message);
  }
}

// Fetch tasks from API, or fall back to default tasks
export async function fetchTasks() {
  showLoading();
  clearExistingTasks(); // Clear any old tasks before showing new ones

  try {
    const response = await fetch(API_URL);

    if (!response.ok)
      throw new Error("Something went wrong while fetching tasks.");

    const tasks = await response.json();

    // Save tasks locally so we can reload without hitting the API
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks(tasks);
  } catch (error) {
    console.error("Could not fetch tasks from API:", error);

    // Fallback to default tasks
    localStorage.setItem("tasks", JSON.stringify(fallbackTasks));
    renderTasks(fallbackTasks);

    showError(
      "Couldn't load tasks from the server. Showing default tasks instead."
    );
  } finally {
    hideLoading();
  }
}

// Load tasks from localStorage when the page loads
export function loadTasksFromLocalStorage() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks && savedTasks.length > 0) {
    clearExistingTasks();
    renderTasks(savedTasks);
  } else {
    fetchTasks(); // If nothing saved locally, fetch from API
  }
}
