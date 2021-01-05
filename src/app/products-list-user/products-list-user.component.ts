import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";

@Component({
  selector: 'app-products-list-user',
  templateUrl: './products-list-user.component.html',
  styleUrls: ['./products-list-user.component.css']
})
export class ProductsListUserComponent implements OnInit {

  products = products;

  add() {
    window.alert("The product has been added to cart!");
  }

}
