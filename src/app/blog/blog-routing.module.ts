import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { BlogListComponent }    from './blog-list.component';

 
const routes: Routes = [
  { path: 'blog',  component: BlogListComponent },
  { path: 'blog/:page', component: BlogListComponent }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }