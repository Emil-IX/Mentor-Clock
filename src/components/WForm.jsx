
export const WForm = ({country, onsubmit, setcity, setcountry}) => {


  return (
    <form className='weather__form d-flex flex-column gap-3 text-center' action='#' method='POST' onSubmit={ onsubmit} >

          <div className='weather__select '>
              <select 
                value={country} 
                onChange={ ({target}) => setcountry(target.value)} 
                className="rounded p-1"
                >
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
          
          <div className='weather__input d-flex gap-3 flex-column  '>
            <input 
              className="rounded p-1"
              type="text" 
              name='city'
              placeholder='Insert a city'
              onChange={({target}) => setcity(target.value)}
              />

              <button className='btn btn-danger p-1' type='submit'>Faind weather</button>

          </div>
        </form>
  )
}
