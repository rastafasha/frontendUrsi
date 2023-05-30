import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Expocaf } from 'src/app/models/expocaf';
import { ExpocafService } from 'src/app/services/expocaf.service';

@Component({
  selector: 'app-expocaf',
  templateUrl: './expocaf.component.html',
  styleUrls: ['./expocaf.component.css']
})
export class ExpocafComponent implements OnInit {

  expocafs: Expocaf;
  error: string;
  msm_error: string;
  loading = false;

  constructor(
    private expocafService: ExpocafService,
    handler: HttpBackend
  ) {
   }

  ngOnInit(): void {
    this.getServicios();
    window.scrollTo(0,0);
  }

  getServicios(): void {

    this.expocafService.getExpocafs().subscribe(
      res =>{
        this.expocafs = res;
        error => this.error = error
      }
    );
  }
}
