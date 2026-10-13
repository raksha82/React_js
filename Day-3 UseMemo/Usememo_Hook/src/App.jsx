import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme]=useState(false);

  function ToggleTheme(){

     color : theme?"white":"black",
     backgroundColor:theme?"black":"white";
  }

  return (
    <>
      <section id="center" style={ToggleTheme}>

        <input placeholder='Enter the number' value={number} onChange={(e)=>setNumber(e.target.value)} ></input>
        <button onClick={setTheme(!theme)}>Toggle Theme</button>
        
      </section>
    </>
  )
}

export default App
