import { useState } from 'react'
import { SideBar } from '../components/SideBar';

export const MentorWeather  = () => {


    const [weaterInfo, setWeaterInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showInfo, setshowInfo] = useState(false);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const apiKey = import.meta.env.VITE_API_KEY ;

    const URL = `https://api.openweathermap.org/data/2.5/weather?q= ${city},${country}&appid=${apiKey}`

  console.log(URL);



  return (
    <>
    <div className="container1 row">
    <SideBar />
 
      <div className='wave'></div>
     <div className="container col-9 d-flex align-items-center justify-content-center flex-column animate__animated  animate__fadeIn">


       <h1 className="title2">Mentor weather</h1>

       <h1 className="title__coming">Coming soon </h1>

       <div className='weather'>

      

        <form className='weather__form' action='#' method='POST'>

          <div className='weather__select'>
              <select value={country} onChange={ ({target}) => setCountry(target.value)} >
                        <option disabled value=''> --Select-- </option>
                        <option value="DO">Dominican Republic</option>
                        <option value="US">USA</option>
                        <option value="ES">Spain</option>
                        <option value="AR">Argentina</option>
                        <option value="MX">México</option>
                        <option value="PE">Perú</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>

                  </select>
          </div>
          
          <div className='weather__input'>
            <input 
              type="text" 
              name='city'
              placeholder='Insert a city'
              onChange={({target}) => setCity(target.value)}
              />

          </div>
        </form>

       </div>
         

      </div>   
     </div>
 
     </>
  )
}
