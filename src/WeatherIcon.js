import React from 'react'

export default function WeatherIcon(props) {
  let iconUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`
  console.log(iconUrl)

  return <img src={iconUrl} alt={props.description} className="float-left" />
}
