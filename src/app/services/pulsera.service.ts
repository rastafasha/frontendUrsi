import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Pulsera } from '../models/pulsera';
const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PulseraService {

  public pulsera: Pulsera;

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
    return this.pulsera.status!;
  }


  getPulseras()  {
    const url = `${baseUrl}/pulseras`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, pulseras: Pulsera}) => resp.pulseras)
      )
  }

  getPulsera(id: number) {
    const url = `${baseUrl}/pulsera/show/${id}`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, pulsera: Pulsera}) => resp.pulsera)
        );
  }

}
