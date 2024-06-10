import React from 'react'
import { CurrentWeeatherProps } from './CurrentWeather.types'
import './CurrentWeather.styles.scss'

const CurrentWeather = ({ weatherData, addClasses }: CurrentWeeatherProps) => {
  const { tempMax, tempMin, windSpeed, weather, conditions } = weatherData
  let className = 'weather-today'
  if (addClasses) {
    className = `weather-today ${addClasses}`
  }
  return (
    <section className={className}>
      <h3 className="weather-today__heading">Today's weather forecast</h3>
      <div className="weather-today__temp">
        <p className="weather-today__temp__value">
          <strong>Max temperature:</strong> {tempMax}°C
        </p>
        <p className="weather-today__temp__value">
          <strong>Min temperature:</strong> {tempMin}°C
        </p>
      </div>
      <p>
        <strong>Wind Speed:</strong> {windSpeed} km/h
      </p>
      <p>
        <strong>Weather conditions:</strong> {weather.join(', ')}
      </p>
      {conditions && conditions?.length > 0 && (
        <>
          <h4 className="weather-today__heading">Advices for today</h4>
          <ul className="weather-today__advices" data-testid="weather-advices">
            {conditions.map((condition) => (
              <li className="weather-today__advice">{condition}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}

export default CurrentWeather
