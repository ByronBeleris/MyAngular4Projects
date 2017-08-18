import { Post } from '../posts/post.model';
import { PostService } from '../posts/post.service';
import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private postService: PostService,
              private authService: AuthService) {}

  storePosts() {
    const token = this.authService.getToken();
    return this.http.put('https://myjobapp-4024f.firebaseio.com/posts.json?auth=' + token, this.postService.getPosts());
  }

  getPosts() {
    const token = this.authService.getToken();

    this.http.get('https://myjobapp-4024f.firebaseio.com/posts.json?auth=' + token)
      .map(
        (response: Response) => {
          const posts: Post[] = response.json();
          return posts;
        }
      )
      .subscribe(
        (posts: Post[]) => {
          this.postService.setPosts(posts);
        }
      );
  }
}
