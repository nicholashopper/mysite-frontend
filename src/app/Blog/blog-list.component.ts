import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service'
import { Observable } from 'rxjs/Observable';
import { Post } from './post'


@Component({
  selector: 'blog-list',
  providers: [ BlogService ],
  template: `
    <h2>Blog Posts</h2>
    <p>List of posts</p>
    <ul class="demo-list-icon mdl-list">
      <li class="mdl-list__item" *ngFor="let post of posts">
        <span>
            <h4>{{post.title}}</h4>
            <p> {{post.body}} </p>
        </span>
    </ul>
    <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>`
})
// <i class="material-icons mdl-list__item-icon">pets</i>
// <a [routerLink]="['/blog', post.slug]">{{ post.title }}</a>

// Component class implementing OnInit
export class BlogListComponent implements OnInit {
  errorMessage: string;
  posts: Post[];
  mode = 'Observable';
 
  constructor (private blogService: BlogService) {}
 
  ngOnInit() { this.getPosts(); }
 
  getPosts() {
      this.blogService.getPosts()
           .subscribe(
             posts => this.posts = posts,
             error =>  this.errorMessage = <any>error);
  }
}