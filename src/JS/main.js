import { filterData, filterFilmsById, sortDataAscending, sortDataDescending } from './data.js';
import data from '../data/ghibli/ghibli.js';

const home = document.getElementById("btnHome");
const galleryFilms = document.getElementById("fila");
const showInfo = document.getElementById("showInfo");
const showInfoPoster = document.getElementById("showInfoPoster");
const showInfoDescription = document.getElementById("showInfoDescription");
const showInfoPeople = document.getElementById("showInfoPeople");
const showCharacters = document.getElementById("showCharacters");

const selectFilter = document.querySelector("#selectFilter");
const selectOrder = document.querySelector("#selectOrder");
const sectionSearch = document.querySelector(".section-search");
const sectionSelects = document.querySelector(".section-selects");
const sectionBack = document.querySelector(".section-back");
const selectPeople = document.querySelector("#selectPeople");

/****************************************Ocultamos header y galeria***************************************/
document.getElementById("header").style.display = "none";
document.getElementById("footer").style.display = "none";
galleryFilms.style.display = "none";
showInfo.style.display = "none";
showCharacters.style.display = "none";

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
                                    "<figcaption> " + `${item.title}` + "</figcaption></figure>";
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
        showInfoPoster.innerHTML += "<figure><img src=" + `${item.poster}` + " alt='' class='img-film'></figure>";
        showInfoDescription.innerHTML += "<h1 class='h1-title'>" + `${item.title}` + "</h1>" +
                                    "<h3 class='h3-release-date'>" + `${item.release_date}` + "</h3>" +
                                    "<h2 class='h2-description'>" + `${item.description}` + "</h2>" +
                                    "<h3 class='h3-director'>" + "Director: " + `${item.director}` + "</h3>" +
                                    "<h3 class='h3-producer'>" + "Producer: " + `${item.producer}` + "</h3>";

        selectPeople.addEventListener("change", () => {
            // console.log(element);
            if (selectPeople.value === 'people') {
                // e = element.filter(character => character.people.includes(people));
                showInfoPeople.innerHTML += "<figure><img src=" + `${item.people.img}` + " alt=''>" +
                    "<figcaption>" + `${item.people.name}` + "</figcaption></figure>";
            } else if (selectPeople.value === 'locations') {
                // e = element.filter(character => character.locations.includes(locations));
                showInfoPeople.innerHTML = '';
                showInfoPeople.innerHTML += "<figure><img src=" + `${item.locations.img}` + " alt=''>" +
                "<figcaption>" + `${item.locations.name}` + "</figcaption></figure>";
            } else {
                // e = element.filter(character => character.vehicles.includes(vehicles));
                showInfoPeople.innerHTML = '';
                showInfoPeople.innerHTML += "<figure><img src=" + `${item.vehicles.img}` + " alt=''>" +
                "<figcaption>" + `${item.vehicles.name}` + "</figcaption></figure>";
            }
        })
    });
}

function showPoster(poster) {
    poster.addEventListener("click", (event) => {
        galleryFilms.innerHTML = '';

        let element = filterFilmsById(event.target.id);
        // console.log(element);
        showInfoFilms(element);

        sectionSearch.style.display = "none";
        sectionSelects.style.display = "none";
        sectionBack.style.display = "flex";
        showCharacters.style.display = "flex";
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
});

selectOrder.addEventListener("change", (event)=>{
    if(selectOrder.value === 'ascending'){
        event = sortDataAscending(selectOrder.value);
        allFilms(event);
    }else if(selectOrder.value === 'descending'){
        event = sortDataDescending(selectOrder.value);
        allFilms(data.films);
    }
})
