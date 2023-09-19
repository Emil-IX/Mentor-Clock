import { Routes, Route, Navigate} from 'react-router-dom'
import { MentorClock } from '../pages/MentorClock'
import { MentorTimer } from '../pages/MentorTimer'

export const ClockRouters = () => {
  return (
   <>
   
   
    <Routes>
        <Route path='/*' element={<MentorClock/>} />
        <Route path='/timer' element={< MentorTimer />} />
      
    </Routes>
   
   
   </>
  )
}

