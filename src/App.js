// import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [email_,setEmail]=useState('');
  const [emails,setEmails]=useState([]);
  function data_submit(){
    axios.post('http://localhost:8000/post_contact',{"contact":email_})
     .then((r)=>alert('data saved ..'))
     .catch((e)=>console.log(e))
  }
  // const a=['a','b','c','d','e','f','g','h','i'];
  useEffect(()=>{
    axios.get('http://localhost:8000/get_contact')
     .then((r)=>setEmails(r.data))
     .catch((e)=>console.log(e))
  },[])
  return (
    <div className="App">
      <div className='div_'>
        <input placeholder='enter Email ID' required onChange={(e)=>setEmail(e.target.value)} />
        <button type='submit' onClick={()=>data_submit()}>Add contact</button>
      </div>
      <div className='data_field'>
        {emails.map((i)=>{
          return(
            <h1 key={i}>{i.contact}</h1>
          )
        })}
      </div>
    </div>
  );
}

export default App;
