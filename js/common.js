document.addEventListener("DOMContentLoaded", () => {
    actualizarContadorCarrito();
});

function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contadorCarrito = document.getElementById("contador-carrito");
    
    // Suma las cantidades de cada producto en el carrito
    const totalItems = carrito.reduce((sum, item) => sum + item.quantity, 0);

    if (contadorCarrito) {
        contadorCarrito.textContent = totalItems;
    }
}