import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  purchases: any[] = [];
  page: number = 1;
  count: number = 10;
  private subscription: Subscription | undefined;

  constructor(private purchasesService: PurchaseService) { }

  ngOnInit(): void {

    this.subscription = this.purchasesService.getPurchases().subscribe(data => {
      this.purchases = data['data'];
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
