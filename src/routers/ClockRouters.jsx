import { Routes, Route, Navigate} from 'react-router-dom'
import { MentorClock } from '../pages/MentorClock'

export const ClockRouters = () => {
  return (
   <>
   
   
    <Routes>
        <Route path='/*' element={<MentorClock/>} />

        
    </Routes>
   
   
   </>
  )
}

