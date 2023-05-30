import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';
import {environment} from 'src/environments/environment';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {


  media = environment.apiUrlMedia;
  publicaciones: Publicacion;
  error: string;
  msm_error: string;
  loading = false;

  constructor(
    private publicacionService: PublicacionService,
    handler: HttpBackend
  ) {
   }

  ngOnInit(): void {
    this.getServicios();
    window.scrollTo(0,0);
  }

  getServicios(): void {

    this.publicacionService.getPublicacions().subscribe(
      res =>{
        this.publicaciones = res;
        error => this.error = error
      }
    );
  }
}
