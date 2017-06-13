import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './Blog/blog-list.component';
import { ProjectsComponent } from './Projects/projects.component';
import { AboutComponent } from './About/about.component';

// Route Configuration
export const routes: Routes = [
  { path: 'blog', component: BlogListComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);