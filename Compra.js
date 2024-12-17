document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalProducts = cart.reduce((sum, product) => sum + product.quantity, 0);

    const showPopup = (message) => {
        const popup = document.getElementById('PopupProductos');

        if (!popup) {
            console.error('El elemento del popup no se encontró.');
            return;
        }

        popup.textContent = message;
        popup.classList.add('show');

        setTimeout(() => {
            popup.classList.remove('show');
        }, 3000);
    };

    const updateCart = (productId, productName, quantity, productImage) => {
        const productIndex = cart.findIndex(product => product.id === productId);

        if (productIndex > -1) {
            cart[productIndex].quantity += quantity;
        } else {
            cart.push({ id: productId, name: productName, quantity, image: productImage });
        }

        totalProducts += quantity;
        localStorage.setItem('cart', JSON.stringify(cart));

        showPopup(`${quantity} unidades de "${productName}" añadido(s) al carrito. Total en carrito: ${totalProducts} producto(s).`);
    };

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productImage = productCard.querySelector('.product-image').src;  // Obtener la imagen
            const productId = button.dataset.productId;
            const productName = productCard.querySelector('.product-title').textContent;
            const quantityInput = productCard.querySelector('.product-quantity');
            const quantity = parseInt(quantityInput.value, 10);

            if (quantity > 0) {
                updateCart(productId, productName, quantity, productImage);
            } else {
                alert('Por favor, selecciona una cantidad válida.');
            }
        });
    });
});


//---------------------------------------------------------------------------------




document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const displayCart = () => {
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>No hay productos en el carrito.</p>";
        } else {
            cartContainer.innerHTML = cart.map(product => `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                    <h3>${product.name}</h3>
                    <p>Cantidad: ${product.quantity}</p>                        
                </div>
            `).join("");
        }
    };

    displayCart();

    const updateCart = (productId, productName, quantity, productImage) => {
        const productIndex = cart.findIndex(product => product.id === productId);

        if (productIndex > -1) {
            cart[productIndex].quantity += quantity;
        } else {
            cart.push({ id: productId, name: productName, quantity, image: productImage });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        displayCart();

        const totalProducts = cart.reduce((sum, product) => sum + product.quantity, 0);

        showPopup(`${quantity} unidades de "${productName}" añadido(s) al carrito. Total en carrito: ${totalProducts} producto(s).`);
    };

    const showPopup = (message) => {
        const popup = document.getElementById('PopupCompra');
        const popupText = document.getElementById('PopupCompraText'); // Usando el nuevo ID

        if (!popup || !popupText) {
            console.error('El elemento del popup no se encontró.');
            return;
        }

        popupText.textContent = message;
        popup.classList.add('show');

        setTimeout(() => {
            popup.classList.remove('show');
        }, 3000);
    };

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productImage = productCard.querySelector('.product-image').src; 
            const productId = button.dataset.productId;
            const productName = productCard.querySelector('.product-title').textContent;
            const quantityInput = productCard.querySelector('.product-quantity');
            const quantity = parseInt(quantityInput.value, 10);

            if (quantity > 0) {
                updateCart(productId, productName, quantity, productImage);
            } else {
                alert('Por favor, selecciona una cantidad válida.');
            }
        });
    });

    // Evento para vaciar el carrito
    document.getElementById("clear-cart").addEventListener("click", () => {
        // Elimina el carrito
        localStorage.removeItem("cart");

        // Muestra el popup con el mensaje
        const popup = document.getElementById("PopupCompra");
        const popupText = document.getElementById("PopupCompraText");

        // Establece el mensaje en el popup
        popupText.textContent = "El carrito ha sido vaciado.";

        // Muestra el popup
        popup.classList.add("show");

        // Recarga la página después de un corto retraso
        setTimeout(() => {
            location.reload(); 
        }, 3000); // Ajusta el tiempo según sea necesario (en milisegundos)
    });

    document.getElementById("checkout").addEventListener("click", () => {
        if (cart.length === 0) {
            alert("No hay productos en el carrito para finalizar la compra.");
        } else {
            window.location.href = "Productos.html";  
        }
    });
});