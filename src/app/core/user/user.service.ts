import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { TokenService } from '../token/token.service';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userSubject = new BehaviorSubject<User>(null)
  private userName: string

  constructor(private tokenService: TokenService){}

  getUserName() {

  }

  isLogged() {

    return this.tokenService.hasToken()
  }

  logout() {

    localStorage.clear()
  }
}
