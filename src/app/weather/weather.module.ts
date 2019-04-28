import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './component/weather.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatExpansionModule,
    MatTableModule
  ],
  exports: [
    WeatherComponent
  ],
  providers: []
})
export class WeatherModule { }
