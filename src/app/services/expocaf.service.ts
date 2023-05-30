import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Expocaf } from '../models/expocaf';
const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ExpocafService {

  public expocaf: Expocaf;

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
    return this.expocaf.status!;
  }


  getExpocafs()  {
    const url = `${baseUrl}/expocafs`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, expocafs: Expocaf}) => resp.expocafs)
      )
  }

  getExpocaf(id: number) {
    const url = `${baseUrl}/expocaf/show/${id}`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, expocaf: Expocaf}) => resp.expocaf)
        );
  }

}
