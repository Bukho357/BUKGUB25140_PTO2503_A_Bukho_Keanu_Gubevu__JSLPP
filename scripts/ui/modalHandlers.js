import { addNewTask, deleteTask, editTask } from "../tasks/taskManager.js";

export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  closeBtn.addEventListener("click", () => modal.close());
}

export function setupNewTaskModalHandler() {
  const overlay = document.querySelector(".modal-overlay");
  const newTaskBtn = document.getElementById("add-new-task-btn");
  const form = document.querySelector(".modal-window");
  const cancelBtn = document.getElementById("cancel-add-btn");

  newTaskBtn.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.showModal();
  });

  cancelBtn.addEventListener("click", () => overlay.close());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      addNewTask();
    } else {
      form.reportValidity();
    }
  });
}

export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");

  // Prefill modal with task data
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;
  document.getElementById("task-priority").value = task.priority;

  modal.showModal();

  // ==================== DELETE HANDLING ====================
  const deleteBtn = document.getElementById("delete-task-btn");
  const confirmModal = document.getElementById("confirm-delete-modal");
  const cancelBtn = document.getElementById("cancel");
  const confirmBtn = document.getElementById("confirm");
  const previewDiv = confirmModal.querySelector(".preview");

  deleteBtn.onclick = () => {
    previewDiv.innerText = task.title;
    confirmModal.showModal();
  };

  cancelBtn.onclick = () => confirmModal.close();

  confirmBtn.onclick = () => {
    deleteTask(task.id);
    confirmModal.close();
    modal.close();
  };

  // ==================== SAVE EDITED TASK ====================
  const saveChangesBtn = document.getElementById("save-changes-btn");

  saveChangesBtn.onclick = () => {
    const updatedTask = {
      title: document.getElementById("task-title").value.trim(),
      description: document.getElementById("task-desc").value.trim(),
      status: document.getElementById("task-status").value,
      priority: document.getElementById("task-priority").value,
    };

    if (!updatedTask.title) return;

    editTask(task.id, updatedTask);

    modal.close();
  };
}
