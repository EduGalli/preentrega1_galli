/*function renderProducto() {
    const producto = obtenerProductoLS();
    let contenido = `<div class="col-md-6 offset-md-3 text-center">
    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
    <p class="colorFuente comic-neue-bold">${producto.nombre}</p>
    <p class="colorFuente comic-neue-bold">${producto.descripcion}</p>
    <p class="colorFuente comic-neue-bold">$${producto.precio}</p>
    </a>
    </div>`;

    document.getElementById("producto").innerHTML = contenido;
}

renderProducto();
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
            <p class="card-text">${product.precio}</p>
        </div>
        </div>
        </div>`;
    }

    document.getElementById("producto").innerHTML = contenido;
}

renderPosts();