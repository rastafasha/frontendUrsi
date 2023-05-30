import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit{

  cursos: Curso;
  error:string;

  constructor(
    public cursoService: CursosService
  ){}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getPosts();
  }

  getPosts(): void {
    this.cursoService.getCursosDestacados().subscribe(
      res =>{
        this.cursos = res;
        error => this.error = error;
      }
    );

  }
}
