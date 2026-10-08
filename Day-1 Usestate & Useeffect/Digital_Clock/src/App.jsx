import { useState, useEffect } from "react";

function App() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

     const intervalId =setInterval(()=>{
      console.log(time);
      setTime(new Date());
    },1000)

    return () => {
      console.log("clear");
    clearInterval(intervalId);
  };

  }, [time]);

  return (
    <>
      <h2>Current Time</h2>
      <h3>{time.toLocaleTimeString()}</h3>
    </>
  );
}

export default App;