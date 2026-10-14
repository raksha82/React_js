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
    location: "Chennai",
    image: arun 
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 24,
    location: "Coimbatore",
    image: priya
  },
  {
    id: 3,
    name: "Allen",
    age: 25,
    location: "Bengaluru",
    image: allen
  },
  {
    id: 4,
    name: "Divya S",
    age: 21,
    location: "Thiruvarur",
    image: divya
  },
  {
    id: 5,
    name: "Karthik M",
    age: 23,
    location: "Madurai",
    image: karthik
  }
]

    console.log(udata);

    return <>
    <div className="grid grid-cols-3">
   {udata.map((data, index)=><User key={index} name={data.name} age={data.age} location={data.location} image={data.image} ></User>)}
   </div>
    </>
}

export default UserData;