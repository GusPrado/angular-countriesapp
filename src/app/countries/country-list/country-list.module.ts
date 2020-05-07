import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [CountryListComponent],
  exports: [],
  imports: [
    AppRoutingModule,
    CommonModule,
    DataTablesModule
  ]
})
export class CountryListModule{}
