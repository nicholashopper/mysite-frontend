import { Injectable }              from '@angular/core';
import { Response, Jsonp, Http }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Post } from './post';
 
@Injectable()
export class BlogService {
  private postsUrl = '/api/content/?purpose=blog';

  constructor (private http: Http) {}
 
  getPosts(): Observable<Post[]> {
    return this.http.get(this.postsUrl)
                    .map(res => res.json());
  }
}
