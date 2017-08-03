import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-paragraph',
  templateUrl: './secret-paragraph.component.html',
  styleUrls: ['./secret-paragraph.component.css']
})
export class SecretParagraphComponent implements OnInit {
  displayMessage = false;
  clicksHit = [];
  count = 0;
  numberOfClicks = false;
  constructor() { }

  ngOnInit() {
  }
  onDisplayMessage(){
    if (this.displayMessage==false){
      this.displayMessage = true;
    }else{
      this.displayMessage = false;
    }
    this.count++
    this.clicksHit.push(this.count.toString());
    if (this.count >= 5){
      this.numberOfClicks=true;
    }

  }
  getColor(){
    return this.numberOfClicks === true ? 'green' : null;
  }
}
