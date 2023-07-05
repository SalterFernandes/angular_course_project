import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://images.unsplash.com/photo-1602253057119-44d745d9b860?' +
      'ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' ),
    new Recipe('A Test Recipe 2', 'This is a test 2', 'https://images.unsplash.com/photo-1602253057119-44d745d9b860?' +
      'ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' )
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
