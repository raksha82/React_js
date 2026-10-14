import React from 'react'

function User({id ,name , age , location , image, udata , setUdata}) {

    console.log(id);

    function handleDelete(id){

      const newdata=udata.filter((data)=>data.id !=id);
      setUdata(newdata);
      console.log(newdata);

    }
  return (
    <>
    
     
    {id && <div className='border-2 rounded-xl  shadow hover:shadow-black border-blue-200 m-4 p-8 font-bold flex flex-col items-center'>
        <img className='h-64  object-contain ' src={image}></img>
        <div className='flex flex-col gap-1 pt-2'>
        <h3 className='font-black text-blue-700'>Name: {name}</h3>
        <h6 className=''>Age: {age}</h6>
        <h6>Location: {location}</h6>
        <button className='rounded-2xl m-3  hover:p-2 hover:scale-110 border border-black text-red-600' onClick={()=>handleDelete(id)}>Delete User</button>
        </div>

    </div>}
    </>
    
  )
}

export default User