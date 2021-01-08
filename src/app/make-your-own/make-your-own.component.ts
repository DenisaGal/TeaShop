import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "app-make-your-own",
  templateUrl: "./make-your-own.component.html",
  styleUrls: ["./make-your-own.component.css"]
})
export class MakeYourOwnComponent {

  constructor(private store: AngularFirestore) {}

  ingredients_from_firestore = this.store.collection('Ingredients').valueChanges({idField: 'id'});

  add() {
    window.alert("The ingredient has been added to cart!");
  }
}
