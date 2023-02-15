import React, { useState, useEffect } from 'react'
import City from './City';
import { useParams } from 'react-router-dom';
import useSWR from "swr";

function StateData(props) {

    // console.log(props.items)
    const { id } = useParams();
    const { stateId } = useParams();
    // const [city, setCity] = useState([])

    // console.log(stateId)
    // console.log(id)
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        `https://interview-api.kodecreators.com/api/cities?states_id=${stateId}&country_id=${id}&per_page=10`,
        fetcher
    );

    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";


    // useEffect(() => {
    //     fetch(`https://interview-api.kodecreators.com/api/cities?states_id=${stateId}&country_id=${id}&per_page=10`)
    //         .then((response) => response.json())
    //         .then((cityData) => setCity(cityData.data));
    // }, []);
    // console.log(city)

    // console.log(city)

    return (
        <div>
            <City data={data.data ?? []} rowsPerPage={15} />
        </div>
    )
}

export default StateData