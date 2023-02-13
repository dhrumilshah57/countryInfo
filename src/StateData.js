import React, { useState, useEffect } from 'react'
import States from './States';
import { useParams } from 'react-router-dom';

function StateData(props) {

  // console.log(props.items)
  const { id } = useParams();
  const [state, setState] = useState([])

  useEffect(() => {
    fetch(`https://interview-api.kodecreators.com/api/states?country_id=${id}&per_page=10`)
      .then((response) => response.json())
      .then((cityData) => setState(cityData.data));
  }, []);


  // console.log(city)

  return (
    <div>
      <States data={state} rowsPerPage={5} />
    </div>
  )
}

export default StateData