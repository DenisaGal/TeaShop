import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

   public static isSignedIn:boolean = false;


  constructor(private auth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.auth.signOut().then(() => {
      TopBarComponent.isSignedIn = false;
      this.router.navigate(['./home-user']);
    }).catch((error) => {
      window.alert("Something went wrong :(");
    });
  }

  getStatus(){
     return TopBarComponent.isSignedIn;

  }

}
