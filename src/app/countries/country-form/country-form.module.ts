import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryFormComponent } from './country-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { toUppercaseModule } from 'src/app/shared/directives/to-uppercase/to-uppercase.module';

@NgModule({
  declarations: [CountryFormComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    toUppercaseModule
  ]
})
export class CountryFormModule{}
