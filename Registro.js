document.getElementById('RegistroForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const clave = document.getElementById('clave').value;
    const claveReingreso = document.getElementById('claveReingreso').value;

  
    if (clave !== claveReingreso) {
        alert('Las contraseñas no coinciden. Intenta nuevamente.');
        return;
    }

    
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', clave);

   
    const popup = document.getElementById('PopupLogin');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = '¡Te REGISTRASTE exitosamente!';
    popup.classList.remove('hidden');


    setTimeout(() => {
        window.location.href = 'Login.html';
    }, 3000);
});
