import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Meat option', 'Loads of stuff on a plate',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Traditional.Sunday.Roast-01-cropped.jpg/300px-Traditional.Sunday.Roast-01-cropped.jpg'),
    new Recipe('Vegetarian option', 'Vegetarian',
      'https://upload.wikimedia.org/wikipedia/commons/3/3e/Mango_Vegetarian_Stir_Fry.jpg'),
    new Recipe('Jacob special', 'Steak and mash',
      'http://wdy.h-cdn.co/assets/cm/15/09/54ef889c0ee63_-_blackened-skirt-steak-with-cheddar-sage-mashed-potatoes-lg.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
