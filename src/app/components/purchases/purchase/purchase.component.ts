import { Component } from '@angular/core';
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
  constructor(private purchasesService: PurchaseService) { }

  ngOnInit(): void {

    this.purchasesService.getPurchases().subscribe(data => {
      this.purchases = data['data'];
    });
  }
}
