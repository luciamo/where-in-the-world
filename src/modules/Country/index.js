import React, { useState, useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { getCountry, getCountryBorderList } from '../../services';

const Country = ({ match }) => {
  const [country, setCountry] = useState({});
  const [borderCountrys, setBorderCountries] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const countryRes = await getCountry(match.params.alpha3Code);
      const countriesAtBorder = await getCountryBorderList(
        countryRes.data.borders,
      );

      setBorderCountries(countriesAtBorder);
      setCountry(countryRes.data);
    };

    fetchCountry();
  }, [match.params.alpha3Code]);

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    flag,
  } = country;

  return (
    <div className="country_wrapper">
      <Link to="/">
        <button type="button" className="back_button">BACK</button>
      </Link>
      <div className="country">
        <img className="country__flag" src={flag} alt={`${name} flag`} />
        <span>
          <h1>{name}</h1>
          <p>Native Name: {nativeName}</p>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Sub Region: {subregion}</p>
          <p>Capital: {capital}</p>
        </span>
        <span>
          <p>
            Top Level Domain: {topLevelDomain ? topLevelDomain.map((domain) => domain).join(', ') : ''}
          </p>
          <p>
            Currencies: {currencies ? currencies.map((curencie) => curencie.name).join(', ') : ''}
          </p>
          <p>
            Languages: {languages ? languages.map((language) => language.name).join(', ') : ''}
          </p>
        </span>
      </div>
      <span className="borders">
        <span>Border Countries:</span>
        {borderCountrys.map(({ name, alpha3Code }) => (
          <Link key={alpha3Code} to={`/country/${alpha3Code}`} className="borders__link">
            {name}
          </Link>
        ))}
      </span>
    </div>
  );
};

export default Country;
