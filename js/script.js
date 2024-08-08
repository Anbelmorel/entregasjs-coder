// declaracion de elementos del body 
const header = document.createElement("header");
document.body.appendChild(header);

const main = document.createElement("main");
document.body.appendChild(main);

//menu 

let links = [
  {nombre:"Servicios", linkText: "../pages/servicios.html"},
  {nombre:"Inicio", linkTex:"../index.html"}
  ];

  function crearMenu (links) {
    let nav = document.createElement("nav");
    let ul = document.createElement("ul");

    links.forEach(link => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = link.linkText;  // Establece el href con el valor de linkText
        a.textContent = link.nombre;  // Establece el texto del enlace con el valor de nombre
        
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    return nav;
}

let menu = crearMenu(links);
header.appendChild(menu);
// ver carrucel 
/*let imagenes = [
  { ruta: "../imag/imgCarru1.png" },
  { ruta: "../imag/imgCarru2.png" },
  { ruta: "../imag/imgCarru3.png" }
];
imagenes.forEach((datosimg) => {
  let img = document.createElement("img");
  img.src = datosimg.ruta;
  img.classList.add("imgEstiloCarru");
  div.appendChild(img);
});*/

// bienvenida y descripcion de la app 
let titulo = document.createElement("h1")
titulo.textContent ="bienvenidos a nuestra estetica"
titulo.classList.add("titulo")
main.appendChild(titulo)

let p = document.createElement("p")
p.classList.add ("descripcion")
p.textContent= "En nuestra estética, nos dedicamos a realzar tu belleza y bienestar. Ofrecemos una amplia gama de servicios personalizados que incluyen tratamientos faciales, manicuras, extensiones de pestañas, depilación láser y mucho más . Nuestro equipo de profesionales está aquí para brindarte la mejor experiencia posible, utilizando productos de alta calidad y las técnicas más avanzadas del mercado. ¡Te esperamos para que te relajes y te sientas más hermosa que nunca!"
main.appendChild(p);

//tarjetas estaticas 
let servicios = [
  {nombre: "faciales " ,imagenT: "imag/facial.png", descripcion: "Nuestro servicio de limpieza y cuidado de la piel está diseñado para revitalizar y mantener tu piel en óptimas condiciones. Incluye una limpieza profunda para eliminar impurezas, exfoliación para suavizar y renovar la piel, y una serie de tratamientos hidratantes y nutritivos. Adaptamos cada sesión a tus necesidades específicas, asegurando que tu piel luzca fresca, radiante y saludable"},
  {nombre: "manicuria" ,imagenT: "imag/manucuria.png" , descripcion: "En nuestra estética, ofrecemos un servicio de manicura integral que se adapta a tus necesidades y preferencias. Nuestro equipo de expertos está capacitado en las últimas técnicas y tendencias para garantizar resultados impecables. los distintos servicios que ofrecemos son : capping , semipermanente , sofgel , esculpidas . Cada una de estas técnicas está diseñada para realzar la belleza de tus manos y ofrecerte una experiencia de manicura que se ajuste a tus expectativas. Ven a disfrutar de un servicio de manicura profesional y sal con unas uñas perfectamente cuidadas y bellas"},
  {nombre: "extenciones de pestañas" , imagenT: "imag/pestanas.png", descripcion: "Transforma tu mirada con nuestro exclusivo servicio de extensiones de pestañas. Ofrecemos una variedad de técnicas para adaptarnos a tus preferencias y estilo: lifting , clasicas , volmen medio , volumen ruso . Cada uno de estos servicios está diseñado para realzar tu belleza natural y ofrecerte un look personalizado que se ajuste a tus gustos y necesidades. Ven y disfruta de una experiencia de extensión de pestañas que te hará sentir y lucir espectacular."},
  {nombre: "depilacion" ,imagenT: "imag/depi.png", descripcion: "La depilación láser es una solución eficaz y duradera para eliminar el vello no deseado. Utilizamos tecnología avanzada que actúa directamente sobre el folículo piloso, reduciendo el vello de manera progresiva y minimizando la posibilidad de crecimiento futuro. Ideal para lograr una piel suave y libre de vello en áreas como piernas, axilas, y más."}

]
let conteTarjetas = document.createElement("div")
conteTarjetas.classList.add("tarjetasEst")
main.appendChild(conteTarjetas);

servicios.forEach(servicio => {
  let tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  let imagen = document.createElement("img");
  imagen.src = servicio.imagenT;
  imagen.alt = servicio.nombre;
  imagen.className = "tarjeta-imagen";
  tarjeta.appendChild(imagen);

  let titulo = document.createElement("h3");
  titulo.textContent = servicio.nombre;
  tarjeta.appendChild(titulo);

  let descripcion = document.createElement("p");
  descripcion.textContent = servicio.descripcion;
  tarjeta.appendChild(descripcion);

  conteTarjetas.appendChild(tarjeta);
});
// direccion a nuestra aplicacion web 
let titulo2 = document.createElement("h2")
titulo2.textContent= "solicitar servicios"
let descripcion2 = document.createElement("p")
descripcion2.textContent= "Para solicitar nuestros servicios, visita la sección correspondiente en el enlace proporcionado o dirígete directamente a la sección de servicios para obtener más información."
main.appendChild(titulo2)
main.appendChild(descripcion2)
let a = document.createElement("a")
a.href = "pages/servicios.html"
a.classList.add ("enlace")
a.textContent ="ver servicios"
main.appendChild(a)

//  footer
let footer = document.createElement("footer");
document.body.appendChild(footer);

let redes = [
  {nombre: "instagram ", imagenF:"imag/instagram.png"},
  {nombre: " facebook ", imagenF:"imag/facebook.png"},
  {nombre: " whatsapp ", imagenF:"imag/whatsapp.png"}
]

function iconos(redes) {
  let conteFooter = document.createElement("div");
  conteFooter.classList.add("contFooter"); 

  redes.forEach((icono) => {
    let img = document.createElement("img");
    img.src = icono.imagenF;
    img.alt = icono.nombre; 
    img.classList.add("imgfooter");
    conteFooter.appendChild(img);
  });

  return conteFooter; 
}

const footerIcons = iconos(redes); 
footer.appendChild(footerIcons); 

let  derechos = document.createElement("p");
derechos.textContent = "© 2024 Estética. Todos los derechos reservados.";
footer.appendChild(derechos);