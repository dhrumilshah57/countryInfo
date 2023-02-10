import React,{useState,useEffect} from 'react'
import Table from "./Table";

function CountryData(props) {

    const [data, setData] = useState([])

    const idHandler=(value)=>{
        // console.log(value)
        props.onStateData(value)
    }

    useEffect(() => {
        fetch("https://interview-api.kodecreators.com/api/countries?page=1&per_page=10")
          .then((response) => response.json())
          .then((actualData) => setData(actualData.data));
      }, []);

  return (
    <div>
        <Table data={data} rowsPerPage={5} onCountryId={idHandler}/>
    </div>
  )
}

export default CountryData