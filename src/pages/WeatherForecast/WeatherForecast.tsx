import React, { useState } from 'react'
import axios from 'axios'
import SearchBar from '../../components/SearchBar/SearchBar'
import { WeatherData } from '../../types/weatherData'
import WeatherResult from '../../components/WeatherResult/WeatherResult'
import './WeatherForecast.styles.scss'
import { mockWeatherDetails } from '../../mocks'
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather'
import WeatherCard from '../../components/WeatherCard/WeatherCard'

const WeatherForecast = () => {
  const [city, setCity] = useState<string>()
  const [weatherData, setWeatherData] = useState<WeatherData>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const onSearch = async (currentCity: string) => {
    const updatedCity = currentCity.trim().toLocaleLowerCase()
    setCity(updatedCity)
    setLoading(true)
    setError(false)
    let weatherDetailsData
    try {
      weatherDetailsData = await axios.get(
        `http://localhost:3000/api/weather/${updatedCity}`
      )
      setWeatherData(weatherDetailsData.data)
      setLoading(false)
    } catch (err) {
      setError(true)
    }
  }

  return (
    <main>
      <SearchBar handleClick={onSearch} addClasses="searchbar" />
      {weatherData && !loading && !error && (
        <>
          <h2 className="weatherForecast__heading">{`Weather forecast for ${city}`}</h2>
          <WeatherResult weatherData={weatherData} />
        </>
      )}
      {loading && (
        <p className="infotext" data-testid="loading">
          loading data...
        </p>
      )}
      {error && (
        <div className="infotext" data-testid="error-text">
          <h2>Something went wrong!</h2>
          <p>Please try with another city or try after sometime</p>
        </div>
      )}
    </main>
  )
}

export default WeatherForecast
