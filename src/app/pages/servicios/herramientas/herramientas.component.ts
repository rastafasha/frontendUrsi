import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Herramienta } from 'src/app/models/herramienta';
import { HerramientaService } from 'src/app/services/herramienta.service';
@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {

  herramientas: Herramienta;
  error: string;
  msm_error: string;
  loading = false;

  constructor(
    private herramientaService: HerramientaService,
    handler: HttpBackend
  ) {
   }

  ngOnInit(): void {
    this.getServicios();
    window.scrollTo(0,0);
  }

  getServicios(): void {

    this.herramientaService.getHerramientas().subscribe(
      res =>{
        this.herramientas = res;
        error => this.error = error
      }
    );
  }


}
