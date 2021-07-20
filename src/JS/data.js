export const filterData = (data, director) => {
  const filterResult = data.filter(film => film.director.includes(director));
  // console.log(data, director, filterResult);
  return filterResult;
}

export const filterFilmsById = (data, id) => {
  const filterFilmsResult = data.filter(film => film.id.includes(id));
  // console.log(data, id, filterFilmsResult);
  return filterFilmsResult;
}

export const sortDataAscending = (data) => {
  const sortResult = data.sort((a,b) => (a.release_date > b.release_date ? 1 : -1));
  // console.log(data, sortResult);
  return sortResult;
}

export const sortDataDescending = (data) => {
  const sortResult = data.sort((a,b) => (b.release_date > a.release_date ? 1 : -1));
  // console.log(data, sortResult);
  return sortResult;
}
