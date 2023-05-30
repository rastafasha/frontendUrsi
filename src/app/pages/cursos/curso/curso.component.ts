import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: Curso;
  currentSlug!:string | null;
  slug:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService,
     private _sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {

    window.scrollTo(0, 0);
    // this.activatedRoute.params.subscribe( ({slug}) => this.getPost(slug));
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');

    this.slug = slug;
    this.cursoService.getCursoBySlug(this.slug).subscribe(
      res => {
        this.curso = res[0];
        console.log(this.curso);
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
