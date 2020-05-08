import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Country } from '../country';

@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html'
})
export class CountryDetailsComponent implements OnInit {

  countryName: string = ''
  details: Country

  constructor(
    private countryService: CountryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.countryName = params.name
    })

    this.countryService
      .listOne(this.countryName)
      .subscribe(res => {

        this.details = res
      })
      console.log('passou pelo oninit')

  }

  deleteCountry(id) {

    this.countryService
      .deleteCountry(id)
      .subscribe(res => {
        this.router.navigate(['/country'])
      })

  }
}
