import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { TokenService } from '../token/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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
    this.logged = this.tokenService.getToken()
  }

  logout() {

    this.userService.logout()
    this.router.navigate(['login'])
  }
}
