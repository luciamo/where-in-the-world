import axios from 'axios';

export const getCountriesList = () => axios.get('https://restcountries.eu/rest/v2/all');

export const getCountry = (alpha3Code) => axios.get(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`);

export const getCountryBorderList = async (borders) => {
  const countriesAtBorder = borders.map((border) => getCountry(border));

  const countriesList = Promise.all(countriesAtBorder);

  return (await countriesList).map(({ data: { name, alpha3Code } }) => ({
    name,
    alpha3Code,
  }));
};

export const getCountriesByRegion = (region) => axios.get(`https://restcountries.eu/rest/v2/region/${region}`);
