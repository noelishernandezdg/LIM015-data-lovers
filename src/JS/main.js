import { filterData } from './data.js';
import data from '../data/ghibli/ghibli.js';

const home = document.getElementById("btnHome");
const selectFilter = document.querySelector("#selectFilter");

// Ocultamos header y galeria
document.getElementById("header").style.display = "none";
document.getElementById("footer").style.display = "none";
document.getElementById("fila").style.display = "none";

home.addEventListener("click" , homeFilms);

function homeFilms() {
    document.getElementById("btnHome").style.display="none";
    document.getElementById("header").style.display= "flex";
    document.getElementById("footer").style.display="flex";
    document.getElementById("fila").style.display="flex";

    // Agrega estilos a Inicio
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

const galleryFilms = posters.forEach((poster) => {
    document.querySelector("#fila").appendChild(poster);
})

// Busqueda de peliculas
searchFilms(".input-search", "figure")

function searchFilms(input, selector){
    document.addEventListener("keyup", (e) =>{
        if (e.target.matches(input)) {
            // console.log(e.key);
            // console.log(e.target.value);

            if (e.key === "Escape") e.target.value = "";

            document.querySelectorAll(selector).forEach((el) =>
                el.textContent.toLowerCase().includes(e.target.value)
                ? el.classList.remove("search")
                : el.classList.add("search")
            );
        }
    });
}

// console.log(filterData(data.films, "Hayao Miyazaki"));

selectFilter.addEventListener("change", (event)=>{
    if(selectFilter.value === 'All'){
        data.films;
    }else{
        data.films = filterData(selectFilter.value);
    }
    // console.log(data.films);
    
});

