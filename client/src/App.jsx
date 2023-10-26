import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [number,setNumber] = useState('');
  const [contacts,setContacts] = useState([]);
  useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:3000/');
            setContacts(response.data);
        } catch (err) {
            console.error("Error fetching items", err);
        }
    }
    fetchData();
}, []);
  function handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:3000/',{name,number})
    .then(result=>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setName(e.target.value)} placeholder='name'/>
        <input onChange={(e)=>setNumber(e.target.value)} placeholder='number'/>
        <button>Save</button>
      </form>
      <div>
            <h1>Contacts</h1>
            <ul>
                {contacts.map(contact => (
                  <div >
                    <div className='contact-div'>
                    <li key={contact.name}>{contact.name}</li>
                    <li key={contact.number}>{contact.number}</li>
                    </div>
                    <br/>
                    
                    
                  </div>
                ))}
            </ul>
        </div>
    </>
  )
}

export default App
