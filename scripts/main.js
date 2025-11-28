import { fetchInitialData, allTasks } from "./api.js";
import { renderTasks, clearExistingTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

/* ============================
   INIT TASK BOARD
============================ */
async function initTaskBoard() {
  clearExistingTasks();
  setupModalCloseHandler();
  setupNewTaskModalHandler();

  const board = document.getElementById("task-board");
  const message = document.getElementById("message");

  // Show loading message
  if (message) message.textContent = "Loading tasks...";

  try {
    const tasks = await fetchInitialData();

    // Store tasks
    allTasks.push(...tasks);

    // Render them
    renderTasks(allTasks);

    if (message) message.textContent = "";
  } catch (error) {
    if (message)
      message.textContent = "Failed to load tasks. Please try again.";
  }

  // Setup UI features
  setupThemeToggle();
  setupSidebar();
  setupMobileOverlay();
}

/* ============================
   THEME TOGGLE HANDLER
============================ */
function setupThemeToggle() {
  const body = document.body;
  const toggle = document.querySelector(".toggle");

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    toggle.classList.toggle("active");

    localStorage.setItem(
      "mode",
      body.classList.contains("dark") ? "dark" : "light"
    );
  });

  // Load saved mode
  window.addEventListener("load", () => {
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
      body.classList.add("dark");
      toggle.classList.add("active");
    }
  });
}

/* ============================
   SIDEBAR HANDLERS
============================ */
function setupSidebar() {
  const sidebar = document.getElementById("sidebar");
  const hideSidebarBtn = document.getElementById("hide-sidebar");
  const openSidebarBtn = document.getElementById("openSidebarBtn");

  if (!sidebar || !openSidebarBtn) return;

  function w3_open() {
    sidebar.style.display = "block";
    openSidebarBtn.style.display = "none";
  }

  function w3_close() {
    sidebar.style.display = "none";
    openSidebarBtn.style.display = "inline-block";
  }

  if (hideSidebarBtn) {
    hideSidebarBtn.addEventListener("click", () => {
      sidebar.classList.add("hidden");
      w3_close();
    });
  }

  openSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("hidden");
    w3_open();
  });
}

/* ============================
   MOBILE OVERLAY HANDLER
============================ */
function setupMobileOverlay() {
  const logoMobile = document.querySelector(".logo-mobile");
  const overlay = document.getElementById("overlay");
  const closeAddBtn = document.getElementById("cancel-add-btn");

  if (!logoMobile || !overlay) return;

  logoMobile.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.showModal();
  });

  if (closeAddBtn) {
    closeAddBtn.addEventListener("click", () => {
      overlay.style.visibility = "hidden";
      overlay.close();
    });
  }

  // Close when clicking outside modal
  overlay.addEventListener("click", (e) => {
    const modalWindow = document.querySelector(".modal-window");
    if (modalWindow && !modalWindow.contains(e.target)) {
      overlay.style.visibility = "hidden";
      overlay.close();
    }
  });
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
