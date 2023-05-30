import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Arete } from '../models/arete';
const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AreteService {

  public arete: Arete;

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
    return this.arete.status!;
  }


  getAretes()  {
    const url = `${baseUrl}/aretes`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, aretes: Arete}) => resp.aretes)
      )
  }

  getArete(id: number) {
    const url = `${baseUrl}/arete/show/${id}`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, arete: Arete}) => resp.arete)
        );
  }



}
