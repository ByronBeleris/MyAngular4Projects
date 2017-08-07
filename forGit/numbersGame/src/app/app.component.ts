import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
   
  onIntervalStart(myNumber: number){
    if (myNumber % 2 === 0){
      this.evenNumbers.push(myNumber);
      console.log('My even is ' + myNumber);

    }else{
      this.oddNumbers.push(myNumber);
      console.log('My odd is ' + myNumber);
    }
  }
}
