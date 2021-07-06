import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from '../data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

document.getElementById("header").style.display = "none";

const home = document.getElementById("btnHome");
home.addEventListener("click" , homeFilms);

function homeFilms() {
    document.getElementById("btnHome").style.display="none";
    document.getElementById("header").style.display= "block";
}

home.addEventListener("click", background);

function background() {
    document.body.style.backgroundImage = "url(./img/fondoGaleria.jpg)";
    document.body.style.backgroundSize = "cover";
}

//Crear la etiqueta img para los posters de las peliculas
const figurePoster = document.querySelector("#figurePoster")

const posters = data.films.map((item) => {
    const createImg = document.createElement('img'); //Crear etiqueta img
    createImg.src = `${item.poster}`; //Agregar la url del poster al src
    figurePoster.appendChild(createImg); //convertimos la etiqueca en un nodo padre

    const createTitle = document.createElement('h3');
    const titleFilms = document.createTextNode(`${item.title}`);

    createTitle.appendChild(titleFilms);
    figurePoster.appendChild(createTitle);
});

// function x(item){
//     console.table(item);
// }

// const y = data.films.filter(x);

