import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
     document.title = `Count: ${count}`;
  },[count])



  return (
    <>
      <section id="center">
        <h2>
          Count is {count}
        </h2>

        <button type='button' onClick={()=>setCount((count) => count+1)}>Increase</button>
        <button type='button' onClick={()=>setCount((count) =>count< 0? 0:count-1)}>Decrease</button>
        <button type='button' onClick={()=>setCount(0)}>Reset</button>

        {count === 10 && <h1>You reached 10!!!!!</h1>}
      </section>

     
    </>
  )
}

export default App
