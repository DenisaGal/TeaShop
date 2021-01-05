import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ingredients } from "../ingredients";

@Component({
  selector: 'app-make-your-own-user',
  templateUrl: './make-your-own-user.component.html',
  styleUrls: ['./make-your-own-user.component.css']
})
export class MakeYourOwnUserComponent{

  ingredients = ingredients;

  add() {
    window.alert("The ingredient has been added to cart!");
  }

}
