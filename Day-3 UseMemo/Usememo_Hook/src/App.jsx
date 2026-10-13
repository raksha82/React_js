import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme]=useState(false);

  const ToggleTheme=useMemo(()=>
  {
    return{

     color : theme?"white":"black",
     backgroundColor:theme?"black":"white"
  }},[theme])

  const doubleNumber=useMemo(()=>{ return Slowrunner(number);}
  ,[number]);

  return (
    <>
      <section id="center" style={ToggleTheme}>

        <input placeholder='Enter the number' value={number} onChange={(e)=>setNumber(e.target.value)} ></input>
        <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
        <h5>Number Multiplied By 2 :{doubleNumber}</h5>
        
      </section>
    </>
  )
}

export default App

function Slowrunner(num)
{
   for(let i=0;i<1000;i++) {}
   return num*2;
}
