import React from 'react'

function User({name , age , location , image}) {
  return (
   
    <div className='border-2 border-blue-200 m-4 p-8'>
        <img className='h-100 w-100' src={image}></img>
        <div className='flex flex-col items-center'>
        <h3>Name:{name}</h3>
        <h6>Age:{age}</h6>
        <h6>Location:{location}</h6>
        </div>

    </div>
    
  )
}

export default User