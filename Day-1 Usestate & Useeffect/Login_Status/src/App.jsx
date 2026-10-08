import { useState } from 'react'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <section id="center">


            {isLoggedIn === true?(isAdmin===true? <h1>Welcome Admin</h1>:<h1>Welcome User</h1>) : <h1>Please Login</h1>}

            <button onClick={()=>setIsLoggedIn((!isLoggedIn) )} >UserLogin:{isLoggedIn.toString()}</button>
            <button onClick={()=>setIsAdmin((!isAdmin))}>AdminLogin:{isAdmin.toString()}</button>

        </section>
    </>
  )
}

export default App
