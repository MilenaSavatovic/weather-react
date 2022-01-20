import React from 'react'
import './location.css'

export default function Location() {
  return (
    <section>
      <div className="location">
        <strong id="city">Novi Sad </strong>
        <strong id="country">Serbia</strong>
      </div>
      <div>
        Last updated:
        <span id="time"> 10:06</span>
      </div>
    </section>
  )
}
