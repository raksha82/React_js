import allen from "./assets/Allen.jpeg"
import karthik from "./assets/Karthik.jpeg"
import arun from "./assets/Arun.jpg"
import priya from "./assets/Soniya.jpeg"
import divya from "./assets/Divya.jpeg"
import User from "./User"

function UserData(){

    const udata=[
    {
     id: 1,
    name: "Arun Kumar",
    age: 22,
    location: "Geneva ",
    image: arun 
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 24,
    location: "Strasbourg",
    image: priya
  },
  {
    id: 3,
    name: "Allen",
    age: 25,
    location: " Colmar",
    image: allen
  },
  {
    id: 4,
    name: "Divya S",
    age: 21,
    location: "Lucerne",
    image: divya
  },
  {
    
    name: "Karthik M",
    age: 23,
    location: "Zurich",
    image: karthik
  }
]

    const sorted=udata.filter((data)=>{ return data.age>23})

    return <>
    <h1 className="text-center text-4xl font-black p-5 bg-blue-100">User Data</h1>
    <div className="grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 bg-blue-100">
    
   {udata.map((data, index)=><User key={index} id={data.id} name={data.name} age={data.age} location={data.location} image={data.image} ></User>)}
   </div>
    </>
}

export default UserData;