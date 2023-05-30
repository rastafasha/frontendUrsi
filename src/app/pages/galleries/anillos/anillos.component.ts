import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Anillo } from 'src/app/models/anillo';
import { AnilloService } from 'src/app/services/anillo.service';

@Component({
  selector: 'app-anillos',
  templateUrl: './anillos.component.html',
  styleUrls: ['./anillos.component.css']
})
export class AnillosComponent implements OnInit {

  anillos: Anillo;
  error: string;
  msm_error: string;
  loading = false;

  constructor(
    private anilloService: AnilloService,
    handler: HttpBackend
  ) {
   }

  ngOnInit(): void {
    this.getServicios();
    window.scrollTo(0,0);
  }

  getServicios(): void {

    this.anilloService.getAnillos().subscribe(
      res =>{
        this.anillos = res;
        error => this.error = error
      }
    );
  }
}
