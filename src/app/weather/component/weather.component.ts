import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'
import { IWeatherData } from '../weatherData';
import { IWeatherDataList } from '../weatherDataList';

@Component({
  selector: 'weather-app',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})

export class WeatherComponent implements OnInit {

  cities: string[] = ['Paris', 'Zurich', 'Amsterdam', 'Berlin', 'Rome'];
  displayedColumns: string[] = ['dt_txt', 'temp', 'speed' , 'description'];
  weatherList = new Map<string, IWeatherData>();
  selectedWeatherForecast:IWeatherData[];

  constructor(private weatherService: WeatherService){}

  ngOnInit(){
		for (let i = 0; i <= this.cities.length-1; i += 1) {
	        this.getWeatherByCity(this.cities[i]);
	    }
  }

  getWeatherByCity(city){
  	this.weatherService.getWeatherByCity(city)
  		.subscribe(data => {
  			this.weatherList.set(city,data); 
  		});
  }

  getCityWeatherForecast(city){
  	this.weatherService.getWeatherForecastByCity(city)
  		.subscribe(data => {
  			this.selectedWeatherForecast = data.list.slice(0,4); 
  		});
  }

}
