import React, { useState, useEffect } from 'react'
import States from './States';
import { useParams } from 'react-router-dom';
import useSWR from "swr";

function StateData(props) {

  // console.log(props.items)
  const { id } = useParams();
  const [state, setState] = useState([])

  // useEffect(() => {
  //   fetch(`https://interview-api.kodecreators.com/api/states?country_id=${id}&per_page=10`)
  //     .then((response) => response.json())
  //     .then((cityData) => setState(cityData.data));
  // }, []);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://interview-api.kodecreators.com/api/states?country_id=${id}&per_page=10`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";


  // console.log(city)

  return (
    <div>
      <States data={data.data ?? []} rowsPerPage={5} />
    </div>
  )
}

export default StateData