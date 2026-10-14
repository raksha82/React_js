import React from 'react'

function User({id ,name , age , location , image}) {

    console.log(id);
  return (
     
    id && <div className='border-2 border-blue-200 m-4 p-8 font-bold'>
        <img className='h-100 w-100' src={image}></img>
        <div className='flex flex-col items-center'>
        <h3 className='font-black text-blue-500'>Name:{name}</h3>
        <h6 className=''>Age:{age}</h6>
        <h6>Location:{location}</h6>
        </div>

    </div>
    
  )
}

export default User