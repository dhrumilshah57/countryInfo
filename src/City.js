import React, { useState } from 'react'
import useTable from './hooks/useTable';
import CountryFooter from './CountryFooter';
import { Link, useParams } from 'react-router-dom';
import AddItem from './AddItem';

function States({ data, rowsPerPage }) {

    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const { id } = useParams();
    const [openModal, setOpenModal] = useState(false);


    return (
        <div className="w-full h-screen bg-black text-white">
            {openModal && <AddItem closeModal={setOpenModal} />}
            <div className="mx-64 py-36">
                <div className="grid grid-cols-2 mb-10">
                    <h1 className="text-4xl">Cities</h1>
                    <div className='flex gap-10 place-content-end'>
                        <p className=""><button onClick={() => { setOpenModal(true); }} className="bg-purple-400 text-2xl w-24 rounded-md ">Create</button></p>
                        <p className=" "><Link to={`/countries/${id}/states`}><button className="bg-purple-400 text-2xl w-24 rounded-md ">Back</button></Link></p>
                    </div>

                </div>


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
                                <div className='grid grid-cols-2 mx-36'>
                                    <td className="text-xl"><button className="bg-blue-300 text-md rounded-lg w-24 m-1" type="">Edit</button></td>
                                    <td className="text-xl"><button className="bg-blue-300 text-md rounded-lg w-24 m-1" type="">Delete</button></td>
                                </div>
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