import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { TopBarComponent } from "../top-bar/top-bar.component";
import {CartComponent} from "../cart/cart.component"

@Component({
  selector: 'app-products-list-user',
  templateUrl: './products-list-user.component.html',
  styleUrls: ['./products-list-user.component.css']
})
export class ProductsListUserComponent{

  constructor(private store: AngularFirestore) {}

  products_from_firestore = this.store.collection('products').valueChanges({idField: 'id'});


  add(prod) {
    window.alert("The product has been added to cart!");
    CartComponent.prods.push(prod);
    console.log(CartComponent.prods);
  }

  getStatus(){
       return TopBarComponent.isSignedIn;
    }

}
