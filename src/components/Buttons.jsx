import { useState } from 'react'

export const Buttons = ({run, stop, reset}) => {

const [running, setRunning] = useState(false);

const handleRun = () => {
    run()
    setRunning(true)
}

const handleStop = () => {
    stop()
    setRunning(false)
}



if (running) {
    
    return (

        <div className='buttons'>
            <button onClick={ handleStop} className='btn btn-danger mx-2'>Stop</button>
            <button  onClick={ reset } className='btn btn-light mx-2'>Restart</button>
        </div>
    )
}

  return (
   <div className='buttons'>
        <button onClick={ handleRun }  className='btn btn-success mx-2'>Start</button>
        <button onClick={ reset } className='btn btn-light mx-2'>Restart</button>
   
   </div>
  )
}
