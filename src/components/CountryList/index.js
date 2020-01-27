import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getCountriesList } from '../../services'

const CountryList = () => {
  const [AllCountries, setAllCountries] = useState([])

  useEffect(() => {
    const fetchAllCountrys = async () => {
      const {data} = await getCountriesList()
      setAllCountries(data)
    };
    fetchAllCountrys()
  }, [])


  return <ul>{AllCountries.map(({name, population, region, capital, alpha3Code}) =>
    <li key={alpha3Code}>
      <Link to={`/country/${alpha3Code}`}>
        <p><b>{name}</b></p>
        <p><b>Population:</b> {population}</p>
        <p><b>Region:</b> {region}</p>
        <p><b>Capital:</b> {capital}</p>
      </Link>
    </li>)}
  </ul>
}

export default CountryList
