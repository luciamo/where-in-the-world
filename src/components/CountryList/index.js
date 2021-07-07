import React from 'react';
import CountryListItem from '../CountryListItem';
import './styles.scss';

const CountriesList = ({ countries }) => (
  <ul className="countries_list">{countries.map(({
    name, population, region, capital, alpha3Code, flag,
  }) => (
    <li className="countries_list__item" key={alpha3Code}>
      <CountryListItem
        alpha3Code={alpha3Code}
        name={name}
        population={population}
        region={region} capital={capital} flag={flag}
      />
    </li>
  ))}
  </ul>
);

export default CountriesList;
