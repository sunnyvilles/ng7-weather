import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IWeatherData } from './weatherData';
import { IWeatherDataList } from './weatherDataList';


@Injectable({
  providedIn: 'root'
})

//contains services for open weather API
export class WeatherService {

  // API data
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5/';
  private appID: string = '35850e6b191b0efe9d7aa316ec104712';

  constructor(private http:HttpClient) { }

  //todo: error handling
  //forcast
  getWeatherForecastByCity(city:string): Observable<IWeatherDataList>{
  	return this.http.get<IWeatherDataList>(this.baseUrl+'forecast?units=metric&q='+city+'&appid='+this.appID);
  }

  //current weather
  getWeatherByCity(city:string): Observable<IWeatherData>{
  	return this.http.get<IWeatherData>(this.baseUrl+'weather?units=metric&q='+city+'&appid='+this.appID);
  }

}