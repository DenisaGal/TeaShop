import { Component, OnInit, Input } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { AddToCart } from 'src/app/models/add-to-cart.model';

@Component({
  selector: 'app-cart-upload-details',
  templateUrl: './cart-upload-details.component.html',
  styleUrls: ['./cart-upload-details.component.css']
})
export class CartUploadDetailsComponent implements OnInit {
 @Input() fileUpload: AddToCart;

  constructor(private uploadService: AddToCartService) { }

  ngOnInit(): void {
  }

  deleteAddToCart(fileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }
}
