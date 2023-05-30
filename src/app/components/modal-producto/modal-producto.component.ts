import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: ['./modal-producto.component.css']
})
export class ModalProductoComponent implements OnInit{

  products: Curso;
  curso: Curso;
  error: string;


  constructor(
    private cursoService: CursosService,
    private _sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.loadCursos();
  }

  loadCursos(){
    this.cursoService.getCursos().subscribe(
      res =>{
        this.products = res;
        error => this.error = error
        console.log(this.products);
      }
    );
  }

  getVideoIframe(url) {
    let video: any[];
    let results: any[];

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
}

}
