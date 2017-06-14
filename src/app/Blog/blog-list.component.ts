import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service'
import { Observable } from 'rxjs/Observable';
import { Post } from './post'


@Component({
  selector: 'blog-list',
  providers: [ BlogService ],
  template: `


  <div class="blog">
  <div class="demo-layout-transparent_sub mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">

          <!-- Title -->
          <span class="mdl-layout-title"></span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>

          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [routerLink]="['/blog/all']">All Topics</a>
            <a class="mdl-navigation__link" [routerLink]="['/blog/travel']">Travel</a>
            <a class="mdl-navigation__link" [routerLink]="['/blog/tech']">Tech</a>
            <a class="mdl-navigation__link" [routerLink]="['/blog/other']">Other</a>
          </nav>
        </div>
      </header>

      <main class="mdl-layout__content">
        <h1 class="header-text">Welcome to my blog!</h1>
      </main>
    </div>
    </div>





  <div class="container">
    <ul class="demo-list-icon mdl-list">
      <li class="mdl-list__item" *ngFor="let post of posts">
        <span>
            <h3>{{post.title}}</h3>
            <h5>{{post.posted |  date:'MM/dd/yyyy'}}</h5>
            <p> {{post.body}} </p>
        </span>
    </ul>
    <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
  </div>`
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