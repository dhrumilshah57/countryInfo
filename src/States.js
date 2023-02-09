import React, { useState } from 'react'
import useTable from './hooks/useTable';
import CountryFooter from './CountryFooter';

function States({ data, rowsPerPage }) {

    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);

    return (
        <div className="w-full h-screen bg-black text-white">
            <div className="mx-64 py-56">
                <h1 className="text-4xl mb-10">Countries</h1>
                <table className="grid place-items-center" id="country">
                    {/* <div className="w-full border-2 border-black"> */}

                    <tr className="grid grid-cols-2  w-full text-center rounded-t-xl">
                        <td className="text-3xl ">Name</td>
                        <td className="text-3xl ">Action</td>
                    </tr>

                    {/* </div> */}
                    {/* <div className="w-full"> */}
                    {slice.map((item) => {
                        return (
                            <tr className="grid grid-cols-2 w-full text-center">
                                <td className="text-xl">{item.name}</td>
                                <td className="text-xl"><button className="bg-blue-300 text-md rounded-lg w-24 m-1" type="">States</button></td>
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