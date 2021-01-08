import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

import {ApplicationRef } from '@angular/core';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

   public static isSignedIn:boolean = false;


  constructor(private ref: ApplicationRef, private auth: AngularFireAuth, public router: Router) {
      let var1 = this.ref
      this.auth.onAuthStateChanged(function(user) {
        if (user) {
          TopBarComponent.isSignedIn = true
          var1.tick()
          // User is signed in.
        } else {
          TopBarComponent.isSignedIn = false
          var1.tick()

          // No user is signed in.
        }
      });


    }

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

  handleCart(){
    if(TopBarComponent.isSignedIn)
      this.router.navigate(['./cart'])
    else
     window.alert("Log in to use the cart!");
  }

}
