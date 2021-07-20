import { filterData, filterFilmsById, sortDataAscending, sortDataDescending } from '../src/JS/data.js';

describe('Filter Data', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  // it('returns the result director Hiroyuki Morita', () => {
  //   const data = [{"director": "Hayao Miyazaki"},
  //                 {"director" : "Isao Takahata"},
  //                 {"director": "Hiroyuki Morita"}];
  //   const director = {"director" : "Hiroyuki Morita"};
  //   const filterResult = {"poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg",
  //                         "title": "The Cat Returns"};
  //   expect(filterData(data, director)).toEqual(filterResult);
  // });
});

describe('Filter Films By Id', () => {
  it('is a function', () => {
    expect(typeof filterFilmsById).toBe('function');
  });

  // it('returns the result id 90b72513-afd4-4570-84de-a56c312fdf81', () => {
  //   expect(filterFilmsById(data, id)).toBe(filterResult);
  // });
});

describe('Sort Data Ascending', () => {
  it('is a function', () => {
    expect(typeof sortDataAscending).toBe('function');
  });

  // it('returns the order by ascending date', () => {
  //   expect(sortDataAscending(data)).toBe(sortResult);
  // });
});

describe('Sort Data Descending', () => {
  it('is a function', () => {
    expect(typeof sortDataDescending).toBe('function');
  });

  // it('returns sort Data Descending', () => {
  //   expect(sortDataDescending(data)).toBe(sortResult);
  // });
});
