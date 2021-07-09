// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterData = (films, director) => {
  const filterResult = films.filter(film => film.director === director)
  return filterResult;
}