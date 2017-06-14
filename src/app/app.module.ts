// Imports
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Declarations
import { AppComponent }         from './app.component';
import { HomeComponent }         from './home.component';
import { ErrorComponent }         from './404.component';
import { BlogListComponent }   from './Blog/blog-list.component';
import { AboutComponent }  from './About/about.component';
import { ProjectsComponent }      from './Projects/projects.component';
import { ContactComponent }      from './Contact/contact.component';
import { BlogService }          from './Blog/blog.service';
import { routing } from './app.routes';

// Decorator
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    BlogListComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    ErrorComponent
  ],
  providers: [
    BlogService
  ],
  bootstrap: [ 
    AppComponent
 ]
})
export class AppModule {
    // Module class
}