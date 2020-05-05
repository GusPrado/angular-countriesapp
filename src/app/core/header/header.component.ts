import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  logout() {
    //this.userService.logout()
    this.router.navigate([''])
  }
}
