import React from 'react'

const WeatherNav = ({weather}) => {
  return (
    <div>
        <div className='card fw-bold h3 font-custom'>
                <div className='card-body bg-light'>
                    <div className='row'>
                        <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-body bg-light'>
                                <div>
                                    Weather Dashoard
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-body bg-light'>
                                <div>
                                {weather.location.localtime}
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-2'>
                        <div className='card'>
                            <div className='card-body bg-light'>
                                <div>
                                Back
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
  )
}

export default WeatherNav