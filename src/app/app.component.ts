import { Component } from '@angular/core';
//import { firebase } from '@angular/core'; // gaan install library op firebase website npm i

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebSortData';
    firebaseConfig = {
    apiKey: "AIzaSyB2XENUEVZIdanjtKklmoWUCVbNPawoQF0",
    authDomain: "krugertroue-f1492.firebaseapp.com",
    databaseURL: "https://krugertroue-f1492.firebaseio.com",
    projectId: "krugertroue-f1492",
    storageBucket: "krugertroue-f1492.appspot.com",
    messagingSenderId: "986932919788",
    appId: "1:986932919788:web:6466dcb31e7119be91d4c9"
}; 

// Initialize Firebase
//   constructor(firebase.initializeApp)(firebaseConfig); // moet in n constructor wees 

//    writeData(){
//     // firebase.database().ref("User").set({
//     //     name: document.getElementById("nameField").value,
//     //     attend: document.getElementById("attendField").value
//     // });
//     console.log("String Hello");
// }

}
