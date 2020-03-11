import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  showMenuEmmiter = new EventEmitter<boolean>()

  constructor(private http: HttpClient) { }

  countriesList() {
    return this.http.get('http://localhost:8090//pais/listar?token=e43665ff-46bf-4bed-8f6c-e9c65c04307d')
  }

  handleLogin() {

  this.showMenuEmmiter.emit(true)

  }
}
