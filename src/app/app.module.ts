import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ProductsListUserComponent } from './products-list-user/products-list-user.component';
import { MakeYourOwnUserComponent } from './make-your-own-user/make-your-own-user.component';
import { CartComponent } from './cart/cart.component';
import { ForgottenPassComponent } from './forgotten-pass/forgotten-pass.component';
import { LinksBarComponent } from './links-bar/links-bar.component';
import { HappyCustomersComponent } from './happy-customers/happy-customers.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';
import { TestComponent } from './test/test.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
                                              apiKey: "AIzaSyBN75yPx3Zj4pUuQcviZ8uH8ZZK3L73xaQ",
                                                authDomain: "teashop-c7f1a.firebaseapp.com",
                                                databaseURL: "https://teashop-c7f1a-default-rtdb.europe-west1.firebasedatabase.app",
                                                projectId: "teashop-c7f1a",
                                                storageBucket: "teashop-c7f1a.appspot.com",
                                                messagingSenderId: "980033948529",
                                                appId: "1:980033948529:web:1fcd95c02a04f1087f04d0",
                                                measurementId: "G-7183TBLK6X"
                                            }),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
    RouterModule.forRoot([    
      { path: "", component: HomeUserComponent },
      { path: "log-in", component: LogInComponent },
      { path: "sign-in", component: SignInComponent },
      { path: "products-user", component: ProductsListUserComponent },
      { path: "make-your-own-user", component: MakeYourOwnUserComponent },
      { path: "cart", component: CartComponent },
      { path: "forgotten-pass", component: ForgottenPassComponent },
      { path: "happy-customers", component: HappyCustomersComponent },
      { path: "upload-form", component: UploadFormComponent },
      { path: "upload-list", component: UploadListComponent },
      { path: "upload-details", component: UploadDetailsComponent },
      { path: "test", component: TestComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    LogInComponent,
    SignInComponent,
    HomeUserComponent,
    ProductsListUserComponent,
    MakeYourOwnUserComponent,
    CartComponent,
    ForgottenPassComponent,
    LinksBarComponent,
    HappyCustomersComponent,
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent,
    TestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

