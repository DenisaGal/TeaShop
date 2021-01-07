import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { TopBarComponent } from "../top-bar/top-bar.component";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor( private auth: AngularFireAuth, private router: Router) { }

  login(){

      let email = (<HTMLInputElement>document.getElementById("emailfield")).value;
      let password = (<HTMLInputElement>document.getElementById("pwdfield")).value;

      this.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          TopBarComponent.isSignedIn = true;
          this.router.navigate(['./products']);
        })
        .catch((error) => {
          window.alert(error.message);
        });

  }

  ngOnInit(): void {
  }

}
