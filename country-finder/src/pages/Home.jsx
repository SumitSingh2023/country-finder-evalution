import React from 'react'
import { useState, useEffect } from 'react'
import CountryCard from '../components/CountryCard'
import { use } from 'react'



const Home = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(() => {
    axios.get(' https://restcountries.com/v3.1/all ')
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err))
  }, [])

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowercase().includes(search.toLowerCase()) &&
    (region ? country.region == region : true)
  )
    .sort((a, b) => sortOrder === 'asc' ? a.population - b.population : b.population - a.population)

  return (
    <div>
      <input type="text"
        placeholder='Search countries...'
        onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setRegion(e.target.value)}>
        <option value="">All Regions</option>
        {Array.from(newSet(countries.map((c) => c.region))).map((region) => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>
      <button onClick={() => setSortOrder('asc')}>Sort Ascending</button>
      <button onClick={() => setSortOrder('desc')}>Sort Descending</button>
      <div className='card'>
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )
}

export default Home