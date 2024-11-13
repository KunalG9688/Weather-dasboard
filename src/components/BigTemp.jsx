import React from 'react'

const BigTemp = ({weather}) => {
  return (
    <div>
        <div className='row font-custom'>
            <div className='col-md-12 ps-5'>
                <div className='card'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-md-6'>
                            <p className='display-3 fw-bold'>{weather.current.condition.text}</p>           
                        </div>
                        <div className='col-md-6'>
                          <div className='card card-custom border border-dark rounded-circle'>
                            <img className='img-fluid'
                                src={weather.current.condition.icon}
                                alt={weather.current.condition.text}/>
                          </div>
                        </div>
                        <p className='display-4 fw-bold'>{weather.current.temp_c}°C</p>
                      </div>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigTemp