import { Injectable } from '@angular/core';
import { User } from '../user/user'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://localhost:8090/usuario/autenticar';

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  handleLogin(user: User) {
      return this.http.post<any>(`${this.endpoint}?login=${user.login}&senha=${user.senha}`, user)
      .subscribe((res: any) => {
        if (res.autenticado) {
          //after authentication

          console.log(res)
          localStorage.setItem('access_token', res.token)
          localStorage.setItem('admin', res.administrador)
          localStorage.setItem('nome', res.nome)
          localStorage.setItem('loginFail', 'false')
          this.router.navigate(['/home'])
        } else {
          localStorage.setItem('loginFail', res.autenticado)
          this.router.navigate(['/login'])
        }
      })
    }

    handleLogout() {
      localStorage.clear()
      this.router.navigate(['/login'])
    }


}
