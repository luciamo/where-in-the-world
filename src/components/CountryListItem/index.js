import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const CountryListItem = ({alpha3Code, name, population, region, capital, flag}) => (
  <div className="country-list-item">
    <Link to={`/country/${alpha3Code}`}>
    <div className="country-list-item__flag" style={{ backgroundImage: `url(${flag})` }} />
    <p><b>{name}</b></p>
    <p><b>Population:</b> {population}</p>
    <p><b>Region:</b> {region}</p>
    <p><b>Capital:</b> {capital}</p>
    </Link>
  </div>
);

export default CountryListItem;
