import { AuthGuard } from './auth/auth-guard.service';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent},
  { path: 'posts/new', component: AddPostComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
