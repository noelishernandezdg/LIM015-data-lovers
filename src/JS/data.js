import data from '../data/ghibli/ghibli.js';

export const filterData = (director) => {
  // const filterResult = films.filter(film => film.director === director)
   // console.log(director);
  const filterResult = data.films.filter(film => film.director.includes(director))
  //console.log(filterResult);
  return filterResult;
}

export const filterFilmsById = (id) => {
  const filterFilmsResult = data.films.filter(film => film.id.includes(id));
  return filterFilmsResult;
}

export const sortDataAscending = () => {
  const sortResult = data.films.sort((a,b) => (a.release_date > b.release_date ? 1 : -1));
  return sortResult;
}

export const sortDataDescending = () => {
  const sortResult = data.films.sort((a,b) => (b.release_date > a.release_date ? 1 : -1));
  return sortResult;
}
