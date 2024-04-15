import { useEffect, useState } from 'react'
 import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },)

  return (
    <>
     
       <h1> Chai fullstack</h1>
       <p>Jokes: {jokes.length}</p>
       {
        jokes.map((joke )=>(
             <div key={joke.id}>
              <h3>{joke.content}</h3>

             </div>
        ))
       }
    </>
  )
}

export default App
