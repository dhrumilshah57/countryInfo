import React, { useState, useEffect } from 'react'
import Table from "./Table";
import useSWR from "swr";


function CountryData(props) {

  // const [data, setData] = useState([])

  const idHandler = (value) => {
    // console.log(value)
    props.onStateData(value)
  }

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://interview-api.kodecreators.com/api/countries?page=1&per_page=10",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";


  // useEffect(() => {
  //   fetch("https://interview-api.kodecreators.com/api/countries?page=1&per_page=10")
  //     .then((response) => response.json())
  //     .then((actualData) => setData(actualData.data));
  // }, []);

  return (
    <div>
      <Table data={data.data ?? []} rowsPerPage={5} onCountryId={idHandler} />
    </div>
  )
}

export default CountryData