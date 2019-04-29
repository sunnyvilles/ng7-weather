import { TestBed, inject } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { IWeatherData } from './weatherData'

const baseUrl: string = 'https://api.openweathermap.org/data/2.5/';
const appID: string = '35850e6b191b0efe9d7aa316ec104712';
const city: string = 'Amsterdam';

describe('WeatherService', () => {

  let service:WeatherService;
  let httpMock:HttpTestingController;
  let weatherDataFromServer:IWeatherData;

  beforeEach(()=>{

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        WeatherService
      ]
    });

    service = TestBed.get(WeatherService);
    httpMock = TestBed.get(HttpTestingController);

  });

//check for the service
  it('should call the api to get weather data', () => {

    // dummy data 
    weatherDataFromServer = {
                              "weather": [{"description": "broken clouds"}],
                              "main": {"temp": 284.54},
                              "wind": {"speed": 4.6}
                            };

    service.getWeatherByCity('Amsterdam').subscribe(weatherData => {
      expect(weatherData.wind.speed).toBe(4.6);
    })

    const request = httpMock.expectOne(`${baseUrl}weather?units=metric&q=${city}&appid=${appID}`);

    //fires the request using data weatherDataFromServer
    request.flush(weatherDataFromServer);
  });

});
