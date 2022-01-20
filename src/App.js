import './App.css'
import Input from './Input.js'
import Location from './Location.js'
import Temperature from './Temperature.js'
import WeatherConditions from './WeatherConditions.js'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-wrapper">
          <Input />
          <Location />
          <div className="row">
            <div className="col-sm-6">
              <Temperature />
            </div>
            <div className="col-sm-6">
              <WeatherConditions />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
