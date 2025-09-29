import React, { useEffect, useState } from 'react'
import { SideBar } from '../components/SideBar'

export const MentorTimer = () => {


  const [time, setTime] = useState(new Date())
  const [endTime, setEndTime] = useState('')
  const [resume, setResume] = useState('')

  const [tempEndTime, setTempEndTime] = useState('04-04-2026')
  const [tempResume, setTempResume] = useState('')



  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date)
    }, 1000);

    return () => clearInterval(interval)
  }, [])


  const getTimerResult = (time, endtime) => {

    time = new Date()
    const remainTime = (new Date(endtime) - time + 1000) / 1000;
    const remainDays = Math.floor(remainTime / (3600 * 24))
    const remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2)
    const remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2)
    const remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2)


    return {
      remainDays,
      remainHours,
      remainMinutes,
      remainSeconds
    }
  }

  const { remainDays, remainHours, remainSeconds, remainMinutes } = getTimerResult(time, tempEndTime)// putyour date here

  // if (remainDays < 1 && remainHours < 1 && remainMinutes < 1 && remainSeconds < 1 ) {
  // condition here
  // }


  const onSubmit = (e) => {
    e.preventDefault();
    setResume(tempResume)
    setTempEndTime(endTime)
    setTempResume('')
  }

  return (
    <>
      <div className="container1 row">
        <SideBar />


        <div className='wave'></div>
        <div className="container col-9 d-flex align-items-center justify-content-center flex-column animate__animated  animate__fadeIn">


          <h1 className="title2">Mentor timer</h1>

          <h1 className="title__coming">Coming soon </h1>
          {resume && endTime && <h1 className='title2'>{`${resume} - ${endTime}`}</h1>}

          <div className='timer d-flex'>
            <p className={`timerNumber ${remainDays < 1 ? "animate__animated animate__bounce text-light" : ""} `} > {remainDays}  <strong>Days</strong> </p>
            <p className={`timerNumber ${remainHours < 1 ? "animate__animated animate__bounce text-light" : ""} `} > {remainHours} <strong>Hours</strong></p>
            <p className={`timerNumber ${remainMinutes < 1 ? "animate__animated animate__bounce text-light" : ""} `}> {remainMinutes} <strong>Minutes</strong> </p>
            <p className={`timerNumber ${remainSeconds === "00" ? "animate__animated animate__bounce text-light" : ""} `}> {remainSeconds} <strong>seconds</strong></p>
          </div>


          <h2 className='selectTime'>Summary</h2>

          <form className='formSelect' onSubmit={onSubmit}>

            <input
              type="text"
              className='putDate'
              value={tempResume}
              onChange={e => setTempResume(e.target.value)}
            />

            <input
              type="date"
              className='putDate'
              value={tempEndTime}
              onChange={e => setEndTime(e.target.value)}
            />

            <button type='submit' className='boton'>
              Confirm
            </button>

          </form>


        </div>
      </div>

    </>
  )
}


