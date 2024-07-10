import React from 'react'
import axios from 'axios'
import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import WeatherForecast from './WeatherForecast'
import { mockErrorResult, mockWeatherDetails } from '../../mocks'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('test weather forecast page', () => {
  it('should render form on the page', () => {
    const weatherPageScreen = render(<WeatherForecast />)
    const searchbar = weatherPageScreen.getByTestId('searchbar')
    expect(searchbar).toBeInTheDocument()
  })

  it('should fetch and show the details of weather for a city', async () => {
    mockedAxios.get.mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ data: mockWeatherDetails }), 100)
        )
    )
    const weatherPageScreen = render(<WeatherForecast />)
    const searchbarInput = weatherPageScreen.getByTestId('searchbar-input')
    const searchbarButton = weatherPageScreen.getByTestId('searchbar-button')
    await userEvent.type(searchbarInput, 'kolkata')
    await userEvent.click(searchbarButton)
    expect(screen.getByTestId('loading')).toBeInTheDocument()
    const resultElement = await waitFor(() =>
      screen.getByTestId('weather-result')
    )
    expect(resultElement).toHaveTextContent('Weather forecast of today')
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://weatherbe.azurewebsites.net/api/weather/kolkata'
    )
  })

  it('should show error screen when api call fails', async () => {
    mockedAxios.get.mockRejectedValue({ data: mockErrorResult })
    const weatherPageScreen = render(<WeatherForecast />)
    const searchbarInput = weatherPageScreen.getByTestId('searchbar-input')
    const searchbarButton = weatherPageScreen.getByTestId('searchbar-button')
    await userEvent.type(searchbarInput, 'kolkata')
    await userEvent.click(searchbarButton)
    const resultElement = await waitFor(() => screen.getByTestId('error-text'))
    expect(resultElement).toHaveTextContent('Something went wrong!')
  })
})
