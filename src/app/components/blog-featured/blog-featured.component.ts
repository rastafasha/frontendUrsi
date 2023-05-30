import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog-featured',
  templateUrl: './blog-featured.component.html',
  styleUrls: ['./blog-featured.component.css']
})
export class BlogFeaturedComponent implements OnInit{

  blogs: Post;
  error:string;

  constructor(
    public blogService: PostService
  ){}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getPosts();
  }

  getPosts(): void {
    this.blogService.getFeaturedPosts().subscribe(
      res =>{
        this.blogs = res;
        error => this.error = error;
      }
    );

  }
}
