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



  
