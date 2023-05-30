import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Joya } from '../models/joya';
const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class JoyaService {

  public joya: Joya;

  info:any = {};
  cargada:boolean = false;


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

  get status(): 'PUBLISHED' | 'PENDING' | 'REJECTED' {
    return this.joya.status!;
  }


  getJoyas()  {
    const url = `${baseUrl}/joyas`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, joyas: Joya}) => resp.joyas)
      )
  }

  getJoya(id: number) {
    const url = `${baseUrl}/joya/show/${id}`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, joya: Joya}) => resp.joya)
        );
  }

}
