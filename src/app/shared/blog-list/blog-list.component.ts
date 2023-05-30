import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit{

  postrecientes: Post;
  error:string;

  constructor(
    public blogService: PostService
  ){}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getPosts();
  }

  getPosts(): void {
    this.blogService.getRecentPosts().subscribe(
      res =>{
        this.postrecientes = res;
        error => this.error = error
        console.log(this.postrecientes);
      }
    );

  }
}
