import React, { useContext } from 'react'
import CreateContext from '../Hooks/CreateContext' 

function Profile() {

const {name , count ,setCount}=useContext(CreateContext);
  return (
    
    <div>
        <h1>Hello , {name}</h1>
        <button onClick={()=>setCount((count)=> count= count+1 )}>Count is {count}</button>
    </div>
  )
}


export default Profile