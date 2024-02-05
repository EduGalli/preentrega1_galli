// Intento de E-Commerce

function bienvenidaUsuario(nombre){
    alert("Bienvenido a mi E-commerce "+nombre)
}

let nombreUsuario= prompt("Ingresa tu nombre");

bienvenidaUsuario(nombreUsuario)

const productos = [
    {id:1, nombre:"Arena por metro cuadrado ", precio: 5000},
    {id:2, nombre:"Cemento 50 kg ", precio: 6000},
    {id:3, nombre:"Piedras por metro cuadrado ", precio: 9000},
]

                               
class Carrito {
constructor() {
                this.productos = [];
                this.totalPagar = 0;
            }
                                
agregarProducto(id) {
    
    let producto = productos.find(prod => prod.id === id);
    console.log(producto);

    if (producto) {
        this.productos.push(producto);
        console.log("Agregaste el Producto #" + id + " al Carrito!");
    } else {
        console.log("No se encontró el Producto con #" + id + "!");
    }
}

                                
listarCarrito() {
    let salida = "";
    this.productos.forEach(item => {
            salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
            })
                                    
            return salida;
        }
                                
calcularTotalProductos() {
                          return this.productos.length;
                        }
                             
calcularTotalPagar() {
                let total = 0;
                this.productos.forEach(item => {
                                           total += item.precio;
                                        });
                                
                                        return total;
                                        
                                        
    }
}
function listarProductos() {
    let salida = "";

    productos.forEach(item => {
        salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
    })

    return salida;
}

const carrito = new Carrito();
let opcionSeleccionada = 10;

while (opcionSeleccionada != 0) {
    opcionSeleccionada = parseInt(prompt("Seleccione el producto a agregar al Carrito: (0 para Salir)\n\n" + listarProductos()));

    if (opcionSeleccionada == 0) {
        break;
    }

    carrito.agregarProducto(opcionSeleccionada);
}

let productosCarrito = "Detalle:\n" + carrito.listarCarrito();
let salidaSubTotal = "Subtotal: $" + carrito.calcularTotalPagar();
let montoFinal = "Total: $" + Math.round(carrito.calcularTotalPagar());
alert(productosCarrito + "\n" + salidaSubTotal + "\n" + montoFinal);

let producto = productos.find(item => item.id === 3);
console.log(producto.nombre + " (" + producto.precio + " Precio)");

const o = productos.find(elemento =>{
    return elemento.id === 3;
})  
console.log(o)