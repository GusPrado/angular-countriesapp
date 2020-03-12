import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private _http: HttpService) { }

  countries: Object;

  ngOnInit() {
    this._http.countriesList().subscribe(data => {
      this.countries = data
      console.log(data)
    })
  }

  handleRemove() {

  }
}
