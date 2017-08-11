import { Observable } from 'rxjs/Rx';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Byron', 'Sylvia'];

  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   'username': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'gender': new FormControl('male')
    //     });
    // For this remove <div formGroupName="userData" and .get(userData.username) only userData. from all. 


    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)  
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])   
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      'userData':{
        'username': 'Me',
        'email': 'b@vb.b'
      },
      'gender':'male',
      'hobbies': []
      });
    this.signupForm.patchValue({
      'userData':{
        'username': 'You'
      }
      });
      }  
  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
    // this.signupForm.reset({
    //   'userData':{
    //     'username': '',
    //     'email': ''
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    //   });
    // or this to reset to a specific object
    }
  onAddHobby(){
      const control = new FormControl(null, Validators.required);
      (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl):{[s: string]: boolean}{
    if (this.forbiddenUsernames.indexOf(control.value) !== -1 ){
      return {'nameIsForbidden': true};
    }
    return null;
  }
  // this is custom validator (lecture 195)


  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});
        }
        resolve(null);
      }, 1500);
    } );
    return promise;
  }
}
