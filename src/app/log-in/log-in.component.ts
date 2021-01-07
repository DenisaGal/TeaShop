import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor( private auth: AngularFireAuth) { }

  login(){

      let email = (<HTMLInputElement>document.getElementById("emailfield")).value;
      let password = (<HTMLInputElement>document.getElementById("pwdfield")).value;

      this.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          window.alert("signed in");
        })
        .catch((error) => {
          window.alert("Smth is wrong");
        });

  }

  ngOnInit(): void {
  }

}
