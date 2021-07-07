import React, { useState, useEffect } from 'react';
import CountriesList from '../../components/CountryList';
import { getCountriesList, getCountriesByRegion } from '../../services';
import { regions, ALL } from '../../constants';
import './styles.scss';

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
    const { data } = region === ALL ? await getCountriesList() : await getCountriesByRegion(region);
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
    <div className="Home">
      <div className="Home__fields">
        <input
          className="Home__field Home__field--text"
          type="text"
          placeholder="Type a country here"
          value={searchingCountry}
          onChange={(e) => searchCountry(e)}
        />
        <select className="Home__field Home__field--select" value={region} onChange={(e) => filterByRegion(e.target.value)}>
          {
          regions.map((regionFromList) => (
            <option key={regionFromList} value={regionFromList}>{regionFromList}</option>
          ))
        }
        </select>
      </div>
      <CountriesList
        countries={searchingCountry ? filteredCountries : countries}
      />
    </div>
  );
};

export default Home;
