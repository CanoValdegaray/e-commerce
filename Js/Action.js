let angle = 0;

document.getElementById('next').addEventListener('click', () => {
    angle -= 40; // Gira a la derecha
    document.getElementById('carousel').style.transform = `rotateY(${angle}deg)`;
});

document.getElementById('prev').addEventListener('click', () => {
    angle += 40; // Gira a la izquierda
    document.getElementById('carousel').style.transform = `rotateY(${angle}deg)`;
});



