import React, { useState } from "react";
import "./AddItem.css";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";

function Modal({ closeModal }) {

    // const [cityName, setCityName] = useState();
    // const cityNameHandler = (event) => {
    //     setCityName(event.target.value)
    // }

    const { id } = useParams();
    const { stateId } = useParams();
    const formik = useFormik({
        initialValues: {
            nameOfCity: ''
        },
        onSubmit: values => {
            console.log('form values', values, id, stateId)
            const dataToSubmit = {
                country_id: id,
                state_id: stateId,
                name: values.nameOfCity,
            }
            fetch('https://interview-api.kodecreators.com/api/cities/create', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(dataToSubmit)
            }).then(res => res.json())
                .then(res => {
                    console.log(res)
                })
            closeModal(false)
        },
        validate: values => {
            let errors = {}

            if (!values.nameOfCity) {
                errors.nameOfCity = 'Required'
            }

            return errors
        }
    })




    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            closeModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="text-4xl text-center">
                    <h1>Add City</h1>
                </div>
                <div className="ml-5 mt-10">
                    <form className="flex flex-col" onSubmit={formik.handleSubmit} method='POST' action="#">
                        <label className="text-3xl">City Name</label>
                        <input value={formik.values.nameOfCity} onChange={formik.handleChange} name="nameOfCity" placeholder="Enter City Name" className="text-black  outline-none mt-5 h-11 text-lg pl-3" />
                        {formik.errors.nameOfCity ? <div className="text-red-500 text-lg text-center mt-5">{formik.errors.nameOfCity}</div> : null}
                        <div className="footer mt-5">
                            <button
                                onClick={() => {
                                    closeModal(false);
                                }}
                                id="cancelBtn"
                            >
                                Cancel
                            </button>
                            <button >Submit</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
}

export default Modal;