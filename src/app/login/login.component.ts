import { AuthService } from '../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../core/user/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User()

  loginFailAlert: boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  handleLogin() {
    this.authService.handleLogin(this.user)
    if (localStorage.getItem('noLogin') === 'false') {
      this.loginFailAlert = true
    }
  }

}
