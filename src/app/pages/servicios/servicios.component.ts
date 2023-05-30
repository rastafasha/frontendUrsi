import { Component, OnInit } from '@angular/core';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { Servicio } from 'src/app/models/servicio';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{

  services: Servicio;
  error: string;
  msm_error: string;
  loading = false;

  constructor(
    private servicioService: ServiciosService,
    private sanitizer: DomSanitizer
  ) {
   }

  ngOnInit(): void {
    this.getServicios();
    window.scrollTo(0,0);
  }

  getServicios(): void {
    this.servicioService.getServicios().subscribe(
      res =>{
        this.services = res;
        error => this.error = error
        // console.log(this.herramientas);
      }
    );
  }

  getVideoIframe(url) {
    var video, results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
}

}
