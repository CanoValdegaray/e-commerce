function toggleDarkMode() {
    const normalStyle = document.getElementById('style-light');
    const darkStyle = document.getElementById('style-dark');
    const body = document.body;
    const icon = document.getElementById("icon");



    if (darkStyle.disabled) {
        darkStyle.disabled = false; 
        normalStyle.disabled = true; 
    } else {
        darkStyle.disabled = true;
        normalStyle.disabled = false;
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
        icon.textContent = "🌙";
    } else {
        icon.textContent = "🌞";
    }

}

