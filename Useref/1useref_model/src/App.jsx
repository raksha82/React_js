import React, { useRef } from 'react'

function App() {

  
  const inputref=useRef();

  function focusInput(){
    inputref.current.focus();
  }

  return (
    <div>
      <input ref={inputref} placeholder='Enter your name'></input>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default App