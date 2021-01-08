import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {

	constructor(private store: AngularFirestore) {}

	products_from_firestore = this.store.collection('products').valueChanges({idField: 'id'});

  add() {
    window.alert("The product has been added to cart!");
  }
}
