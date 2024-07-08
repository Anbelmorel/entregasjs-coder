//parte 1 bienvenida

let nombre = prompt("ingrese su nombre ");
let apellido = prompt("igrese su apellido");
alert("hola "+ nombre+ " "  +apellido + " bienvenida/o a a la estetica");
//parte 2 eleccion de servicios
function servis(){
   let servicio= prompt("ingrese el servicio a realizace 1 uñas, 2 pestañas , 3 limpieza facial , 4 depilacion ");

   if ((servicio=="1")||(servicio=="2")||(servicio=="3")||(servicio=="4")){
     switch (servicio) {
         case "1":
            alert("uñas");
            break;
         case "2":
            alert("pestañas");
            break;
        case "3":
            alert("limpieza facial");
            break;
        case "4":
            alert("depilacion");
            break;
        default:
            alert("porfavor ingrese un servicio");
            break;
    }
  }else {
    alert("el servicio ingresado no esta disponibles ")
  }
  let pregunta = prompt ("desea realizarse un segundo servicio ? si/no");
  if (pregunta =="si"){
    let servi2= prompt("ingrese su segundo servicio 1 uñas, 2 pestañas , 3 limpieza facial , 4 depilacion");
    switch (servi2) {
        case "1":
           alert("uñas");
           break;
        case "2":
           alert("pestañas");
           break;
       case "3":
           alert("limpieza facial");
           break;
       case "4":
           alert("depilacion");
           break;
       default:
           alert("porfavor ingrese un servicio");
           break;
   }
  }else{
    alert ("usted no desea un segundo servicio");
  }
    
}
servis(); 
//psrte 3 agenda el turno 
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