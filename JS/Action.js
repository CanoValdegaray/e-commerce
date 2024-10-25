function toggleDarkMode() {
    const normalStyle = document.getElementById('style-light');
    const darkStyle = document.getElementById('style-dark');
    const body = document.body;
    const icon = document.getElementById("icon");


    // Alternar la visibilidad de las hojas de estilo
    if (darkStyle.disabled) {
        darkStyle.disabled = false; // Activar modo oscuro
        normalStyle.disabled = true; // Desactivar modo claro
    } else {
        darkStyle.disabled = true; // Desactivar modo oscuro
        normalStyle.disabled = false; // Activar modo claro
    }
    body.classList.toggle("dark-mode");
    
    // Cambiar el ícono según el modo
    document.addEventListener("DOMContentLoaded", () => {
        const body = document.body;
        const icon = document.getElementById("icon");
        if (body.classList.contains("dark-mode")) {
            icon.textContent = "🌙";
        }
    });
    if (body.classList.contains("dark-mode")) {
        icon.textContent = "🌙";  // Ícono de luna para modo oscuro
    } else {
        icon.textContent = "🌞";  // Ícono de sol para modo claro
    }

}

