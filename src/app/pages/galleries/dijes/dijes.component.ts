import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dije } from 'src/app/models/dije';
import { DijeService } from 'src/app/services/dije.service';

@Component({
  selector: 'app-dijes',
  templateUrl: './dijes.component.html',
  styleUrls: ['./dijes.component.css']
})
export class DijesComponent implements OnInit {

  dijes: Dije;
  error: string;
  msm_error: string;
  loading = false;

  constructor(
    private dijeService: DijeService,
    handler: HttpBackend
  ) {
   }

  ngOnInit(): void {
    this.getServicios();
    window.scrollTo(0,0);
  }

  getServicios(): void {

    this.dijeService.getDijes().subscribe(
      res =>{
        this.dijes = res;
        error => this.error = error
      }
    );
  }
}
