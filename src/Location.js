import React from 'react'
import './location.css'

export default function Location(props) {
  console.log(props.date)
  let hours = props.date.getHours()
  let minutes = props.date.getMinutes()
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (hours < 10) {
    hours = `0${hours};`
  }
  return (
    <section>
      <div className="location">
        <strong>{props.city} </strong>
        <strong>{props.country}</strong>
      </div>
      <div>
        Last updated:
        <span>
          {hours}:{minutes}
        </span>
      </div>
    </section>
  )
}
