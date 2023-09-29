import { BodyCard } from "./BodyCard";


export const WeatherCard = ({ weaterInfo, showinfo }) => {

  return (
    <div className ="card__weather card my-4 text-bg-dark animate__animated  animate__fadeIn" >
      <div className ="row g-0">
          <div className="col-md-4">
              <img src="./src/assets/city.jpg"  className ="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                {
                       showinfo && < BodyCard weaterinfo={ weaterInfo} />
                }
        </div>
    </div>
</div>
  )

}
