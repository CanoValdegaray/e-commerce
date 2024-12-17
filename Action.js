// Función para cambiar entre modo oscuro y claro
function toggleDarkMode() {
    const normalStyle = document.getElementById('style-light');
    const darkStyle = document.getElementById('style-dark');
    const body = document.body;
    const icon = document.getElementById("icon");

    // Obtenemos la preferencia de modo oscuro desde localStorage
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        // Si está en modo oscuro, lo cambiamos a modo claro
        darkStyle.disabled = true; 
        normalStyle.disabled = false; 
        body.classList.remove("dark-mode");
        icon.textContent = "🌞";
        localStorage.setItem('dark-mode', 'false');
    } else {
        // Si está en modo claro, lo cambiamos a modo oscuro
        darkStyle.disabled = false; 
        normalStyle.disabled = true; 
        body.classList.add("dark-mode");
        icon.textContent = "🌙";
        localStorage.setItem('dark-mode', 'true');
    }
}

// Al cargar la página, verificar el estado del modo oscuro y aplicarlo
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const icon = document.getElementById("icon");
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        document.getElementById('style-dark').disabled = false;
        document.getElementById('style-light').disabled = true;
        body.classList.add("dark-mode");
        icon.textContent = "🌙";
    } else {
        document.getElementById('style-dark').disabled = true;
        document.getElementById('style-light').disabled = false;
        body.classList.remove("dark-mode");
        icon.textContent = "🌞";
    }
});

