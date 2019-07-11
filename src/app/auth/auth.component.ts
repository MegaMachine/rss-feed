import { Router } from '@angular/router';
import { User } from './../shares/user.interface';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  authUser = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  });
  checkAuth = true;
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    const user: User = {
      user: this.authUser.value.user,
      password: this.authUser.value.password,
    };
    this.authService.onLogin(user)
      .subscribe((data: any) => {
        this.authService.checkAuth.next(data.body);
        this.authService.userName = user.user;
        this.router.navigate(['/feeds']);
        this.checkAuth = data.body;
      });
  }
}
