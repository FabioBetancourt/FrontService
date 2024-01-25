import { Component } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {

  ingredients: any[] = [];
  constructor(private ingredientsService: IngredientService) { }

  ngOnInit(): void {
    this.ingredientsService.getIngredients().subscribe(data => {
      this.ingredients = data['data'];
    });
  }
}
