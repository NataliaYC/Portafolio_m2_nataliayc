// Obtener el contador del carrito por su ID
const cartCounter = document.getElementById('cart-counter');

// Obtener todos los botones de "Agregar al carrito"
const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

// Inicializar el contador de productos
let itemCount = 0;

// 1. Definir la función que actualiza el carrito
function updateCartCounter() {
    // Aumentar el contador en 1
    itemCount = itemCount + 1; 
    
    // O de forma abreviada: itemCount++;

    // Actualizar el texto del badge en la Navbar
    cartCounter.textContent = itemCount;
    
    // efecto visual al agregar
    cartCounter.classList.add('animate__pulse'); 
    setTimeout(() => {
        cartCounter.classList.remove('animate__pulse');
    }, 500); 
}

// 2. Asignar la función a cada botón de producto
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Llamar a la función cada vez que se hace clic
        updateCartCounter();
        
        // Mostrar un mensaje
        const productId = button.getAttribute('data-product-id');
        console.log(`Producto ${productId} agregado al carrito.`);
    });
});

