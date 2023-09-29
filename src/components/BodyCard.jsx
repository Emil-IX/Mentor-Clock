

export const BodyCard = ({ weaterinfo }) => {

const { main:{ temp, temp_min, temp_max, humidity }, name } = weaterinfo;

  return (
    <div className="card-body">
        <h5 className="card-title">{ name }</h5>
            <p className="card-text">Temperature: <strong>{ parseInt(temp - 273.15) } °C</strong></p>
            <p className="card-text">Temperature min: <strong>{ parseInt(temp_min - 273.15) } °C</strong></p>
            <p className="card-text">Temperature max: <strong>{ parseInt(temp_max - 273.15) } °C</strong></p>
            <p className="card-text">Humidity: <strong>{ humidity } </strong></p>                                        
        </div>
  )
}
