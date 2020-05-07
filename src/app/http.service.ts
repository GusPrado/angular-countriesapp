import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { Country } from './countries/country';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api: string = 'http://localhost:8090'
  token: string
  result: string

  constructor(
    private http: HttpClient,
    public router: Router
    ) { }

  renewTokenTime() {
    if (localStorage.getItem('access_token')) {
      this.token = localStorage.getItem('access_token')
      this.http
        .get(`${this.api}//usuario/renovar-ticket?token=${this.token}`)
        .subscribe(data => {
          this.result = JSON.stringify(data)
          console.log('token renewed?', this.result)
        })
    }
    return
  }

}
