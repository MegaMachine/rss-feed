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

  constructor(
    private authService: AuthService
  ) {}

  onSubmit() {
    const user: User = {
      user: this.authUser.value.user,
      password: this.authUser.value.password,
    };
    this.authService.onLogin(user);
  }
}
