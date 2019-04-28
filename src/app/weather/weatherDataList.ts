import { IWeatherData } from './weatherData'

interface city{
	name:string,
	country:string
}

export interface IWeatherDataList {
	list:IWeatherData[];
	city?:city
}