import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import * as $ from 'jquery';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-country',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  userProfile: object

  constructor(
    private router: Router,
    private countryService: CountryService,
    private userService: UserService
    ) { }

  countries: Country[];
  isAdmin: boolean

  ngOnInit() {

    this.countryService
      .listAll()
      .subscribe(data => {
        this.countries = data
        console.log(data)
      })

    this.isAdmin = this.userService.getUserProfile()
  }

  deleteCountry(id) {

    this.countryService
      .deleteCountry(id)
      .subscribe()
    this.countryService.listAll()
    this.router.navigate(['/country'])
  }


  ngAfterViewChecked() {
    (<any>$('[data-toggle="tooltip"]')).tooltip();
  }

}
