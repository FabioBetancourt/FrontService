import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {

  ingredients: any[] = [];
  private subscription: Subscription | undefined;
  constructor(private ingredientsService: IngredientService) { }

  ngOnInit(): void {
    this.subscription = this.ingredientsService.getIngredients().subscribe(data => {
      this.ingredients = data['data'];
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
