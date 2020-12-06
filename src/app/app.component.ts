import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBvi3PTx0m7dEV_r-_CPosKyFh7nwdwcCo",
      authDomain: "book-app-f6f4f.firebaseapp.com",
      projectId: "book-app-f6f4f",
      storageBucket: "book-app-f6f4f.appspot.com",
      messagingSenderId: "1090913685067",
      appId: "1:1090913685067:web:fbe2459d66ad29b8c707ce",
      measurementId: "G-H7HT46DTCX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

  }
 
}
