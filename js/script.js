//parte 1 bienvenida

let nombre = prompt("ingrese su nombre ");
let apellido = prompt("igrese su apellido");
alert("hola "+ nombre+ " "  +apellido + " bienvenida/o a a la estetica");
//parte 2 eleccion de servicios
let unas = [
  { nombre: "semipermanente", precio: 5000 },
  { nombre: "caping", precio: 7000 },
  { nombre: "esculpidas", precio: 14000 },
  { nombre: "sof gel", precio: 12000 },
];

let pestanas = [
  { nombre: "lifting", precio: 5000 },
  { nombre: "clasicas", precio: 10000 },
  { nombre: "volumen medio", precio: 12000 },
  { nombre: "volumen ruso", precio: 14000 },
  { nombre: "mega volumen", precio: 20000 },
  { nombre: "efecto cat eyes", precio: 14000 },
];
let faciales = [
  { nombre: "limpieza de cutis", precio: 6600 },
  { nombre: "peeling mecanico con punta diamante", precio: 10200 },
  { nombre: "peeling quimico", precio: 7800 },
  {nombre: "luminoterapia + limpieza facial",precio: 7000,categoria: "promo",},
  { nombre: "limpieza profunda con cauterizacion", precio: 12300 },
];

let depilacion = {
  lacer: [
    { nombre: "axila + pierna entera", precio: 5000, categoria: "promo" },
    { nombre: "bozo + axila", precio: 5000, categoria: "promo" },
    { nombre: "cuerpo entero", precio: 10000 },
    { nombre: "pierna entera + cavado", precio: 7000, categoria: "promo" },
    { nombre: "rostro", precio: 3500 },
  ],
  cera: [
    { nombre: "cejas ", precio: 5000 },
    { nombre: "pierna entera ", precio: 10000 },
  ],
};
// funcion proncipal para la celeccion de servicios 
function seleccionarServicio() {

  let continuar = true;

  while (continuar) {
    
    let eleccion = prompt(
      "Seleccione un servicio (uñas, pestañas, faciales, depilacion):"
    );
    if (eleccion === "uñas") {
      return uñas();
    } else if (eleccion === "pestañas") {
      console.log("los servicios disponibles son : ");
      return comunes2();
    } else if (eleccion === "faciales") {
      console.log("los servicios disponibles son :  ");
         comunes();
    } else if (eleccion === "depilacion") {
      return depi();
    } else {
      console.log("El servicio no se encuentra disponible.");
    }

    let servi2 = prompt("¿Desea realizarse otro servicio? (si/no):");
    let continuar = servi2 === "si";
  }
}
seleccionarServicio();

//funcion depi 
function depi() {
  let eleccion = prompt(
    "su eleccion fue depilacion , porfavor eliga entre cera/lacer"
  );
  if (eleccion === "lacer") {
    mostrarServicios(depilacion.lacer);
  } else if (eleccion === "cera") {
    mostrarServicios(depilacion.cera);
  } else {
    console.log(
      " porfavor ingrese un servicio de depilacion como cera / lacer"
    );
  }
}
//funcion uñas 
function uñas() {
  mostrarServicios(unas);

  let eleccion = prompt(
    "Seleccione uno de los servicios de uñas mostrados en consola :"
  );
  let servicioSeleccionado = obtenerServicioSeleccionado(unas, eleccion);

  if (!servicioSeleccionado) {
    console.log("Servicio no encontrado. Por favor, elija un servicio válido.");
    return;
  }

  let precioFinal = servicioSeleccionado.precio;

  if (eleccion === "semipermanente" || eleccion === "caping") {
    let color = prompt("Ingrese el color deseado:");
    console.log(
      `Su servicio es ${servicioSeleccionado.nombre} con color ${color} a un precio de ${precioFinal}`
    );
  } else if (eleccion === "sof gel" || eleccion === "esculpidas") {
    let forma = prompt(
      "Ingrese la forma deseada (almendra, cuadrada, coffin, redonda):"
    );
    let tamano = prompt(
      "Ingrese el tamaño (s=2mm, m=3mm, l=4mm, xl=2cm, xxl=4cm):"
    ).toLowerCase();

    if (tamano === "xl" || tamano === "xxl") {
      precioFinal += 5000;
      console.log(
        "en esta opcion se le incrementara 5000 pesos mas al precio original , si no le conviene esta opcion , puede elegir entre los talles s. m. l "
      );
    }

    console.log(
      `Su servicio es ${servicioSeleccionado.nombre} con forma ${forma}, tamaño ${tamano} a un precio final de ${precioFinal}`
    );
  } else {
    console.log(
      "Por favor, elija entre las opciones que se muestran por consola."
    );
  }
}



// funcion facial 
function comunes() {
    mostrarServicios(faciales);

    let eleccion = prompt("Por favor ingrese las opciones que se muestran en consola:").toLowerCase();
    let servicioSeleccionado = obtenerServicioSeleccionado(faciales, eleccion);

    if (servicioSeleccionado) {
        let precioFinal = servicioSeleccionado.precio;
        console.log(`Su servicio es ${servicioSeleccionado.nombre}, a un precio de ${precioFinal}`);
    } else {
        console.log("El servicio seleccionado no se encuentra disponible. Por favor, elija un servicio válido.");
    }
}
//funcion pestañas 
function comunes2() {
    mostrarServicios(pestanas);

    let eleccion = prompt("Por favor ingrese las opciones que se muestran en consola:").toLowerCase();
    let servicioSeleccionado = obtenerServicioSeleccionado(pestanas, eleccion);

    if (servicioSeleccionado) {
        let precioFinal = servicioSeleccionado.precio;
        console.log(`Su servicio es ${servicioSeleccionado.nombre}, a un precio de ${precioFinal}`);
    } else {
        console.log("El servicio seleccionado no se encuentra disponible. Por favor, elija un servicio válido.");
    }
}



// cosas que se repiten en el codigo 
function mostrarServicios(servicios) {
    console.log("los servicios disponibles son :");
    servicios.forEach((servicio) =>
      console.log(`${servicio.nombre} - ${servicio.precio}`)
    );
  }
  
  function obtenerServicioSeleccionado(servicios, eleccion) {
    return servicios.find(
      (servicio) => servicio.nombre.toLowerCase() === eleccion
    );
  }
//psrte 3 agenda el turno segunda entrega agregar date
function turnos (){ 
    let dia = prompt("ingrese el dia a realizarse el servicio");
    if ((dia=="lunes")||(dia=="jueves")||(dia == "sabado")) {
        alert("te esperamos")
        
    } else {
        alert("agenda llena ,porfavon ingresaotro dia ");
    }
}
turnos ();

//parte 4; pagos 
let formaPago = prompt("ingrese la forma de pago 1 para efectivo , 2 para tarjeta");
let pago = prompt("ingrese 1 para pago total 2 para seña del servicio");

if (formaPago == 1 && pago == 1) {
  alert("tenes un 15% de descuento");
} else {
 alert("gracias por confiar en nuestros servicios");
}