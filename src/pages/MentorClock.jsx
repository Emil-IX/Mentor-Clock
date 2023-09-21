import { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar";




export const MentorClock = () => {

    
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime( new Date)
    }, 1000);
  
    return () => clearInterval(interval)
  }, [])
        

  const showTime = (time) => {
      const hours =   String(time.getHours()).padStart(2,'0')
      const minutes = String(time.getMinutes()).padStart(2,'0')
      const seconds = String(time.getSeconds()).padStart(2,'0')

      return `${hours}:${minutes}:${seconds}`;
  };

  return (

   <>
   <div className="container1 row">
   <SideBar />

    <div className="container col-9 d-flex align-items-center justify-content-center flex-column">
      <h1 className="title2">Mentor clock</h1>
      <div className="clock ">
          <div className="ClockInfo"> {showTime(time)}</div>
        </div>
     </div>   
    </div>

    </>
  )
}


