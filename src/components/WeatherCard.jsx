import { BodyCard } from "./BodyCard";
import { Spinner } from "./Spinner";


export const WeatherCard = ({ weaterInfo, showinfo, isloading }) => {

  return (
    <div className ="card__weather card my-4 text-bg-dark animate__animated  animate__fadeIn" >
      <div className ="row g-0">
          <div className="col-md-4">
              <img src="./src/assets/city.jpg"  className ="img-fluid rounded-start img_cli" />
                  </div>
                  <div className="col-md-8">
                {
                    showinfo && (< BodyCard weaterinfo={ weaterInfo} /> )            
                }
                {
                    (isloading && !showinfo)&& <Spinner />
                }
                {
                  (!showinfo && !isloading) && (<h3 className=" text-center text-dark-emphasis mt-5 fs-3">Without results</h3>)
                }
        </div>
    </div>
</div>
  )

}

