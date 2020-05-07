import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { TokenService } from '../token/token.service';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userSubject = new BehaviorSubject<User>(null)
  private userName: string
  private userProfile: object

  constructor(private tokenService: TokenService){}

  getUserName() {

  }

  isLogged() {

    return this.tokenService.hasToken()
  }

  getUserProfile() {
    this.userProfile = JSON.parse(localStorage.getItem('isAdmin'))
    if (this.userProfile) {
      return true
    }
    return false
  }

  logout() {

    localStorage.clear()
  }
}
