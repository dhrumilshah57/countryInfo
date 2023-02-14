import React, { useState } from 'react'
import useTable from './hooks/useTable';
import CountryFooter from './CountryFooter';
import { Link} from 'react-router-dom';

function Table({ data, rowsPerPage, onCountryId }) {

    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);

    const stateHandler = (event) => {
        // console.log(event.target.value)
        onCountryId(event.target.value);
    }


    return (
        <div className="w-full h-screen bg-black text-white">
            <div className="mx-64 py-56">
                <div>
                    <h1 className="text-4xl mb-10">Countries</h1>

                </div>
                <table className="grid place-items-center" id="country">
                    {/* <div className="w-full border-2 border-black"> */}

                    <th className="grid grid-cols-2  w-full text-center rounded-t-xl">
                        <td className="text-3xl ">Name</td>
                        <td className="text-3xl ">Action</td>
                    </th>

                    {/* </div> */}
                    {/* <div className="w-full"> */}
                    {slice.map((item) => {

                        return (
                            <tr className="grid grid-cols-2 w-full text-center">
                                <td className="text-xl">{item.name}</td>
                                <td className="text-xl"><Link to={`/countries/${item.id}/states`}><button onClick={stateHandler} value={item.id} className="bg-blue-300 text-md rounded-lg w-24 m-1" >
                                    States
                                </button></Link></td>
                            </tr>
                        )
                    })}
                    {/* </div> */}
                </table>
                <CountryFooter
                    range={range}
                    slice={slice}
                    setPage={setPage}
                    page={page}
                />
            </div>
        </div>
    );
}

export default Table