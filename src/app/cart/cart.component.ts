import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  static prods = []

  constructor() { }

  ngOnInit(): void {
  }

  getProds(){
       return CartComponent.prods;
    }
}
