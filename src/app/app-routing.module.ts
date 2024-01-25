import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { IngredientComponent } from './components/ingredients/ingredient/ingredient.component';

import { PurchaseComponent } from './components/purchases/purchase/purchase.component';
import { RecipeComponent } from './components/recipes/recipe/recipe.component';
import { FoodComponent } from './components/food/food.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ingredients', component: IngredientComponent },
  { path: 'all-orders', component: FoodComponent },
  { path: 'purchases', component: PurchaseComponent },
  { path: 'recipes', component: RecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
