import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/user.model';
import { catchError, Observable, throwError } from 'rxjs';
import { Itoken } from '../models/token.user.model';
import { Icreateuser } from '../models/crear.usuario.model';
import { Iusercreated } from '../models/usuario.creado.model';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {

  private baseUrl = process.env['API_URL'] || '';

  constructor(private _httClient: HttpClient ) { }

  public usuarioCreado(user:Icreateuser): Observable<Iusercreated>{
    return this._httClient.post<Iusercreated>(`${this.baseUrl}/account/create`,user)
  }

}
