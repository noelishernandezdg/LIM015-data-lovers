import { filterData, filterFilmsById, sortDataAscending, sortDataDescending, sortTop} from '../src/JS/data.js';

describe('Filter Data', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns the result director Hiroyuki Morita', () => {
    const data = [{"director": "Hayao Miyazaki"},
                  {"director" : "Isao Takahata"},
                  {"director": "Hiroyuki Morita"}];

    const director = "Hiroyuki Morita";

    const filterResult = [{"director": "Hiroyuki Morita"}];
    expect(filterData(data, director)).toEqual(filterResult);
  });
});

describe('Filter Films By Id', () => {
  it('is a function', () => {
    expect(typeof filterFilmsById).toBe('function');
  });

  it('returns the result by id ea660b10-85c4-4ae3-8a5f-41cea3648e3e', () => {
    const data = [{"id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
                  "title": "Kiki's Delivery Service",
                  "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
                  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg"},
                  {"id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
                  "title": "My Neighbor Totoro",
                  "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
                  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg"},
                  {"id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
                  "title": "Porco Rosso",
                  "description": "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
                  "poster" : "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Porco_Rosso.jpg"}];

    const id = "ea660b10-85c4-4ae3-8a5f-41cea3648e3e";

    const filterResult = [{"id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
                          "title": "Kiki's Delivery Service",
                          "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
                          "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg"}];
    expect(filterFilmsById(data, id)).toEqual(filterResult);
  });
});

describe('Sort Data Ascending', () => {
  it('is a function', () => {
    expect(typeof sortDataAscending).toBe('function');
  });

  it('returns the result order date ascending', () => {
    const data = [{"id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
                  "title": "Porco Rosso",
                  "director": "Hayao Miyazaki",
                  "release_date": "1992"},
                  {"id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
                  "title": "Pom Poko",
                  "director": "Isao Takahata",
                  "release_date": "1994"},
                  {"id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
                  "title": "Kiki's Delivery Service",
                  "director": "Hayao Miyazaki",
                  "release_date": "1989"}];

    const filterResult = [{"id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
                          "title": "Kiki's Delivery Service",
                          "director": "Hayao Miyazaki",
                          "release_date": "1989"},
                          {"id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
                          "title": "Porco Rosso",
                          "director": "Hayao Miyazaki",
                          "release_date": "1992"},
                          {"id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
                          "title": "Pom Poko",
                          "director": "Isao Takahata",
                          "release_date": "1994"}];
    expect(sortDataAscending(data)).toEqual(filterResult);
  });
});

describe('Sort Data Descending', () => {
  it('is a function', () => {
    expect(typeof sortDataDescending).toBe('function');
  });

  it('returns the result order date descending', () => {
    const data = [{"id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
                  "title": "Porco Rosso",
                  "director": "Hayao Miyazaki",
                  "release_date": "1992"},
                  {"id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
                  "title": "Pom Poko",
                  "director": "Isao Takahata",
                  "release_date": "1994"},
                  {"id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
                  "title": "Kiki's Delivery Service",
                  "director": "Hayao Miyazaki",
                  "release_date": "1989"}];

    const filterResult = [{"id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
                          "title": "Pom Poko",
                          "director": "Isao Takahata",
                          "release_date": "1994"},
                          {"id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
                          "title": "Porco Rosso",
                          "director": "Hayao Miyazaki",
                          "release_date": "1992"},
                          {"id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
                          "title": "Kiki's Delivery Service",
                          "director": "Hayao Miyazaki",
                          "release_date": "1989"}];
    expect(sortDataDescending(data)).toEqual(filterResult);
  });
});

describe('Sort Top Five', () => {
  it('is a function', () => {
    expect(typeof sortTop).toBe('function');
  });

  it('returns the result sort top five films', () => {
    const data = [{"title": "Castle in the Sky",
                  "director": "Hayao Miyazaki",
                  "rt_score": "95"},
                  {"title": "My Neighbor Totoro",
                  "director": "Hayao Miyazaki",
                  "rt_score": "93"},
                  {"title": "Kiki's Delivery Service",
                  "director": "Hayao Miyazaki",
                  "rt_score": "96"},
                  {"title": "Only Yesterday",
                  "director": "Isao Takahata",
                  "rt_score": "100"}];

    const sortResult = [{"title": "Only Yesterday",
                        "director": "Isao Takahata",
                        "rt_score": "100"},
                        {"title": "Kiki's Delivery Service",
                        "director": "Hayao Miyazaki",
                        "rt_score": "96"}];
    expect(sortTop(data)).toEqual(sortResult);
  });
});
