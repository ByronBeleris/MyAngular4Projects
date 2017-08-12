import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // defStatus= 'stable';
  statusList = ['stable', 'critical', 'finished'];
  statusForm: FormGroup;
  forbiddenProjectNames = ['Test'];

  ngOnInit() {
    this.statusForm = new FormGroup({
      'projectData': new FormGroup({
        'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'status': new FormControl('stable')
    });
  }



  onSubmit() {
    console.log(this.statusForm);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1 ) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
}
