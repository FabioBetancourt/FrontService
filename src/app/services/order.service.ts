import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient class
import { Observable, Subject, interval, startWith, switchMap, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'https://shark-app-nufoo.ondigitalocean.app/api/orders';
  private unsubscribe$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  placeOrder(orderCount: number) {
    return this.http.post(this.url, { order_count: orderCount });
  }

  pollOrders(): Observable<any> {
    return interval(2000)
      .pipe(
        startWith(0),
        switchMap(() => this.http.get(this.url)),
        takeUntil(this.unsubscribe$)
      );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
