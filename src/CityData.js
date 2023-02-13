import React, { useState, useEffect } from 'react'
import City from './City';
import { useParams } from 'react-router-dom';

function StateData(props) {

    // console.log(props.items)
    const { id } = useParams();
    const { stateId } = useParams();
    const [city, setCity] = useState([])

    // console.log(stateId)
    // console.log(id)

    useEffect(() => {
        fetch(`https://interview-api.kodecreators.com/api/cities?states_id=${stateId}&country_id=${id}&per_page=10`)
            .then((response) => response.json())
            .then((cityData) => setCity(cityData.data));
    }, []);
    // console.log(city)

    // console.log(city)

    return (
        <div>
            <City data={city} rowsPerPage={15} />
        </div>
    )
}

export default StateData