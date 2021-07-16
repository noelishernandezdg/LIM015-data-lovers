// estas funciones son de ejemplo
import data from '../data/ghibli/ghibli.js';

export const example = () => {
  return 'example';
};

export const filterData = (director) => {
  // const filterResult = films.filter(film => film.director === director)
   // console.log(director);
  const filterResult = data.films.filter(film => film.director.includes(director))
  // console.log(filterResult);
  return filterResult;
}

export const filterFilmsById = (title) => {
  const filterFilmsResult = data.films.filter(film => film.title === title)
  // console.log(filterFilmsResult);
  return filterFilmsResult;
}
