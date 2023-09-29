

export const WeatherCard = ({weaterInfo}) => {

const { main:{ temp, temp_min, temp_max, humidity }, name } = weaterInfo;

  return (
    <div className ="card__weather card mb-3 text-bg-dark" >
    <div className ="row g-0">
        <div className="col-md-4">
            <img src="./src/assets/city.jpg"  className ="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text">Temperature: <strong>{ parseInt(temp - 273.15) } °C</strong></p>
                    <p className="card-text">Temperature min: <strong>{ parseInt(temp_min - 273.15) } °C</strong></p>
                    <p className="card-text">Temperature max: <strong>{ parseInt(temp_max - 273.15) } °C</strong></p>
                    <p className="card-text">Humidity: <strong>{ humidity } </strong></p>
                    
            </div>
        </div>
    </div>
</div>
  )
  
}
