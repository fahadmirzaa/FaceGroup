import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-authentication',
  templateUrl: './users-authentication.component.html',
  styleUrls: ['./users-authentication.component.css']
})
export class UsersAuthenticationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
