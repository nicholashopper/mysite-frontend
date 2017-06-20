import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
 
import { PostComponent }    from './post.component';
import { PostService }    from './post.service';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    PostComponent
  ],
  providers: [
    PostService
  ],
})
export class PostModule {}