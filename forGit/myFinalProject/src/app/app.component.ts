import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: 'AIzaSyDb8hraD1JIabadxDL7S538dyQoB2Rwqfk',
      authDomain: 'https://myjobapp-4024f.firebaseio.com/'
    });
  }
}