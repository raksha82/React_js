import { useState } from 'react'
import './App.css'
import CreateContext from './Hooks/CreateContext'
import Admin from './Components/Admin';

function App() {
  const [count, setCount] = useState(0)
  const name="Raksha";


  return (
    <>
      <CreateContext.Provider  value={{name , count ,setCount}}>
      <section id="center">
        <Admin/>
      </section>
      </CreateContext.Provider>

    </>
  )
}

export default App
