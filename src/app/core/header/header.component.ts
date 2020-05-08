import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { TokenService } from '../token/token.service';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

user$: Observable<User>
logged: string

  constructor(
    private userService: UserService,
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService
  ) {

    this.user$ = authService.getUser()
  }

  ngOnInit() {

    //this.userName = localStorage.getItem('nome')
    this.logged = this.tokenService.getToken()
  }

  logout() {

    this.authService.logout()
    this.router.navigate(['login'])
  }
}
