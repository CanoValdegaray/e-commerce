function toggleDarkMode() {
    const normalStyle = document.getElementById('style-light');
    const darkStyle = document.getElementById('style-dark');
    const body = document.body;
    const icon = document.getElementById("icon");

    // Verificar el estado del modo oscuro desde localStorage
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        // Si está activado, desactivamos el modo oscuro
        darkStyle.disabled = true; 
        normalStyle.disabled = false; 
        body.classList.remove("dark-mode");
        icon.textContent = "🌞"; // Cambia el ícono a sol
        localStorage.setItem('dark-mode', 'false'); // Actualiza el estado en localStorage
    } else {
        // Si no está activado, activamos el modo oscuro
        darkStyle.disabled = false; 
        normalStyle.disabled = true; 
        body.classList.add("dark-mode");
        icon.textContent = "🌙"; // Cambia el ícono a luna
        localStorage.setItem('dark-mode', 'true'); // Actualiza el estado en localStorage
    }
}

// Al cargar la página, establecemos el estado del modo oscuro
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const icon = document.getElementById("icon");
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        document.getElementById('style-dark').disabled = false;
        document.getElementById('style-light').disabled = true;
        body.classList.add("dark-mode");
        icon.textContent = "🌙"; // Cambia el ícono a luna
    } else {
        document.getElementById('style-dark').disabled = true;
        document.getElementById('style-light').disabled = false;
        body.classList.remove("dark-mode");
        icon.textContent = "🌞"; // Cambia el ícono a sol
    }
});
