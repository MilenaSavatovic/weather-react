import React from 'react'
import './temperature.css'

export default function Temperature(props) {
  return (
    <span className="float-left data">
      <strong> {Math.round(props.temperature)}</strong>
      <span className="units">°C</span>
    </span>
  )
}
