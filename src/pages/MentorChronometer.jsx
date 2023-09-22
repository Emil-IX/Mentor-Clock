import { useState } from "react"
import { Buttons } from "../components/Buttons"
import { SideBar } from "../components/SideBar"




export const MentorChronometer = () => {

  const [time, settime] = useState({
    initHours: 0,
    initMinutes: 0,
    initSeconds: 0,
  })

  const [intervalTime, setInervalTime] = useState()

  const [click, setClick] = useState(false)

  let seconds = time.initSeconds;
  let minutes = time.initMinutes;
  let hours = time.initHours;

  const increment = () => {

      if (seconds === 60) {
          minutes++
          seconds = 0
      }
      if (minutes === 60) {
          hours++
          minutes = 0
      }
     

      seconds++
      return settime({
        initHours: hours,
        initMinutes: minutes,
        initSeconds: seconds,
      })

  }


  const init = () => {
    if (!click) { setInervalTime (
         setInterval(() => {
            increment()
          }, 16))
      }
   }

   const stop = () => {
    clearInterval(intervalTime)
   }

   const restart = () => {

    settime({
      initHours: 0,
      initMinutes: 0,
      initSeconds: 0,
    })

    hours = minutes = seconds = 0;

    stop()
   }
  
  console.log(click)  

  return (
   <>

<div className="container1 row">
   <SideBar />

    <div className='wave'></div>    <div className='wave'></div>
    <div className="container col-9 d-flex align-items-center justify-content-center flex-column animate__animated animate__fadeIn">
      <h1 className="title2">Mentor chronometer</h1>
      <div className="chronometer">
          <div className="chronometer__numbers"> {`${String(time.initHours).padStart(2,'0')}:${String(time.initMinutes).padStart(2,'0')}:${String(time.initSeconds).padStart(2,'0')}`}</div>
        </div>
        < Buttons 
              run={ init }
              stop={ stop }
              reset={ restart }
            />
     </div>   
    </div> 

   </>
  )
}

