import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
 
  const [name,setName]=useState("");

  // useEffect(()=>{
  //      setCount(name.length)
  // } ,[name])


  return (
    <>
      <div>
        <input type='text' placeholder='Enter the name' onChange={(e)=>setName(e.target.value)}></input>
        <h3>Character:{name.length}</h3>
      </div>
    </>
  )
}

export default App
