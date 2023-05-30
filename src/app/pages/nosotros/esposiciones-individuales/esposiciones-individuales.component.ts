import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esposiciones-individuales',
  templateUrl: './esposiciones-individuales.component.html',
  styleUrls: ['./esposiciones-individuales.component.css']
})
export class EsposicionesIndividualesComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
