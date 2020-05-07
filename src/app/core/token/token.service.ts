import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const KEY = 'authToken'
const API_URL = 'http://localhost:8090'

@Injectable({ providedIn:'root' })
export class TokenService{

  constructor(private http: HttpClient){}

  hasToken() {

    return !!this.getToken()
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY, token)
  }

  getToken() {

    return window.localStorage.getItem(KEY)
  }

  removeToken() {
    window.localStorage.removeItem(KEY)
  }

  renewToken(){
    const authToken = this.getToken()
    return this.http
      .get(`${API_URL}/usuario/renovar-ticket?token=${authToken}`)

  }
}
