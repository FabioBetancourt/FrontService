import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IngredientComponent } from './components/ingredients/ingredient/ingredient.component';
import { PurchaseComponent } from './components/purchases/purchase/purchase.component';
import { RecipeComponent } from './components/recipes/recipe/recipe.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FoodComponent } from './components/food/food.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IngredientComponent,
    PurchaseComponent,
    RecipeComponent,
    HeaderComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
