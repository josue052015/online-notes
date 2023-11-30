import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUserLogin } from '../core/interfaces/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  login(params: IUserLogin) {
    return this.http.post(`${environment.backendUrl}Auth`, params, {responseType: 'text'})
  }
  getToken() {
    return localStorage.getItem("token")
  }
  isLoggedIn() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  allow(data) {
    localStorage.setItem("token", data.token);
    
  }
}
