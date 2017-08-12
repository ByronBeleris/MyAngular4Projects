import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
