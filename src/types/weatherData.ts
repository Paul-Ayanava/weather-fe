export interface DailyWeather {
  date: string
  tempMin: number
  tempMax: number
  windSpeed: number
  weather: string[]
  conditions?: string[]
}

export interface WeatherData {
  forecast: DailyWeather[]
}
