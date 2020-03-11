import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  showEmitterMenu = new EventEmitter<boolean>()

  endpoint: string = 'http://localhost:8090/usuario/autenticar';
  //headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }


  handleLogin(user: User) {
    return this.http.post<any>(`${this.endpoint}?login=${user.login}&senha=${user.senha}`, user)
    .subscribe((res: any) => {
      if (res.login !== '') {
        //after auth
        this.showEmitterMenu.emit(false)

        console.log(res)
        localStorage.setItem('access_token', res.token)
        localStorage.setItem('admin', res.administrador)
        this.router.navigate(['/country'])
      } else {
        this.showEmitterMenu.emit(true)
      }

      })
    }

}
