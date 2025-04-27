/*/ Detect if the device is tactil (mobile or tablet)
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Select the <main> element
const main = document.querySelector('main');

// If it's a touch device, set overflow-y to hidden
if (isTouchDevice && main) {
  main.style.overflowY = 'hidden';
} */




function checkOrientacion() {
    const msg = document.querySelector(".rotar");

    if (window.matchMedia("(orientation: portrait)").matches) {
        // If it is not in "landscape" mode, it shows the warning message
        msg.style.display = "flex";
    } else {
        // If it is already in "landscape" mode, it does not show the warning message
        msg.style.display = "none";
    }
}
    // Check when loading, resizing or the orientation of the device changes
    window.addEventListener('load', checkOrientacion);
    window.addEventListener('resize', checkOrientacion);
    window.addEventListener('orientationchange', checkOrientacion);


    /*STRUCTURE OF JAVASCRIPT CODE FOR INDEX.HTML
            - Front Page Animations.
        */

        //Selection of header and main headings in the front page
        const titulo = document.querySelector("h1");
        const header = document.querySelector("header");
        const h3 = document.querySelector("h3");

        //Animation functions for the header and main heading in the front page
        //For the H1, the characters are animated one by one so I splited it and save the result in "letras" 
        titulo.innerHTML = titulo.innerText.split("").map( c => { 
            return c != " " ? `<span>${c}</span>` : c;
        }).join("");

        const letras = document.querySelectorAll("h1 span");

        //The characters appears one after another in the front page by using a timer
        for (let i = 0; i <letras.length; i++){
            setTimeout(() => {
                letras[i].classList.add("visible");
            }, 100 * i);
        }

        //After H1 finish its animation, the header falls down to the front page
        setTimeout(() => {
            header.classList.add("down");
        }, 50);

        //After H1 and the header complete their animations, the H3 goes up into the front page
        setTimeout(() => {
            h3.classList.add("up");
        }, 100);

//Selection of texts and buttons for making interactive the [000] project text.
const disenyada = document.querySelector(".Buno");
const codigo = document.querySelector(".Bdos");
const manualmente = document.querySelector(".Btres");
const cien = document.querySelector(".Bcuatro");
const conservantes = document.querySelector(".Bcinco");
const ni = document.querySelector(".Bseis");
const ultima = document.querySelector(".Bsiete");
const colorantes = document.querySelector(".Bocho");



//Animation functions for making interactive the [000] project
        //All functions works equal, they are all waiting for a button to be clicked. Once this happens, it shows some more words and a new button and repeats this operation until the end of the text.
        disenyada.addEventListener("click", () => { 
            codigo.classList.remove("plegado");
            manualmente.classList.remove("plegado");
        });

        codigo.addEventListener("click", () => {
            cien.classList.remove("plegado");
            manualmente.classList.remove("plegado");
            conservantes.classList.remove("plegado");
        });

        conservantes.addEventListener("click", () => {
            ni.classList.remove("plegado");
            colorantes.classList.remove("plegado");
        });

        colorantes.addEventListener("click", () => {
            ultima.classList.remove("plegado");
        });