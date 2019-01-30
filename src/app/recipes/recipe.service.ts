import {Recipe} from './recipe.model'
import {EventEmitter} from '@angular/core';
export class RecipeService{
  recipeselected=new EventEmitter<Recipe>();
  private recipes:Recipe[]=[
    new Recipe('a test recipe','this is a test recipe','https://media.self.com/photos/58f7d022feead55f43f7fc78/4:3/w_752,c_limit/Creamy-Sun-Dried-Parmesan-Chicken-cafedelites-1%25202.jpg')
  ,  new Recipe('2nd test recipe','this is a test recipe','https://media.self.com/photos/58f7d022feead55f43f7fc78/4:3/w_752,c_limit/Creamy-Sun-Dried-Parmesan-Chicken-cafedelites-1%25202.jpg')
  ];
  getRecipe(){
    return this.recipes.slice();
  }
}
