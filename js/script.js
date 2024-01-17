// Intento de E-Commerce

function bienvenidaUsuario(nombre){
    alert("Bienvenido a mi E-commerce "+nombre)
}

let nombreUsuario= prompt("Ingresa tu nombre");

bienvenidaUsuario(nombreUsuario)

let productosDisponibles1 = "Arena";
let productosDisponibles2 = "Cemento";
let productosDisponibles3 = "Piedra";
let respuestaUsuario = prompt("¿Qué producto estás buscando? (Escribe el número correspondiente):\n" +
                                "1. " + productosDisponibles1 + "\n" +
                                "2. " + productosDisponibles2 + "\n" +
                                "3. " + productosDisponibles3 + "\n" +
                                "Presiona x para finalizar");


if(respuestaUsuario !== "x") {
     opcionSeleccionada = respuestaUsuario;
                                
    if (opcionSeleccionada >= 1 && opcionSeleccionada <= 3) {
        alert("Perfecto, en estos momentos disponemos de ese producto");
    } else {
    alert("Opción no válida. Por favor, selecciona una opción válida.");
    }
}                           

while(respuestaUsuario>= 1 && respuestaUsuario<= 3){
    switch(respuestaUsuario){
        case "1": alert("El precio del metro cuadrado de Arena es de $5000")
        break
        case "2": alert("El precio de la bolsa de 50kg de cemento es de $6000")
        break
        case "3": alert("El precio del metro cuadrado de piedra es de $9000")
        break
    }
    if(respuestaUsuario== 1){
        let calculoCompra=prompt("Ingrese la cantidad a comprar");
        calculoCompra=calculoCompra*5000;
        alert("El total de su compra es de $"+calculoCompra)
    }else{
    if(respuestaUsuario== 2){
        let calculoCompra=prompt("Ingrese la cantidad a comprar");
        calculoCompra=calculoCompra*6000;
        alert("El total de su compra es de $"+calculoCompra) 
    }
    else {
        let calculoCompra=prompt("Ingrese la cantidad a comprar");
        calculoCompra=calculoCompra*9000;
        alert("El total de su compra es de $"+calculoCompra)
    }
}    
    respuestaUsuario = prompt("Presiona x para finalizar");
}
