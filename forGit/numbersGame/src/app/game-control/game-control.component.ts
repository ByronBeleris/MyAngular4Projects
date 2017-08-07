
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalStart = new EventEmitter<number>();
  interval;
  count = 0;
  constructor() { }

  ngOnInit() {
  }

  onClickStart(){

  this.interval = setInterval(() => {
    this.intervalStart.emit(this.count + 1);
    this.count++;
    console.log('My count is ' + this.count);
  }, 1000); 
  }
 onClickStop(){
   clearInterval(this.interval);
 }
}
