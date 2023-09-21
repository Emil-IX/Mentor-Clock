import React, { useEffect, useState } from 'react'
import { SideBar } from '../components/SideBar'

export const MentorTimer = () => {


  const [time, setTime] = useState(new Date())


  useEffect(() => {
    const interval = setInterval(() => {
      setTime( new Date)
    }, 1000);
  
    return () => clearInterval(interval)
  }, [])
        

const getTimerResult = (time, endtime) => {

    time = new Date()
    const remainTime = (new Date(endtime) - time + 1000) / 1000;
    const remainDays =  Math.floor( remainTime / (3600 * 24)  )
    const remainHours =  ('0' +  Math.floor( remainTime / 3600 % 24  )).slice(-2)
    const remainMinutes =  ('0' +  Math.floor( remainTime / 60 % 60  )).slice(-2)
    const remainSeconds =  ('0' +  Math.floor( remainTime % 60 )).slice(-2)


    return {
      remainDays,
      remainHours,
      remainMinutes,
      remainSeconds
    }
}

 const { remainDays,remainHours,remainSeconds,remainMinutes  } = getTimerResult(time, '2024-01-24T15:00:00.519Z')

  return (
    <>
    <div className="container1 row">
    <SideBar />
 
     <div className="container col-9 d-flex align-items-center justify-content-center flex-column">
      <div className='wave'></div>


       <h1 className="title2">Mentor Timer</h1>

       <h1 className="title__coming">Coming soon </h1>

          <div  className='timer d-flex'>
            <p className='timerNumber'> {remainDays}  <strong>Days</strong> </p>
            <p className='timerNumber'> {remainHours} <strong>Hours</strong></p>
            <p className='timerNumber'> {remainMinutes} <strong>Minutes</strong> </p>
            <p className='timerNumber'> {remainSeconds} <strong>seconds</strong></p>
          </div>

      </div>   
     </div>
 
     </>
  )
}


