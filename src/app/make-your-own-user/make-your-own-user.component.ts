import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { TopBarComponent } from "../top-bar/top-bar.component";

@Component({
  selector: 'app-make-your-own-user',
  templateUrl: './make-your-own-user.component.html',
  styleUrls: ['./make-your-own-user.component.css']
})
export class MakeYourOwnUserComponent{

  constructor(private store: AngularFirestore) {}

  ingredients_from_firestore = this.store.collection('Ingredients').valueChanges({idField: 'id'});

  add() {
    window.alert("The ingredient has been added to cart!");
  }

  getStatus(){
         return TopBarComponent.isSignedIn;
      }

}
