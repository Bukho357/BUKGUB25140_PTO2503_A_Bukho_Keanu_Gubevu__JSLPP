const API_URL = "https://jsl-kanban-api.vercel.app/";

let initialTasks;

export async function fetchInitialData() {
  if (initialTasks) {
    return initialTasks;
  }

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    initialTasks = await response.json();
    return initialTasks;
  } catch (error) {
    console.error("API Error:", error);
    throw error; // re-throw to handle in UI
  }
}

// Array to hold all tasks locally
export const allTasks = [];
