document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
});

function renderizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    const resumenCarrito = document.getElementById("resumen-carrito");
    
    contenedorCarrito.innerHTML = '';
    resumenCarrito.innerHTML = '';
    
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<p class="mensaje-carrito-vacio">Tu carrito de compras está vacío.</p>';
        return;
    }

    carrito.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto-carrito';
        productoDiv.innerHTML = `
            <img src="${producto.images[0]}" alt="${producto.title}">
            <div class="producto-carrito-info">
                <h4>${producto.title}</h4>
                <p>Precio: $${producto.price}</p>
            </div>
            <div class="producto-carrito-cantidad">
                <button onclick="cambiarCantidad(${producto.id}, -1)">-</button>
                <input type="number" value="${producto.quantity}" min="1" onchange="actualizarCantidad(${producto.id}, this.value)">
                <button onclick="cambiarCantidad(${producto.id}, 1)">+</button>
            </div>
            <p>Subtotal: $${(producto.price * producto.quantity).toFixed(2)}</p>
            <button class="btn-eliminar" onclick="eliminarProducto(${producto.id})">Eliminar</button>
        `;
        contenedorCarrito.appendChild(productoDiv);
    });

    renderizarResumen(carrito);
}

function renderizarResumen(carrito) {
    const resumenCarrito = document.getElementById("resumen-carrito");
    const total = carrito.reduce((sum, item) => sum + item.price * item.quantity, 0);

    resumenCarrito.innerHTML = `
        <h3>Resumen de Compra</h3>
        <p><strong>Total de la Compra: $${total.toFixed(2)}</strong></p>
        <button onclick="simularCompra()">Finalizar Compra</button>
        <button class="btn-vaciar" onclick="vaciarCarrito()">Vaciar Carrito</button>
    `;
}

function cambiarCantidad(id, cambio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const producto = carrito.find(p => p.id === id);

    if (producto) {
        producto.quantity += cambio;
        if (producto.quantity < 1) {
            producto.quantity = 1;
        }
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
    actualizarContadorCarrito();
}

function actualizarCantidad(id, nuevaCantidad) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const producto = carrito.find(p => p.id === id);
    const cantidad = parseInt(nuevaCantidad, 10);

    if (producto && cantidad > 0) {
        producto.quantity = cantidad;
    } else if (producto) {
        // Si el valor no es válido, lo resetea a 1
        producto.quantity = 1;
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
    actualizarContadorCarrito();
}

function eliminarProducto(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter(p => p.id !== id);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
    actualizarContadorCarrito();
}

function vaciarCarrito() {
    if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
        localStorage.removeItem("carrito");
        renderizarCarrito();
        actualizarContadorCarrito();
    }
}

function simularCompra() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if(carrito.length > 0) {
        alert("¡Gracias por tu compra! Tu pedido está en camino.");
        localStorage.removeItem("carrito");
        renderizarCarrito();
        actualizarContadorCarrito();
    } else {
        alert("Tu carrito está vacío.");
    }
}