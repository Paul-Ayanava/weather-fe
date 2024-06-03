import React from 'react'
import { WeatherCardProps } from './WeatherCard.types'
import './WeatherCard.styles.scss'

const WeatherCard = ({ weatherData }: WeatherCardProps) => {
  const {
    date,
    tempMax,
    tempMin,
    windSpeed,
    weather,
    conditions = []
  } = weatherData
  return (
    <div className="weather-card">
      <h3 className="weather-card__heading">weather forecast of {date}</h3>
      <p className="weather-card__item">
        <strong>Max temperature:</strong> {tempMax}°C
      </p>
      <p className="weather-card__item">
        <strong>Min temperature:</strong> {tempMin}°C
      </p>
      <p className="weather-card__item">
        <strong>Wind Speed:</strong> {windSpeed} km/h
      </p>
      <p className="weather-card__item">
        <strong>Weather conditions:</strong> {weather.join(', ')}
      </p>
      {conditions && conditions?.length > 0 && (
        <>
          <h4>Advices</h4>
          <ul className="weather-card__advices">
            {conditions.map((condition) => (
              <li className="weather-card__advice">{condition}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default WeatherCard
