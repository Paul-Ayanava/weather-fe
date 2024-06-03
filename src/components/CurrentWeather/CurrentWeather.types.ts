export interface CurrentWeeatherProps {
  weatherData: {
    tempMax: number
    tempMin: number
    windSpeed: number
    weather: string[]
    conditions?: string[]
  }
  addClasses?: string
}
