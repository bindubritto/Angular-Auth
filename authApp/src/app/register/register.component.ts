import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  registerUser(): void {
    console.log(this.registerUserData);
  }

}
