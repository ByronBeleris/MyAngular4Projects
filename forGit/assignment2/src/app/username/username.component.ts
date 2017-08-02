import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  usernameText = '';
  allowNewUsername = false;
  constructor() {
   }


  ngOnInit() {

  }
  activeButton(){
    if (this.usernameText !=""){
      this.allowNewUsername=true;
    }

  }
  onClearUsername(){
    this.usernameText = "";
    this.allowNewUsername = false;
    }


  }
