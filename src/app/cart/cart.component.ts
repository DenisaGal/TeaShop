import { Component, OnInit } from '@angular/core';
import { products } from "../products";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = products;
  static prods = []

  constructor() { }

  ngOnInit(): void {
  }

  getProds(){
       return CartComponent.prods;
    }

}
