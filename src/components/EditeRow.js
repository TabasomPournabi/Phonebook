import React, { Fragment } from 'react'
import './EditeRow.css'
import { IconContext } from "react-icons";
import { HiCheck } from "react-icons/hi";
import { HiX } from "react-icons/hi";

import Img from '../assets/phoneBook-ui.png';
export default function EditeRow({editFormData,handleEditFormChange,handleEditFormSubmit,handlerCancleEdit}) {
    return (

        <Fragment>


            <form onSubmit={handleEditFormSubmit}  className='editRow-wrapper '>
                <div className='editRow-top'>
                    <div className='editRow-top-left'>
                        <input className='editRow-input'
                            id='fName'
                            type="text"
                            required="required"
                            name="firstName"
                            value={editFormData.firstName}
                            onChange={handleEditFormChange}

                        />
                        <input className='editRow-input'
                            id='lName'
                            type="text"
                            required="required"
                            name="lastName"
                            value={editFormData.lastName}
                            onChange={handleEditFormChange}

                        />

                        <input className='editRow-input'
                            id='pNumber'
                            type="text"
                            required="required"
                            name="phoneNumber"
                            value={editFormData.phoneNumber}
                            onChange={handleEditFormChange}

                        />
                        <input className='editRow-input'
                            id='Email'
                            type="email"
                            required="required"
                            name="email"
                            value={editFormData.email}
                            onChange={handleEditFormChange}

                        />
                    </div>
                 

                <input className='editRow-file'
                    type="file"
                    name="img"
                    id='file'
                    onChange={handleEditFormChange}
                    
                />
                <label for='file'
                    className='img-lable'
                >
                    <img src={editFormData.img} alt="Avatar" className='editRow-img' />
                </label>
                </div>

            <div className='editRow-bottom'>
                <button type='submit' className='save' ><span >SAVE</span>
                    <IconContext.Provider value={{ className: "save-icon" }}>
                        <div >
                            <HiCheck />
                        </div>
                    </IconContext.Provider>
                </button>
                <button className='cancle' onClick={(event)=>handlerCancleEdit(event)} ><span >Cancel</span>
                    <IconContext.Provider value={{ className: "cancle-icon" }}>
                        <div>
                            <HiX />
                        </div>
                    </IconContext.Provider>
                </button>
            </div>
            </form>







        </Fragment>
    )
}
