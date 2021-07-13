import { filterData } from './data.js';
import data from '../data/ghibli/ghibli.js';

const home = document.getElementById("btnHome");
const selectFilter = document.querySelector("#selectFilter");
const galleryFilms = document.getElementById("fila");

// Ocultamos header y galeria
document.getElementById("header").style.display = "none";
document.getElementById("footer").style.display = "none";
document.getElementById("fila").style.display = "none";

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

home.addEventListener("click" , homeFilms);

// Muestra todas las peliculas
function allFilms(data){
    galleryFilms.innerHTML = '';
    data.map((item) => {
        galleryFilms.innerHTML += "<figure> <img src=" + `${item.poster}` +
                                " alt=''> <figcaption> " + `${item.title}` + "</figcaption></figure>";
    });
}

allFilms(data.films);

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

// Filtrar las peliculas por director
selectFilter.addEventListener("change", (event)=>{

    if(selectFilter.value === 'All'){
        allFilms(data.films);
    }else {
        event = filterData(selectFilter.value);
        allFilms(event);
    }
    // console.log(event);
});
