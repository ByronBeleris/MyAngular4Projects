import { AddPostComponent } from './add-post/add-post.component';
import { PostsComponent } from './posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';

const postsRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'new', component: AddPostComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(postsRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class PostsRoutingModule {}
