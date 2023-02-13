import React, { useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import CountryData from './CountryData';
import StateData from './StateData';
import CityData from './CityData';
import AddItem from './AddItem';
function App() {

  const [countryId, setCountryId] = useState()

  const idNumberHandler = (value) => {
    // console.log(value)
    setCountryId(value);
  }

  return (
    <div>

      <Routes>
        <Route exact path='/countries' element={<CountryData onStateData={idNumberHandler} />} />
        <Route exact path='/countries/:id/states' element={<StateData />} />
        <Route exact path='/countries/:id/states/:stateId/cities' element={<CityData />} />
        <Route path='/additem' element={<AddItem />} />
      </Routes>

      {/* <CountryData/> */}
      {/* <StateData/> */}
      {/* <Table data={data} rowsPerPage={5}  /> */}
      {/* <States data={city} rowsPerPage={5} /> */}
    </div>
  )
}

export default App;
