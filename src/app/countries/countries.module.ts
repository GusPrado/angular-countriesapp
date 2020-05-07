import { NgModule } from '@angular/core';

import { CountryFormModule } from './country-form/country-form.module';
import { CountryListModule } from './country-list/country-list.module';
import { CountryDetailsModule } from './country-details/country-details.module';

@NgModule({
  imports: [
    CountryFormModule,
    CountryListModule,
    CountryDetailsModule
  ]
})
export class CountriesModule{}
