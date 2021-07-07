import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from '../data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

document.getElementById("header").style.display = "none";
document.getElementById("fila").style.display = "none";

const home = document.getElementById("btnHome");
home.addEventListener("click" , homeFilms);

function homeFilms() {
    document.getElementById("btnHome").style.display="none";
    document.getElementById("header").style.display= "block";
    document.getElementById("fila").style.display="flex";
}

home.addEventListener("click", background);

function background() {
    document.body.style.backgroundImage = "url(./img/fondoGaleria.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.boxSizing = "border-box";
}

// Galeria de poster de peliculas

const posters = data.films.map((item) => {
    const createFigure = document.createElement('figure');

    const createImg = document.createElement('img'); //Crear etiqueta img
    createImg.src = `${item.poster}`; //Agregar la url del poster al src
    createFigure.appendChild(createImg); //convertimos la etiqueca en un nodo padre

    const createTitle = document.createElement('figcaption');
    const titleFilms = document.createTextNode(`${item.title}`);

    createTitle.appendChild(titleFilms);
    createFigure.appendChild(createTitle);
    return createFigure;
});

posters.forEach((poster) => {
    document.querySelector("#fila").appendChild(poster);
})

// Busqueda de peliculas
searchFilms(".nav-home-item", "figure")

function searchFilms(input, selector){
    document.addEventListener("keyup", (e) =>{
        if (e.target.matches(input)) {
            // console.log(e.key);
            console.log(e.target.value);

            if (e.key === "Escape") e.target.value = "";

            document.querySelectorAll(selector).forEach((el) =>
                el.textContent.toLowerCase().includes(e.target.value)
                ? el.classList.remove("search")
                : el.classList.add("search")
            );
        }
    });
}