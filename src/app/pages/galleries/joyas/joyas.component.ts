import { HttpBackend } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Joya } from 'src/app/models/joya';
import { JoyaService } from 'src/app/services/joya.service';

@Component({
  selector: 'app-joyas',
  templateUrl: './joyas.component.html',
  styleUrls: ['./joyas.component.css']
})
export class JoyasComponent  implements OnInit {

  joyas: Joya;
  error: string;
  msm_error: string;
  loading = false;

  constructor(
    private joyaService: JoyaService,
    handler: HttpBackend
  ) {
   }

  ngOnInit(): void {
    this.getServicios();
    window.scrollTo(0,0);
  }

  getServicios(): void {

    this.joyaService.getJoyas().subscribe(
      res =>{
        this.joyas = res;
        error => this.error = error
      }
    );
  }
}
