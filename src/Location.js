import React from 'react'
import './location.css'

export default function Location(props) {
  return (
    <section>
      <div className="location">
        <strong>{props.city} </strong>
        <strong>{props.country}</strong>
      </div>
      <div>
        Last updated:
        <span> 10:06</span>
      </div>
    </section>
  )
}
