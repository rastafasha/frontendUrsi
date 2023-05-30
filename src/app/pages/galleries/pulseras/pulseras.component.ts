import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pulsera } from 'src/app/models/pulsera';
import { PulseraService } from 'src/app/services/pulsera.service';

@Component({
  selector: 'app-pulseras',
  templateUrl: './pulseras.component.html',
  styleUrls: ['./pulseras.component.css']
})
export class PulserasComponent implements OnInit {

  pulseras: Pulsera;
  error: string;
  msm_error: string;
  loading = false;

  constructor(
    private pulseraService: PulseraService,
    handler: HttpBackend
  ) {
   }

  ngOnInit(): void {
    this.getServicios();
    window.scrollTo(0,0);
  }

  getServicios(): void {

    this.pulseraService.getPulseras().subscribe(
      res =>{
        this.pulseras = res;
        error => this.error = error
      }
    );
  }
}
