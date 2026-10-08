import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [msg,setmsg]=useState("Show Message")

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setmsg((msg)=>msg==="Show Message" ? "Hide Message" :"Show Message")}
        >
         {msg}
        </button>

        {msg==="Show Message"&& <h1>Hello Raksha</h1>}
      </section>

      
    </>
  )
}

export default App
