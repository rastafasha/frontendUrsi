import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RegisterForm } from '../interface/register-form.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcripcionService {

  serverUrl = environment.apiUrl;
  public user;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.user;
  }


  crearUsuario(formData: RegisterForm){
    return this.http.post(`${this.serverUrl}/subcripcion/store`, formData);

  }

}
