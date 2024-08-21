import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { Observable } from 'rxjs';
import { Itoken } from '../models/token.user.model';
import { IdataTracking } from '../models/data-tracking';


@Injectable({
  providedIn: 'root'
})
export class DataTrackingService {


  private loginUrl = process.env['API_URL'] || '';

  constructor(private _httClient: HttpClient) { }
  


  public getMarks(token:string): Observable<IdataTracking[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

   return this._httClient.get<IdataTracking[]>(`${this.loginUrl}/dataTracking/data/getAll`, {headers});


  
      
    

  }
}
