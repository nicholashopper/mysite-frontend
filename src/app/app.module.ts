// Imports
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Declarations
import { AppComponent }         from './app.component';
import { BlogListComponent }   from './Blog/blog-list.component';
import { AboutComponent }  from './About/about.component';
import { ProjectsComponent }      from './Projects/projects.component';
// import { DogDetailsComponent }  from './dogs/dog-details.component';
// import { PetService }          from './pet.service';
// import { Pet }          from './pet';
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
    ProjectsComponent
  ],
  // providers: [
  //  PetService
  // ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
    // Module class
}