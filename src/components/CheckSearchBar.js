import React, { Fragment } from 'react'
import { useState,useEffect } from 'react';
import SearchBar from './SearchBar';

export default function CheckSearchBar() {
    const[contacts,setContacts]=useState([])
    const [inputText, setInputText] = useState("");
    const handlerSearch = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase)
      console.log('inputText',inputText)
      const filteredData = contacts.filter((el) => {
        if(el.firstName.toLowerCase().includes(inputText)){
      
    return el
      
        }  
    })
    // setContacts(filteredData)  
    console.log(inputText,'inputText')
  setContacts(filteredData)  
  };
  useEffect(()=>{
  
      fetch('https://638353af1ada9475c8fcf0ad.mockapi.io/v1/phoneNumbers')
    .then((response) => response.json())
    .then((data) => setContacts(data));
    setTimeout(() => {
      
    }, 2000);
    },[contacts])
   
  return (
    <Fragment>
<SearchBar handlerSearch={handlerSearch}/>
    {contacts ? 
    contacts.map((contact)=>(
        <div>
     
        <div key={contact.id} className='contact-wrapper margin'>
      
    
      <div className='firstName'>{contact.firstName}</div>
      <div className='lastName'>{contact.lastName}</div>
      <div className='phoneNumber'>{contact.phoneNumber}</div>
      <div className='email'>{contact.email}</div>
        </div>
      
    
      </div>
          ))
  
: <div>NOTHING</div>}
        </Fragment>)}
