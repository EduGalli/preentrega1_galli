// Intento de E-Commerce

/*const productos = [
    {id:1, nombre:"Ladrillo Retak", imagen:"https://www.familiabercomat.com/on/demandware.static/-/Sites-FBM/default/dwd24f71aa/images/large/161873_0.jpg", descripcion:"Ladrillo 15 60X25 Retak St00404", precio:3600},
    {id:2, nombre:"Ladrillo Hueco con 6 Agujeros", imagen:"https://www.familiabercomat.com/on/demandware.static/-/Sites-FBM/default/dw6eb498ed/images/medium/117371_0.jpg", descripcion:"Ladrillo Hueco Con 6 Agujeros 8X18X25", precio:344},
    {id:3, nombre:"Ladrillo Hueco con 9 Agujeros", imagen:"https://www.familiabercomat.com/on/demandware.static/-/Sites-FBM/default/dw558ec1cc/images/medium/117373_0.jpg", descripcion:"Ladrillo Hueco Con 9 Agujeros 18X18X25", precio:490},
    {id:4, nombre:"Ladrillo de Poliester", imagen:"https://www.familiabercomat.com/on/demandware.static/-/Sites-FBM/default/dwbd3f8493/images/medium/112246_0.jpg", descripcion:"Ladrillo De Poliester 16X42X100", precio:6340},
    {id:5, nombre:"Ladrillo Refractario", imagen:"https://www.familiabercomat.com/on/demandware.static/-/Sites-FBM/default/dw70083d79/images/medium/132180_0.jpg", descripcion:"Ladrillo Refractario 229X114X60 Cregar", precio:2020},
    {id:6, nombre:"Tejuela Refractaria", imagen:"https://www.familiabercomat.com/on/demandware.static/-/Sites-FBM/default/dw6a677022/images/medium/116985_0.jpg", descripcion:"Tejuela Refractaria 20 229X114X20 Cregar Tonalizado", precio:809}
];*/

/*const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const obtenerProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

const guardarCarritoLS = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const obtenerIdProductoLS = () => {
    return JSON.parse(localStorage.getItem("producto")) || 0;
}

const cantTotalProductos = () => {
    const carrito = obtenerCarritoLS();

    return carrito.length;
}

const renderTotalCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantTotalProductos();
}

const verProducto = (id) => {
    localStorage.setItem("producto", JSON.stringify(id));
}

const obtenerProductoLS = () => {
    const productos = obtenerProductosLS();
    const id = obtenerIdProductoLS();
    const producto = productos.find(item => item.id === id);
    
    return producto;
}

guardarProductosLS(productos);*/
// Funciones para almacenar y traer los datos que se almacenan
function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}
let productos = obtenerAlmacenamientoLocal('productos') || [];

// Variables que traemos de nuestro html
const informacionCompra = document.getElementById('informacionCompra');
const contenedorCompra = document.getElementById('contenedorCompra');
const productosCompra = document.getElementById('productosCompra');
const contenedor = document.getElementById('contenedor');
const carrito = document.getElementById('carrito');
const numero = document.getElementById("numero");
const header = document.querySelector("#header");
const total = document.getElementById('total');
const body = document.querySelector("body");
const x = document.getElementById('x')

// Variables que vamos a usar en nuestoro proyecto
let lista = []
let valortotal = 0

// Scroll de nuestra pagina
window.addEventListener("scroll", function () {
    if (contenedor.getBoundingClientRect().top < 10) {
        header.classList.add("scroll")
    }
    else {
        header.classList.remove("scroll")
    }
})


window.addEventListener('load', () => {
    visualizarProductos();
    contenedorCompra.classList.add("none")
})

function visualizarProductos() {
    contenedor.innerHTML = ""
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].existencia > 0) {
            contenedor.innerHTML += `<div><img src="${productos[i].urlImagen}"><div class="informacion"><p>${productos[i].nombre}</p><p class="precio">$${productos[i].valor}</p><button onclick=comprar(${i})>Comprar</button></div></div>`
        }
        else {
            contenedor.innerHTML += `<div><img src="${productos[i].urlImagen}"><div class="informacion"><p>${productos[i].nombre}</p><p class="precio">$${productos[i].valor}</p><p class="soldOut">Sold Out</p></div></div>`
        }
    }
}

function comprar(indice) {
    lista.push({ nombre: productos[indice].nombre, precio: productos[indice].valor })

    let van = true
    let i = 0
    while (van == true) {
        if (productos[i].nombre == productos[indice].nombre) {
            productos[i].existencia -= 1
            if (productos[i].existencia == 0) {
                visualizarProductos()
            }
            van = false
        }
        guardarAlmacenamientoLocal("productos", productos)
        i += 1
    }
    numero.innerHTML = lista.length
    numero.classList.add("diseñoNumero")
    return lista
}

carrito.addEventListener("click", function(){
    body.style.overflow = "hidden"
    contenedorCompra.classList.remove('none')
    contenedorCompra.classList.add('contenedorCompra')
    informacionCompra.classList.add('informacionCompra')
    mostrarElemtrosLista()
})

function mostrarElemtrosLista() {
    productosCompra.innerHTML = ""
    valortotal = 0
    for (let i = 0; i < lista.length; i++){
        productosCompra.innerHTML += `<div><div class="img"><button onclick=eliminar(${i}) class="botonTrash"><img src="/img/trash.png"></button><p>${lista[i].nombre}</p></div><p> $${lista[i].precio}</p></div>`
        valortotal += parseInt(lista[i].precio)
    }
    total.innerHTML = `<p>Valor Total</p> <p><span>$${valortotal}</span></p>`
}

function eliminar(indice){
    let van = true
    let i = 0
    while (van == true) {
        if (productos[i].nombre == lista[indice].nombre) {
            productos[i].existencia += 1
            lista.splice(indice, 1)
            van = false
        }
        i += 1
    }
    guardarAlmacenamientoLocal("productos", productos)

    numero.innerHTML = lista.length
    if (lista.length == 0){
        numero.classList.remove("diseñoNumero")
    }
    visualizarProductos()
    mostrarElemtrosLista()
}

x.addEventListener("click", function(){
    body.style.overflow = "auto"
    contenedorCompra.classList.add('none')
    contenedorCompra.classList.remove('contenedorCompra')
    informacionCompra.classList.remove('informacionCompra')
})