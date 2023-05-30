import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { User } from 'src/app/models/user';
import { CursosService } from 'src/app/services/cursos.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cursos-de-orfebreria',
  templateUrl: './cursos-de-orfebreria.component.html',
  styleUrls: ['./cursos-de-orfebreria.component.css']
})
export class CursosDeOrfebreriaComponent implements OnInit {
  @HostListener('window:scroll', [])
  // products: Curso[] = []
  cursos: Curso;
  error: string;
  public user: User;
  id:number;
  p: number = 1;
  count: number = 8;

  private linesToWrite: Array<string>;
  private finishPage = 5;
  private actualPage: number;
  private showGoUpButton: boolean;
  showScrollHeight = 400;
  hideScrollHeight = 200;



  constructor(
    private cursoService: CursosService,
    private messageService: MessageService,
    private userService: UserService,
    private router: Router,
  ) {
    this.user = userService.user;
    this.actualPage = 1;
    this.showGoUpButton = false;
  }

  ngOnInit(): void {
    // this.loadProducts();
    this.loadCursos();
    window.scrollTo(0, 0);
    this.getUser();
    this.getUserServer();
    this.linesToWrite = new Array<string>();
    this.add40lines();
  }


  // loadProducts(): void{
  //   this.products = this.cursoService.getProducts();

  // }

  gotoLogin(){
    this.router.navigateByUrl('/login');
  }


  loadCursos(){
    this.cursoService.getCursos().subscribe(
      res =>{
        this.cursos = res;
        error => this.error = error
        console.log(this.cursos);
      }
    );
  }

  getUserServer(){
    this.userService.getUserById(this.user.id).subscribe(
      res =>{
        this.user = res[0];
        error => this.error = error
        console.log(this.user);
      }
    );

  }

  getUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.id = this.user.id;

  }

  add40lines() {
    const line = 'Another new line -- ';
    let lineCounter = this.linesToWrite.length;
    for (let i = 0; i < 40; i ++) {
      this.linesToWrite.push(line + lineCounter);
      lineCounter ++;
    }
  }

  onScroll() {
    if (this.actualPage < this.finishPage) {
      this.add40lines();
      this.actualPage ++;
    } else {
      console.log('No more lines. Finish page!');
    }
  }

  scrollTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Other
  }


  onWindowScroll() {
    if (( window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if ( this.showGoUpButton &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop)
      < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }



}
