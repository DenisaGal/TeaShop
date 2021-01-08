import { Component, OnInit } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { TopBarComponent } from "../top-bar/top-bar.component";

@Component({
  selector: 'app-happy-customers',
  templateUrl: './happy-customers.component.html',
  styleUrls: ['./happy-customers.component.css']
})
export class HappyCustomersComponent {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;  
  
  constructor(private afStorage: AngularFireStorage) { }  

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
  }

  getStatus(){
       return TopBarComponent.isSignedIn;
    }

}
