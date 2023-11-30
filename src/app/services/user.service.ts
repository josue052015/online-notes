import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUserCreation, IUserLogin } from '../core/interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  register(params: IUserCreation) {
    return this.http.post(`${environment.backendUrl}User`, params)
  }
}
