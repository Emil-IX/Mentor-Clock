

export const BodyCard = ({ weaterinfo }) => {

const {weather, main:{ temp, temp_min, temp_max, humidity }, name } = weaterinfo;

const url = `https://api.openweathermap.org/img/w/${weather[0].icon}.png`;

  return (
    <div className="card-body">
        <h5 className="card-title fs-2 text-primary">{ name }</h5>
          <hr  className="text-primary " />
            <p className="card-text">Temperature: <strong>{ parseInt(temp - 273.15) } °C</strong></p>
            <p className="card-text">Temperature min: <strong>{ parseInt(temp_min - 273.15) } °C</strong></p>
            <p className="card-text">Temperature max: <strong>{ parseInt(temp_max - 273.15) } °C</strong></p>
            <p className="card-text">Humidity: <strong>{ humidity } %</strong></p>
            <p className="card-text"> <img src={url} alt="icon" /> { weather[0].main } / { weather[0].description } </p>                                    
        </div>
  )
}
