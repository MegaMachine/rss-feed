import { Observable, Subject } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authStatus: boolean;
  constructor(
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.authService.checkAuth
      .subscribe(
        (res) => {
          this.authStatus = res;
        }
      );
  }
  onLogout() {
    this.authService.onLogout();
  }
}
