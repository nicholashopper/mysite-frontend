import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './Blog/blog-list.component';
import { ProjectsComponent } from './Projects/projects.component';
import { AboutComponent } from './About/about.component';
import { ContactComponent } from './Contact/contact.component';
import { HomeComponent } from './home.component';
import { ErrorComponent } from './404.component';


// Route Configuration
export const routes: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);