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

  cities: string[] = ['Paris', 'Zurich', 'Amsterdam', 'Berlin', 'Rome']; // list of cities
  displayedColumns: string[] = ['dt_txt', 'temp', 'speed' , 'description'];// Weather Details table columns
  weatherList = new Map<string, IWeatherData>(); // map to save current weather status of all cities
  selectedWeatherForecast:IWeatherData[]; // forcast object of currently selected city

  constructor(private weatherService: WeatherService){}

  //runs as the component loads
  ngOnInit(){

    //todo: use forEach
		for (let i = 0; i <= this.cities.length-1; i += 1) {
	        this.getWeatherByCity(this.cities[i]);
	    }
  }

  // get current weather for a city
  getWeatherByCity(city){
  	this.weatherService.getWeatherByCity(city)
  		.subscribe(data => {
  			this.weatherList.set(city,data); 
  		},(err: string) =>  console.log(err));
  }

  // get forcast weather for a city
  getCityWeatherForecast(city){
  	this.weatherService.getWeatherForecastByCity(city)
  		.subscribe(data => {
        // get only first 4 forcast data ( till next 12 hours )
  			this.selectedWeatherForecast = data.list.slice(0,4); 
      },(err: string) =>  console.log(err));

  }

}
