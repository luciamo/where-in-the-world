import React, { useState, useEffect } from 'react';
import CountriesList from '../../components/CountryList';
import { getCountriesList } from '../../services';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchingCountry, setSearchingCountry] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const searchCountry = ({ target: { value } }) => {
    setSearchingCountry(value);
    if (!value) {
      return setFilteredCountries([]);
    }
    setFilteredCountries(
      countries.filter((country) => country.name.toLowerCase().includes(value)),
    );
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
      <CountriesList
        countries={searchingCountry ? filteredCountries : countries}
      />
    </div>
  );
};

export default Home;
