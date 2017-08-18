import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './post.service';
import { Subscription } from 'rxjs/Rx';
import { Post } from './post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {
  posts: Post[];
  subscription: Subscription;

  constructor(private postService: PostService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.postService.postsChanged
    .subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  this.posts = this.postService.getPosts();
  }

  onAddPost(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
