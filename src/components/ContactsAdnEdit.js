import React, { Fragment, useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Contacts.css';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { IconContext } from "react-icons";
import imge from '../assets/phoneBook-ui.png';
import EditeRow from './EditeRow';
import SearchBar from './SearchBar';
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'



function ContactsAdnEdit(
  {contacts,
    hamdleDeleteContact,
    editContactId,
    handlerEdit,
    editFormData,
    handleEditFormChange,
    handleEditFormSubmit,
    handlerCancleEdit,
    handlerSearch,
    setSelectOptions,
    selectOption}
    ) {
   
 
  return (
    <Fragment>
<h1 className='contacts-h1'>Contacts</h1>
<SearchBar handlerSearch={handlerSearch} setSelectOptions={setSelectOptions} selectOption={selectOption}/>
   <div  className=' contact-container'>
   {contacts? 
   contacts.map((contact)=>(
    <>
   {editContactId === contact.id?
    <EditeRow 
    editFormData={editFormData} 
    handleEditFormChange={handleEditFormChange}  
    handlerCancleEdit={handlerCancleEdit} 
    handleEditFormSubmit={handleEditFormSubmit}
     />:
    <div key={contact.id} className='contact-wrapper margin'>
  <div className='contacts-top'>
    <div className='contacts-top-left'>

  <div className='firstName'>{contact.firstName}</div>
  <div className='lastName'>{contact.lastName}</div>
  <div className='phoneNumber'>{contact.phoneNumber}</div>
  <div className='email'>{contact.email}</div>
    </div>
  <img src={contact.img}/>
  </div>
  <div className='contactc-bottom'>
    <button key={contact.id} className='edit' onClick={(event)=>{handlerEdit(event,contact)}} ><span >Edit</span>
    <IconContext.Provider value={{  className: "edit-icon" }}>
  <div>
    <FaPen  />
  </div>
</IconContext.Provider>
    </button>
    <button className='delete' onClick={(event)=>{hamdleDeleteContact(event,contact.id)}} ><span >Delete</span>
    <IconContext.Provider value={{  className: "delete-icon" }}>
  <div>
    <HiArchiveBoxXMark />
  </div>
</IconContext.Provider>
    </button>
  </div>
   </div>} 

  </>
      ))
      :  <div>NOTHING</div>}
      
      <NavLink className="nav-link" to="/addContacts">
<div className='add-contacts margin'>
<IconContext.Provider value={{  className: "add-icon" }}>
  <div>
    <IoIosAddCircleOutline />
  </div>
</IconContext.Provider>
</div>
</NavLink>
      
</div>


   
    </Fragment>

)
  
}


export default ContactsAdnEdit;
