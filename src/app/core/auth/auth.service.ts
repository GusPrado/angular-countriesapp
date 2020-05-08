import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { User } from '../user/user';
import { BehaviorSubject } from 'rxjs'
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';


//const API_URL = environment.ApiUrl
const API_URL = 'http://localhost:8090'
@Injectable({ providedIn: 'root' })
export class AuthService {

  currentUserSubject = new BehaviorSubject<User>(null);
  userName: string

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  authenticate (login: string, password: string) {

    return this.http
      .post<User>(
        `${API_URL}/usuario/autenticar?login=${login}&senha=${password}`
        , {})
      .pipe(tap(response => {
        const user = response as User
        this.userName = user.nome
        this.currentUserSubject.next(response)
        console.log('authUser', response)
      }))
  }

  getUser() {

    return this.currentUserSubject.asObservable()
  }

  getUserName() {

    return this.userName
  }

  logout() {
    localStorage.clear()
    this.currentUserSubject.next(null)
  }
}
