// import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [email_,setEmail]=useState('');
  const [emails,setEmails]=useState([]);
  function data_submit(){
    axios.post('http://54.242.171.138:8000/post_contact',{"contact":email_})
     .then((r)=>alert('data saved ..'))
     .catch((e)=>console.log(e))
  }
  // const a=['a','b','c','d','e','f','g','h','i'];
  useEffect(()=>{
    axios.get('http://54.242.171.138:8000/get_contact')
     .then((r)=>setEmails(r.data))
     .catch((e)=>console.log(e))
    axios.get('http://54.242.171.138:8000')
     .then(()=>console.log('Connect'))
  },[])
  return (
    <div className="App">
      <div className='div_'>
        <input placeholder='enter Email ID' type="email" required onChange={(e)=>setEmail(e.target.value)} />
        <button type='submit' onClick={()=>data_submit()}>Add Email</button>
      </div>
      <ul className='data_field'>
        {emails.map((i)=>{
          return(
            <li key={i}>{i.contact}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
