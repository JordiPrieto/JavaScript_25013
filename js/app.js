document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos();
});

const renderizarProductos = () => {
    const url = "https://dummyjson.com/products/category/sports-accessories";
    const contenedorProductos = document.getElementById("contenedor-productos");

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (!data.products || data.products.length === 0) {
                contenedorProductos.innerHTML = `<p>No se encontraron productos.</p>`;
                return;
            }

            for (const producto of data.products) {
                let tarjetaProducto = document.createElement("article");
                tarjetaProducto.className = "tarjeta-producto";

                tarjetaProducto.innerHTML = `
                    <img src="${producto.images[0]}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p class="precio">$${producto.price}</p>
                    <button class="btn-agregar" data-id="${producto.id}">Agregar al Carrito</button>
                `;
                contenedorProductos.appendChild(tarjetaProducto);
            }

            // Add event listeners after all buttons are in the DOM
            document.querySelectorAll('.btn-agregar').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = e.target.getAttribute('data-id');
                    const productoSeleccionado = data.products.find(p => p.id == productId);
                    agregarProductoAlCarrito(productoSeleccionado);
                });
            });
        })
        .catch(err => {
            console.error("Error al cargar productos: ", err);
            contenedorProductos.innerHTML = `<p>Hubo un error al cargar los productos. Inténtelo más tarde.</p>`;
        });
};

const agregarProductoAlCarrito = (producto) => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoEnCarrito = carrito.find(item => item.id === producto.id);

    if (productoEnCarrito) {
        // Si el producto ya está, incrementa la cantidad
        productoEnCarrito.quantity++;
    } else {
        // Si es nuevo, lo agrega con cantidad 1
        carrito.push({ ...producto, quantity: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${producto.title} fue agregado al carrito.`);
    actualizarContadorCarrito();
};