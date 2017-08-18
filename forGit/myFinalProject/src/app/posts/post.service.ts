import { Subject } from 'rxjs/Rx';
import { Post } from './post.model';

export class PostService {
    postsChanged = new Subject<Post[]>();

    private posts: Post[] = [
        new Post(
            'Somewhere',
            'Sometime',
            'http://www.publicdomainpictures.net/pictures/180000/velka/beautiful-cat-1463991290P5W.jpg'
        )
    ];

    addPost(post: Post){
        this.posts.push(post);
        this.postsChanged.next(this.posts.slice());
    }
    setPosts(posts: Post[]) {
        this.posts = posts;
        this.postsChanged.next(this.posts.slice());
      }
      getPosts() {
        return this.posts.slice();
      }
      getPost(index: number) {
        return this.posts[index];
      }
}
