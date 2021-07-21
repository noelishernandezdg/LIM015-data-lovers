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
    home.style.display="none";
    document.getElementById("header").style.display= "flex";
    document.getElementById("footer").style.display="flex";
    galleryFilms.style.display = "flex";
    showInfo.style.display = "flex";
    sectionBack.style.display = "none";

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
        galleryFilms.innerHTML += "<figure class='figure-poster'>" +
                                "<img class='img-poster' src=" + `${item.poster}` + " alt='' id=" + `${item.id}` + ">" +
                                "<figcaption>" + `${item.title}` + "</figcaption></figure>";
    });
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

/*****************************************Filtrar las peliculas por director***************************************/
selectFilter.addEventListener("change", (event)=>{
    if(selectFilter.value === 'All'){
        allFilms(data.films);
    }else {
        event = filterData(data.films,selectFilter.value);
        allFilms(event);
    }
    return event;
});

/**************************************Ordenar las peliculas por fecha asc/des**************************************/
selectOrder.addEventListener("change", (event)=>{
    if(selectOrder.value === 'ascending'){
        event = sortDataAscending(data.films, selectOrder.value);
        allFilms(event);
    }else if(selectOrder.value === 'descending'){
        event = sortDataDescending(data.films, selectOrder.value);
        allFilms(event);
    }
    return event;
});

/**************************************Mostar información de cada pelicula****************************************/
function showInfoFilms(data) {
    // showInfo.innerHTML = '';
    // showCharacters.innerHTML = '';
    data.forEach((item) => {
        // showInfo.innerHTML = '';
        // showCharacters.innerHTML = '';
        showInfoPoster.innerHTML += "<figure><img src=" + `${item.poster}` + " alt='' class='img-film'></figure>";
        showInfoDescription.innerHTML += "<h1 class='h1-title'>" + `${item.title}` + "</h1>" +
            "<h3 class='h3-release-date'>" + `${item.release_date}` + "</h3>" +
            "<h2 class='h2-description'>" + `${item.description}` + "</h2>" +
            "<h3 class='h3-director'>" + "Director: " + `${item.director}` + "</h3>" +
            "<h3 class='h3-producer'>" + "Producer: " + `${item.producer}` + "</h3>";

        selectPeople.addEventListener("change", () => {
            if (selectPeople.value === 'people') {
                showInfoPeople.innerHTML = '';
                item.people.forEach(person => {
                    showInfoPeople.innerHTML += "<figure class='figure-poster'>" +
                        "<img class='img-poster' src=" + `${person.img}` + " alt=''>" +
                        "<figcaption>" + `${person.name}` + "</figcaption></figure>";
                })
            } else if (selectPeople.value === 'locations') {
                showInfoPeople.innerHTML = '';
                item.locations.forEach(locations => {
                    showInfoPeople.innerHTML += "<figure class='figure-poster'>" +
                        "<img class='img-poster' src=" + `${locations.img}` + " alt=''>" +
                        "<figcaption>" + `${locations.name}` + "</figcaption></figure>";
                })
            } else {
                showInfoPeople.innerHTML = '';
                item.vehicles.forEach(vehicles => {
                    showInfoPeople.innerHTML += "<figure class='figure-poster'>" +
                        "<img class='img-poster' src=" + `${vehicles.img}` + " alt=''>" +
                        "<figcaption>" + `${vehicles.name}` + "</figcaption></figure>";
                })
            }
        })
    });
}

function showPoster(){
    const imgPoster = document.querySelectorAll(".img-poster");
    // showCharacters.innerHTML = '';
    // showInfo.innerHTML = '';
    imgPoster.forEach(img => {
        img.addEventListener("click", (event) => {
            galleryFilms.innerHTML = '';

            let element = filterFilmsById(data.films, event.target.id);
            // console.log(element);
            showInfoFilms(element);

            sectionSearch.style.display = "none";
            sectionSelects.style.display = "none";
            sectionBack.style.display = "flex";
            showInfo.style.display = "flex";
            showCharacters.style.display = "flex";
        });
    })
}

showPoster();

/**************************************Funcionalidad al botón de regresar**************************************/
function buttonBack(){
    sectionSearch.style.display = "flex";
    sectionSelects.style.display = "flex";
    sectionBack.style.display = "none";
    // showCharacters.innerHTML = '';
    // showInfo.innerHTML = '';
    // showCharacters.style.display = "none";
    // showInfo.style.display = "none";

    allFilms(data.films);
    searchFilms(".input-search", "figure");
    showPoster();
}

sectionBack.addEventListener("click", buttonBack);
