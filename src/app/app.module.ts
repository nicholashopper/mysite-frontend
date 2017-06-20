// Imports
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// Declarations
import { AppComponent }         from './app.component';
import { HomeComponent }         from './home.component';
import { ErrorComponent }         from './404.component';
import { BlogListComponent }   from './blog/blog-list.component';
import { AboutComponent }  from './about/about.component';
import { ProjectsComponent }      from './projects/projects.component';
import { ContactComponent }      from './contact/contact.component';
import { BlogService }          from './blog/blog.service';
import { PostRoutingModule }          from './post/post-routing.module';
import { PostModule }          from './post/post.module';
import { PostComponent }          from './post/post.component';
import { AppRoutingModule } from './app.routes';
import { PostService } from './post/post.service';

// Decorator
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    PostRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BlogListComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    ErrorComponent,
    PostComponent
  ],
  providers: [
    BlogService,
    PostService
  ],
  bootstrap: [ 
    AppComponent
 ]
})
export class AppModule {
    // Module class
}