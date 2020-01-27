import axios from 'axios'

export const getCountriesList = async () => await axios.get('https://restcountries.eu/rest/v2/all')

export const getCountry = async alpha3Code => await axios.get(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)

export const getCountryBorderList = async borders => {
  const countriesAtBorder = borders.map(border => {
    return getCountry(border)
  })

  const countriesList =  Promise.all(countriesAtBorder)

  return (await countriesList).map(({data : {name, alpha3Code}})=> ({name: name, alpha3Code: alpha3Code}))
}
