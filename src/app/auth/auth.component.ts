import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
  authCompare = {
    user: 'test@test.com',
    password: '12345678'
  }

  constructor(
    private router: Router
  ) {}
  onSubmit() {
    if (this.authUser.value.user === this.authCompare.user && this.authUser.value.password === this.authCompare.password) {
      console.log('+');
      this.router.navigate(['/feeds']);
    } else {
      console.log('-');
    }
  }
}
