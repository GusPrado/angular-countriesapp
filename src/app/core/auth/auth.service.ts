import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment.prod';
import { User } from '../user/user';
import { Observable, BehaviorSubject } from 'rxjs'
import { TokenService } from '../token/token.service';
import { map } from 'rxjs/operators';


//const API_URL = environment.ApiUrl
const API_URL = 'http://localhost:8090'
@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<User>
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  authenticate (login: string, password: string) {

    return this.http
    .post(
      `${API_URL}/usuario/autenticar?login=${login}&senha=${password}`
      , {})
  }
}
