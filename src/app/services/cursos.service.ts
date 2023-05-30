import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
const baseUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos: Curso;

  // products: Curso [] = [
  //   new Curso(1, 'Far Cary 6', 'Esto es un juego muy chulo', 'DIGITAL_GOODS', 63.17, 'https://m.media-amazon.com/images/I/81AQ0wvcS-L._SL1500_.jpg'),
  //   new Curso(2, 'Assassins Creed Valhalla', 'Esto es un juego muy chulo', 'DIGITAL_GOODS',  24.99, 'https://m.media-amazon.com/images/I/817zvXdCgSL._SL1500_.jpg'),
  //   new Curso(3, 'Spider-Man: Miles Morales', 'Esto es un juego muy chulo', 'DIGITAL_GOODS',  46.00, 'https://m.media-amazon.com/images/I/71CqfmZX3PL._SL1361_.jpg'),
  //   new Curso(4, 'Call of Duty: Vanguard', 'Esto es un juego muy chulo', 'DIGITAL_GOODS', 86.96, 'https://m.media-amazon.com/images/I/71gPbEcd1pL._SL1378_.jpg'),
  //   new Curso(5, 'Demons Souls', 'Esto es un juego muy chulo', 'DIGITAL_GOODS', 49.95, 'https://m.media-amazon.com/images/I/81QoNRp5+WL._SL1353_.jpg'),
  //   new Curso(6, 'Call of Duty: Black Ops Cold War', 'Esto es un juego muy chulo', 'DIGITAL_GOODS',  40.99, 'https://m.media-amazon.com/images/I/81QfmDJdOdS._SL1500_.jpg')
  // ]

  constructor(
    private http: HttpClient
  ) { }

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

  // getProducts(): Curso[]{
  //   return this.products;
  // }

  getCursos()  {
    const url = `${baseUrl}/cursos`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, cursos: Curso}) => resp.cursos)
      )
  }
  getCursosDestacados()  {
    const url = `${baseUrl}/cursos/destacados`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, cursos: Curso}) => resp.cursos)
      )
  }

  getCurso(id: number) {
    const url = `${baseUrl}/curso/show/${id}`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, curso: Curso}) => resp.curso)
        );
  }

  getCursoBySlug(slug: Curso) {
    const url = `${baseUrl}/curso/show/slug/${slug}`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, curso: Curso}) => resp.curso)
        );
  }

}
