import { DailyWeather } from '../../types/weatherData'

export interface WeatherCardProps {
  weatherData: DailyWeather
  type?: 'today' | 'future'
}
