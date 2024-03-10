/*function renderProductos() {
    const productos = obtenerProductosLS();
    let contenido = "";

    for (const producto of productos) {
        contenido += `<div class="col-md-4 text-center">
        <a href="producto.html" onclick="verProducto(${producto.id});" class="text-decoration-none">
        <img src="${producto.imagen}" alt="${producto.nombre}" height="244" />
        <p class="colorFuente roboto-bold">${producto.nombre}</p>
        </a>
        </div>`;
    }

    document.getElementById("productos").innerHTML = contenido;
}

renderProductos();
*/
const renderPosts = async () => {
    const respuesta = await fetch('./js/producto.json');
    const data = await respuesta.json();
    let contenido = "";

    for (const product of data) {
        contenido += `<div class="col-md-4 mb-3">
        <div class="card border-0">
        <img src=${product.imagen} alt="${product.nombre}">
        <div class="card-body text-center">
            <h5 class="card-title">${product.nombre}</h5>
            <p class="card-text">${product.descripcion}</p>
            <p class="card-text">$${product.precio}</p>
            <button class="btn-add-cart">Añadir al carrito</button>
        </div>
        </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = contenido;
}

renderPosts();