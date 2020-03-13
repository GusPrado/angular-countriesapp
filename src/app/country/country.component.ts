import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Country }  from './country'
import 'bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  private country: Country = new Country()

  constructor(private _http: HttpService) { }

  countries: Object;


  ngOnInit() {
    //this._http.renewTokenTime()
    this._http.countriesList().subscribe(data => {
      this.countries = data
      console.log(data)
    })

  }

  handleDelete(id) {

    this._http.handleDelete(id)

  }

  handleAdd() {

    this._http.handleAdd(this.country)

  }

  ngAfterViewChecked() {
    (<any>$('[data-toggle="tooltip"]')).tooltip();
  }

}
