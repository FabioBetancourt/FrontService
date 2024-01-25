import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  recipes: Recipe[] = [];
  private subscription: Subscription | undefined;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.subscription = this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data.recipes;
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
