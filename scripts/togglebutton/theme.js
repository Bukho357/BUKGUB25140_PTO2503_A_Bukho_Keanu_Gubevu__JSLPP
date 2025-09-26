// Select elements
const body = document.body;
const sidebar = document.querySelector(".side-bar");
const toggleSidebarBtn = document.querySelector(".sidebar-mode");
const toggleSwitch = document.querySelector(".toggle-switch");
const switchKnob = document.querySelector(".toggle-switch .switch");

// Function to move knob visually
function updateToggleSwitch(isDark) {
  switchKnob.style.left = isDark ? "28px" : "4px";
}

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  updateToggleSwitch(true);
} else {
  updateToggleSwitch(false);
}

// Dark/Light mode toggle
toggleSwitch.addEventListener("click", () => {
  const isDark = !body.classList.contains("dark");
  body.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateToggleSwitch(isDark);
});

// Sidebar toggle
toggleSidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
