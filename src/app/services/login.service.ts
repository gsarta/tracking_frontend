import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { catchError, Observable, throwError } from 'rxjs';
import { Itoken } from '../models/token.user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = process.env['API_URL'] || '';

  constructor(private _httClient: HttpClient) { }
  


  public getToken(user:IUser): Observable<Itoken>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

   return this._httClient.post<Itoken>(`${this.loginUrl}/auth/login`, user, {headers});


  
      
    

  }

}
