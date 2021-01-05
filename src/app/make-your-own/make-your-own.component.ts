import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ingredients } from "../ingredients";

@Component({
  selector: "app-make-your-own",
  templateUrl: "./make-your-own.component.html",
  styleUrls: ["./make-your-own.component.css"]
})
export class MakeYourOwnComponent {
  ingredients = ingredients;

  add() {
    window.alert("The ingredient has been added to cart!");
  }
}
