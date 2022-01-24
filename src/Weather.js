import React, { useState } from 'react'
import './Weather.css'
import my_location_black_24dp from './my_location_black_24dp.svg'
import axios from 'axios'
import Location from './Location'
import WeatherConditions from './WeatherConditions'
import Temperature from './Temperature'

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity)
  const [weather, setWeather] = useState({ ready: false })

  function showTemperature(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
    })
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`
    axios.get(url).then(showTemperature)
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function updateCity(event) {
    event.preventDefault()
    setCity(event.target.value)
  }

  if (weather.ready) {
    return (
      <div className="weather-wrapper">
        <div className="input-field">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" onChange={updateCity} />
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
        <Location city={city} country={weather.country} date={weather.date} />
        <div className="row">
          <div className="col-sm-6">
            <div className="clearfix weather-temperature">
              <img src={weather.icon} alt="Clear" className="float-left" />

              <Temperature temperature={weather.temperature} />
            </div>
            <p className="weather">{weather.description}</p>
          </div>
          <div className="col-sm-6">
            <WeatherConditions
              humidity={weather.humidity}
              wind={weather.wind}
            />
          </div>
        </div>
      </div>
    )
  } else {
    search()
    return 'Loading'
  }
}
