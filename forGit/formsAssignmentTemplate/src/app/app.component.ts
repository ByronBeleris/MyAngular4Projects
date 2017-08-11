import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') myForm: NgForm;
  defSub = 'advanced';


  onSubmit() {
    console.log(this.myForm);
    console.log(this.myForm.value.email);
    console.log(this.myForm.value.password);
    console.log(this.myForm.value.subscr);
    this.myForm.reset();
  }
}
