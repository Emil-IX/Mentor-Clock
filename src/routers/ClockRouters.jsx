import { Routes, Route, Navigate} from 'react-router-dom'
import { MentorClock } from '../pages/MentorClock'
import { MentorTimer } from '../pages/MentorTimer'
import { MentorChronometer } from '../pages/MentorChronometer'
import { MentorWeather } from '../pages/MentorWeather '

export const ClockRouters = () => {
  return (
   <>
   
   
    <Routes>
        <Route path='/*' element={<MentorClock/>} />
        <Route path='/timer' element={< MentorTimer />} />
        <Route path='/chronometer' element={< MentorChronometer />} />
        <Route path='/weather' element={< MentorWeather />} />
      
    </Routes>
   
   
   </>
  )
}


