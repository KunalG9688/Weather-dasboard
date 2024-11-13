import React, { useEffect, useState } from 'react'
import RegionComponent from './RegionComponent'
import TempComponent from './tempComponent'
import WindDetails from './WindDetails'
import BigTemp from './BigTemp'
import WeatherNav from './WeatherNav'
import axios from 'axios';
import SearchCity from './SearchCity'

const WeatherComponent = () => {
  const [citySearch, setCitySearch] = useState('Bengaluru');
  const [weather, setWeather] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
      const fetchWeather = async () => {
        setLoading(true);
        setError(null); // Clear any previous errors before a new fetch
          try {
              const response = await axios.get(
                  'http://api.weatherapi.com/v1/current.json',{
                      params:{
                          key: 'e5a5f9fe3dc74c87a3654853242510',
                          q: citySearch,
                      },
                  }
              );
              setWeather(response.data);
              // setLoading(false);
          } catch (error){
              setError('Error fetching weather data. ');
          }finally {setLoading(false);
          }
      };
      fetchWeather();
  },[citySearch]);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;

      console.log(weather)
  
  return (
    <div className='row'>
        <div className='col-md-12 py-2'><WeatherNav weather={weather}/></div>
        <div className='col-md-12 py-2'><SearchCity setCitySearch={setCitySearch}/> </div>
        <div className='col-md-12 py-2'><RegionComponent weather={weather}/> </div>
        <div className='col-md-12 py-2'><TempComponent weather={weather}/></div>
        <div className='col-md-12'>
            <div className='row'>
                <div className='col-md-3'><WindDetails weather={weather}/></div>
                <div className='col-md-9 py-2'><BigTemp weather={weather}/></div>
            </div>
        </div>
    </div>
  )
}

export default WeatherComponent