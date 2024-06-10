import React from 'react'
import { render } from '@testing-library/react'
import WeatherCard from './WeatherCard'
import { mockDailyWeatherData } from '../../mocks'

describe('test weather card component', () => {
  it('should not render advices if advices are not present', () => {
    const weatherPageScreen = render(
      <WeatherCard weatherData={mockDailyWeatherData} />
    )
    const advices = weatherPageScreen.queryByTestId('weather-advices')
    expect(advices).not.toBeInTheDocument()
  })
})
