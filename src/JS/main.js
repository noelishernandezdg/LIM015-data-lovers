import { filterData /*filterFilmsById*/ } from './data.js';
import data from '../data/ghibli/ghibli.js';

const home = document.getElementById("btnHome");
const selectFilter = document.querySelector("#selectFilter");
const galleryFilms = document.getElementById("fila");
// const showInfo = document.getElementById("showInfo");
const showInfoPoster = document.getElementById("showInfoPoster");
const showInfoDescription = document.getElementById("showInfoDescription");
const figurePoster = document.querySelectorAll(".img-poster");
// const ShowInfoPeople = document.getElementById("ShowInfoPeople");

/****************************************Ocultamos header y galeria***************************************/
document.getElementById("header").style.display = "none";
document.getElementById("footer").style.display = "none";
document.getElementById("fila").style.display = "none";
document.getElementById("showInfo").style.display = "none";

function homeFilms() {
    document.getElementById("btnHome").style.display="none";
    document.getElementById("header").style.display= "flex";
    document.getElementById("footer").style.display="flex";
    document.getElementById("fila").style.display = "flex";
    document.getElementById("showInfo").style.display = "flex";

    /**********************************Agrega estilos a Inicio******************************************/
    document.body.style.backgroundImage = "url(./img/fondoGaleria.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.boxSizing = "border-box";
}

home.addEventListener("click" , homeFilms);

/***********************************Muestra todas las peliculas*****************************************/
function allFilms(data){
    galleryFilms.innerHTML = '';
    data.map((item) => {
        galleryFilms.innerHTML += "<figure class='img-poster'> <img  src=" + `${item.poster}` +
    " alt=''> <figcaption> " + `${item.title}` + "</figcaption></figure>";
    });
}

allFilms(data.films);
// console.log(data.films.id);

/****************************************Busqueda de peliculas******************************************/
searchFilms(".input-search", "figure")

function searchFilms(input, selector) {
    
    document.addEventListener("keyup", (e) =>{
        if (e.target.matches(input)) {
            if (e.key === "Escape") e.target.value = "";

            document.querySelectorAll(selector).forEach((el) =>
                el.textContent.toLowerCase().includes(e.target.value)
                ? el.classList.remove("search")
                : el.classList.add("search")
            );
        }
    });
}

/****************************************Mostar información de cada pelicula******************************************/
function showInfoFilms(data) {
    // galleryFilms.innerHTML = '';
    data.map((item) => {
        showInfoPoster.innerHTML += "<figure> <img src=" + `${item.poster}` + " alt=''></figure>";
        showInfoDescription.innerHTML += "<h1>" + `${item.title}` + "</h1><h3>" + `${item.release_date}` + "</h3><h2>" + `${item.description}` + "</h2><h3>" + "Director: " + `${item.director}` + "</h3><h3>" + "Producer: " + `${item.producer}` + "</h3>";
    });
}
// console.log(showInfoFilms(data.films));
// console.log(filterFilmsById(data.films));

figurePoster.addEventListener("click", showInfoFilms(data.films));


/**************************************Filtrar las peliculas por director**************************************/
selectFilter.addEventListener("change", (event)=>{

    if(selectFilter.value === 'All'){
        allFilms(data.films);
    }else {
        event = filterData(selectFilter.value);
        allFilms(event);
    }
    // console.log(event);
});
