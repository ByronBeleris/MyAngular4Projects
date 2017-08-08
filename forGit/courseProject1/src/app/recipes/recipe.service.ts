import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe('Pizza', 'Best pizza ever', 'https://upload.wikimedia.org/wikipedia/commons/0/07/Pizza_%2822%29.jpg',[
        new Ingredient('Pizza dough',1),
        new Ingredient('cheese',1),
        new Ingredient('ham',1),
        new Ingredient('tomatoes',4)
    ]),
    new Recipe('Souvlaki', 'Best souvlaki ever', 'https://c1.staticflickr.com/8/7203/6847157346_dab8f11302_z.jpg',[
        new Ingredient('pita',2),
        new Ingredient('pork chops',4),
        new Ingredient('onion',1),
        new Ingredient('yogurt',1),
        new Ingredient('potatoes',4)
    ])
  ];
    constructor(private slService: ShoppingListService){}

  getRecipes(){
      return this.recipes.slice();
  }
    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}
