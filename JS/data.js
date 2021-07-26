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
  const sortResult = data.sort((a,b) => a.release_date - b.release_date);
  // console.log(data, sortResult);
  return sortResult;
}

export const sortDataDescending = (data) => {
  const sortResult = data.sort((a,b) => b.release_date - a.release_date);
  // console.log(data, sortResult);
  return sortResult;
}

export const sortTop = (data) => {
  const topFive = data.filter(film => film.rt_score >= 96);
  const topResult = topFive.sort((a, b) => b.rt_score - a.rt_score);
  // console.log(data, topResult);
  return topResult;
}
