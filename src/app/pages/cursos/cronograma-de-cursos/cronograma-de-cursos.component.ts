import { Component, OnInit } from '@angular/core';
import { Cronologiacurso } from 'src/app/models/cronologiacurso';
import { CronologiacursosService } from 'src/app/services/cronologiacursos.service';

@Component({
  selector: 'app-cronograma-de-cursos',
  templateUrl: './cronograma-de-cursos.component.html',
  styleUrls: ['./cronograma-de-cursos.component.css']
})
export class CronogramaDeCursosComponent implements OnInit{

  cronologiacursos: Cronologiacurso;
  error:string;

  constructor(
    public cronogramaService: CronologiacursosService
  ){}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getCronogramas();
  }

  getCronogramas(): void {
    this.cronogramaService.getCronologiacursos().subscribe(
      res =>{
        this.cronologiacursos = res;
        error => this.error = error
        // console.log(this.cronologiacursos);
      }
    );
  }

}
