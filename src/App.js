import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountryData from './CountryData';
import StateData from './StateData';
function App() {

  const [countryId,setCountryId] =useState()

  const idNumberHandler=(value)=>{
    // console.log(value)
    setCountryId(value);
  }

  return (
    <div>

      <Routes>
        <Route exact path='/' element={<CountryData onStateData={idNumberHandler}/>}/>
        <Route exact path='/states' element={<StateData items={countryId}/>}/>
      </Routes>

      {/* <CountryData/> */}
      {/* <StateData/> */}
      {/* <Table data={data} rowsPerPage={5}  /> */}
      {/* <States data={city} rowsPerPage={5} /> */}
    </div>
  )
}

export default App;
