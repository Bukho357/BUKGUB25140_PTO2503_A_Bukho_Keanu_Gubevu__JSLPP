import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";

// ==================== ADD NEW TASK ====================
export function addNewTask() {
  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("desc-input").value.trim();
  const status = document.getElementById("select-status").value;
  const priority = document.getElementById("select-priority").value;
  const overlay = document.querySelector(".modal-overlay");

  if (!title) return;

  const tasks = loadTasksFromStorage();
  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title,
    description,
    status,
    priority,
  };

  const updatedTasks = [...tasks, newTask];
  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);

  resetForm();
  overlay.close();
}

// ==================== DELETE TASK ====================
export function deleteTask(id) {
  const tasks = loadTasksFromStorage();
  const updatedTasks = tasks.filter((t) => t.id !== id);

  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);
}

// ==================== EDIT TASK ====================
export function editTask(id, updatedData) {
  const tasks = loadTasksFromStorage();
  const updatedTasks = tasks.map((t) =>
    t.id === id ? { ...t, ...updatedData } : t
  );

  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);
}
