import React, { useState } from 'react'
import './Weather.css'
import my_location_black_24dp from './my_location_black_24dp.svg'
import axios from 'axios'
import Location from './Location'
import WeatherConditions from './WeatherConditions'
import Temperature from './Temperature'

export default function Weather() {
  const [city, setCity] = useState('Paris')
  const [weather, setWeather] = useState({
    temperature: 10,
    wind: 2,
    humidity: 10,
    icon: `http://openweathermap.org/img/wn/01d@2x.png`,
    description: 'Clear sky',
    country: 'France',
  })

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`

  function showTemperature(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.get(url).then(showTemperature)
  }

  function updateCity(event) {
    event.preventDefault()
    setCity(event.target.value)
  }

  return (
    <div className="weather-wrapper">
      <div className="input-field">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            required
            onChange={updateCity}
          />
          <input type="submit" value="🔍" className="submit" />
          <button>
            <img
              src={my_location_black_24dp}
              alt="my location"
              className="location-icon"
            />
          </button>
        </form>
      </div>
      <Location city={city} country={weather.country} />
      <div className="row">
        <div className="col-sm-6">
          <Temperature
            temperature={weather.temperature}
            description={weather.description}
            icon={weather.icon}
          />
        </div>
        <div className="col-sm-6">
          <WeatherConditions humidity={weather.humidity} wind={weather.wind} />
        </div>
      </div>
    </div>
  )
}
