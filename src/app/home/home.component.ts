import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { AuthService } from '../core/auth/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string
  isAdmin: boolean = false

  constructor(
    private _http: HttpService,
    private authService: AuthService
    ) { }

  ngOnInit() {

    this.username = localStorage.getItem('nome')

    if (localStorage.getItem('admin') === 'true') {
      this.isAdmin = true
    }

  }

  handleLogout(){
    this.authService.handleLogout()
  }

}
