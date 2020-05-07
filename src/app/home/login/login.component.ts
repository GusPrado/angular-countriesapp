import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenService } from 'src/app/core/token/token.service';
import { User } from 'src/app/core/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  user$: User

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const login = this.loginForm.get('login').value
    const password = this.loginForm.get('password').value

    this.authService
      .authenticate(login, password)
      .subscribe((res: User) => {

        if (res.autenticado === true) {

          this.tokenService.setToken(res.token)
          localStorage.setItem('isAdmin', JSON.stringify(res.administrador))
          localStorage.setItem('nome', res.nome)
          this.router.navigate(['country'])
        } else {

          this.loginForm.reset()
          //alert('Invalid user or password')
        }
      },
      err => {
        console.log(err)
      })
  }

}
