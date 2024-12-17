

const showPopup = (message, popupId) => {
    const popup = document.getElementById(popupId);
    const popupText = popup.querySelector('p');
    
    popupText.textContent = message;
    popup.classList.remove('hidden'); 
    popup.classList.add('show'); 
    
    setTimeout(() => {
        popup.classList.remove('show');
        popup.classList.add('hidden');
    }, 3000); 
};


const checkUserCredentials = () => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    

    if (!storedEmail || !storedPassword) {
        showPopup('Debes crear una cuenta antes de iniciar sesión.', 'PopupLogin');
        return false;
    }
    
    return true;
};

// Lógica de inicio de sesión
document.getElementById('LoginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const clave = document.getElementById('clave').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');


    if (!checkUserCredentials()) return; 


    if (email === storedEmail && clave === storedPassword) {
        showPopup('Bienvenido! Has ingresado exitosamente.', 'PopupLogin');
        window.location.href = 'Productos.html';
    } else {
        showPopup('Credenciales incorrectas. Intenta nuevamente.', 'PopupLogin');
    }
});











