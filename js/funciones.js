// Intento de E-Commerce

const productos = [
    {id:1, nombre:"Ladrillo Retak", imagen:"https://www.familiabercomat.com/on/demandware.static/-/Sites-FBM/default/dwd24f71aa/images/large/161873_0.jpg", descripcion:"Ladrillo 15 60X25 Retak St00404", precio:3600},
    {id:2, nombre:"Ladrillo Hueco con 6 Agujeros", imagen:"https://www.familiabercomat.com/on/demandware.static/-/Sites-FBM/default/dw6eb498ed/images/medium/117371_0.jpg", descripcion:"Ladrillo Hueco Con 6 Agujeros 8X18X25", precio:344},
    {id:3, nombre:"Ladrillo Hueco con 9 Agujeros", imagen:"https://www.familiabercomat.com/on/demandware.static/-/Sites-FBM/default/dw558ec1cc/images/medium/117373_0.jpg", descripcion:"Ladrillo Hueco Con 9 Agujeros 18X18X25", precio:490},
    {id:4, nombre:"Ladrillo de Poliester", imagen:"https://www.familiabercomat.com/on/demandware.static/-/Sites-FBM/default/dwbd3f8493/images/medium/112246_0.jpg", descripcion:"Ladrillo De Poliester 16X42X100", precio:6340},
    {id:5, nombre:"Ladrillo Refractario", imagen:"https://www.familiabercomat.com/on/demandware.static/-/Sites-FBM/default/dw70083d79/images/medium/132180_0.jpg", descripcion:"Ladrillo Refractario 229X114X60 Cregar", precio:2020},
    {id:6, nombre:"Tejuela Refractaria", imagen:"https://www.familiabercomat.com/on/demandware.static/-/Sites-FBM/default/dw6a677022/images/medium/116985_0.jpg", descripcion:"Tejuela Refractaria 20 229X114X20 Cregar Tonalizado", precio:809}
];

const guardarProductosLS = (productos) => {
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

guardarProductosLS(productos);