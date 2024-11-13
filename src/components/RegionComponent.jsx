import React from 'react'

const RegionComponent = ({weather}) => {
  return (
    <div className='row justify-content-between'>
        <div className='col-md-2 pe-1'>
            <div className='card'>
                <div className='card-body bg-light'>
                        <div>
                        City: {weather.location.name}
                        </div>
                </div>
            </div>
            </div>
            <div className='col-md-2 pe-1'>
            <div className='card'>
                <div className='card-body bg-light'>
                        <div>
                        Region: {weather.location.region}
                        </div>
                </div>
            </div>
            </div>
            <div className='col-md-2 pe-1'>
            <div className='card'>
                <div className='card-body bg-light'>
                        <div>
                        Country: {weather.location.country}
                        </div>
                </div>
            </div>
            </div>
            <div className='col-md-2 ps-1'>
            <div className='card'>
                <div className='card-body bg-light'>
                        <div>
                         {weather.location.tz_id}
                        </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default RegionComponent