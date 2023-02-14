import React, { useState, useNavigate, useEffect } from 'react'
import useTable from './hooks/useTable';
import CountryFooter from './CountryFooter';
import { Link, useParams } from 'react-router-dom';
import AddItem from './AddItem';
import EditItem from './EditItem';

function City({ data, rowsPerPage }) {

    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const [cityId, setCityId] = useState();
    const { id } = useParams();
    const { stateId } = useParams();
    const [openModal, setOpenModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    const deleteHandler = (id) => {
        alert("Your city has been Deleted")
        fetch(`https://interview-api.kodecreators.com/api/cities/${id}/delete`, { method: 'DELETE' })
            .then((result) => {
                result.json().then((resp) => {
                    console.log(resp)
                })
            })
    }


    // const [editName, setEditName] = useState();
    // const editHandler = (id) => {
    //     alert(id)
    //     fetch(`https://interview-api.kodecreators.com/api/cities/${id}/edit`, { method: "POST" })
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }

    // console.log(cityId)
    return (
        <div className="w-full h-screen bg-black text-white">
            {openModal && <AddItem closeModal={setOpenModal} />}
            {editModal && <EditItem closeModal={setEditModal} data={cityId} />}
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
                                <div className='grid grid-cols-2 mx-36'>
                                    <td className="text-xl"><button className="bg-blue-300 text-md rounded-lg w-24 m-1" type="" onClick={() => { setEditModal(true); setCityId(item) }} >Edit</button></td>
                                    <td className="text-xl"><button className="bg-blue-300 text-md rounded-lg w-24 m-1" type="" onClick={() => deleteHandler(item.id)}>Delete</button></td>
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

export default City