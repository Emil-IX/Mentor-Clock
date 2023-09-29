import { useState } from 'react'
import { SideBar } from '../components/SideBar';
import { WeatherCard } from '../components/weatherCard';
import { WForm } from '../components/WForm';


export const MentorWeather  = () => {

    const [weaterInfo, setWeaterInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showInfo, setshowInfo] = useState(false);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const apiKey = import.meta.env.VITE_API_KEY;

    const URL = `https://api.openweathermap.org/data/2.5/weather?q= ${city},${country}&appid=${apiKey}`

    // console.log(URL);

    const findWeather = async ()  => {

      setLoading(true)

      await fetch(URL) 
        .then(response => {
          if (!response.ok) throw {response}
          return response.json()
        })
        .then(info => { 
          console.log(info)
          setWeaterInfo(info)
          // console.log(weaterInfo.main.temp)
          setshowInfo(true);

        }).catch(err => {
          console.log(err)
          setLoading(false);
          setshowInfo(false);
        })  
         
    }


    const onSubmit = (e) => {
      e.preventDefault()

      findWeather();

    }

    
  return (
    <>
    <div className="container1 row">
    <SideBar />
 
      <div className='wave'></div>
        <div className="container col-9 d-flex align-items-center justify-content-center flex-column animate__animated  animate__fadeIn">

          <h1 className="title2">Mentor weather</h1>

          <div className='weather'>

              <WForm 
                country={ country }
                setcountry={ setCountry }
                setcity={ setCity }
                onsubmit={ onSubmit }
              />
              
              < WeatherCard 
                weaterInfo={ weaterInfo } 
                showinfo={ showInfo }
                /> 
              
       </div>
      </div>   
     </div>
 
     </>
  )
}

