import React ,{useState}from 'react'
import './AddForm.css'
import { IconContext } from "react-icons";
import {useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
export default function AddForm({handleAddFormChange,hamdleAddFormSubmit,handlback}) {
  // const navigate = useNavigate();
 

  // const onSubmit = e => {
  //   e.preventDefault();
  //   if (state.button === 1) {
  //     console.log("Button 1 clicked!");
  //   }
  //   if (state.button === 2) {
  //     console.log("Button 2 clicked!");
  //   }
  // };
  
  return (
    <>
      <h1 className='form-add-h1'>Add Contacts</h1>
    <form className='form-add'
     onSubmit={hamdleAddFormSubmit}>
    <div className='form-div'>
        <input className='form-add-input'
 id='fName'
 type="text"
 required
 name="firstName"
 onChange={handleAddFormChange}
 />
      <label for='fName'
      className='lable-input lable-input-firstName'
      >First Name...</label>
    </div>
    <div className='form-div' >
<input className='form-add-input'
id='lName'
      type="text"
      required
      name="lastName"
      onChange={handleAddFormChange}
      />
      <label for='lName'
      className='lable-input lable-input-lastName'
      >Last Name...</label>
    </div>
     <div className='form-div '>
<input className='form-add-input'
id='pNumber'
type="text"
required
name="phoneNumber"
onChange={handleAddFormChange}
/>
      <label for='pNumber'
      className='lable-input lable-input-phoneNumber form-label-phoneNumber'
      >Phone Number...</label>
     </div> 
     <div className='form-div' >
<input className='form-add-input'
id='Email'
      type="email"
      required
      name="email"
      onChange={handleAddFormChange}
      />
      <label for='Email'
      className='lable-input lable-input-email'
      >Email...</label>
    </div>
      <input className='input-file'
      type="file"
      name="img"
      accept="image/*"
      id='file'
      onChange={handleAddFormChange}
      />
      <label for='file'
      className='lable-file'
      >chose a img</label>
 

<button
  
  type="submit"
 
  className="add-form-buttom add-form-buttom-save" >
  Save
  </button >
  
  </form>
 

  <NavLink className="nav-link-addForm" to="/" onClick={handlback}>
    BACK
  <IconContext.Provider value={{  className: "nav-link-addForm-icon" }}>
  <span>
    <FiArrowRight />
  </span>
</IconContext.Provider>
</NavLink>

   
      </>
  )
}
