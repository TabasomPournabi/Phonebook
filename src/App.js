import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddForm from './components/AddForm';
import {nanoid} from 'nanoid';
import imge from './assets/phoneBook-ui.png';
import ContactsAdnEdit from './components/ContactsAdnEdit';
import Loading from './components/Loading';
const App = () => {
  const [selectOption,setSelectOptions]=useState('name')
  const [loading,setLoading]=useState(true)
 
  //

  const navigate = useNavigate();
  //GET API
  const[contacts,setContacts]=useState([])
 const[searchApiData,setSearchApiData]=useState([])
 const[editRefresh,setEditeRefresh]=useState(false)
  useEffect(()=>{
  
      fetch('https://638353af1ada9475c8fcf0ad.mockapi.io/v1/phoneNumbers')
    .then((response) => response.json())
    .then((data) => {
      setContacts(data)
      setSearchApiData(data)
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    },[editRefresh])

 //search
 const [filterVal,setFilterVal]=useState('')
const handlerSearch=(e)=>{
if(e.target.value==''){
  setContacts(searchApiData)

}else{
  if(selectOption==='name'){

    const filterResult= searchApiData.filter(item=>item.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||item.lastName.toLowerCase().includes(e.target.value.toLowerCase()) )
    setContacts(filterResult)
  }else if(selectOption==='phonNumber'){
    const filterResult= searchApiData.filter(item=>item.phoneNumber.toLowerCase().includes(e.target.value.toLowerCase()) )
    setContacts(filterResult)
  }else{
    const filterResult= searchApiData.filter(item=>item.email.toLowerCase().includes(e.target.value.toLowerCase()) )
    setContacts(filterResult)
  }

}
setFilterVal(e.target.value)
}







//  const [inputText, setInputText] = useState("");
//  const handlerSearch = (e) => {
//    var lowerCase = e.target.value.toLowerCase();
//    setInputText(lowerCase)
//    console.log('inputText',inputText)
//    const filteredData = contacts.filter((el) => {
//      if(el.firstName.toLowerCase().includes(inputText)){
//    console.log("contacts",contacts)
//  return el
   
//      }  
//  })
//  // setContacts(filteredData)  
//  console.log(inputText,'inputText')
// setContacts(filteredData)  
// };

    //POST API
    const[addFormContacts,setAddFormContacts]=useState(
      {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      img: '',
    }
    )
    const  handleAddFormChange=(event)=>{
      event.preventDefault();
      const fieldName=event.target.getAttribute('name');
      const fieldValue=event.target.value;
      const newFormData={...addFormContacts};
      newFormData[fieldName]=fieldValue;
      setAddFormContacts(newFormData)
      
    }
    
    const hamdleAddFormSubmit=(event)=>{
   event.preventDefault();
   const newContact={
    id:nanoid(),
    firstName:addFormContacts.firstName,
    lastName:addFormContacts.lastName,
    phoneNumber:addFormContacts.phoneNumber,
    email:addFormContacts.email,
    img:addFormContacts.img || imge ,
      }
      console.log("NEW POST",newContact)
      fetch('https://638353af1ada9475c8fcf0ad.mockapi.io/v1/phoneNumbers', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          const newData=[...contacts,data]
          setContacts(newData) 
          setEditeRefresh(!editRefresh)
          navigate('/');
        })
        .catch((error) => {
          console.error('Error:', error);
        });


    }
  //DELETE API
 
  const hamdleDeleteContact=(event,id)=>{
    event.preventDefault()
    fetch('https://638353af1ada9475c8fcf0ad.mockapi.io/v1/phoneNumbers/'+id,{
      method:"DELETE"
    })
    .then((data)=>{
      console.log("data",data)
      if(data.ok){

        console.log('DATA',data)
        const urlDeleted=contacts.filter((contact)=>{
          return id !== contact.id
        })
  
        setContacts(urlDeleted)
        setEditeRefresh(!editRefresh)
        console.log("URLDELETE",urlDeleted)
      }else{
        console.log(" NOT DELETED")
      }
    })
  }

//PUT
const [editFormData,setEditFormData]=useState({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  img: '',
})
const[editContactId,setEditcontactId]=useState(null)

const handlerEdit =(event,contact)=>{
event.preventDefault()
setEditcontactId(contact.id)
console.log('editContactId',editContactId)
const formValue={
  firstName:contact.firstName,
  lastName:contact.lastName,
  phoneNumber:contact.phoneNumber,
email:contact.email,
img:contact.img
}
setEditFormData(formValue)

}
const handleEditFormChange=(event)=>{
  event.preventDefault();
  const fieldName=event.target.getAttribute('name');
  const fieldValue=event.target.value;
  const newFormData={...editFormData};
  newFormData[fieldName]=fieldValue;
  setEditFormData(newFormData)
 }

 const handleEditFormSubmit=(event)=>{
   setLoading(true)
event.preventDefault()
const editedContant={
  firstName:editFormData.firstName,
  lastName:editFormData.lastName,
  phoneNumber:editFormData.phoneNumber,
  email:editFormData.email,
  img:editFormData.img
  }
fetch('https://638353af1ada9475c8fcf0ad.mockapi.io/v1/phoneNumbers/'+ editContactId, {
  method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editedContant)

})
    .then(response => response.json())
    .then(data=>{console.log("data",data)
    setContacts(prev => [...prev,data.id])
    setEditeRefresh(!editRefresh)   
    setEditeRefresh(!editRefresh)
});
setTimeout(() => {
  setLoading(false);
}, 2000);
    setEditcontactId(null)
 }
//  CANCLE EDIT
 const handlerCancleEdit=(event)=>{
event.preventDefault()
setEditcontactId(null)
 }
 //Back
 const handlback=()=>{
  setLoading(true)
   setEditeRefresh(!editRefresh)
 }


  return (
    <>
      {loading ? <Loading/>:(
<Routes>
           
                 <Route index  path='/' element={< ContactsAdnEdit 
                 contacts={contacts} 
                 hamdleDeleteContact={hamdleDeleteContact} 
                 editContactId={editContactId}
                  handlerEdit={handlerEdit} 
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleEditFormSubmit={handleEditFormSubmit}
                  handlerCancleEdit={handlerCancleEdit}
                  handlerSearch={handlerSearch}
                  filterVal={filterVal}
                  setSelectOptions={setSelectOptions}
                  selectOption={selectOption}
                  />}></Route>
                 <Route  path='/addContacts' element={<  AddForm
                  handleAddFormChange={handleAddFormChange}
                   hamdleAddFormSubmit={hamdleAddFormSubmit}
                   handlback={handlback}
                   />}></Route> 
          </Routes>

      )}
        
          
        
      
    </>
 
  

  );
};





export default App;