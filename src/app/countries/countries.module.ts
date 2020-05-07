import { NgModule } from '@angular/core';

import { CountryFormModule } from './country-form/country-form.module';
import { CountryListModule } from './country-list/country-list.module';

@NgModule({
  imports: [
    CountryFormModule,
    CountryListModule
  ]
})
export class CountriesModule{}
