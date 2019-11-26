import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'matchme-ng';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyB_EHq-unRvuVouwUOcpC2KE4znWfbsXyM",
      authDomain: "matchmeng-18316.firebaseapp.com",
      databaseURL: "https://matchmeng-18316.firebaseio.com",
      projectId: "matchmeng-18316",
      storageBucket: "matchmeng-18316.appspot.com",
      messagingSenderId: "202814830871",
      appId: "1:202814830871:web:36948815226fdc7934df52",
      measurementId: "G-HN396LW3VG"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
