import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }
  getNotes(){
    return this.http.get(`${environment.backendUrl}Notes`)
  }
}
