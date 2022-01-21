import './App.css'

import Weather from './Weather.js'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          {' '}
          <a href="https://github.com/MilenaSavatovic/weather-react">
            Open cource code
          </a>{' '}
          by Milena Savatovic
        </p>
      </div>
    </div>
  )
}

export default App
