import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cronologiacurso } from '../models/cronologiacurso';
const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CronologiacursosService {

  public cronologiacurso: Cronologiacurso;


  constructor(private http: HttpClient) { }

  get token():string{
    return localStorage.getItem('auth_token') || '';
  }


  get headers(){
    return{
      headers: {
        'auth_token': this.token
      }
    }
  }

  getCronologiacursos() {
    const url = `${baseUrl}/cronologiacursos`;
    return this.http.get<any>(url)
    .pipe(
      map((resp:{ok: boolean, cronologiacursos: Cronologiacurso}) => resp.cronologiacursos)
    );
  }

  getCronologiacurso(cronologiacurso: any) {
    const url = `${baseUrl}/cronologiacurso/show/${cronologiacurso}`;
    return this.http.get<any>(url)
    .pipe(
      map((resp:{ok: boolean, cronologiacurso: Cronologiacurso}) => resp.cronologiacurso)
    );
  }
}
