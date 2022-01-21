import React from 'react'
import './temperature.css'

export default function Temperature(props) {
  return (
    <div>
      <div className="clearfix weather-temperature">
        <img src={props.icon} alt="Clear" className="float-left" />

        <span className="float-left data">
          <strong> {props.temperature}</strong>
          <span className="units">°C</span>
        </span>
      </div>
      <p className="weather">{props.description}</p>
    </div>
  )
}
