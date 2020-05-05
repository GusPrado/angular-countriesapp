import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment.prod';


//const API_URL = environment.ApiUrl
const API_URL = 'http://localhost:8090'

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  authenticate(userName: string, password: string) {
    return this.http.post(`${API_URL}/usuario/autenticar`,
      { userName, password })
  }

  // handleLogin(user: User) {
  //     return this.http.post<any>(`${this.endpoint}?login=${user.login}&senha=${user.senha}`, user)
  //     .subscribe((res: any) => {
  //       if (res.autenticado) {
  //         //after authentication

  //         console.log(res)
  //         localStorage.setItem('access_token', res.token)
  //         localStorage.setItem('admin', res.administrador)
  //         localStorage.setItem('nome', res.nome)
  //         localStorage.setItem('loginFail', 'false')
  //         this.router.navigate(['/home'])
  //       } else {
  //         localStorage.setItem('loginFail', res.autenticado)
  //         this.router.navigate(['/login'])
  //       }
  //     })
  //   }

}
