import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  static prods = [];
  static total = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getProds(){
       return CartComponent.prods;
    }

   getTotal(){
       return CartComponent.total;
    }

     order(){
      window.alert('Order placed!');
    }

    remove(prod){
      const index: number = CartComponent.prods.indexOf(prod);
          if (index !== -1)
              CartComponent.prods.splice(index, 1);
      console.log(CartComponent.prods);
      CartComponent.total = CartComponent.total - prod.Price;
    }
}
