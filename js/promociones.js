export const productosData = [
    {
        id: "rb-3025",
        titulo: "Ray-Ban 3025 001 58 Aviator Large Metal",
        descripcion: "Lentes de sol Ray-Ban 3025 001 58 Aviator Large Metal",
        imagen: "images/ray-ban-3025-001-58-2.jpg",
        promocion: "3X2",
        precio_texto: "US$ 105.50",
        precio_original: 105.50,
        precio_promocion: null
    },
    {
        id: "rb-erika",
        titulo: "Ray-Ban Erica RB4171 651413 54",
        descripcion: "Anteojo de sol Ray-Ban Erica RB4171 651413 54",
        imagen: "images/ray-ban-erika.webp",
        promocion: "3X2",
        precio_texto: "US$ 120",
        precio_original: 120.00,
        precio_promocion: null
    },
    {
        id: "rb-4407-a",
        titulo: "Ray-Ban 4407 6733 81",
        descripcion: "Lentes de sol Ray-Ban 4407 6733 81",
        imagen: "images/ray-ban-4407-6733-81-1.jpg",
        promocion: "30% OFF",
        precio_texto: "US$ 206",
        precio_original: 206.00,
        precio_promocion: 144.20
    },
    {
        id: "rb-4407-b",
        titulo: "Ray-Ban 4407 6733 81",
        descripcion: "Lentes de sol Ray-Ban 4407 6733 81",
        imagen: "images/ray-ban-4407-6733-81.jpg",
        promocion: "2da 50% OFF",
        precio_texto: "US$ 209",
        precio_original: 209.00,
        precio_promocion: null
    },
    {
        id: "rb-4376",
        titulo: "Ray-Ban RB 4376 6018G Negro Gafas de sol Unisex Piloto",
        descripcion: "Gafas de sol Ray-Ban RB 4376 6018G Negro Gafas de sol Unisex Piloto",
        imagen: "images/ray-ban-rb-4376-6018g-black.jpg",
        promocion: "3X2",
        precio_texto: "US$ 250",
        precio_original: 250.00,
        precio_promocion: null
    },
    {
        id: "rb-3447",
        titulo: "Ray-Ban Roud Metal 3447",
        descripcion: "Gafas de sol Ray-Ban Roud Metal 3447",
        imagen: "images/ray-ban-3447.jpg",
        promocion: "2da 50% OFF",
        precio_texto: "US$ 300",
        precio_original: 300.00,
        precio_promocion: null
    },
    {
        id: "rb-0rb3548",
        titulo: "Ray-Ban Sole 3F 51",
        descripcion: "Gafas de sol Ray-Ban Sole 3F 51",
        imagen: "images/ray-ban-0RB3548__001_3F.webp",
        promocion: "2da 50% OFF",
        precio_texto: "US$ 150",
        precio_original: 150.00,
        precio_promocion: null
    },
    {
        id: "gucci-gg1593s",
        titulo: "Gucci GG1593S 001",
        descripcion: "Gafas de sol Gucci GG1593S 001",
        imagen: "images/gucci.webp",
        promocion: "10% OFF",
        precio_texto: "US$ 400",
        precio_original: 400.00,
        precio_promocion: 360.00
    },
    {
        id: "prada-solaire",
        titulo: "Prada Solaire",
        descripcion: "Gafas de sol Prada Solaire",
        imagen: "images/prada-pr-17ws-11r10e.webp",
        promocion: "10% OFF",
        precio_texto: "US$ 350",
        precio_original: 350.00,
        precio_promocion: 315.00
    },
    {
        id: "prada-b54s-a",
        titulo: "Prada B54S 5AK 40K 54",
        descripcion: "Gafas de sol Prada B54S 5AK 40K 54",
        imagen: "images/prada-b54s.webp",
        promocion: "3X2",
        precio_texto: "US$ 275",
        precio_original: 275.00,
        precio_promocion: null
    },
    {
        id: "prada-pr56zs",
        titulo: "Prada PR 56ZS AAV5Z1 Pale Gold",
        descripcion: "Gafas de sol Prada PR 56ZS AAV5Z1 Pale Gold",
        imagen: "images/prada-pr-56zs-aav5z1-pale-gold.jpg",
        promocion: "10% OFF",
        precio_texto: "US$ 600",
        precio_original: 600.00,
        precio_promocion: 540.00
    },
    {
        id: "prada-b54s-b",
        titulo: "Prada 0PR 17WS",
        descripcion: "Gafas de sol Prada 0PR 17WS",
        imagen: "images/prada-pr-b54s-5ak50p.webp",
        promocion: "3X2",
        precio_texto: "US$ 280.50",
        precio_original: 280.50,
        precio_promocion: null
    }
];

export let productosSeleccionados = [];
export let productos3x2 = [];
export let productos2da50 = [];
export let productos10 = [];
export let productos30 = [];

export function toggleCarrito() {
    const carritoContainer = document.getElementById('contenedor-carrito');
    if (carritoContainer) carritoContainer.classList.toggle('contenedor-carrito-abierto');
}

export function renderCarrito() {
    const contenedorProductosCarrito = document.getElementById('contenedor-productos-carrito');
    contenedorProductosCarrito.innerHTML = '';

    if (productosSeleccionados.length === 0) {
        contenedorProductosCarrito.innerHTML = `<p class="carrito-vacio">Tu carrito está vacío.</p>`;
    }

    productosSeleccionados.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto-carrito';
        const precioUnitario = producto.precio_promocion !== null ? producto.precio_promocion : producto.precio_original;
        const subtotal = precioUnitario * producto.cantidad;

        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen-carrito">
            <div class="producto-info">
                <h3 class="producto-titulo-carrito">${producto.titulo}</h3>
                <span class="producto-precio-carrito">US$ ${precioUnitario.toFixed(2)} c/u</span>
                <div class="producto-cantidad">
                    <button class="boton-menos" data-id="${producto.id}">-</button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button class="boton-mas" data-id="${producto.id}">+</button>
                </div>
                <span class="producto-subtotal">Subtotal: US$ ${subtotal.toFixed(2)}</span>
            </div>
        `;
        contenedorProductosCarrito.appendChild(div);
    });

    const { original, descuentos, total } = calcularTotales(productosSeleccionados);

    document.getElementById('carrito-original').textContent = `Original: US$ ${original.toFixed(2)}`;
    document.getElementById('carrito-descuentos').textContent = `Descuentos: US$ ${descuentos.toFixed(2)}`;
    document.getElementById('carrito-total').textContent = `Total: US$ ${total.toFixed(2)}`;

    const carritoIcono = document.getElementById('carrito-icono');
    if (carritoIcono) {
        if (productosSeleccionados.length > 0) {
            carritoIcono.classList.replace('carrito-icono', 'carrito-icono-visible');
        } else {
            carritoIcono.classList.replace('carrito-icono-visible', 'carrito-icono');
        }
    }

    document.querySelectorAll('.boton-mas').forEach(boton => {
        boton.addEventListener('click', () => incrementarCantidad(boton.dataset.id));
    });
    document.querySelectorAll('.boton-menos').forEach(boton => {
        boton.addEventListener('click', () => decrementarCantidad(boton.dataset.id));
    });
}

function incrementarCantidad(id) {
    const producto = productosSeleccionados.find(p => p.id === id);
    if (producto) {
        producto.cantidad++;
        renderCarrito();
    }
}

function decrementarCantidad(id) {
    const index = productosSeleccionados.findIndex(p => p.id === id);
    if (index !== -1) {
        productosSeleccionados[index].cantidad--;
        if (productosSeleccionados[index].cantidad <= 0) {
            productosSeleccionados.splice(index, 1);
        }
        renderCarrito();
    }
}

export function calcularTotales(productos) {
    let totalOriginal = 0;
    let totalSinPromociones = 0;
    let descuentoPromocional = 0;

    productos.forEach(producto => {
        const precioBase = producto.precio_promocion ?? producto.precio_original;
        totalOriginal += producto.precio_original * producto.cantidad;
        totalSinPromociones += precioBase * producto.cantidad;

        if (producto.promocion === "3X2") {
            const grupos3 = Math.floor(producto.cantidad / 3);
            descuentoPromocional += grupos3 * producto.precio_original;
        }

        if (producto.promocion === "2da 50% OFF") {
            const pares = Math.floor(producto.cantidad / 2);
            descuentoPromocional += pares * (producto.precio_original * 0.5);
        }
    });

    const totalFinal = totalSinPromociones - descuentoPromocional;
    const descuentosAplicados = totalOriginal - totalFinal;

    return { original: totalOriginal, descuentos: descuentosAplicados, total: totalFinal };
}

export function limpiarCarrito() {
    productosSeleccionados = [];
    renderCarrito();
}

function agregarProductoCarrito(productoId) {
    const productoExistente = productosSeleccionados.find(p => p.id === productoId);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        const producto = productosData.find(p => p.id === productoId);
        if (!producto) return alert("Producto no encontrado.");
        productosSeleccionados.push({ ...producto, cantidad: 1 });
    }
    renderCarrito();
}

function renderizarProductos(productosArray) {
    const contenedorGrid = document.getElementById('contenedor-productos-grid');
    contenedorGrid.innerHTML = '';
    productosArray.forEach(producto => {
        let precioHTML;
        let precioActual = producto.precio_original;

        if (producto.precio_promocion !== null) {
            precioHTML = `
                <span class="producto-precio producto-precio-viejo">US$ ${producto.precio_original.toFixed(2)}</span>
                <span class="producto-precio producto-precio-promocion">US$ ${producto.precio_promocion.toFixed(2)}</span>
            `;
            precioActual = producto.precio_promocion;
        } else {
            precioHTML = `<span class="producto-precio">US$ ${producto.precio_original.toFixed(2)}</span>`;
        }

        const productoHTML = `
            <div class="producto" data-id="${producto.id}" data-precio-actual="${precioActual}">
                <div class="contenedor-producto-imagen">
                    <span class="promocion-texto">${producto.promocion}</span>
                    <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen">
                </div>
                <div class="contenedor-producto-texto">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-texto">${producto.descripcion}</p>
                    ${precioHTML}
                    <button class="boton-agregar-carrito" data-producto-id="${producto.id}">Agregar</button>
                </div>
            </div>
        `;
        contenedorGrid.innerHTML += productoHTML;
    });
    adjuntarListenersAgregar();
}

function adjuntarListenersAgregar() {
    document.querySelectorAll('.boton-agregar-carrito').forEach(boton => {
        boton.addEventListener('click', e => {
            e.stopPropagation();
            const productoId = boton.getAttribute('data-producto-id');
            agregarProductoCarrito(productoId);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos(productosData);

    const carritoIcon = document.getElementById('carrito-icono');
    if (carritoIcon) carritoIcon.addEventListener('click', toggleCarrito);

    const botonCerrar = document.getElementById('boton-cerrar');
    if (botonCerrar) botonCerrar.addEventListener('click', toggleCarrito);

    const botonComprar = document.getElementById('boton-comprar');
    if (botonComprar) botonComprar.addEventListener('click', () => {
        limpiarCarrito();
        toggleCarrito();
    });

    const botonLimpiar = document.getElementById('boton-limpiar');
    if (botonLimpiar) botonLimpiar.addEventListener('click', limpiarCarrito);
});
