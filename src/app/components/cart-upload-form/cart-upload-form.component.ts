import { Component, OnInit, Input } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { AddToCart } from 'src/app/models/add-to-cart.model';

@Component({
  selector: 'app-cart-upload-form',
  templateUrl: './cart-upload-form.component.html',
  styleUrls: ['./cart-upload-form.component.css']
})
export class CartUploadFormComponent implements OnInit {

  selectedFiles: FileList;
  currentAddToCart: AddToCart;
  percentage: number;

  constructor(private uploadService: AddToCartService) { }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentAddToCart = new AddToCart(file);
    this.uploadService.pushFileToStorage(this.currentAddToCart).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }

}