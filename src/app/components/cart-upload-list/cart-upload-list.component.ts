import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart-upload-list',
  templateUrl: './cart-upload-list.component.html',
  styleUrls: ['./cart-upload-list.component.css']
})
export class CartUploadListComponent implements OnInit {
  fileUploads: any[];

  constructor(private uploadService: AddToCartService) { }

  ngOnInit(): void {
    this.uploadService.getFiles(6).snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

}
