import { Component, OnInit } from '@angular/core';
import {Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[]=[new Ingredient('apples',10),new Ingredient('tomatoes',15)];
  constructor() { }

  ngOnInit() {
  }
onnewIngredientadded(ing:Ingredient)
{
  this.ingredients.push(ing);
}
}
