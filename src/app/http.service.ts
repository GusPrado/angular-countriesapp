import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api: string = 'http://localhost:8090'
  token: string
  result: object

  constructor(private http: HttpClient) { }

  async renewTokenTime() {
    if (localStorage.getItem('access_token')) {
      this.token = localStorage.getItem('access_token')
      await this.http.get(`${this.api}//usuario/renovar-ticket?token=${this.token}`).subscribe(data => {
        this.result = data
      })
    }
    return
  }

  countriesList() {

    this.renewTokenTime()
    return this.http.get(`${this.api}/pais/listar?token=${this.token}`)
  }


}
