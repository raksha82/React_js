import React from 'react'

function Profile({name , count ,setCount}) {
  return (
    <div>
        <h1>Hello , {name}</h1>
        <button onClick={()=>(setCount=>setCount+1)}>Count is {count}</button>
    </div>
  )
}

export default Profile