import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryPipe} from "./country/country.pipe";
import {SexPipe} from "./sex/sex.pipe";


@NgModule({
  declarations: [
    CountryPipe,
    SexPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountryPipe,
    SexPipe
  ]
})
export class PipesModule {
}
