import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { TokenService } from '../token/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

userName: string
logged: string

  constructor(
    private userService: UserService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {

    this.userName = localStorage.getItem('nome')
    this.logged = localStorage.getItem('authToken')
  }

  logout() {

    this.userService.logout()
    this.router.navigate([''])
  }
}
