import { filterData, filterFilmsById } from './data.js';
import data from '../data/ghibli/ghibli.js';

const home = document.getElementById("btnHome");
const selectFilter = document.querySelector("#selectFilter");
const galleryFilms = document.getElementById("fila");
const showInfo = document.getElementById("showInfo");
const showInfoPoster = document.getElementById("showInfoPoster");
const showInfoDescription = document.getElementById("showInfoDescription");
const ShowInfoPeople = document.getElementById("ShowInfoPeople");
const sectionSearch = document.querySelector(".section-search");
const sectionSelects = document.querySelector(".section-selects");
const sectionBack = document.querySelector(".section-back");

/****************************************Ocultamos header y galeria***************************************/
document.getElementById("header").style.display = "none";
document.getElementById("footer").style.display = "none";
galleryFilms.style.display = "none";
showInfo.style.display = "none";
ShowInfoPeople.style.display = "none";

function homeFilms() {
    document.getElementById("btnHome").style.display="none";
    document.getElementById("header").style.display= "flex";
    document.getElementById("footer").style.display="flex";
    galleryFilms.style.display = "flex";
    showInfo.style.display = "flex";

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
        galleryFilms.innerHTML += "<figure class='figure-poster'><img src=" + `${item.poster}` +" alt='' id=" + `${item.id}` + " class='img-poster'>" +
                                    "<figcaption id='title'> " + `${item.title}` + "</figcaption></figure>";
    });
    const imgPoster = document.querySelector(".img-poster");
    showPoster(imgPoster);
}

allFilms(data.films);

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
    // showInfo.innerHTML = '';
    data.map((item) => {
        showInfoPoster.innerHTML = "<figure><img src=" + `${item.poster}` + " alt='' class='img-film'></figure>";
        showInfoDescription.innerHTML = "<h1 class='h1-title'>" + `${item.title}` + "</h1>" +
                                    "<h3 class='h3-release-date'>" + `${item.release_date}` + "</h3>" +
                                    "<h2 class='h2-description'>" + `${item.description}` + "</h2>" +
                                    "<h3 class='h3-director'>" + "Director: " + `${item.director}` + "</h3>" +
                                    "<h3 class='h3-producer'>" + "Producer: " + `${item.producer}` + "</h3>";
    });
}

function showPoster(poster){
    poster.addEventListener("click", (event) => {
        galleryFilms.innerHTML = '';
        showInfo.style.display = "flex";
        let element = filterFilmsById(event.target.id);
        showInfoFilms(element);
        sectionSearch.style.display = "none";
        sectionSelects.style.display = "none";
        sectionBack.style.display = "flex";
        ShowInfoPeople.style.display = "flex";
    });
}

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
