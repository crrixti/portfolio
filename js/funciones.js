const etiquetas = document.querySelectorAll(".etiquetas");
const anyo = document.querySelectorAll(".anyo");

//poner con un forEach, que cada vez que esté en hover el contenedor, a la clase etiqueta y anyo se les pone la clase .escondido-hov
const titulo = document.querySelector("h2");

        titulo.innerHTML = titulo.innerText.split("").map( c => {
            return c != " " ? `<span>${c}</span>` : c;
        }).join("");

        const letras = document.querySelectorAll("h1 span");

        for (let i = 0; i <letras.length; i++){
            setTimeout(() => {
                letras[i].classList.add("visible");
                //si quiero poner otra animación después de esta, la pongo aquí
            }, 300 * i);
        }