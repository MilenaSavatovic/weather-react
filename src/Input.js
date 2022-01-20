import React from 'react'
import my_location_black_24dp from './my_location_black_24dp.svg'
import './input.css'

export default function Input() {
  return (
    <div className="input-field">
      <form id="input-form">
        <input type="text" placeholder="Search" id="input" required />
        <input type="submit" value="🔍" className="submit" />
        <button id="location-button">
          <img
            src={my_location_black_24dp}
            alt="my location"
            className="location-icon"
          />
        </button>
      </form>
    </div>
  )
}
