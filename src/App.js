import './App.css'
import React, { useEffect, useState } from 'react';
import Table from "./Table";
import States from './States';
function App() {

  const [data, setData] = useState([])
  const [city, setCity] = useState([])
  const [countryId, setCountryId] = useState()

  const cityHandler = (value) => {
    console.log(value)
    setCountryId(value)
  }
  useEffect(() => {
    fetch("https://interview-api.kodecreators.com/api/countries?page=1&per_page=10")
      .then((response) => response.json())
      .then((actualData) => setData(actualData.data));
  }, []);

  useEffect(() => {
    fetch(`https://interview-api.kodecreators.com/api/states/?country_id=${countryId}&per_page=10`)
      .then((response) => response.json())
      .then((cityData) => setCity(cityData.data));
  }, []);

  console.log(data)
  console.log(city)

  return (
    <div>
      <Table data={data} rowsPerPage={5} onCountryId={cityHandler} />
      <States data={city} rowsPerPage={5} />
    </div>
  )
}

export default App;
