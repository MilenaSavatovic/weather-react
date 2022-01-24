import React, { useState } from 'react'
import './temperature.css'

export default function Temperature(props) {
  const [unit, setUnit] = useState('celsius')

  function convertToFahrenheit(event) {
    event.preventDefault()
    setUnit('fahrenheit')
  }

  function showCelsius(event) {
    event.preventDefault()
    setUnit('celsius')
  }

  function fahrenheit() {
    return (props.temperature * 9) / 5 + 32
  }

  if (unit === 'celsius') {
    return (
      <span className="float-left data">
        <strong> {Math.round(props.temperature)}</strong>
        <span className="units">
          °C |{' '}
          <a href="/" onClick={convertToFahrenheit} className="active">
            °F
          </a>
        </span>
      </span>
    )
  } else {
    return (
      <span className="float-left data">
        <strong> {Math.round(fahrenheit())}</strong>
        <span className="units">
          <a href="/" onClick={showCelsius} className="active">
            °C
          </a>
          | °F
        </span>
      </span>
    )
  }
}
