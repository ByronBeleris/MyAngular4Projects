import { DataStorageService } from '../shared/data-storage.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostItemComponent } from './post-item/post-item.component';
import { PostsRoutingModule } from './posts-routing.module';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsComponent } from './posts.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PostsComponent,
    AddPostComponent,
    PostItemComponent
  ],
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    PostsRoutingModule
  ],
  providers: [DataStorageService]
})
export class PostsModule {}
