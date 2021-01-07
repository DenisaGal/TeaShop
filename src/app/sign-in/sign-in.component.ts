import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  signin(){
    let email = (<HTMLInputElement>document.getElementById("emailfield")).value;
          let password = (<HTMLInputElement>document.getElementById("pwdfield")).value;

          this.auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
              this.router.navigate(['./log-in']);
            })
            .catch((error) => {
              window.alert(error.message);
            });
  }

}
