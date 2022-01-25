import React, { useState } from 'react'
import './WeatherForecast.css'
import axios from 'axios'

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false)
  let [forecast, setForecast] = useState(null)

  function handleResponse(response) {
    setLoaded(true)
    setForecast(response.data.daily)
  }

  if (loaded) {
    console.log(forecast)
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <div className="WeatherForecast-icon">
              <img src="" alt="icon" />
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperatures-max">
                {forecast[0].temp.max}
              </span>
              <span className="WeatherForecast-temperatures-min">
                {forecast[0].temp.min}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    let apiKey = '3b848cbe65b012080137f9f9fd2c2ed4'
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)

    return null
  }
}
