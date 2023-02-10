import React,{useState,useEffect} from 'react'
import States from './States';

function StateData(props) {

    // console.log(props.items)

    const [city, setCity] = useState([])

    useEffect(() => {
          fetch(`https://interview-api.kodecreators.com/api/states?country_id=${props.items}&per_page=10`)
            .then((response) => response.json())
            .then((cityData) => setCity(cityData.data));
        }, []);


        // console.log(city)

  return (
    <div>
        <States data={city} rowsPerPage={5} />
    </div>
  )
}

export default StateData