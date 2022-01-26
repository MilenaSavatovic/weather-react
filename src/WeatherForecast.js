import React, { useState, useEffect } from 'react'
import './WeatherForecast.css'
import axios from 'axios'

import WeatherForecastDay from './WeatherForecastDay'

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false)
  let [forecast, setForecast] = useState(null)

  useEffect(() => {
    setLoaded(false)
  }, [props.coords])

  function handleResponse(response) {
    setForecast(response.data.daily)
    setLoaded(true)
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col">
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
      </div>
    )
  } else {
    let apiKey = '3b848cbe65b012080137f9f9fd2c2ed4'
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)

    return 'Loading'
  }
}
