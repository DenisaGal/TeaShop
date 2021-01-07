import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";


@Component({
  selector: 'app-forgotten-pass',
  templateUrl: './forgotten-pass.component.html',
  styleUrls: ['./forgotten-pass.component.css']
})
export class ForgottenPassComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  sendMail(){
    let email = (<HTMLInputElement>document.getElementById("emailfield")).value;
    if(!email)
     window.alert("Please provide your email!");
    else{
       this.auth.sendPasswordResetEmail(email).then(function() {
        window.alert("Email sent! Check your inbox");
      }).catch(function(error) {
        window.alert("Something went wrong :(");
      });
    }
  }

}
