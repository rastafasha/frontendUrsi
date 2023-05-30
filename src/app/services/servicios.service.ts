import { Injectable } from '@angular/core';
import { Servicio } from '../models/servicio';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicioTitle } from '../models/serviciotitle';

const baseUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  public service: Servicio;


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

  getServicios() {
    const url = `${baseUrl}/services`;
    return this.http.get<any>(url)
    .pipe(
      map((resp:{ok: boolean, services: Servicio}) => resp.services)
    );
  }

  getServicio(service: any) {
    const url = `${baseUrl}/service/show/${service}`;
    return this.http.get<any>(url)
    .pipe(
      map((resp:{ok: boolean, service: Servicio}) => resp.service)
    );
  }

}
