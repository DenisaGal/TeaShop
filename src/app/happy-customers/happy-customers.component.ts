import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";

@Component({
  selector: 'app-happy-customers',
  templateUrl: './happy-customers.component.html',
  styleUrls: ['./happy-customers.component.css']
})
export class HappyCustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
       return TopBarComponent.isSignedIn;
    }

}
