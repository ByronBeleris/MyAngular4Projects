import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email,password);
  }
}
