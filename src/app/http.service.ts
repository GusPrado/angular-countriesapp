import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token: string

  constructor(private http: HttpClient) { }

  countriesList() {

    if (localStorage.getItem('access_token')) {
      this.token = localStorage.getItem('access_token')
    }
    return this.http.get(`http://localhost:8090/pais/listar?token=${this.token}`)
  }


}
