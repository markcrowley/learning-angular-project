import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipise: Recipe[] = [
    new Recipe('Meat option', 'Loads of stuff on a plate',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Traditional.Sunday.Roast-01-cropped.jpg/300px-Traditional.Sunday.Roast-01-cropped.jpg'),
    new Recipe('Vegetarian option', 'Vegetarian',
      'https://upload.wikimedia.org/wikipedia/commons/3/3e/Mango_Vegetarian_Stir_Fry.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
