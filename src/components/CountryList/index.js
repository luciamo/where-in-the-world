import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const CountriesList = ({ countries }) => (
  <ul className="countries_list">{countries.map(({
    name, population, region, capital, alpha3Code, flag,
  }) => (
    <li className="countries_list__item" key={alpha3Code}>
      <Link to={`/country/${alpha3Code}`}>
        <div className="countries_list__flag" style={{ backgroundImage: `url(${flag})` }} />
        {/* <img src={flag} alt={`${name} Flag`} className="countries_list__flag" /> */}
        <p><b>{name}</b></p>
        <p><b>Population:</b> {population}</p>
        <p><b>Region:</b> {region}</p>
        <p><b>Capital:</b> {capital}</p>
      </Link>
    </li>
  ))}
  </ul>
);

export default CountriesList;
