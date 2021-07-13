// estas funciones son de ejemplo
import data from '../data/ghibli/ghibli.js';

export const example = () => {
  return 'example';
};

export const filterData = (director) => {
  // const filterResult = films.filter(film => film.director === director)
  console.log(director);
  const filterResult = data.films.filter(film => film.director.includes(director))
  // console.log(filterResult);
  return filterResult;
}