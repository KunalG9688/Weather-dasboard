import react,{ useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherComponent from './components/WeatherComponent'

function App() {
  

  return (
    <>
     <div className='container font-custom fw-bold'><WeatherComponent /></div>
    </>
  )
}

export default App
