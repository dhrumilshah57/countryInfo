import React, { useState } from 'react'
import useTable from './hooks/useTable';
import CountryFooter from './CountryFooter';
import { Link, useParams } from 'react-router-dom';

function States({ data, rowsPerPage }) {

    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);

    const { id } = useParams();

    return (
        <div className="w-full h-screen bg-black text-white">
            <div className="mx-64 py-56">
                <div className="grid grid-cols-2 mb-10">
                    <h1 className="text-4xl">States</h1>
                    <p className="grid place-items-end"><Link to="/countries"><button className="bg-purple-400 text-2xl w-24 rounded-md ">Back</button></Link></p>
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
                                <td className="text-xl"><Link to={`/countries/${id}/states/${item.id}/cities`}><button value={item.id} className="bg-blue-300 text-md rounded-lg w-24 m-1" >
                                    City
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
    )
}

export default States