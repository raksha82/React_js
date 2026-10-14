import React, { useState } from 'react'

function App() {

  const [name,setName]=useState("");
  const[val,setVal]=useState(false);

  function change(eve)
  {
      setName(eve.target.value);
      console.log(eve);
      // setVal(false);
  }

  function handleclick(event)
  {
    setVal(true);
     console.log(event);
  }
  return (
    <div>
      <h1>Hello Welcome</h1>
      <input value={name} onChange={(e)=>change(e)}></input>
      <br></br>
      <button onClick={(e)=>handleclick(e)}>Click me to see the name</button>
      <h3>Name:{val?name:"First Click the Button"}</h3>
    </div>
  )
}

export default App