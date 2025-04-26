const titulo = document.querySelector("h1");
const header = document.querySelector("header");
const h3 = document.querySelector("h3");

titulo.innerHTML = titulo.innerText.split("").map( c => {
    return c != " " ? `<span>${c}</span>` : c;
}).join("");

const letras = document.querySelectorAll("h1 span");

for (let i = 0; i <letras.length; i++){
    setTimeout(() => {
        letras[i].classList.add("visible");
    }, 100 * i);
}

/* responsive */

const men = document.querySelector("nav");
const botones = document.querySelectorAll (".menu-movil-abrir, .menu-movil-cerrar");

botones.forEach( boton => {
    boton.addEventListener("click",() => {
        men.classList.toggle(".desplegado");
    });
});

/* horizontal */

function checkOrientation() {
    const message = document.getElementById('rotate-message');
    
    if (window.innerHeight > window.innerWidth) {
      // Estamos en vertical
      message.style.opacity = "1";
    } else {
      // Estamos en horizontal
      message.style.opacity = "0";
    }
  }
  
  // Comprobar al cargar
  window.addEventListener('load', checkOrientation);
  
  // Comprobar cuando gira
  window.addEventListener('resize', checkOrientation);
  window.addEventListener('orientationchange', checkOrientation);
  
