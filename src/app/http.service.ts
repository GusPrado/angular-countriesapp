import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  showMenuEmmiter = new EventEmitter<boolean>()

  constructor(private http: HttpClient) { }

  countriesList() {
    return this.http.get('http://localhost:8090/pais/listar?token=b92bc304-9a2a-46c6-a275-6c298ed2a65e')
  }

  handleLogin() {

  this.showMenuEmmiter.emit(true)

  }
}
