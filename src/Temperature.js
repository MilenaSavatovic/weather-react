import React from 'react'
import './temperature.css'

export default function Temperature() {
  return (
    <div>
      <div className="clearfix weather-temperature">
        <i className="fas fa-sun float-left" alt="Clear" id="icon"></i>
        {/* <img src="" alt="Clear" id="icon" className="float-left" /> */}
        <span className="float-left data">
          <strong id="temperature">15</strong>
          <span className="units">°C</span>
        </span>
      </div>
      <p className="weather">Clear sky</p>
    </div>
  )
}
