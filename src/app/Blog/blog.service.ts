import { Injectable }              from '@angular/core';
import { Response, Jsonp, Http }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Post } from './post';
 
@Injectable()
export class BlogService {
  // private postsUrl = 'http://localhost:8000/api/getAllBlogs';  // URL to web API
  private postsUrl = 'http://localhost:8000/api/getAllBlogs';

  constructor (private http: Http) {}
 
  getPosts(): Observable<Post[]> {
    return this.http.get(this.postsUrl)
                    .map(res => res.json());
  }
}