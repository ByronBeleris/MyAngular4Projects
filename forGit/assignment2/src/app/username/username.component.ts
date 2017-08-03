import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
    usernameText = '';
    allowNewUsername = false;
    namesList = [];
    toggle = false;
    constructor() {
    }
    ngOnInit() {
    }
    activeButton(){
        if (this.usernameText != ""){
            this.allowNewUsername=true;
        }
        
    }
    onAddUsername(){
        this.namesList.push(this.usernameText);
        if (this.namesList != []){
            this.toggle = true;
        }
        this.usernameText = "";
        this.allowNewUsername = false;
        }
    onClearUsernameList(){ 
        this.namesList = [];
        this.toggle = false;
    }
  }
