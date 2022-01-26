import React from 'react'
import WeatherIcon from './WeatherIcon'

export default function WeatherForecastDay(props) {
  let maxTemp = Math.round(props.data.temp.max)
  let minTemp = Math.round(props.data.temp.min)

  function day() {
    let date = new Date(props.data.dt * 1000)

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    let day = date.getDay()
    return days[day]
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <WeatherIcon
          icon={props.data.weather[0].icon}
          description={props.data.weather[0].description}
        />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperatures-max">{maxTemp}°</span>
        <span className="WeatherForecast-temperatures-min">{minTemp}°</span>
      </div>
    </div>
  )
}
