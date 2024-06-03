export const mockWeatherDetails = {
  forecast: [
    {
      tempMax: 32.81,
      tempMin: 26.39,
      windSpeed: 6.39,
      weather: ['rain'],
      conditions: ['Carry umbrella'],
      date: '2024-06-02'
    },
    {
      tempMax: 31.99,
      tempMin: 25.73,
      windSpeed: 6.1,
      weather: ['clouds'],
      conditions: [],
      date: '2024-06-03'
    },
    {
      tempMax: 33.97,
      tempMin: 27.03,
      windSpeed: 5.98,
      weather: ['clouds', 'rain'],
      conditions: ['Carry umbrella'],
      date: '2024-06-04'
    }
  ]
}

export const mockErrorResult = {
  errors: { message: 'Error connecting to the origin service' }
}
