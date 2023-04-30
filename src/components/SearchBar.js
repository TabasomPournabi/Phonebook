import React from 'react'
import './SearchBar.css'
import { IconContext } from "react-icons";
import { VscSearch } from "react-icons/vsc";
import { SlOptionsVertical } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from 'react';



export default function SearchBar({handlerSearch,filterVal,setSelectOptions,selectOption}) {
  const[options,setOptions]=useState(false)
  const handleOptionMenu=()=>{
    console.log(options)
    setOptions(!options)
  }
  const handlNameOptionSearch=()=>{
    setSelectOptions('name')
    setOptions(false)
  }
  const handlphonNumberOptionSearch=()=>{
    setSelectOptions('phonNumber')
    setOptions(false)
  }
  const handlEmailOptionSearch=()=>{
    setSelectOptions('email')
    setOptions(false)
  }

  return (
    <div className='search-container'> 
         <IconContext.Provider value={{  className: "search-icon" }}>
  <div >
    <VscSearch />
  </div>
</IconContext.Provider>
<IconContext.Provider value={{  className: "inside-search-icon" }}>
  <div >
 {selectOption==='name'?<BsPerson/>
 :selectOption==='phonNumber'?<BiPhone/>
 :<MdOutlineEmail/>

 }
  </div>
</IconContext.Provider>
        <input className='search-input'
    id='search'
    type="text"
    value={filterVal}
    onInput={(e)=>handlerSearch(e)}
    placeholder='Search...'
    />
     <IconContext.Provider value={{  className: "search-option-icon" }} >
  <div>
    <SlOptionsVertical onClick={handleOptionMenu}/>
  </div>
</IconContext.Provider>


<ul className='search-ul'>
<li value="name" className={options?' search-li-name-option':'search-li-name'}><BsPerson onClick={handlNameOptionSearch}/></li>
<li value="phoneNumber" className={options?' search-li-phonNumber-option':'search-li-phonNumber'}><BiPhone onClick={handlphonNumberOptionSearch}/></li>
<li value="email" className={options?' search-li-email-option':'search-li-email'}><MdOutlineEmail onClick={handlEmailOptionSearch}/></li>
</ul>

         
         </div>
  )
}
