import React from 'react'
import './WeatherForecast.css'
import axios from 'axios'

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response)
  }
  let apiKey = '3b848cbe65b012080137f9f9fd2c2ed4'
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&&appid=${apiKey}&units=metric`

  axios.get(apiUrl).then(handleResponse)
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">19</span>
            <span className="WeatherForecast-temperatures-min">10</span>
          </div>
        </div>
      </div>
    </div>
  )
}
