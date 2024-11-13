import React from 'react'

const TempComponent = ({weather}) => {
  return (
    <div className='row justify-content-between'>
        <div className='col-md-2 pe-1'>
                <div className='card'>
                    <div className='card-body bg-light'>
                            <div>
                            Temperature: {weather.current.temp_c}°C
                            </div>
                    </div>
                </div>
            </div>
            <div className='col-md-2 pe-1'>
                <div className='card'>
                    <div className='card-body bg-light'>
                            <div>
                            Humidity: {weather.current.humidity}%
                            </div>
                    </div>
                </div>
            </div>
            <div className='col-md-2 pe-1'>
                <div className='card'>
                    <div className='card-body bg-light'>
                            <div>
                            {weather.current.last_updated}
                            </div>
                    </div>
                </div>
            </div>
            <div className='col-md-2 ps-1'>
                <div className='card'>
                    <div className='card-body bg-light'>
                            <div>
                            {weather.current.is_day == 1 ? 'Morning':'Evening'}
                            </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TempComponent