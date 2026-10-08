import { useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const refcount=useRef(0);

  function updateref(){
    refcount.current +=1;
  }



  return (
    <>
      <section id="center">

        <button type='button' onClick={()=>(setCount(count=>count+1))}>State Count : {count}</button>

         <button onClick={updateref}>
          Increase Ref
        </button>

        <button type='button'  onClick={updateref}>Ref Count:{refcount.current}</button>
      </section>
    </>
  )
}

export default App
