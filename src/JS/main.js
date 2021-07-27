import { filterData, filterFilmsById, sortDataAscending, sortDataDescending, sortTop } from './data.js';
import data from '../data/ghibli/ghibli.js';

const home = document.getElementById("btnHome");
const header = document.getElementById("header");
const galleryFilms = document.getElementById("fila");
const showInfo = document.getElementById("showInfo");
const showInfoPoster = document.getElementById("showInfoPoster");
const showInfoDescription = document.getElementById("showInfoDescription");
const showInfoPeople = document.getElementById("showInfoPeople");
const showCharacters = document.getElementById("showCharacters");
const buttonTop = document.getElementById("buttonTop");

const selectFilter = document.querySelector("#selectFilter");
const selectOrder = document.querySelector("#selectOrder");
const sectionSearch = document.querySelector(".section-search");
const sectionSelects = document.querySelector(".section-selects");
const sectionBack = document.querySelector(".section-back");
const selectPeople = document.querySelector("#selectPeople");


/****************************************Ocultamos header y galeria***************************************/
header.style.display = "none";
document.getElementById("footer").style.display = "none";
buttonTop.style.display = "none";
galleryFilms.style.display = "none";
showInfo.style.display = "none";
showCharacters.style.display = "none";
sectionBack.style.display = "none";

function homeFilms() {
    home.style.display = "none";
    buttonTop.style.display = "flex";
    header.style.display= "flex";
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
                                        "<figcaption>" + `${item.title}` + "</figcaption>" +
                                    "</figure>";
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

/**************************************Mostrar info de cada personaje**************************************/
function showCardPeople(data){
    data.forEach(person => {
        showInfoPeople.innerHTML += `<figure class='figure-poster'>
                                        <a href="#${person.id}">
                                            <img class='img-character' src=${person.img} alt=''>
                                        </a>
                                        <figcaption> ${person.name} </figcaption>
                                    </figure>` +
                                    // Modal Character
                                    `<section id= ${person.id} class='modal-dialog'>
                                        <section><a href="#close" class='close'>X</a>
                                            <h2 class='name'> ${person.name}</h2>
                                            <h3> Gender: ${person.gender} </h3>
                                            <h3> Age: ${person.age} </h3>
                                            <h3> Eye color: ${person.eye_color} </h3>
                                            <h3> Hair color: ${person.hair_color} </h3>
                                            <h3> Specie: ${person.specie} </h3>
                                        </section>
                                    </section>`;
    })
}

/**************************************Mostrar info de cada locación**************************************/
function showCardLocations(data){
    data.forEach(person => {
        showInfoPeople.innerHTML += `<figure class='figure-poster'>
                                        <a href="#${person.id}">
                                            <img class='img-character' src=${person.img} alt=''>
                                        </a>
                                        <figcaption> ${person.name} </figcaption>
                                    </figure>` +
                                    // Modal Character
                                    `<section id= ${person.id} class='modal-dialog'>
                                        "<section><a href="#close" class='close'>X</a>
                                            <h2 class='name'> ${person.name} </h2>
                                            <h3> Climate: ${person.climate} </h3>
                                            <h3> Terrain: ${person.terrain} </h3>
                                            <h3> Surface water: ${person.surface_water} </h3>
                                        </section>" +
                                    </section>`;
    })
}

/**************************************Mostrar info de cada vehículo**************************************/
function showCardVehicles(data){
    data.forEach(person => {
        showInfoPeople.innerHTML += `<figure class='figure-poster'>
                                        <a href="#${person.id}">
                                            <img class='img-character' src=${person.img} alt=''>
                                        </a>
                                        <figcaption> ${person.name} </figcaption>
                                    </figure>` +
                                    // Modal Character
                                    `<section id= ${person.id} class='modal-dialog'>
                                        <section><a href="#close" class='close'>X</a>
                                            <h2 class='name'> ${person.name} </h2>
                                            <h3 class='description'> ${person.description} </h3>
                                            <h3> Vehicle class: ${person.vehicle_class} </h3>
                                            <h3> Length: ${person.length} </h3>
                                            <h3> Pilot: ${person.pilot.name} </h3>
                                        </section>
                                    </section>`;
    })
}

/**************************************Mostar información de cada pelicula****************************************/
function showInfoFilms(data) {
    showInfoPoster.innerHTML = '';
    showInfoDescription.innerHTML = '';

    data.forEach((item) => {
        showInfoPoster.innerHTML += "<figure><img src=" + `${item.poster}` + " alt='' class='img-film'></figure>";
        showInfoDescription.innerHTML += "<h1 class='h1-title'>" + `${item.title}` + "</h1>" +
                                        "<h3 class='h3-release-date'>" + `${item.release_date}` + "</h3>" +
                                        "<h2 class='h2-description'>" + `${item.description}` + "</h2>" +
                                        "<h3 class='h3-director'>" + "Director: " + `${item.director}` + "</h3>" +
                                        "<h3 class='h3-producer'>" + "Producer: " + `${item.producer}` + "</h3>";

        showInfoPeople.innerHTML = '';
        showCardPeople(item.people);
        selectPeople.addEventListener("change", () => {
            if (selectPeople.value === 'people') {
                showInfoPeople.innerHTML = '';
                showCardPeople(item.people);
            } else if (selectPeople.value === 'locations') {
                showInfoPeople.innerHTML = '';
                showCardLocations(item.locations);
            } else {
                showInfoPeople.innerHTML = '';
                showCardVehicles(item.vehicles);
            }
        })
    });
}


function showPoster(){
    const imgPoster = document.querySelectorAll(".img-poster");

    imgPoster.forEach(img => {
        img.addEventListener("click", (event) => {
            galleryFilms.innerHTML = '';

            sectionSearch.style.display = "none";
            sectionSelects.style.display = "none";
            buttonTop.style.display = "none";
            sectionBack.style.display = "flex";
            showInfo.style.display = "flex";
            showCharacters.style.display = "flex";

            let element = filterFilmsById(data.films, event.target.id);
            // console.log(element);
            showInfoFilms(element);
        });
    })
}

showPoster();

/****************************************************Top 5****************************************************/
function topFive(){
    buttonTop.addEventListener("click", (e) => {
        e = sortTop(data.films);
        allFilms(e);
        showPoster();
    })
}

topFive();

/*****************************************Filtrar las peliculas por director***************************************/
selectFilter.addEventListener("change", (event)=>{
    if(selectFilter.value === 'All'){
        allFilms(data.films);
        showPoster();
    }else {
        event = filterData(data.films,selectFilter.value);
        allFilms(event);
        showPoster();
    }
    return event;
});

/**************************************Ordenar las peliculas por fecha asc/des**************************************/
selectOrder.addEventListener("change", (event)=>{
    if(selectOrder.value === 'ascending'){
        event = sortDataAscending(data.films, selectOrder.value);
        allFilms(event);
        showPoster();
    }else if(selectOrder.value === 'descending'){
        event = sortDataDescending(data.films, selectOrder.value);
        allFilms(event);
        showPoster();
    }
    return event;
});

/**************************************Funcionalidad al botón de regresar**************************************/
function buttonBack(){
    sectionSearch.style.display = "flex";
    sectionSelects.style.display = "flex";
    buttonTop.style.display = "flex"
    sectionBack.style.display = "none";

    showCharacters.style.display = "none";
    showInfo.style.display = "none";

    allFilms(data.films);
    searchFilms(".input-search", "figure");
    topFive();
    showPoster();
}

sectionBack.addEventListener("click", buttonBack);
