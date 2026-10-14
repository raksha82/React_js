import React from 'react'

function User({id ,name , age , location , image}) {

    console.log(id);
  return (
    <>
    
     
    {id && <div className='border-2 rounded-xl  shadow hover:shadow-black border-blue-200 m-4 p-8 font-bold flex flex-col items-center'>
        <img className='h-64  object-contain ' src={image}></img>
        <div className='flex flex-col items-center'>
        <h3 className='font-black text-blue-500'>Name:{name}</h3>
        <h6 className=''>Age:{age}</h6>
        <h6>Location:{location}</h6>
        </div>

    </div>}
    </>
    
  )
}

export default User