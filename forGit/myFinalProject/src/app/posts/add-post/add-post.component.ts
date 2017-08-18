import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],

})
export class AddPostComponent implements OnInit {
  id: number;
  postForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private router: Router,
              private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.initForm();
        }
      );
  }

  onSubmit() {
    this.postService.addPost(this.postForm.value);
      this.dataStorageService.storePosts()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
      this.onCancel();
    }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  getControls() {
    return (<FormArray>this.postForm.get('ingredients')).controls;
  }

  private initForm() {
    let postTitle = '';
    let postImagePath = '';
    let postDescription = '';

    this.postForm = new FormGroup({
      'title': new FormControl(postTitle, Validators.required),
      'imagePath': new FormControl(postImagePath, Validators.required),
      'description': new FormControl(postDescription, Validators.required),
    });
  }

}

