import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './country-form.component.html'
})
export class CountryFormComponent implements OnInit {

  countryForm: FormGroup
  country: string
  abbr: string
  gentile: string

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private countryService: CountryService
    ) {}

  ngOnInit(): void {
    this.countryForm = this.formbuilder.group({
      country: ['', Validators.required],
      abbr: ['', Validators.required],
      gentile: ['', Validators.required]

    })
  }

  addCountry() {
    const country = this.countryForm.get('country').value
    const abbr = this.countryForm.get('abbr').value
    const gentile = this.countryForm.get('gentile').value

    this.countryService
      .addCountry(country, abbr, gentile)
      .subscribe(result => console.log(result))

    this.router.navigate(['country'])
  }
}
