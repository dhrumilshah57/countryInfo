import React, { useState } from 'react';
import { Route, Routes, useParams, Outlet } from 'react-router-dom';
import './App.css';
import CountryData from './CountryData';
import StateData from './StateData';
import CityData from './CityData';
import Home from './Home';
import PageNotFound from './PageNotFound';
import River from './River';
import NavBar from './NavBar';
function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rivers" element={<River />} />

        <Route exact path='/countries' element={<Outlet />}>
          <Route exact path='/countries' element={<CountryData />} />
          <Route exact path='/countries/:id/states' element={<StateData />} />
          <Route exact path='/countries/:id/states/:stateId/cities' element={<CityData />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* <CountryData/> */}
      {/* <StateData/> */}
      {/* <Table data={data} rowsPerPage={5}  /> */}
      {/* <States data={city} rowsPerPage={5} /> */}
    </div>
  )
}

export default App;
