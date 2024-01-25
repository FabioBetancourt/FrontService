import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  orderCount = 1;
  isLoading = false;
  remainingOrders = 0;
  message = '';
  private pollingSubscription: Subscription | undefined;

  constructor(private orderService: OrderService) { }
  placeOrder(orderCount: number | null | undefined): void {
    const count = (typeof orderCount === 'number' && orderCount > 0) ? orderCount : 1;
    this.isLoading = true;
    this.remainingOrders = count;
    this.message = `Enviando ${this.remainingOrders} ordenes...`;

    this.orderService.placeOrder(this.remainingOrders).subscribe({
      next: () => {
        this.message = `Orden enviada, cargando ${this.remainingOrders} ordenes...`;
        this.startPolling();
      },
      error: () => {
        this.isLoading = false;
        this.message = 'Error al enviar la orden.';
      }
    });
  }

  private startPolling() {
    this.pollingSubscription = this.orderService.pollOrders().subscribe({
      next: () => {
        this.remainingOrders--;
        if (this.remainingOrders > 0) {
          this.message = `Casi lista la orden: ${this.remainingOrders} ordenes...`;
        } else {
          this.isLoading = false;
          this.message = '¡Todas las ordenes listas!';
          this.stopPolling();
        }
      },
      error: () => {
        this.message = 'Ocurrió un error al procesar las órdenes.';
        this.isLoading = false;
        this.stopPolling();
      }
    });
  }
  private stopPolling() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.pollingSubscription?.unsubscribe();
  }


}
