import React from 'react'

const WindDetails = ({weather}) => {
  return (
    <div>
        <div className='py-2'>
        <div className='col-md-8'> 
                <div className='card '>
                    <div className='card-body bg-light'>
                       Feels Like: {weather.current.feelslike_c}°C
                    </div>
                </div>
            </div>
            <div className='py-2 col-md-8'> 
                <div className='card '>
                    <div className='card-body bg-light'>
                    Visibility: {weather.current.vis_km} km
                    </div>
                </div>
            </div>
            <div className='col-md-8'> 
                <div className='card '>
                    <div className='card-body bg-light'>
                        Wind: {weather.current.wind_kph} kph
                    </div>
                </div>
            </div>
        <div className='py-2 col-md-8'> 
            <div className='card '>
                <div className='card-body bg-light'>
                Wind Gusts: {weather.current.gust_kph} kph
                </div>
            </div>
        </div>
       
        <div className='py-2 col-md-8'> 
            <div className='card'>
                <div className='card-body bg-light'>
                Wind Direction: {weather.current.wind_dir}
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default WindDetails