document.addEventListener("DOMContentLoaded", () => {
    // Mode Sombre
    const darkModeToggle = document.querySelector("button");
    darkModeToggle.addEventListener("click", toggleDarkMode);
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
}

// Récupérer le mode sombre au rechargement
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}
