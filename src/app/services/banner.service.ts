import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Banner } from '../models/banner';
import { environment } from 'src/environments/environment';
const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  public banner: Banner;


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

  getBanners() {
    const url = `${baseUrl}/banners`;
    return this.http.get<any>(url)
    .pipe(
      map((resp:{ok: boolean, banners: Banner}) => resp.banners)
    );
  }

  getBanner(banner: any) {
    const url = `${baseUrl}/banner/show/${banner}`;
    return this.http.get<any>(url)
    .pipe(
      map((resp:{ok: boolean, banner: Banner}) => resp.banner)
    );
  }
}
