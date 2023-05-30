import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Arete } from 'src/app/models/arete';
import { AreteService } from 'src/app/services/arete.service';

@Component({
  selector: 'app-aretes',
  templateUrl: './aretes.component.html',
  styleUrls: ['./aretes.component.css']
})
export class AretesComponent implements OnInit {

  aretes: Arete;
  error: string;
  msm_error: string;
  loading = false;

  constructor(
    private areteService: AreteService,
    handler: HttpBackend
  ) {
   }

  ngOnInit(): void {
    this.getServicios();
    window.scrollTo(0,0);
  }

  getServicios(): void {

    this.areteService.getAretes().subscribe(
      res =>{
        this.aretes = res;
        error => this.error = error
      }
    );
  }
}
