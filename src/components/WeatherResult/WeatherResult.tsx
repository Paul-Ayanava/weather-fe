import React from 'react'
import { WeatherResultProps } from './WeatherResult.types'
import './WeatherResult.styles.scss'
import WeatherCard from '../WeatherCard/WeatherCard'

const WeatherResult = ({ weatherData }: WeatherResultProps) => {
  const currentWeather = weatherData.forecast?.[0]
  const futureWeather = weatherData.forecast?.slice(1)
  return (
    <div className="weatherResult" data-testid="weather-result">
      <>
        <WeatherCard weatherData={currentWeather} type="today" />
        <section>
          {futureWeather?.map((weatherInfo) => (
            <WeatherCard weatherData={weatherInfo} />
          ))}
        </section>
      </>
    </div>
  )
}

export default WeatherResult
