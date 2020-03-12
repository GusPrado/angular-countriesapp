import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string
  isNotAdmin: boolean = true

  constructor() { }

  ngOnInit() {

    this.username = localStorage.getItem('nome')

    if (localStorage.getItem('admin') === 'true') {
      this.isNotAdmin = false
    }
  }
}
