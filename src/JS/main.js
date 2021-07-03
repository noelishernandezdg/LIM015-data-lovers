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