import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent implements OnInit{

  categories: Category;
  category: Category;
  error:string;
  category$: Observable<Category>;

  constructor(
    public categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getCategorias();
    const name = this.activatedRoute.snapshot.params['name'];
    this.category$ = this.categoryService.getCategory(name);
    // this.setSlug();
  }

  getCategorias(): void {
    this.categoryService.getCategories().subscribe(
      res =>{
        this.categories = res;
        error => this.error = error
        console.log(this.categories);
      }
    );
  }

  dasherize(string: string) {
    return string.replace(/[ ]/g, '-').toLowerCase();
  }

  setSlug() {
    const postSlug = this.activatedRoute.snapshot.params['name'];
    if (!postSlug) {
      let slug = this.dasherize(this.category.name);
      this.router
        .navigate([slug], { relativeTo: this.activatedRoute, replaceUrl: true })
        .then();
    }
  }
  }
