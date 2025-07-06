# BAXTECH - Proyecto Final de E-commerce

## Descripción del Proyecto

Este proyecto es un sitio web de e-commerce completo y dinámico, desarrollado como proyecto final para el curso "Talento Tech". El sitio, llamado **BAXTECH**, presenta una variedad de accesorios de tecnología y deportes. Carga productos de forma dinámica desde una API REST, permite a los usuarios agregar productos a un carrito de compras, gestionar los artículos del carrito y mantiene el estado del carrito incluso después de cerrar la pestaña del navegador.

## Tecnologías Utilizadas

-   **HTML5**: Estructurado con etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) para una mejor accesibilidad y SEO.
-   **CSS3**:
    -   **Flexbox**: Utilizado para alinear elementos en el encabezado, la navegación y las tarjetas de productos.
    -   **Grid**: Usado para el diseño de la sección de reseñas de clientes.
    -   **Diseño Responsivo**: Implementado con media queries para asegurar que el sitio se vea bien en todos los dispositivos, desde teléfonos móviles hasta computadoras de escritorio.
    -   **Google Fonts**: Se utiliza la fuente 'Montserrat' para un aspecto limpio y moderno.
-   **JavaScript (ES6+)**:
    -   **Fetch API**: Para consumir datos de productos desde la API REST de `dummyjson.com`.
    -   **Manipulación del DOM**: Para renderizar productos dinámicamente y actualizar la interfaz del carrito de compras.
    -   **localStorage**: Para asegurar que el contenido del carrito de compras sea persistente entre sesiones del navegador.

## Funcionalidades

-   **Carga Dinámica de Productos**: Los productos se obtienen de una API externa y se muestran en la página de inicio.
-   **Carrito de Compras Interactivo**: Los usuarios pueden agregar productos al carrito, ver el carrito en una página separada, cambiar las cantidades de los artículos y eliminarlos.
-   **Persistencia del Carrito**: El estado del carrito se guarda en `localStorage`, por lo que no se pierde al recargar la página o cerrar el navegador.
-   **Diseño Responsivo**: El diseño se adapta de forma fluida a diferentes tamaños de pantalla.
-   **Formulario de Contacto**: Un formulario de contacto funcional que utiliza Formspree para gestionar los envíos.
-   **Accesibilidad y SEO**: Se implementan prácticas básicas como etiquetas `alt` para las imágenes y HTML semántico.

## Cómo Ejecutar

1.  Clona o descarga el repositorio del proyecto.
2.  Abre el archivo `index.html` en tu navegador web para iniciar la aplicación.
3.  No se requiere ninguna instalación especial o servidor para la visualización local.