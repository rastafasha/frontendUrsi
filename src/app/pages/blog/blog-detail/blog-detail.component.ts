import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { environment } from 'src/environments/environment';

const baseUrl = environment.apiUrl;
const mediaUrl = environment.apiUrlMedia;


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  post: Post;
  currentSlug!:string | null;
  slug:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: PostService,
  ) { }

  ngOnInit() {

    window.scrollTo(0, 0);
    // this.activatedRoute.params.subscribe( ({slug}) => this.getPost(slug));
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');

    this.slug = slug;
    this.blogService.getPostBySlug(this.slug).subscribe(
      res => {
        this.post = res[0];
        console.log(this.post);
      }
    );

  }


}
