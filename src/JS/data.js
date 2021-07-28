export const filterData = (data, director) => {
  return data.filter(film => film.director.includes(director));
}

export const filterFilmsById = (data, id) => {
  return data.filter(film => film.id.includes(id));
}

export const sortDataAscending = (data) => {
  return data.sort((a,b) => a.release_date - b.release_date);
}

export const sortDataDescending = (data) => {
  return data.sort((a,b) => b.release_date - a.release_date);
}

export const sortTop = (data) => {
  const topFive = data.filter(film => film.rt_score >= 96);
  return topFive.sort((a, b) => b.rt_score - a.rt_score);
}
