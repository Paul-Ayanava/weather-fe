import React from 'react'
import { render } from '@testing-library/react'
import CurrentWeather from './CurrentWeather'
import { mockWeatherDetails } from '../../mocks'

describe('test current weather component', () => {
  it('should render advices on the card', () => {
    const weatherPageScreen = render(
      <CurrentWeather
        weatherData={mockWeatherDetails.forecast[0]}
        addClasses="custom-class"
      />
    )
    const advices = weatherPageScreen.getByTestId('weather-advices')
    expect(advices).toBeInTheDocument()
  })
})
