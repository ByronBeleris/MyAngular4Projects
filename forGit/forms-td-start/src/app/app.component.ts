import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  // This is the best way to retreive username etc.
  // But you can also do it with @Viewchild
  onSubmit() {
    console.log(this.signupForm);
  }
}
