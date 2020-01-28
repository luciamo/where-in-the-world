import React, { useState, useEffect } from 'react';
import CountriesList from '../../components/CountryList';
import { getCountriesList, getCountriesByRegion } from '../../services';
import { regions } from '../../constants';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchingCountry, setSearchingCountry] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState('');

  const searchCountry = ({ target: { value } }) => {
    setSearchingCountry(value);
    if (!value) {
      return setFilteredCountries([]);
    }
    setFilteredCountries(
      countries.filter((country) => country.name.toLowerCase().includes(value)),
    );
  };

  const filterByRegion = async (region) => {
    setRegion(region);
    const { data } = region === 'all' ? await getCountriesList() : await getCountriesByRegion(region);
    setCountries(data);
  };

  useEffect(() => {
    const fetchCountrys = async () => {
      const { data } = await getCountriesList();
      setCountries(data);
    };
    fetchCountrys();
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for a country"
        value={searchingCountry}
        onChange={(e) => searchCountry(e)}
      />
      <select value={region} onChange={(e) => filterByRegion(e.target.value)}>
        {
          regions.map((regionFromList) => (
            <option key={regionFromList} value={regionFromList}>{regionFromList}</option>
          ))
        }
      </select>
      <CountriesList
        countries={searchingCountry ? filteredCountries : countries}
      />
    </div>
  );
};

export default Home;
