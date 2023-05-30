import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Dije } from '../models/dije';
const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DijeService {

  public dije: Dije;

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
    return this.dije.status!;
  }


  getDijes()  {
    const url = `${baseUrl}/dijes`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, dijes: Dije}) => resp.dijes)
      )
  }

  getDije(id: number) {
    const url = `${baseUrl}/dije/show/${id}`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, dije: Dije}) => resp.dije)
        );
  }


}
