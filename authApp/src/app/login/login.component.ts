import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: any = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): any {
    console.log(this.loginUserData);
    this.authService.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/special']);
        },
        err => console.log(err)
      );
  }

}
