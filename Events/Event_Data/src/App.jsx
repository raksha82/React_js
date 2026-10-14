import React, { useState } from 'react'

function App() {

  const [name,setName]=useState("");

  function change(eve)
  {
      setName(eve.target.value);
      console.log(eve);
  }

  function handleclick(event)
  {
     console.log(event);
  }
  return (
    <div>
      <h1>Hello Welcome</h1>
      <input onChange={(e)=>change(e)}></input>
      <br></br>
      <button onClick={(e)=>handleclick(e)}>Click me</button>
      <h3>Name:{name}</h3>
    </div>
  )
}

export default App