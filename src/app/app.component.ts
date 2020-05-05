import { AuthService } from './core/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';

  constructor(private authService: AuthService){

  }

  ngOnInit() {

  }
}
