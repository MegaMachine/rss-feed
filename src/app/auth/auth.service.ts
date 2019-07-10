import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shares/user.interface';

@Injectable()
export class AuthService {
  checkAuth = new BehaviorSubject<boolean>(false);
  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) {}

  getAuthInfo(): Promise<boolean> {
    return new Promise(
      (resolve, reject) => {
        this.checkAuth.subscribe( authStatus => {
          resolve(authStatus);
        });
      }
    );
  }
  onLogin(user: User) {
    return this.httpClient.post<User>('http://localhost:5000/login', user, { observe: 'response'})
      .subscribe((data: any) => {
        this.checkAuth.next(data.body);
        this.router.navigate(['/feeds']);
      });
  }
  onLogout() {
    this.checkAuth.next(false);
    this.router.navigate(['/login']);
  }
}
