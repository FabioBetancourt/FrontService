import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

  orders = [] as any;
  page: number = 1;
  count: number = 10;
  private subscription: Subscription | undefined;

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.subscription = this.foodService.getFoods().subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
